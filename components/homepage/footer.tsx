export function Footer() {
	return (
		<footer className="bg-card border-t border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div>
						<h3 className="font-bold mb-4 text-accent">ECHOgrade</h3>
						<p className="text-sm text-muted-foreground">
							Engineering-driven industrial decarbonization and compliance solutions
							for manufacturing plants.
						</p>
					</div>
					<div>
						<h3 className="font-bold mb-4">Services</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="#services"
									className="hover:text-foreground transition-colors">
									Methodology
								</a>
							</li>
							<li>
								<a
									href="#solutions"
									className="hover:text-foreground transition-colors">
									Services
								</a>
							</li>
							<li>
								<a
									href="#sectors"
									className="hover:text-foreground transition-colors">
									Industries
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4">Resources</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a href="#" className="hover:text-foreground transition-colors">
									Case Studies
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-foreground transition-colors">
									Compliance Guide
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-foreground transition-colors">
									Research
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4">Contact</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="mailto:info@echograde.com"
									className="hover:text-foreground transition-colors">
									info@echograde.com
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-foreground transition-colors">
									LinkedIn
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-foreground transition-colors">
									Twitter
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
					<p>&copy; 2025 ECHOgrade. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
