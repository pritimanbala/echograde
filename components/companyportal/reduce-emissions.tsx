"use client";

import { ChevronRight, Lock } from "lucide-react";

export function ReduceEmissionsPage({
	onPageChange,
}: {
	onPageChange: (page: "dashboard" | "measure" | "collect" | "report" | "reduce") => void;
}) {
	return (
		<div className="bg-white min-h-screen p-8">
			<div className="max-w-6xl mx-auto space-y-8">
				{/* Page Header */}
				<div>
					<h1 className="text-4xl font-bold text-gray-900 mb-2">Reduce emissions</h1>
					<p className="text-gray-600">
						Your personalized pathway to meet compliance targets and maximize carbon
						credits revenue
					</p>
				</div>

				{/* Block 1: Total Opportunity - Hero Green Gradient */}
				<div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg p-12 text-white">
					<p className="text-sm font-semibold mb-2 opacity-90">Your Opportunity</p>
					<h2 className="text-5xl font-bold mb-4">₹681.8Cr</h2>
					<p className="text-xl font-semibold">₹340.9Cr Saved + ₹340.9Cr Earned</p>
					<p className="text-sm opacity-75 mt-4">
						Potential value from Phase 1 & Phase 2 combined implementation
					</p>
				</div>

				{/* Block 2: Phase 1 Table */}
				<div className="space-y-4">
					<div>
						<h2 className="text-2xl font-bold text-emerald-600 mb-1">
							PHASE 1: Meet CCTS Target
						</h2>
						<p className="text-gray-600">3,409k tCO₂e needed → Do these FIRST</p>
					</div>

					<div className="border border-gray-200 rounded-lg overflow-hidden">
						<table className="w-full">
							<thead>
								<tr className="bg-gray-100 border-b border-gray-200">
									<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
										Action
									</th>
									<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
										tCO₂e
									</th>
									<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
										₹ Value
									</th>
									<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
										CapEx
									</th>
									<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
										Payback
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-gray-200 hover:bg-gray-50">
									<td className="px-6 py-4 text-sm text-gray-900">
										VFD Kiln Fans
									</td>
									<td className="px-6 py-4 text-sm text-gray-900">1,364k</td>
									<td className="px-6 py-4 text-sm font-semibold text-gray-900">
										₹136.4Cr*
									</td>
									<td className="px-6 py-4 text-sm text-gray-900">₹45Cr</td>
									<td className="px-6 py-4 text-sm font-semibold text-emerald-600">
										6mo ✅
									</td>
								</tr>
								<tr className="bg-gray-50 border-b border-gray-200 hover:bg-gray-100">
									<td className="px-6 py-4 text-sm text-gray-900">
										HPGR Cement Mills
									</td>
									<td className="px-6 py-4 text-sm text-gray-900">1,023k</td>
									<td className="px-6 py-4 text-sm font-semibold text-gray-900">
										₹102.3Cr*
									</td>
									<td className="px-6 py-4 text-sm text-gray-900">₹120Cr</td>
									<td className="px-6 py-4 text-sm text-gray-900">18mo</td>
								</tr>
								<tr className="border-b border-gray-200 hover:bg-gray-50">
									<td className="px-6 py-4 text-sm text-gray-900">RECs 100GWh</td>
									<td className="px-6 py-4 text-sm text-gray-900">1,022k</td>
									<td className="px-6 py-4 text-sm font-semibold text-gray-900">
										₹102.2Cr*
									</td>
									<td className="px-6 py-4 text-sm text-emerald-600 font-semibold">
										₹0
									</td>
									<td className="px-6 py-4 text-sm font-semibold text-emerald-600">
										Now ✅
									</td>
								</tr>
								<tr className="bg-emerald-50 font-semibold">
									<td className="px-6 py-4 text-sm text-emerald-900">
										PHASE 1 TOTAL
									</td>
									<td className="px-6 py-4 text-sm text-emerald-900">3,409k</td>
									<td className="px-6 py-4 text-sm text-emerald-900">₹340.9Cr</td>
									<td className="px-6 py-4 text-sm text-emerald-900">₹165Cr</td>
									<td className="px-6 py-4 text-sm text-emerald-900">12mo</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="flex gap-4">
						<button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition">
							START PHASE 1
							<ChevronRight className="w-5 h-5" />
						</button>
						<button
							onClick={() => {
								onPageChange("report");
							}}
							className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition">
							DOWNLOAD ACVA PDF
							<ChevronRight className="w-5 h-5" />
						</button>
					</div>
				</div>

				{/* Block 3: Phase 2 Preview - Locked */}
				<div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 opacity-60">
					<div className="flex items-start gap-4">
						<Lock className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
						<div className="flex-1">
							<h2 className="text-2xl font-bold text-gray-700 mb-1">
								🔒 PHASE 2: Earn Extra ₹340.9Cr
							</h2>
							<p className="text-gray-600 mb-3">Unlock after Phase 1 completion</p>
							<p className="text-sm text-gray-600">
								TSR 30% → WHRS → Clinker Factor 0.60
							</p>
						</div>
					</div>
					<button className="mt-6 bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg cursor-not-allowed opacity-75">
						Preview Phase 2
					</button>
				</div>

				{/* Block 4: ROI Summary */}
				<div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
					<h3 className="text-lg font-bold text-gray-900 mb-6">ROI Summary</h3>
					<div className="grid grid-cols-4 gap-4">
						<div>
							<p className="text-sm text-gray-600 mb-1">Total CapEx</p>
							<p className="text-3xl font-bold text-gray-900">₹280Cr</p>
						</div>
						<div>
							<p className="text-sm text-gray-600 mb-1">Total Revenue</p>
							<p className="text-3xl font-bold text-emerald-600">₹681.8Cr</p>
						</div>
						<div>
							<p className="text-sm text-gray-600 mb-1">Payback Period</p>
							<p className="text-3xl font-bold text-gray-900">
								15mo <span className="text-green-600 text-lg">✅</span>
							</p>
						</div>
						<div>
							<p className="text-sm text-gray-600 mb-1">IRR</p>
							<p className="text-3xl font-bold text-gray-900">
								65% <span className="text-green-600 text-lg">✅</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
