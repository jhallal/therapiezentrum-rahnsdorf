import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Ergotherapie = () => {
  const teamMembers = [
    {
      name: "Sarah Schmidt",
      role: "Ergotherapeutin",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Michael Weber",
      role: "Ergotherapeut",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    },
    {
      name: "Lisa Müller",
      role: "Ergotherapeutin",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    },
    {
      name: "Thomas Klein",
      role: "Ergotherapeut",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="relative bg-gradient-to-r from-primary to-primary-light text-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Ergotherapie
            </h1>
            <p className="text-xl opacity-90 animate-fade-in">
              Professional ergotherapy services for your well-being
            </p>
          </div>
        </div>
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-full opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Anna Wagner</h1>
            <div className="relative md:w-1/2 h-80 mx-auto mb-8 group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Anna Wagner"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-lg" />
            </div>
            <div className="space-y-2">
              <p className="text-xl text-gray-600">Staatlich anerkannte Ergotherapeutin</p>
              <p className="text-xl text-gray-600">Master of Science in Occupational Therapy</p>
              <p className="text-xl text-gray-600">Zertifizierte Handtherapeutin</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6">Angebot</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Motorisch-funktionelle Behandlung</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Sensomotorisch-perzeptive Behandlung</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Neuropsychologisch orientierte Behandlung</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Psychisch-funktionelle Behandlung</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Handtherapie</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Hilfsmittelversorgung und -beratung</span>
              </li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Unser Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center space-y-3">
                  <div className="group">
                    <Avatar className="w-32 h-32 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-primary">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Kontaktdaten</h2>
            <div className="text-gray-600 space-y-2">
              <p>Streetname Allee 36</p>
              <p>10000 Berlin</p>
              <p>Tel.: <a href="tel:+491700000000" className="hover:text-primary transition-colors">+491700000000</a></p>
              <p>Mail: <a href="mailto:info@ergotherapiesite-berlin.de" className="hover:text-primary transition-colors">info@ergotherapiesite-berlin.de</a></p>
              <p>Website: <a href="http://www.ergotherapiesite-berlin.de" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.ergotherapiesite-berlin.de</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ergotherapie;