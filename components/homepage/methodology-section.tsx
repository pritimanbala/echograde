import { Zap, Target, CheckCircle } from "lucide-react";
import Link from "next/link";

export function MethodologySection() {
	const features = [
		{
			icon: Zap,
			title: "Baseline Assessment",
			description: "On-site industrial audits and emission source mapping for your facility",
		},
		{
			icon: Target,
			title: "Improvement Roadmap",
			description:
				"Engineering-verified process optimization recommendations with ROI projections",
		},
		{
			icon: CheckCircle,
			title: "Implementation Verification",
			description:
				"Performance monitoring, audit-ready documentation, and compliance support",
		},
	];

	return (
		<section className="py-16 md:py-24" id="services">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
					Engineering &
					<br />
					Compliance Methodology
				</h2>
				<p className="text-muted-foreground mb-12 max-w-2xl">
					We help manufacturing plants reduce emissions, improve operational efficiency,
					meet environmental compliance requirements, and avoid penalty risks through
					measurable, science-based performance improvements.
				</p>

				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature, idx) => {
						const Icon = feature.icon;
						return (
							<div key={idx} className="flex gap-4">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
										<Icon size={24} />
									</div>
								</div>
								<div>
									<h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
									<p className="text-muted-foreground">{feature.description}</p>
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-8">
					<Link
						href="/get-started"
						className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
						Request Assessment
					</Link>
				</div>
			</div>
		</section>
	);
}
