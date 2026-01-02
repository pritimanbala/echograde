"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-0 h-[10vh] w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<a href="/" className="flex items-center" style={{ textDecoration: "none" }}>
						<div className="w-8 h-8 mx-4 bg-transparent rounded flex items-center justify-center">
							<img src="logo.png" alt="logo" />
						</div>
						<span className="text-2xl font-bold text-green-600">ECHO</span>
						<span className="text-2xl font-bold text-gray-800">grade</span>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex gap-8">
						<a
							href="/#services"
							className="text-sm font-medium hover:text-accent transition-colors">
							Services
						</a>
						<a
							href="/#solutions"
							className="text-sm font-medium hover:text-accent transition-colors">
							Solutions
						</a>
						<a
							href="/#sectors"
							className="text-sm font-medium hover:text-accent transition-colors">
							Sectors
						</a>
						<a
							href="/#resources"
							className="text-sm font-medium hover:text-accent transition-colors">
							Resources
						</a>
						<a
							href="/#contact"
							className="text-sm font-medium hover:text-accent transition-colors">
							Contact
						</a>
					</nav>
					<div className="flex w-fit gap-8 justify-around ">
						<Link
							href="/companyportal"
							className="text-sm font-medium hover:text-accent transition-colors  mt-2">
							Login
						</Link>
						<Link
							href="/get-started"
							className="hidden md:block px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
							Get Started
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<nav className="md:hidden pb-4 space-y-2">
						<a
							href="#about"
							className="block text-sm font-medium hover:text-accent transition-colors">
							About
						</a>
						<a
							href="#solutions"
							className="block text-sm font-medium hover:text-accent transition-colors">
							Solutions
						</a>
						<a
							href="#impact"
							className="block text-sm font-medium hover:text-accent transition-colors">
							Impact
						</a>
						<a
							href="#contact"
							className="block text-sm font-medium hover:text-accent transition-colors">
							Contact
						</a>
						<Link
							href="/get-started"
							className="block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
							Get Started
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
}
