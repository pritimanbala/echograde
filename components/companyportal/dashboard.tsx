"use client";

import { useState } from "react";
import { Header } from "./header";
// import { Sidebar } from "./sidebar";
import { CollectDataPage } from "./collect-data";
import { MeasureEmissionsPage } from "./measure-emissions";
import { ReportEmissionsPage } from "./report-emissions";
import { ReduceEmissionsPage } from "./reduce-emissions";
import { CompanyDashboard } from "./companyDashboard";

type DashboardData = {
	ccts: string;
	tgtgei: number;
	urgei: number;
	clinker: number;
	penaltyRisk: number;
	tCO2gap: number;
};

type FormData = {
	clinker: number; // tonnes
	cement: number; // tonnes
	coal: number; // tonnes
	petcokeMix: number; // %
	tsrPercentage: number; // %
	electricity: number; // GWh
	recsGreenPower: number; // GWh
	whrsCapacity: number; // MW
};

export function Dashboard({ user, onLogout }: { user: { email: string }; onLogout: () => void }) {
	const [currentPage, setCurrentPage] = useState<
		"dashboard" | "collect" | "measure" | "report" | "reduce"
	>("dashboard");
	const [data, setData] = useState<DashboardData>({
		ccts: "CMTOE001KA",
		urgei: 0.475, //tCO2e/t
		tgtgei: 0.436, //tCO2e/t
		clinker: 3.5, //tpa
		penaltyRisk: 38,
		tCO2gap: 380,
	});

	const [dat, setDat] = useState<FormData>({
		clinker: 0, // tonnes
		cement: 0, // tonnes
		coal: 0, // tonnes
		petcokeMix: 0, // %
		tsrPercentage: 0, // %
		electricity: 0, // GWh
		recsGreenPower: 0, // GWh
		whrsCapacity: 0, // MW
	});

	const renderPage = () => {
		switch (currentPage) {
			case "dashboard":
				return <CompanyDashboard data={data} onPageChange={setCurrentPage} />;
			case "measure":
				console.log("Data sent successuflly");
				console.log(dat);
				return <MeasureEmissionsPage dat={dat} onPageChange={setCurrentPage} />;
			case "collect":
				return <CollectDataPage dat={dat} setDat={setDat} onPageChange={setCurrentPage} />;
			case "report":
				return <ReportEmissionsPage onPageChange={setCurrentPage} />;
			case "reduce":
				return <ReduceEmissionsPage onPageChange={setCurrentPage} />;
		}
	};

	return (
		<div className="flex h-screen bg-gray-700">
			{/* <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} /> */}
			<div className="flex-1 flex flex-col overflow-hidden">
				<Header
					user={user}
					onLogout={onLogout}
					onPageChange={setCurrentPage}
					currentPage={currentPage}
				/>
				<div className="flex-1 overflow-auto">{renderPage()}</div>
			</div>
		</div>
	);
}
