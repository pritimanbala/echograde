import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ECHOgrade - Emissions Management",
	description: "Enterprise emissions tracking and management platform",
	generator: "echograde",
	icons: {
		icon: [
			{
				url: "/logo.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/logo.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/logo.png",
				type: "image/svg+xml",
			},
		],
		apple: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${_inter.className}`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
