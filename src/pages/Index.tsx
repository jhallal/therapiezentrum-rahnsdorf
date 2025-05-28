import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import AgeGroupNav from "@/components/AgeGroupNav";
import PracticeSummary from "@/components/PracticeSummary";
import Footer from "@/components/Footer";

const Index = () => {
  const practices = [
    {
      id: "kinderarzt",
      title: "Kinderarztpraxis Dr. Busse",
      description: "Fachärztin für Kinder- und Jugendmedizin. Psychotherapeutin (tiefenpsychologisch fundiert).",
      imageUrl: "/images/dr.busse-praxis.jpg"
    },
    {
      id: "ergotherapie",
      title: "Ergotherapie Busse",
      description: "Staatlich anerkannte Ergotherapeutin.",
      imageUrl: "/images/ergotherapie-busse.jpg"
    },
    {
      id: "neuroperspektiven",
      title: "Neuro Perspektiven",
      description: "Spezialisiert auf die Diagnose und Behandlung von Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) bieten unsere Experten umfassende Diagnostik- und Therapiemöglichkeiten für Kinder und Erwachsene, die mit ADHS zu kämpfen haben.",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
    },
    {
      id: "physiotherapie",
      title: "Raum Für Haltung, Bewegung Und Balance",
      description: "Staatlich geprüfte Physiotherapeutin",
      imageUrl: "/images/Raum Für Haltung, Bewegung Und Balance.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <Banner />
      <AgeGroupNav />
      <div className="bg-gray-50 flex-grow">
        {practices.map((practice) => (
          <PracticeSummary
            key={practice.id}
            {...practice}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;