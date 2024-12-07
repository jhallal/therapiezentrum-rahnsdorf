import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Physiotherapie = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-8">Physiotherapie</h1>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed mb-6">
                Our physiotherapy practice offers expert treatment for various physical conditions, helping patients recover 
                from injury, reduce pain, and improve mobility through targeted exercises and manual therapy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our treatments include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Manual therapy</li>
                <li>Exercise therapy</li>
                <li>Sports rehabilitation</li>
                <li>Pain management</li>
                <li>Post-operative rehabilitation</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="w-80 h-80 mx-auto overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                  alt="Physiotherapie Team"
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

export default Physiotherapie;