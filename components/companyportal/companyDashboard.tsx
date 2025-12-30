"use client";

const data = {
	ccts: "CMTOE001KA",
	urgei: 0.0475,
	tgtgei: 0.0436,
	clinker: 3.5,
	penaltyRisk: 38,
	tCO2gap: 380,
	data: ["something.csv", "anotherthing.csv"],
};

import { AlertCircle, Upload, ArrowRight } from "lucide-react";

export function CompanyDashboard() {
	const len = ((data.data.length / 8) * 100).toString();

	return (
		<div className="flex-1 flex flex-col bg-gray-50 overflow-auto min-h-screen">
			<div className="p-8 space-y-6">
				{/* Section 1: Two Status Cards */}
				<div className="grid grid-cols-2 gap-6">
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
								<p className="text-gray-600 text-sm mt-1">tCO₂e/t</p>
							</div>
							<div className="border-t border-gray-200 pt-4">
								<p className="text-gray-600 text-xs mb-1">Capacity</p>
								<p className="text-lg font-semibold text-gray-800">
									{data.clinker}M tpa clinker
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

					{/* Right Card - Data Upload Status */}
					<div className="bg-white rounded-lg shadow-sm border-l-4 border-amber-500 p-6">
						<h3 className="text-sm font-semibold text-gray-600 mb-6">
							Data Upload Status
						</h3>
						<div className="space-y-6">
							<div>
								<p className="text-6xl font-bold text-gray-800 mb-4">
									{data.data.length}/8
								</p>
								{/* Progress Bar */}
								<div className="w-full bg-gray-200 rounded-full h-3">
									<div
										className="bg-amber-500 h-3 rounded-full transition-all duration-300"
										style={{ width: `${len}%` }}></div>
								</div>
								<p className="text-xs text-gray-500 mt-2">
									{(data.data.length / 8) * 100}% Complete
								</p>
							</div>
							<button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
								<Upload size={18} />
								UPLOAD DATA NOW
								<ArrowRight size={18} />
							</button>
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
						<button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
							UPLOAD PAT FORM 2<span className="text-sm font-normal">(5 mins)</span>
						</button>
						<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors">
							ENTER DATA MANUALLY
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
