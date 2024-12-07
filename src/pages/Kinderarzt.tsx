import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Kinderarzt = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-8">Kinderarztpraxis</h1>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed mb-6">
                Specialized pediatric care focusing on the health and development of children from birth through adolescence. 
                Our experienced team provides comprehensive medical services, preventive care, and treatment for various childhood conditions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Regular check-ups and vaccinations</li>
                <li>Treatment of acute and chronic illnesses</li>
                <li>Development monitoring</li>
                <li>Nutritional counseling</li>
                <li>Emergency care during office hours</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="w-80 h-80 mx-auto overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80"
                  alt="Kinderarztpraxis Team"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kinderarzt;