"use client";

import type React from "react";
import Papa from "papaparse";
import { useState } from "react";
import { Paperclip, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

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

type CsvData = {
	Clinker: number;
	Cement: number;
	Coal: number;
	PetcokeMix: number;
	TSR: number;
	Electricity: number;
	Green: number;
	WHRS: number;
};

export function CollectDataPage({
	dat,
	setDat,
	onPageChange,
}: {
	dat: object;
	setDat: React.Dispatch<React.SetStateAction<FormData>>;
	onPageChange: (page: "dashboard" | "measure" | "collect" | "report" | "reduce") => void;
}) {
	const [patFormStatus, setPatFormStatus] = useState<"ready" | "extracting" | "complete">(
		"ready"
	);
	const [extractedFields, setExtractedFields] = useState(0);
	const [isDragActive, setIsDragActive] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		clinker: 0, // tonnes
		cement: 0, // tonnes
		coal: 0, // tonnes
		petcokeMix: 0, // %
		tsrPercentage: 0, // %
		electricity: 0, // GWh
		recsGreenPower: 0, // GWh
		whrsCapacity: 0, // MW
	});

	const handleDragEnter = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragActive(true);
	};

	const handleDragLeave = () => {
		setIsDragActive(false);
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragActive(false);
		setPatFormStatus("extracting");
		// Simulate extraction
		setTimeout(() => {
			setExtractedFields(6);
			setPatFormStatus("complete");
		}, 2000);
	};

	const handleFileSelect = () => {
		setPatFormStatus("extracting");
		setTimeout(() => {
			setExtractedFields(6);
			setPatFormStatus("complete");
		}, 2000);
	};

	const handleFormChange = (field: keyof FormData, value: any) => {
		setFormData((prev) => ({
			...prev,
			[field]: value === "" ? "" : value,
		}));
	};

	const handleCalculate = () => {
		setDat(formData);
		console.log("data saved");
	};

	const handleClearForm = () => {
		setFormData({
			clinker: 0, // tonnes
			cement: 0, // tonnes
			coal: 0, // tonnes
			petcokeMix: 0, // %
			tsrPercentage: 0, // %
			electricity: 0, // GWh
			recsGreenPower: 0, // GWh
			whrsCapacity: 0, // MW
		});
	};

	const [data, setData] = useState<CsvData>({
		Clinker: 0.0,
		Cement: 0.0,
		Coal: 0.0,
		PetcokeMix: 0.0,
		TSR: 0.0,
		Electricity: 0.0,
		Green: 0.0,
		WHRS: 0.0,
	});
	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) {
			return;
		}

		Papa.parse<CsvData>(file, {
			header: true,
			skipEmptyLines: true,
			complete: (results) => {
				console.log("these are the results", results.data[0]);
				setData(results.data[0]);
			},
		});
	};

	return (
		<div className="bg-white min-h-screen p-8">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Collect & update data</h1>
					<p className="text-gray-600 max-w-2xl leading-relaxed">
						Data is the raw material of your emission calculations – the better quality
						it has and the more complete it is, the better your emission estimations
						will be.
					</p>
				</div>

				{/* Path 1: PAT Form 2 Upload */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Path 1: PAT Form 2 Upload (Recommended)
					</h2>

					{/* Drop Zone */}
					<div
						onDragEnter={handleDragEnter}
						onDragLeave={handleDragLeave}
						onDrop={handleDrop}
						className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors mb-6 ${
							isDragActive
								? "border-green-500 bg-green-50"
								: "border-green-500 bg-green-50 hover:border-green-600"
						}`}>
						<Paperclip className="w-16 h-16 text-green-600 mx-auto mb-4" />
						<p className="text-xl font-semibold text-gray-900 mb-2">
							DROP PAT FORM 2 PDF HERE OR CLICK TO BROWSE
						</p>
						<p className="text-gray-600 mb-6">
							Drag and drop your PAT Form 2 or click to select from your computer
						</p>
						{/* <Button
							onClick={handleFileSelect}
							className="bg-green-600 hover:bg-green-700 text-white">
							<Upload className="w-4 h-4 mr-2" />
							Browse Files
						</Button> */}
						<input
							type="file"
							accept=".csv"
							onChange={(e) => {
								handleFileUpload(e);
								handleFileSelect();
							}}
							className="w-full px-4 py-3 border border-gray-300 bg-green-600 hover:bg-green-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					{/* Status Updates */}
					{patFormStatus !== "ready" && (
						<div className="mb-6">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
								<span className="text-gray-700">
									{patFormStatus === "extracting" && "Extracting..."}
									{patFormStatus === "complete" &&
										`✅ ${extractedFields}/8 Fields Extracted!`}
								</span>
							</div>

							{/* Preview Table */}
							{patFormStatus === "complete" && (
								<div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
									<h3 className="font-semibold text-gray-900 mb-4">
										Extracted Data
									</h3>
									<div className="space-y-3">
										{[
											{
												label: "Clinker",
												value: `${data.Clinker} t`,
												status: "✅",
											},
											{
												label: "Cement",
												value: `${data.Cement} t`,
												status: "✅",
											},
											{
												label: "Coal",
												value: `${data.Coal} t`,
												status: "✅",
											},
											{
												label: "Petcoke Mix",
												value: `${data.PetcokeMix} %`,
												status: "✅",
											},
											{ label: "TSR", value: `${data.TSR} %`, status: "✅" },
											{
												label: "Electricity",
												value: `${data.Electricity} kWh/t`,
												status: "✅",
											},
											{
												label: "WHRS Capacity in MW",
												value: `${data.WHRS} MW`,
												status: "✅",
											},
											{
												label: "RECs/Green Power",
												value: `${data.Green}`,
												status: "✅",
											},
										].map((item, idx) => (
											<div
												key={idx}
												className="flex items-center justify-between p-3 bg-gray-50 rounded">
												<span className="text-gray-700">{item.label}:</span>
												<span className="font-semibold text-gray-900">
													{item.value}
												</span>
												<span className="text-green-600">
													{item.status}
												</span>
											</div>
										))}
									</div>
								</div>
							)}

							{patFormStatus === "complete" && (
								<Button
									onClick={() => {
										const newData: FormData = {
											clinker: data.Clinker,
											cement: data.Cement,
											coal: data.Coal,
											petcokeMix: data.PetcokeMix,
											tsrPercentage: data.TSR,
											electricity: data.Electricity,
											recsGreenPower: data.Green,
											whrsCapacity: data.WHRS,
										};

										setFormData(newData);
										setDat(newData);
										onPageChange("measure");
										console.log("CSV data saved", newData);
									}}>
									CONFIRM & CALCULATE GEI
								</Button>
							)}
						</div>
					)}
				</div>

				{/* Path 2: Manual Entry Form */}
				<div>
					<div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-black mb-6 rounded">
						<h3 className="text-lg font-semibold text-gray-900">
							Or Enter Data Manually
						</h3>
						<p className="text-gray-600 text-sm">
							All fields optional - partial data is OK
						</p>
					</div>

					<form className="grid grid-cols-2 gap-6 mb-8">
						{/* Production Section */}
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Clinker Production in tonnes
							</label>
							<input
								type="number"
								value={formData.clinker}
								onChange={(e) =>
									handleFormChange(
										"clinker",
										e.target.value ? Number.parseFloat(e.target.value) : ""
									)
								}
								placeholder="Enter amount"
								className="w-full px-4 py-2 border text-black text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<p className="text-xs text-green-600 mt-1">CII Benchmark available</p>
						</div>

						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Cement Production in tonnes <span className="text-red-500">*</span>
							</label>
							<input
								type="number"
								value={formData.cement}
								onChange={(e) =>
									handleFormChange(
										"cement",
										e.target.value ? Number.parseFloat(e.target.value) : ""
									)
								}
								placeholder="Enter amount"
								required
								className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<p className="text-xs text-gray-500 mt-1">Required for GEI</p>
						</div>

						{/* Fuel Section */}
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Coal Consumption
							</label>
							<input
								type="number"
								value={formData.coal}
								onChange={(e) =>
									handleFormChange(
										"coal",
										e.target.value ? Number.parseFloat(e.target.value) : ""
									)
								}
								placeholder="Enter amount"
								className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<p className="text-xs text-gray-500 mt-1">Default: 95kg/t clinker</p>
						</div>

						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Petcoke Mix: {formData.petcokeMix}%
							</label>
							<input
								type="range"
								min="0"
								max="100"
								value={formData.petcokeMix}
								onChange={(e) =>
									handleFormChange("petcokeMix", Number.parseInt(e.target.value))
								}
								className="w-full"
							/>
							<p className="text-xs text-gray-500 mt-1">Default: 30%</p>
						</div>

						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								TSR/RDF/Biomass: {formData.tsrPercentage}%
							</label>
							<input
								type="range"
								min="0"
								max="40"
								value={formData.tsrPercentage}
								onChange={(e) =>
									handleFormChange(
										"tsrPercentage",
										Number.parseInt(e.target.value)
									)
								}
								className="w-full"
							/>
							<p className="text-xs text-gray-500 mt-1">Best: 30% | Default: 7%</p>
						</div>

						{/* Power Section */}
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Total Electricity in kWh/t
							</label>
							<input
								type="number"
								value={formData.electricity}
								onChange={(e) =>
									handleFormChange(
										"electricity",
										e.target.value ? Number.parseFloat(e.target.value) : ""
									)
								}
								placeholder="Enter GWh"
								className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<p className="text-xs text-gray-500 mt-1">Default: 115 kWh/t</p>
						</div>

						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								RECs/Green Power
							</label>
							<input
								type="number"
								value={formData.recsGreenPower}
								onChange={(e) =>
									handleFormChange(
										"recsGreenPower",
										e.target.value ? Number.parseFloat(e.target.value) : ""
									)
								}
								placeholder="Enter amount"
								className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<p className="text-xs text-gray-500 mt-1">Default: 0</p>
						</div>

						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								WHRS Capacity in MW
							</label>
							<input
								type="number"
								value={formData.whrsCapacity}
								onChange={(e) =>
									handleFormChange(
										"whrsCapacity",
										e.target.value ? Number.parseFloat(e.target.value) : ""
									)
								}
								placeholder="Enter MW"
								className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<p className="text-xs text-gray-500 mt-1">
								Benchmark: 21MW | Default: 8MW
							</p>
						</div>
					</form>

					{/* Action Buttons */}
					<div className="flex gap-4 mb-8">
						<Button
							onClick={handleCalculate}
							className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold">
							<Zap className="w-5 h-5 mr-2" />
							CALCULATE GEI
						</Button>
						<Button
							onClick={() => {
								handleClearForm();
								onPageChange("measure");
							}}
							variant="outline"
							className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-6 text-lg font-semibold">
							Clear Form
						</Button>
					</div>

					{/* Optional Section */}
					<div className="border-t pt-8">
						<h3 className="text-lg font-semibold text-gray-900 mb-4">
							🔧 Optional: Upload P&ID File
						</h3>
						<p className="text-xs text-gray-500 mx-auto mt-2">
							pyDEXPI analysis coming soon
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
