"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const INDUSTRIES = ["Cement", "Aluminium", "Petroleum"];

export function GetStartedForm() {
	const [formData, setFormData] = useState({
		name: "",
		role: "",
		industry: "",
		plantCompanyName: "",
		phone: "",
		ccts: "",
		email: "",
		comments: "",
	});

	const [submitted, setSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			const response = await fetch("/api/get-started", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Failed to submit form");
			}

			setSubmitted(true);
			setFormData({
				name: "",
				role: "",
				industry: "",
				plantCompanyName: "",
				ccts: "",
				phone: "",
				email: "",
				comments: "",
			});
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			{/* Hero Section with Background */}
			<section className="relative py-20 md:py-32 overflow-hidden bg-background">
				{/* Background Gradient with Dark Overlay */}
				<div className="absolute inset-0 from-accent/10 via-background to-background" />

				{/* Content */}
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance leading-tight text-white">
							Get Started Today
						</h1>
						<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
							Join organizations committed to authentic environmental progress. Fill
							in your details and we'll reach out within 12 hours.
						</p>
					</div>

					{/* Form Container */}
					<div className="max-w-2xl mx-auto">
						{submitted ? (
							<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 md:p-12 text-center">
								<div className="mb-4 text-5xl">✓</div>
								<h2 className="text-3xl font-bold mb-4 text-white">Thank You!</h2>
								<p className="text-gray-300 mb-6">
									We've received your details and will reach out to you within the
									next 12 hours. We'll send a sign-in password to your email
									address.
								</p>
								<p className="text-sm text-gray-400 mb-8">
									In the meantime, feel free to explore our solutions and
									methodologies.
								</p>
								<Button
									onClick={() => (window.location.href = "/")}
									className="bg-accent text-white hover:opacity-90">
									Back to Home
								</Button>
							</div>
						) : (
							<form
								onSubmit={handleSubmit}
								className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 md:p-12 space-y-6">
								{/* Name and Role Row */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label
											htmlFor="name"
											className="text-sm font-medium text-white">
											Your Name *
										</label>
										<Input
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											placeholder="Abinaya Latua"
											required
											className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent"
										/>
									</div>

									<div className="space-y-2">
										<label
											htmlFor="role"
											className="text-sm font-medium text-white">
											Your Role *
										</label>
										<Input
											id="role"
											name="role"
											value={formData.role}
											onChange={handleChange}
											placeholder="e.g., Manager, Director"
											required
											className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent"
										/>
									</div>
								</div>

								{/* Industry and Company Name Row */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label
											htmlFor="industry"
											className="text-sm font-medium text-white">
											Industry Type *
										</label>
										<select
											id="industry"
											name="industry"
											value={formData.industry}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent placeholder:text-gray-400">
											<option value="" className="text-gray-900">
												Select an industry
											</option>
											{INDUSTRIES.map((ind) => (
												<option
													key={ind}
													value={ind}
													className="text-gray-900">
													{ind}
												</option>
											))}
										</select>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="plantCompanyName"
											className="text-sm font-medium text-white">
											Plant/Company Name *
										</label>
										<Input
											id="plantCompanyName"
											name="plantCompanyName"
											value={formData.plantCompanyName}
											onChange={handleChange}
											placeholder="Your organization name"
											required
											className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent"
										/>
									</div>
								</div>

								{/* Phone and Email Row */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label
											htmlFor="phone"
											className="text-sm font-medium text-white">
											Phone Number *
										</label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											value={formData.phone}
											onChange={handleChange}
											placeholder="+1 (555) 123-4567"
											required
											className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="text-sm font-medium text-white">
											Email Address *
										</label>
										<Input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="your@email.com"
											required
											className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="ccts"
											className="text-sm font-medium text-white">
											CCTS number of the plant*
										</label>
										<Input
											id="ccts"
											name="ccts"
											value={formData.ccts}
											onChange={handleChange}
											placeholder="e.g., AAAAA001AA"
											required
											className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent"
										/>
									</div>
								</div>

								{/* Comments */}
								<div className="space-y-2">
									<label
										htmlFor="comments"
										className="text-sm font-medium text-white">
										Comments (Optional)
									</label>
									<textarea
										id="comments"
										name="comments"
										value={formData.comments}
										onChange={handleChange}
										placeholder="Tell us more about your sustainability goals..."
										rows={4}
										className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none"
									/>
								</div>

								{/* Error Message */}
								{/* {error && (
									<div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-md text-sm">
										{error}
									</div>
								)} */}

								{/* Submit Button */}
								<div className="flex gap-4 pt-6">
									<Button
										type="submit"
										disabled={isLoading}
										className="flex-1 bg-accent text-white hover:opacity-90 disabled:opacity-50">
										{isLoading ? "Submitting..." : "Get Started"}
									</Button>
									<Button
										type="button"
										onClick={() => (window.location.href = "/")}
										variant="outline"
										className="px-6 text-white border-white/20 hover:bg-white/5">
										Cancel
									</Button>
								</div>

								{error && (
									<div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-md text-sm">
										We will contact u after some time.
									</div>
								)}
							</form>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
