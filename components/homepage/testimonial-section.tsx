export function TestimonialSection() {
	return (
		<section className="py-16 md:py-24 bg-card">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-8">
					What plant managers and sustainability officers say
				</h2>

				<div className="mb-8">
					<img
						src="/professional-avatar.png"
						alt="Plant manager testimonial"
						className="w-20 h-20 rounded-full mx-auto"
					/>
				</div>

				<blockquote className="mb-6">
					<p className="text-xl md:text-2xl font-medium text-balance">
						"The ECHOgrade team provided exceptional support in reducing our facility's
						energy costs by 18%, improving compliance readiness, and positioning us for
						carbon credit eligibility. Their engineering-driven approach and audit-ready
						documentation made the entire process seamless."
					</p>
				</blockquote>

				<div className="text-muted-foreground">
					<p className="font-semibold">Manufacturing Plant Manager</p>
					<p className="text-sm">Sustainability & Compliance Officer</p>
				</div>
			</div>
		</section>
	);
}
