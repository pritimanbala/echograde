"use client";
import { Settings } from "lucide-react";

export function Header({
	onLogout,
	onPageChange,
	currentPage,
}: {
	user: { email: string };
	onLogout: () => void;
	onPageChange: (page: "dashboard" | "measure" | "collect" | "report" | "reduce") => void;
	currentPage: "dashboard" | "measure" | "collect" | "report" | "reduce";
}) {
	const pages = [
		{ id: "dashboard", label: "Dashboard" },
		{ id: "collect", label: "Collect & update data" },
		{ id: "measure", label: "Measure Emmissions" },
		{ id: "reduce", label: "Reduce emissions" },
		{ id: "report", label: "Report emissions" },
	] as const;

	return (
		<header className="bg-white border-b border-gray-200">
			<div className="flex items-center justify-between px-6 py-4">
				{/* Logo */}
				<a href="/" className="flex items-center" style={{ textDecoration: "none" }}>
					<div className="w-8 h-8 mx-4 bg-transparent rounded flex items-center justify-center">
						<img src="logo.png" alt="logo" />
					</div>
					<span className="text-2xl font-bold text-green-600">ECHO</span>
					<span className="text-2xl font-bold text-gray-800">grade</span>
				</a>

				{/* Navigation */}
				<nav className="flex gap-8">
					{pages.map((page) => (
						<button
							key={page.id}
							onClick={() => onPageChange(page.id)}
							className={`text-sm font-medium transition-colors pb-2 border-b-2 ${
								currentPage === page.id
									? "text-gray-800 border-green-500"
									: "text-gray-600 border-transparent hover:text-gray-800"
							}`}>
							{page.label}
						</button>
					))}
				</nav>

				{/* CSRD Manager and Icons */}
				<div className="flex items-center gap-4">
					<button className="text-sm font-medium text-gray-700 hover:text-gray-900">
						ACC Chaibasa - CM001GHCK
					</button>
					<button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
						<Settings size={20} className="text-gray-600" />
					</button>
					<button
						onClick={onLogout}
						className="ml-2 text-sm text-gray-600 hover:text-gray-900 font-medium">
						Logout
					</button>
				</div>
			</div>
		</header>
	);
}
