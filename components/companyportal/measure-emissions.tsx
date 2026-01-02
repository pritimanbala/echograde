"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import { computeGEI } from "./calc";

type InputData = {
	clinker: number; // tonnes
	cement: number; // tonnes
	coal: number; // tonnes
	petcokeMix: number; // %
	tsrPercentage: number; // %
	electricity: number; // GWh
	recsGreenPower: number; // GWh
	whrsCapacity: number; // MW
};

interface GEICalculationResult {
	// ---------- RAW INPUTS ----------
	inputs: {
		clinker: number; // tonnes
		cement: number; // tonnes
		coal: number; // tonnes
		petcokeMix: number; // %
		tsrPercentage: number; // %
		electricity: number; // GWh
		recsGreenPower: number; // GWh
		whrsCapacity: number; // MW
	};

	// ---------- SCOPE 1 — PROCESS ----------
	clinker: number; // alias → inputs.clinker
	cement: number; // alias → inputs.cement
	coal: number; // alias → inputs.coal

	CO2_process: number; // tCO₂ — clinker × 0.51
	CO2_coal: number; // tCO₂
	CO2_petcoke: number; // tCO₂
	TSR_reduction: number; // tCO₂
	scope1_fuel: number; // tCO₂

	// ---------- SCOPE 2 — ELECTRICITY ----------
	gridConsumptionGWh: number; // GWh (electricity - RECs)
	CO2_grid: number; // tCO₂
	WHRS_reduction: number; // tCO₂
	scope2: number; // tCO₂

	// ---------- TOTALS ----------
	totalGEI_tCO2: number; // tCO₂ (scope1 + scope2)
	GEI_intensity: number; // tCO₂ / tonne cement
	targetGEI: number; // optional → benchmark / policy target
}

