"use client";

import { useState } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { CollectDataPage } from "./collect-data";
import { MeasureEmissionsPage } from "./measure-emissions";
import { ReportEmissionsPage } from "./report-emissions";
import { ReduceEmissionsPage } from "./reduce-emissions";
import { CompanyDashboard } from "./companyDashboard";

export function Dashboard({ user, onLogout }: { user: { email: string }; onLogout: () => void }) {
	const [currentPage, setCurrentPage] = useState<
		"dashboard" | "collect" | "measure" | "report" | "reduce"
	>("measure");

	const renderPage = () => {
		switch (currentPage) {
			case "dashboard":
				return <CompanyDashboard />;
			case "measure":
				return <MeasureEmissionsPage />;
			case "collect":
				return <CollectDataPage />;
			case "report":
				return <ReportEmissionsPage />;
			case "reduce":
				return <ReduceEmissionsPage />;
		}
	};

	return (
		<div className="flex h-screen bg-gray-700">
			<Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
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
