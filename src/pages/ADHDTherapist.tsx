import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ADHDTherapist = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-8">ADHD Therapist</h1>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed mb-6">
                Specialized in diagnosing and treating Attention Deficit Hyperactivity Disorder, our experts provide comprehensive 
                assessment and therapy services for both children and adults struggling with ADHD.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>ADHD assessment and diagnosis</li>
                <li>Behavioral therapy</li>
                <li>Parent training and education</li>
                <li>School consultation</li>
                <li>Coping strategies development</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="w-80 h-80 mx-auto overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
                  alt="ADHD Therapy Team"
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

export default ADHDTherapist;