import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import AgeGroupNav from "@/components/AgeGroupNav";
import PracticeSummary from "@/components/PracticeSummary";
import Footer from "@/components/Footer";

const Index = () => {
  const practices = [
    {
      id: "kinderarzt",
      title: "Kinderarztpraxis",
      description: "Specialized pediatric care focusing on the health and development of children from birth through adolescence. Our experienced team provides comprehensive medical services, preventive care, and treatment for various childhood conditions.",
      imageUrl: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80"
    },
    {
      id: "ergo",
      title: "Ergotherapie",
      description: "Our occupational therapy practice helps patients develop, recover, and improve the skills needed for daily living and working. We provide personalized treatment plans to enhance independence and quality of life.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
    },
    {
      id: "neuroperspektiven",
      title: "Neuro Perspektiven",
      description: "Specialized in diagnosing and treating Attention Deficit Hyperactivity Disorder, our experts provide comprehensive assessment and therapy services for both children and adults struggling with ADHD.",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
    },
    {
      id: "physio",
      title: "Physiotherapie",
      description: "Our physiotherapy practice offers expert treatment for various physical conditions, helping patients recover from injury, reduce pain, and improve mobility through targeted exercises and manual therapy.",
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