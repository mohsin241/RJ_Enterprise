import themax from "../../assets/Thermax.png";
import dbs from "../../assets/DBS.png";
import zeeco from "../../assets/Zeeco.png";
const testimonials = [
  {
    text: "R J Enterprise has been a reliable partner, consistently supplying steel products that meet the rigorous demands of our industrial projects. Their professionalism and commitment to quality are commendable.",
    name: "Thermax Ltd",
    title: "Global Energy & Environment Solutions",
    rating: 5,
    url: "https://www.thermaxglobal.com/",
    logo: themax
  },
  {
    text: "We appreciate R J Enterprise’s support in delivering precision-grade steel components for our infrastructure and engineering projects. Their team is responsive and understands the needs of modern engineering firms.",
    name: "DBS Engineering Services",
    title: "Specialists in Structural Engineering",
    rating: 4.5,
    url: "https://www.dbsengineeringservices.in/",
    logo: dbs
  },
  {
    text: "For our combustion and environmental systems, quality materials are non-negotiable. R J Enterprise provides the consistency and documentation we require to meet global standards.",
    name: "Zeeco Inc",
    title: "Global Leader in Combustion Solutions",
    rating: 5,
    url: "https://www.zeeco.com/",
    logo: zeeco
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-condensed font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Read testimonials from our satisfied clients across various industries who rely on our premium steel products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between h-full transition duration-300 hover:shadow-2xl"
            >
              <div className="flex mb-4">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <span key={i} className="material-icons text-yellow-500">star</span>
                ))}
                {testimonial.rating % 1 === 0.5 && (
                  <span className="material-icons text-yellow-500">star_half</span>
                )}
              </div>

              <p className="text-neutral-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.name} logo`}
                  className="w-14 h-14 object-contain rounded bg-white p-1 mr-4 border"
                />
                <div>
                  <h4 className="font-bold text-neutral-800">
                    <a
                      href={testimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-primary-dark"
                    >
                      {testimonial.name}
                    </a>
                  </h4>
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
