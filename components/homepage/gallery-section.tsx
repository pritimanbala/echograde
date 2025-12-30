export function GallerySection() {
  const images = [
    { id: 1, alt: "Environmental work in nature", query: "person working in nature environmental conservation" },
    { id: 2, alt: "Wildlife protection", query: "wildlife in natural habitat forest ecosystem" },
    { id: 3, alt: "Community conservation", query: "people working together in environmental project" },
    { id: 4, alt: "Nature restoration", query: "restored natural landscape with plants and water" },
  ]

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div key={img.id} className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
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
  )
}
