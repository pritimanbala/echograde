export function SolutionsSection() {
	const solutions = [
		{
			id: 1,
			title: "Energy & Process Efficiency Audit",
			description: "On-site industrial audits identifying emission reduction opportunities",
			query: "energyaudit.png",
		},
		{
			id: 2,
			title: "Emission Baseline & Source Mapping",
			description: "Complete baseline assessment and GHG emission source mapping",
			query: "emissionbaseline.png",
		},
		{
			id: 3,
			title: "Compliance & Penalty Risk Assessment",
			description: "Evaluate regulatory compliance gaps and penalty avoidance strategies",
			query: "riskassessment.png",
		},
		{
			id: 4,
			title: "Implementation Support & Monitoring",
			description:
				"Engineering support and performance verification throughout implementation",
			query: "implementation.png",
		},
		{
			id: 5,
			title: "Carbon Credit Readiness Review",
			description: "Assess eligibility and prepare audit-ready documentation for crediting",
			query: "credit.png",
		},
	];

	return (
		<section className="py-16 md:py-24 bg-card" id="solutions">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
					Industrial Decarbonization
					<br />
					Services
				</h2>
				<p className="text-muted-foreground mb-12 max-w-2xl">
					Comprehensive engineering-driven solutions to reduce emissions, improve
					efficiency, meet compliance requirements, and enable carbon credit eligibility.
				</p>

				<div className="grid md:grid-cols-3 gap-6 mt-12">
					{solutions.map((solution) => (
						<div
							key={solution.id}
							className="relative h-72 rounded-lg overflow-hidden group cursor-pointer">
							<img
								src={solution.query}
								alt={solution.title}
								className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-300"
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							{/* Content */}
							<div className="absolute inset-0 flex flex-col justify-end p-6">
								<h3 className="text-xl font-bold mb-1">{solution.title}</h3>
								<p className="text-sm  text-[#777777]">{solution.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
