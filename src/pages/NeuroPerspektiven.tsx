import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NeuroPerspektiven = () => {
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

      {/* Banner with Background Image */}
      <div className="relative bg-gradient-to-r from-primary to-primary-light text-white py-32 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Neuro Perspektiven
            </h1>
            <p className="text-xl opacity-90 animate-fade-in">
              Professionelle ADHS-Diagnostik und -Behandlung
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-20"
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
          <h2 className="text-3xl font-bold text-primary mb-8">Marianne Jouanneaux</h2>
          <img
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80"
            alt="Neuro Perspektiven Logo"
            className="w-32 h-32 mx-auto object-contain"
          />
        </div>

        {/* Modern Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* About Us and Praxis Photo */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Über Uns</h3>
            <p className="text-gray-600 mb-8">
              Unser spezialisiertes ADHS-Therapiezentrum bietet umfassende Diagnostik und Behandlung für Kinder, Jugendliche und Erwachsene. Mit langjähriger Erfahrung und einem engagierten Team bieten wir individuelle Betreuung und Unterstützung für Menschen mit ADHS.
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
          <h3 className="text-2xl font-semibold text-primary mb-6">ADHS Assessment bei Frauen</h3>
          <div>
            <p className="text-gray-600 mb-4">Entdecken Sie, wie ein ADHS Assessment speziell für Frauen Ihnen helfen kann.</p>
            <a className="text-primary hover:underline" target="_blank" href="https://myablefy.com/s/mariannejouanneaux/assessment-ad-h-s/payment?fbclid=PAY2xjawG9HlxleHRuA2FlbQIxMAABpi_6bJxoGqHb3fYRyaB-y_ZQ1XUJ_MS2_dmcP1w25qoOH2e-u_JA8r9FfA_aem_cIO7150WZD9LuTfdChE54A">Klicken Sie hier, um jetzt einen Termin zu vereinbaren →</a>
          </div>
        </div>
        {/* ADHS Assessment Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* ADHS Assessment */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">Therapie/ Beratung für weiblich sozialisierte Erwachsene mit ADHS
            Ergotherapie und Coaching
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Einzel</h4>
              <p className="text-gray-600 mb-4">
                Individuelle Assessments und Therapiesitzungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.
              </p>
              <a target="_blank" href="https://myablefy.com/s/mariannejouanneaux/coaching-beratungsgespraech-1?fbclid=PAY2xjawG9HsBleHRuA2FlbQIxMAABpqIqGGSt3Ktc8sFrjISaaBB1TvUjF6N2x8xMYKOTA6_BW2R1cce0zz3L-w_aem_5Ib2VQuYIcEvF9zgm8hZVQ" className="text-primary hover:underline">Termin vereinbaren →</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Gruppe(n)</h4>
              <p className="text-gray-600 mb-4">
                Gruppentherapiesitzungen, die gegenseitige Unterstützung und gemeinsame Erfahrungen fördern.
              </p>
              <a target="_blank" href="https://myablefy.com/s/mariannejouanneaux/lebedeineeinzigartigkeit?fbclid=PAY2xjawG9HttleHRuA2FlbQIxMAABpqELda9ybCQet3Qv17ZRw7hjQ1pvOsg1fWRac_NhHjptFRJNVvhBSKDwFg_aem_DPQJrRDn0hxf-Pd3V7ANGA" className="text-primary hover:underline">Termin vereinbaren →</a>
            </div>
          </div>
        </div>

        {/* Modern Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* Paare Therapie */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">Therapie/Beratung für Paare mit ADHS</h3>
          <p className="text-gray-600 mb-4">
            Spezialisierte Therapiesitzungen für Paare, bei denen ein oder beide Partner ADHS haben. Wir konzentrieren uns darauf, Kommunikation und Verständnis zu verbessern.
          </p>
          <a target="_blank" href="https://myablefy.com/s/mariannejouanneaux/paartherapie-fuer-menschen-die-nicht-neuro-typisch-sind-9d993bac?fbclid=PAY2xjawG9HyRleHRuA2FlbQIxMAABpnLn6ZUFUylcRVnWgRO0Ocmx6rxrNOt4GsPsSoQpeZ9Vx3_VKuBCmly8og_aem_chxCQPR_t4fIbou7Gf_myg" className="text-primary hover:underline">Termin vereinbaren →</a>
        </div>

        {/* Modern Section Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto my-16 rounded-full" />

        {/* FortBildung */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Fortbildung  “Trainer:in bei ADHS im Erwachsenenalter</h3>
            <p className="text-gray-600 mb-4">
              Wir bieten kontinuierliche Weiterbildungs- und Schulungsprogramme für Fachleute im Bereich der ADHS-Therapie und -Diagnostik an.
            </p>
            <a target="_blank" href="https://www.schoresch-ausbildung.com/details-registrierung/adhs-weiterbildung-per-zoom-22-02-25-und-23-02-25" className="text-primary hover:underline">Tickets kaufen →</a>
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

export default NeuroPerspektiven;
