const testimonials = [
  {
    text: "R J Enterprise has been our trusted steel supplier for over 5 years. Their consistent quality and on-time delivery have been crucial for our construction projects. Highly recommended!",
    name: "Rajesh Sharma",
    title: "Construction Manager, Buildtech Ltd",
    rating: 5
  },
  {
    text: "The quality of steel plates we receive from R J Enterprise consistently meets our stringent requirements for our manufacturing processes. Their technical team provides excellent support.",
    name: "Vikram Patel",
    title: "Procurement Director, AutoParts Inc",
    rating: 5
  },
  {
    text: "As a supplier for oil & gas projects, we need materials that meet exact specifications. R J Enterprise delivers consistently high-quality steel products with proper certification and documentation.",
    name: "Sunita Mehta",
    title: "Supply Chain Manager, EnergyTech Solutions",
    rating: 4.5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-condensed font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Read testimonials from our satisfied clients across various industries who rely on our premium steel products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 transition duration-300 hover:shadow-2xl">
              <div className="flex mb-4">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <span key={i} className="material-icons text-secondary">star</span>
                ))}
                {testimonial.rating % 1 === 0.5 && (
                  <span className="material-icons text-secondary">star_half</span>
                )}
              </div>
              <p className="text-neutral-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center mr-4">
                  <span className="material-icons text-neutral-500">person</span>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
