export function GallerySection() {
	const images = [
		{
			id: 1,
			alt: "Industrial facility audit",
			query: "industrial manufacturing plant facility assessment",
		},
		{
			id: 2,
			alt: "Process efficiency optimization",
			query: "industrial process optimization equipment engineering",
		},
		{
			id: 3,
			alt: "Emissions monitoring systems",
			query: "emissions monitoring equipment industrial sensors",
		},
		{
			id: 4,
			alt: "Compliance documentation",
			query: "compliance documentation audit records industrial standards",
		},
	];

	return (
		<section className="py-16 md:py-24 bg-card">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold mb-8">
					Industrial Assessment & Implementation
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
					{images.map((img) => (
						<div
							key={img.id}
							className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
							<img
								src={`/.jpg?height=300&width=300&query=${img.query}`}
								alt={img.alt}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
