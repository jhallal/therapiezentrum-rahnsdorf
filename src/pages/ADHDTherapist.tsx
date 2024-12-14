import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ADHDTherapist = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Successfully subscribed!",
      description: "You will receive our newsletter updates.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      {/* Banner with Background Image - styled like Ergotherapie */}
      <div className="relative bg-gradient-to-r from-primary to-primary-light text-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              ADHD Therapy Center
            </h1>
            <p className="text-xl opacity-90 animate-fade-in">
              Professional ADHD assessment and treatment
            </p>
          </div>
        </div>
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 hidden md:block"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Praxis Name and Logo */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">ADHD Zentrum Berlin</h2>
          <img 
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80" 
            alt="ADHD Zentrum Logo" 
            className="w-32 h-32 mx-auto object-contain"
          />
        </div>

        {/* Modern Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* About Us and Praxis Photo */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">About Us</h3>
            <p className="text-gray-600 mb-8">
              Our specialized ADHD therapy center provides comprehensive assessment and treatment
              for children, adolescents, and adults. With years of experience and a dedicated team,
              we offer personalized care and support for individuals with ADHD.
            </p>
            
            {/* Team Members */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Dr. Sarah Schmidt", role: "Lead Therapist" },
                { name: "Michael Weber", role: "ADHD Specialist" },
                { name: "Lisa Mueller", role: "Child Psychologist" },
                { name: "Thomas Berg", role: "Family Therapist" }
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 transition-transform hover:scale-110"
                  />
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
              alt="Our Praxis"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Modern Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* ADHS Assessment */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">ADHS Assessment</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Einzel</h4>
              <p className="text-gray-600 mb-4">
                Individual assessment and therapy sessions tailored to your specific needs.
              </p>
              <a href="#contact" className="text-primary hover:underline">Learn more →</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Gruppe(n)</h4>
              <p className="text-gray-600 mb-4">
                Group therapy sessions fostering peer support and shared experiences.
              </p>
              <a href="#contact" className="text-primary hover:underline">Learn more →</a>
            </div>
          </div>
        </div>

        {/* Modern Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* Paare Therapie */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">Paare Therapie</h3>
          <p className="text-gray-600 mb-4">
            Specialized therapy sessions for couples where one or both partners have ADHD.
            We focus on improving communication and understanding.
          </p>
          <a href="#contact" className="text-primary hover:underline">Learn more about couples therapy →</a>
        </div>

        {/* Modern Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* FortBildung */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">FortBildung</h3>
            <p className="text-gray-600 mb-4">
              We offer continuous education and training programs for professionals
              in the field of ADHD therapy and assessment.
            </p>
            <a href="#contact" className="text-primary hover:underline">Contact us for training opportunities →</a>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80"
              alt="Praxis Leader"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Modern Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* More About Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">More About Us</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Our Approach</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Evidence-based treatment methods</li>
                <li>Personalized therapy plans</li>
                <li>Regular progress assessment</li>
                <li>Family-inclusive approach</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Facilities</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Modern therapy rooms</li>
                <li>Comfortable waiting area</li>
                <li>Child-friendly environment</li>
                <li>Central location</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modern Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* Newsletter Subscription */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-primary mb-6">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news, research, and events from our ADHD center.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="text-white">Subscribe</Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ADHDTherapist;
