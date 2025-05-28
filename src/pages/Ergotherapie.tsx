import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Ergotherapie = () => {
  const teamMembers = [
    {
      name: "Katharina Hallal",
      role: "Ergotherapeutin",
      location: "Praxis Rahnsdorf",
      image: "/images/katharina-hallal-ergotherapeutin.jpg"
    },
    {
      name: "Roman Koppe",
      role: "Ergotherapeut",
      location: "Praxis Friedrichshagen",
      image: "/images/roman-koppe.jpg"
    },
    {
      name: "Katharina Karsten",
      role: "Ergotherapeutin",
      location: "Praxis Friedrichshagen",
      image: "/images/katharina-karsten.jpg"
    },
    {
      name: "Bianca Klavehn",
      role: "Ergotherapeutin",
      location: "Praxis Rahnsdorf & Friedrichshagen",
      image: ""
    }
    ,
    {
      name: "Agnes Equit",
      role: "Bürofachkraft",
      location: "Praxis Rahnsdorf",
      image: ""
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="relative bg-gradient-to-r from-primary to-primary-light text-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Ergotherapie Busse
            </h1>
            <p className="text-xl opacity-90 animate-fade-in">
              Ergotherapeutische Leistungen für Kinder und Erwachsene
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 hidden md:block"
          style={{
            backgroundImage: "url('/images/ergotherapie-busse-2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Katharina Hallal</h1>
            <div className="w-80 h-80 mx-auto mb-5 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/images/katharina-hallal.jpg"
                alt="Ergotherapeutin Katharina Hallal"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="space-y-2">
              <p className="text-xl text-gray-600">Staatlich geprüfte Ergotherapeutin</p>
              <p className="text-xl text-gray-600">Bachelor of Arts (Medizinalfachberufe)</p>
              <p className="text-xl text-gray-600">Studentin der Psychotherapiewissenschaften</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-8">Angebot</h2>
            <h3 className="text-xl font-semibold mt-8"></h3>
            <ul className="grid md:grid-cols-1 gap-4 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Videounterstützte Problemanalysen sowie Lern- und Verhaltenstrainings (<a target="_blank" href="http://www.intraactplus.de" className="hover:underline">nach dem IntraActPlus-Konzept</a>) bei:</span>
              </li>
            </ul>
            <ul className="list-disc list-inside pl-5 pb-5 pt-3 space-y-2 text-gray-700">
              <li>Lern- und Leistungsstörungen</li>
              <li>Teilleistungsstörungen (Lese-Rechtschreibstörung / Dyskalkulie)</li>
              <li>Aufmerksamkeitsstörungen (ADS/ADHS)</li>
              <li>Verhaltensproblemen</li>
            </ul>
            <ul className="grid md:grid-cols-1 gap-4 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Soziales Kompetenztraining</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Neurofeedback</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Behandlung von Neurologischen Störungen</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Behandlung von Entwicklungsstörungen und -verzögerungen</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Sensorische Integrationstherapie</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Handtherapie</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Hörtraining nach Benaudira</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Hirnleistungstraining</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Hausbesuche</span>
              </li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Unser Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex items-center space-x-4">
                  <div className="group">
                    <Avatar className="w-32 h-32 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Kontaktdaten</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Praxis Rahnsdorf</h3>
                    <p>Waldschützpfad 21</p>
                    <p>12589 Berlin</p>
                    <p>Tel.: <a href="tel:+493064091134" className="hover:underline">+493064091134</a></p>
                    <p>Fax: +493053149490</p>
                    <p>Mail: <a href="mailto:ergotherapiepraxisbusse@gmail.com" className="hover:underline">ergotherapiepraxisbusse@gmail.com</a></p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Praxis Friedrichshagen</h3>
                    <p>Müggelseedamm 221</p>
                    <p>12587 Berlin</p>
                    <p>Tel.: <a href="tel:+493012349938" className="hover:underline">+493012349938</a></p>
                    <p>Fax: +493070801627</p>
                    <p>Mail: <a href="mailto:ergotherapiepraxisbusse@gmail.com" className="hover:underline">ergotherapiepraxisbusse@gmail.com</a></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ergotherapie;