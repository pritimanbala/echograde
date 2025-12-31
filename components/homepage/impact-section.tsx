export function ImpactSection() {
	const industries = [["Cement", "Aluminium", "Petroleum"]];

	return (
		<section className="py-16 md:py-24" id="sectors">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl md:text-6xl font-bold mb-2 text-balance">
					Global Manufacturing.
				</h2>
				<h2 className="text-4xl md:text-6xl font-bold mb-8 text-accent text-balance">
					Unlimited Decarbonization.
				</h2>
				<p className="text-muted-foreground max-w-3xl mb-12">
					Serving manufacturing and process industries across cement, textiles, chemicals,
					metals, food processing, and more. Our engineering-driven approach delivers
					measurable emissions reductions, compliance readiness, and operational
					efficiency improvements at scale.
				</p>

				<div className="grid md:grid-cols-5 gap-8">
					{industries.map((column, idx) => (
						<div key={idx} className="space-y-6">
							{column.map((industry, i) => (
								<div
									key={i}
									className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
									{industry}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