export function MeasureEmissionsPage({
	dat,
	onPageChange,
}: {
	dat: InputData;
	onPageChange: (page: "dashboard" | "measure" | "collect" | "report" | "reduce") => void;
}) {
	const [data, setData] = useState<GEICalculationResult>({
		inputs: {
			clinker: 0, // tonnes
			cement: 0, // tonnes
			coal: 0, // tonnes
			petcokeMix: 0, // %
			tsrPercentage: 0, // %
			electricity: 0, // GWh
			recsGreenPower: 0, // GWh
			whrsCapacity: 0, // MW
		},

		// ---------- SCOPE 1 — PROCESS ----------
		clinker: 0, // alias → inputs.clinker
		cement: 0, // alias → inputs.cement
		coal: 0, // alias → inputs.coal

		CO2_process: 0, // tCO₂ — clinker × 0.51
		CO2_coal: 0, // tCO₂
		CO2_petcoke: 0, // tCO₂
		TSR_reduction: 0, // tCO₂
		scope1_fuel: 0, // tCO₂

		// ---------- SCOPE 2 — ELECTRICITY ----------
		gridConsumptionGWh: 0, // GWh (electricity - RECs)
		CO2_grid: 0, // tCO₂
		WHRS_reduction: 0, // tCO₂
		scope2: 0, // tCO₂

		// ---------- TOTALS ----------
		totalGEI_tCO2: 0, // tCO₂ (scope1 + scope2)
		GEI_intensity: 0, // tCO₂ / tonne cement
		targetGEI: 0,
	});
	const [expandedDetails, setExpandedDetails] = useState(false);
	useEffect(() => {
		console.log(dat);
		console.log("this is not running");
		setData(computeGEI(dat));
	}, [dat]);
	// Scope Breakdown
	const scopeBreakdown = [
		{ name: "Process", value: data.CO2_process, color: "#ef4444" },
		{ name: "Fuel", value: data.scope1_fuel, color: "#f97316" },
		{ name: "Grid", value: data.scope2, color: "#3b82f6" },
	];

	const totalEmissions = scopeBreakdown.reduce((sum, item) => sum + item.value, 0);

	function roundToFixed(value: number, decimals: number): number {
		return Number(value.toFixed(decimals));
	}

	// Penalty Calculation
	const penaltyRiskGap = 3409; // in thousands tCO₂e
	const penaltyAmount = penaltyRiskGap * 100; // ₹1,000/t = ₹100k per 1k t

	// GEI Gauge calculation - proportional arc for red sector
	const geiValue = [
		{ stats: "achieved", value: data.GEI_intensity, color: "#0da321" },
		{ stats: "left", value: data.GEI_intensity - data.targetGEI, color: "#f97316" },
	];

	return (
		<div className="bg-gray-50 min-h-screen p-8">
			<div className="max-w-7xl mx-auto space-y-8">
				{/* Section 1: GEI Gauge */}
				<div className="bg-[#ffffff] rounded-lg border border-gray-200 p-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-8">
						GEI Calculation Results
					</h2>

					<div className="flex flex-col items-center gap-8">
						{/* Circular Gauge */}
						<div className="relative w-64 h-64">
							<ResponsiveContainer width="100%" height="100%">
								<PieChart>
									<Pie
										data={geiValue}
										cx="50%"
										cy="50%"
										innerRadius={60}
										outerRadius={120}
										dataKey="value">
										{geiValue.map((entry, index) => (
											<Cell key={`cell-${index}`} fill={entry.color} />
										))}
									</Pie>
									<Tooltip
										formatter={(value) => [`${value.toString()}`]}
										contentStyle={{
											backgroundColor: "#fff",
											border: "1px solid #e5e7eb",
										}}
									/>
								</PieChart>
							</ResponsiveContainer>
						</div>

						{/* Status Box */}
						<div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center w-full max-w-md">
							<p className="text-sm text-gray-600 mb-2">Target: {data.targetGEI}</p>
							<p className="text-2xl font-bold text-red-600">
								❌ Gap: {(data.GEI_intensity - data.targetGEI).toFixed(4)} (
								{((data.GEI_intensity - data.targetGEI) * 100).toFixed(4)}% over)
							</p>
						</div>
						<div className="w-full space-y-3">
							{geiValue.map((item) => (
								<div
									key={item.stats}
									className="flex items-center justify-between text-sm">
									<div className="flex items-center gap-3">
										<div
											className="w-3 h-3 rounded-full"
											style={{ backgroundColor: item.color }}></div>
										<span className="text-gray-700 font-medium">
											{item.stats}
										</span>
									</div>
									<span className="text-gray-900 font-semibold">
										{item.value}k tCO₂e
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Section 2: Scope Breakdown + Penalty */}
				<div className="grid grid-cols-3 gap-8">
					{/* Pie Chart Card */}
					<div className="col-span-2 bg-white rounded-lg border border-gray-200 p-8">
						<h3 className="text-xl font-bold text-gray-900 mb-6">Scope Breakdown</h3>

						<div className="flex flex-col items-center gap-8">
							<div className="w-64 h-64">
								<ResponsiveContainer width="100%" height="100%">
									<PieChart>
										<Pie
											data={scopeBreakdown}
											cx="50%"
											cy="50%"
											innerRadius={60}
											outerRadius={120}
											dataKey="value">
											{scopeBreakdown.map((entry, index) => (
												<Cell key={`cell-${index}`} fill={entry.color} />
											))}
										</Pie>
										<Tooltip
											formatter={(value) => [`${value}k tCO₂e`, "Emissions"]}
											contentStyle={{
												backgroundColor: "#fff",
												border: "1px solid #e5e7eb",
											}}
										/>
									</PieChart>
								</ResponsiveContainer>
							</div>

							<div className="w-full space-y-3">
								{scopeBreakdown.map((item) => (
									<div
										key={item.name}
										className="flex items-center justify-between text-sm">
										<div className="flex items-center gap-3">
											<div
												className="w-3 h-3 rounded-full"
												style={{ backgroundColor: item.color }}></div>
											<span className="text-gray-700 font-medium">
												{item.name}
											</span>
										</div>
										<span className="text-gray-900 font-semibold">
											{item.value}k tCO₂e
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Penalty Card */}
					<div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col justify-between">
						<div>
							<h3 className="text-xl font-bold text-gray-900 mb-6">
								💰 Penalty Risk
							</h3>

							<div className="bg-gray-50 rounded p-6 font-mono text-sm text-gray-800 space-y-3 my-4">
								<div>
									<span className="text-gray-600">Scope 1 Process: </span>
									<span className="text-gray-900 font-semibold">
										{data.inputs.clinker}M t × 0.51 = {data.CO2_process}k tCO₂e
									</span>
								</div>
								<div>
									<span className="text-gray-600">Scope 1 Fuel: </span>
									<span className="text-gray-900 font-semibold">
										{data.inputs.coal}k t coal × 2.45 = {data.scope1_fuel} tCO₂e
									</span>
								</div>
								<div>
									<span className="text-gray-600">Scope 2 Grid: </span>
									<span className="text-gray-900 font-semibold">
										{data.inputs.electricity} GWh × 0.727 = {data.scope2}k tCO₂e
									</span>
								</div>
								<div className="border-t border-gray-300 pt-3 mt-3">
									<div className="text-gray-600">
										Total: {totalEmissions}k tCO₂e ÷ 5.38M t ={" "}
										{data.GEI_intensity} GEI
									</div>
								</div>
							</div>
							<div className="mb-8">
								<p className="text-4xl font-bold text-red-600 mb-2">
									₹
									{((data.GEI_intensity - data.targetGEI) * 2.2 * 1000).toFixed(
										1
									)}
									Cr
								</p>
								<p className="text-sm text-gray-600">
									{(data.GEI_intensity - data.targetGEI) * 2.2}k tCO₂e gap ×
									₹1,000/t
								</p>
							</div>
						</div>

						<Button
							onClick={() => {
								console.log(computeGEI(dat));
								console.log(dat);
								console.log("this is not running too");
								onPageChange("reduce");
							}}
							className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-base">
							GENERATE RECOMMENDATIONS
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
