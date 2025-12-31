"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function MeasureEmissionsPage() {
	const [expandedDetails, setExpandedDetails] = useState(false);

	// GEI Data
	const currentGEI = 0.0475;
	const targetGEI = 0.0436;
	const gapGEI = Math.round((currentGEI - targetGEI) * 10000) / 10000;
	const gapPercentage = ((gapGEI / targetGEI) * 100).toFixed(0);

	// Scope Breakdown
	const scopeBreakdown = [
		{ name: "Process", value: 1785, color: "#ef4444" },
		{ name: "Fuel", value: 814, color: "#f97316" },
		{ name: "Grid", value: 451, color: "#3b82f6" },
	];

	const totalEmissions = scopeBreakdown.reduce((sum, item) => sum + item.value, 0);

	// Penalty Calculation
	const penaltyRiskGap = 3409; // in thousands tCO₂e
	const penaltyAmount = penaltyRiskGap * 100; // ₹1,000/t = ₹100k per 1k t

	// GEI Gauge calculation - proportional arc for red sector
	const geiValue = [
		{ stats: "achieved", value: currentGEI, color: "#0da321" },
		{ stats: "left", value: gapGEI, color: "#f97316" },
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
							<p className="text-sm text-gray-600 mb-2">Target: {targetGEI}</p>
							<p className="text-2xl font-bold text-red-600">
								❌ Gap: {gapGEI.toFixed(4)} ({gapPercentage}% over)
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
										3.5M t × 0.51 = 1,785k tCO₂e
									</span>
								</div>
								<div>
									<span className="text-gray-600">Scope 1 Fuel: </span>
									<span className="text-gray-900 font-semibold">
										332k t coal × 2.45 = 814k tCO₂e
									</span>
								</div>
								<div>
									<span className="text-gray-600">Scope 2 Grid: </span>
									<span className="text-gray-900 font-semibold">
										620 GWh × 0.727 = 451k tCO₂e
									</span>
								</div>
								<div className="border-t border-gray-300 pt-3 mt-3">
									<div className="text-gray-600">
										Total: {totalEmissions}k tCO₂e ÷ 5.38M t ={" "}
										{currentGEI.toFixed(4)} GEI
									</div>
								</div>
							</div>
							<div className="mb-8">
								<p className="text-4xl font-bold text-red-600 mb-2">
									₹{(penaltyAmount / 10000000).toFixed(1)}Cr
								</p>
								<p className="text-sm text-gray-600">
									{penaltyRiskGap}k tCO₂e gap × ₹1,000/t
								</p>
							</div>
						</div>

						<Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-base">
							GENERATE RECOMMENDATIONS
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
