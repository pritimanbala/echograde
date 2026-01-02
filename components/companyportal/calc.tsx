export type GEIInputs = {
	clinker: number; // tonnes
	cement: number; // tonnes
	coal: number; // tonnes
	petcokeMix: number; // %
	tsrPercentage: number; // %
	electricity: number; // GWh
	recsGreenPower: number; // GWh
	whrsCapacity: number; // MW
};

export type GEICalculationResult = {
	inputs: GEIInputs;

	clinker: number;
	cement: number;
	coal: number;

	CO2_process: number;
	CO2_coal: number;
	CO2_petcoke: number;
	TSR_reduction: number;
	scope1_fuel: number;

	gridConsumptionGWh: number;
	CO2_grid: number;
	WHRS_reduction: number;
	scope2: number;

	totalGEI_tCO2: number;
	GEI_intensity: number;
	targetGEI: number;
};

// ---------- Helpers ----------

// converts "3,50,000" -> 350000
const toNumber = (v: string | number): number =>
	typeof v === "number" ? v : Number(String(v).replace(/,/g, "")) || 0;

// ---------- Core Calculator ----------

export function computeGEI(inputs: GEIInputs): GEICalculationResult {
	const clinker = toNumber(inputs.clinker);
	const cement = toNumber(inputs.cement);
	const coal = toNumber(inputs.coal);
	const petcokePct = toNumber(inputs.petcokeMix);
	const tsrPct = toNumber(inputs.tsrPercentage);
	const totalElecGWh = toNumber(inputs.electricity);
	const recsGWh = toNumber(inputs.recsGreenPower);
	const whrsMW = toNumber(inputs.whrsCapacity);

	// ---------- CONSTANTS ----------
	const EF_PROCESS = 0.51; // tCO2/t clinker
	const EF_COAL = 2.45; // tCO2/t coal
	const PETCOKE_DIFF = 0.35;
	const EF_GRID = 0.727; // kgCO2/kWh
	const HOURS_PER_YEAR = 8760;
	const WHRS_UTIL = 0.5;
	const KG_TO_TONNE = 1 / 1000;

	// ---------- SCOPE 1 — PROCESS ----------
	const CO2_process = clinker * EF_PROCESS;

	// ---------- SCOPE 1 — FUEL ----------
	const CO2_coal = coal * EF_COAL;
	const CO2_petcoke = coal * (petcokePct / 100) * PETCOKE_DIFF;
	const TSR_reduction = coal * (tsrPct / 100) * EF_COAL;

	const scope1_fuel = CO2_coal + CO2_petcoke - TSR_reduction;

	// ---------- SCOPE 2 — ELECTRICITY ----------
	const gridConsumptionGWh = totalElecGWh - recsGWh;

	const gridConsumptionKWh = gridConsumptionGWh * 1000000;

	const CO2_grid = gridConsumptionKWh * EF_GRID * KG_TO_TONNE; // tCO2

	const WHRS_reduction = whrsMW * WHRS_UTIL * HOURS_PER_YEAR * EF_GRID * KG_TO_TONNE;

	const scope2 = CO2_grid - WHRS_reduction;

	// ---------- TOTAL ----------
	const totalGEI_tCO2 = CO2_process + scope1_fuel + scope2;

	const GEI_intensity = (cement > 0 ? totalGEI_tCO2 / cement : 0) / 1;

	const targetGEI = 0.436;

	return {
		inputs,

		clinker,
		cement,
		coal,

		CO2_process,
		CO2_coal,
		CO2_petcoke,
		TSR_reduction,
		scope1_fuel,

		gridConsumptionGWh,
		CO2_grid,
		WHRS_reduction,
		scope2,

		totalGEI_tCO2,
		GEI_intensity,
		targetGEI,
	};
}
