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
      description: "Spezialisierte Kinderheilkunde mit Fokus auf die Gesundheit und Entwicklung von Kindern von der Geburt bis ins Jugendalter. Unser erfahrenes Team bietet umfassende medizinische Dienstleistungen, Vorsorgeuntersuchungen und Behandlungen für verschiedene Kinderkrankheiten an.",
      imageUrl: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80"
    },
    {
      id: "ergo",
      title: "Ergotherapie",
      description: "Unsere Ergotherapie-Praxis hilft Patienten, die Fähigkeiten zu entwickeln, wiederzuerlangen und zu verbessern, die für das tägliche Leben und Arbeiten erforderlich sind. Wir bieten individuelle Behandlungspläne an, um die Unabhängigkeit und Lebensqualität zu fördern.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
    },
    {
      id: "neuroperspektiven",
      title: "Neuro Perspektiven",
      description: "Spezialisiert auf die Diagnose und Behandlung von Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) bieten unsere Experten umfassende Diagnostik- und Therapiemöglichkeiten für Kinder und Erwachsene, die mit ADHS zu kämpfen haben.",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
    },
    {
      id: "physio",
      title: "Raum Für Haltung, Bewegung Und Balance",
      description: "Unsere Physiotherapie-Praxis bietet fachkundige Behandlung für verschiedene körperliche Beschwerden und unterstützt Patienten dabei, sich von Verletzungen zu erholen, Schmerzen zu lindern und die Mobilität durch gezielte Übungen und manuelle Therapie zu verbessern.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
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