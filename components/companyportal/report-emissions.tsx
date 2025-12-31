"use client";

export function ReportEmissionsPage() {
	const handleDownloadPDF = () => {
		// Create a mock PDF download
		const content =
			"ACVA Emissions Report\n\nEmissions Summary\nCompliance Status\nRecommendations";
		const blob = new Blob([content], { type: "application/pdf" });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "emissions-report.pdf";
		a.click();
	};

	const handleDownloadWorkbook = () => {
		// Create a mock Excel download
		const content = "Excel Formulas\nAudit Trail\nAssumptions";
		const blob = new Blob([content], { type: "application/vnd.ms-excel" });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "emissions-workbook.xlsx";
		a.click();
	};

	const handleEmailTeam = () => {
		alert(
			"Email functionality would open your default email client with pre-populated recipients and attachments"
		);
	};

	const handleUpgrade = () => {
		alert("Stripe payment integration would open checkout");
	};

	return (
		<div className="bg-white min-h-screen p-8">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-4xl font-bold text-gray-900 mb-2">Report emissions</h1>
				<p className="text-gray-600 mb-12">
					Export comprehensive emissions reports and compliance documentation for
					stakeholders and regulatory submissions.
				</p>

				<div className="space-y-4 mb-12">
					{/* Green ACVA PDF Button */}
					<button
						onClick={handleDownloadPDF}
						className="w-full bg-linear-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg hover:shadow-md transition-shadow text-left">
						<div className="flex items-center justify-between">
							<div>
								<div className="flex items-center gap-3 mb-3">
									<span className="text-2xl">📄</span>
									<h3 className="text-xl font-bold text-gray-900">
										Download ACVA PDF
									</h3>
								</div>
								<ul className="text-gray-700 space-y-1 ml-8">
									<li>├─ Emissions summary</li>
									<li>├─ Compliance status</li>
									<li>└─ Recommendations</li>
								</ul>
							</div>
							<div className="text-green-600 font-semibold">→</div>
						</div>
					</button>

					{/* Blue Workbook Button */}
					<button
						onClick={handleDownloadWorkbook}
						className="w-full bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg hover:shadow-md transition-shadow text-left">
						<div className="flex items-center justify-between">
							<div>
								<div className="flex items-center gap-3 mb-3">
									<span className="text-2xl">💾</span>
									<h3 className="text-xl font-bold text-gray-900">
										Download Calc Workbook
									</h3>
								</div>
								<ul className="text-gray-700 space-y-1 ml-8">
									<li>├─ Excel formulas</li>
									<li>├─ Audit trail</li>
									<li>└─ Assumptions</li>
								</ul>
							</div>
							<div className="text-blue-600 font-semibold">→</div>
						</div>
					</button>

					{/* Orange Email Button */}
					<button
						onClick={handleEmailTeam}
						className="w-full bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg hover:shadow-md transition-shadow text-left">
						<div className="flex items-center justify-between">
							<div>
								<div className="flex items-center gap-3 mb-3">
									<span className="text-2xl">📧</span>
									<h3 className="text-xl font-bold text-gray-900">
										Email to Team
									</h3>
								</div>
								<ul className="text-gray-700 space-y-1 ml-8">
									<li>├─ PDF + link</li>
									<li>└─ CC stakeholders</li>
								</ul>
							</div>
							<div className="text-orange-600 font-semibold">→</div>
						</div>
					</button>
				</div>

				<div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-8 rounded-lg">
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								💳 Upgrade to Full Plan
							</h3>
							<p className="text-gray-700">
								<span className="font-semibold text-purple-600">₹1.9Cr</span>
								<span className="text-gray-600"> (5% of ₹38Cr savings)</span>
							</p>
							<p className="text-sm text-gray-600 mt-2">
								Unlock advanced analytics, priority support, and custom reporting
							</p>
						</div>
						<button
							onClick={handleUpgrade}
							className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
							Upgrade Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
