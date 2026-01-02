"use client";

import { AlertCircle } from "lucide-react";

type DashboardData = {
	ccts: string;
	tgtgei: number;
	urgei: number;
	clinker: number;
	penaltyRisk: number;
	tCO2gap: number;
};

export function CompanyDashboard({
	onPageChange,
	data,
}: {
	onPageChange: (page: "dashboard" | "measure" | "collect" | "report" | "reduce") => void;
	data: DashboardData;
}) {
	return (
		<div className="flex-1 flex flex-col bg-gray-50 overflow-auto min-h-screen">
			<div className="p-8 space-y-6">
				{/* Section 1: Two Status Cards */}
				<div className="grid grid-cols-1 gap-6">
					{/* Left Card - CCTS Target Loaded */}
					<div className="bg-white rounded-lg shadow-sm border-l-4 border-green-500 p-6">
						<div className="flex items-start justify-between mb-4">
							<h3 className="text-sm font-semibold text-gray-600">
								CCTS Target Loaded
							</h3>
							<span className="text-green-600 text-lg">✓</span>
						</div>
						<div className="space-y-4">
							<div>
								<p className="text-gray-600 text-xs mb-1">Target GEI</p>
								<p className="text-4xl font-bold text-green-600">{data.tgtgei}</p>
								{/* this will get updated once you login, so ignore this error currently */}
								<p className="text-gray-600 text-sm mt-1">tCO₂e/t</p>
							</div>
							<div className="border-t border-gray-200 pt-4">
								<p className="text-gray-600 text-xs mb-1">Capacity</p>
								<p className="text-lg font-semibold text-gray-800">
									{data.clinker}M tpa cement
								</p>
							</div>
							<div className="border-t border-gray-200 pt-4">
								<p className="text-gray-600 text-xs mb-1">Penalty Risk</p>
								<p className="text-xl font-bold text-red-600">
									₹{data.penaltyRisk}Cr
								</p>
								<p className="text-gray-600 text-xs mt-1">
									{data.tCO2gap}k tCO₂e gap
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Section 2: Hero CTA with Penalty Risk */}
				<div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 rounded-lg p-8">
					<div className="space-y-4">
						<div className="flex items-start gap-3">
							<AlertCircle className="text-red-600 mt-1 flex-shrink-0" size={28} />
							<h2 className="text-3xl font-bold text-red-600">
								₹{data.penaltyRisk}Cr Penalty Risk Detected
							</h2>
						</div>
						<p className="text-lg text-gray-800">
							Your GEI <span className="font-bold">{data.urgei}</span> &gt; Target{" "}
							<span className="font-bold">{data.tgtgei}</span> (
							<span className="text-red-600 font-bold">
								{(((data.urgei - data.tgtgei) / data.tgtgei) * 100).toFixed(2)}% gap
							</span>
							)
						</p>
					</div>

					{/* Action Buttons */}
					<div className="grid grid-cols-2 gap-4 mt-8">
						<button
							onClick={() => {
								onPageChange("collect");
							}}
							className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
							UPLOAD PAT FORM 2<span className="text-sm font-normal">(5 mins)</span>
						</button>
						<button
							onClick={() => {
								onPageChange("collect");
							}}
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors">
							ENTER DATA MANUALLY
						</button>
						<span className="text-black text-sm ">
							* This data is based on your previous year's performance
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
