import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import AgeGroupNav from "@/components/AgeGroupNav";
import PracticeSummary from "@/components/PracticeSummary";

const Index = () => {
  const practices = [
    {
      id: "kinderarzt",
      title: "Kinderarztpraxis",
      description: "Specialized pediatric care focusing on the health and development of children from birth through adolescence. Our experienced team provides comprehensive medical services, preventive care, and treatment for various childhood conditions.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "ergo",
      title: "Ergotherapie",
      description: "Our occupational therapy practice helps patients develop, recover, and improve the skills needed for daily living and working. We provide personalized treatment plans to enhance independence and quality of life.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "adhd",
      title: "ADHD Therapist",
      description: "Specialized in diagnosing and treating Attention Deficit Hyperactivity Disorder, our experts provide comprehensive assessment and therapy services for both children and adults struggling with ADHD.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "physio",
      title: "Physiotherapie",
      description: "Our physiotherapy practice offers expert treatment for various physical conditions, helping patients recover from injury, reduce pain, and improve mobility through targeted exercises and manual therapy.",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Banner />
      <AgeGroupNav />
      <div className="bg-gray-50">
        {practices.map((practice) => (
          <PracticeSummary
            key={practice.id}
            {...practice}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;