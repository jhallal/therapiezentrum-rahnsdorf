import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Ergotherapie = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-8">Ergotherapie</h1>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed mb-6">
                Our occupational therapy practice helps patients develop, recover, and improve the skills needed for daily living and working. 
                We provide personalized treatment plans to enhance independence and quality of life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Fine motor skills development</li>
                <li>Sensory integration therapy</li>
                <li>Cognitive rehabilitation</li>
                <li>Adaptive equipment training</li>
                <li>Daily living skills training</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="w-80 h-80 mx-auto overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                  alt="Ergotherapie Team"
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

export default Ergotherapie;