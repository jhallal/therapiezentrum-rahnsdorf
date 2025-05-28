import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Kinderarztpraxis = () => {
  const openingHours = [
    { day: "Montag", hours: "08:00-12:00 und 14:00-17:00" },
    { day: "Dienstag", hours: "08:00-13:00" },
    { day: "Mittwoch", hours: "08:00-13:00" },
    { day: "Donnerstag", hours: "13:00-18:00" },
    { day: "Freitag", hours: "08:00-12:00" },
  ];

  const teamMembers = [
    {
      name: "Dr. med. Cornelia Busse",
      role: "Fachärztin für Kinder- und Jugendmedizin Tiefenpsychologisch fundierte Psychotherapeutin",
      imageUrl: "/images/dr-med-cornelia-busse.jpg"
    },
    {
      name: "Mandy Black",
      role: "Medizinische Fachangestellte",
      imageUrl: "/images/mandy-black.jpg"
    },
    {
      name: "Anne Heldt",
      role: "Pflegefachkraft",
      imageUrl: "/images/anne-heldt.jpg"
    },
    {
      name: "Catharina Pietsch",
      role: "Medizinische Fachangestellte",
      imageUrl: "/images/catharina-pietsch.jpg"
    },
    {
      name: "Lea Hirschmüller",
      role: "Auszubildende",
      imageUrl: "/images/lea-hirschmüller.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <div className="relative bg-gradient-to-r from-primary to-primary-light text-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Kinderarztpraxis Dr. Busse
            </h1>
            <p className="text-xl opacity-90 animate-fade-in">
              Fachärztin für Kinder- und Jugendmedizin
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 hidden md:block"
          style={{
            backgroundImage: "url('/images/furstenwalder-allee-266.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="animate-fade-in">
          {/* Header Section - styled like Ergotherapie */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Dr. med. Cornelia Busse</h1>
            <div className="w-80 h-80 mx-auto mb-5 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/images/Dr. med. Cornelia Busse.jpg"
                alt="Dr. med. Cornelia Busse"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="space-y-2">
              <p className="text-xl text-gray-600">Fachärztin für Kinder- und Jugendmedizin</p>
              <p className="text-xl text-gray-600">Tiefenpsychologisch fundierte Psychotherapeutin</p>
            </div>
          </div>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Angebot</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-6">
                <h3 className="text-xl font-semibold">Diagnostik und Therapie bei:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Akuten Erkrankungen im Kindes- und Jugendalter (z.B.: EKG, Lungenfunktion, Hör- und Sehtest, Laboruntersuchungen, Tympanometrie, Ultraschalldiagnostik der Hüften)</li>
                  <li>Chronischen Erkrankungen im Kindes- und Jugendalter</li>
                  <li>Psychotherapie (tiefenpsychologisch fundiert) bei Jugendlichen bis 18 Jahre</li>
                  <li>Vorsorgeuntersuchungen im Kindes- und Jugendalter (U2-J2)</li>
                  <li>Impfungen</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8">IGel (Individuelle Gesundheitsleistungen, privat zu zahlen):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Reiseimpfungen</li>
                  <li>Tiefenpsychologisch fundierte Psychotherapie für Erwachsene</li>
                  <li>Vorträge und Coaching</li>
                  <li>Sehtest (Plusoptix)</li>
                </ul>
              </div>
              <div className="flex-shrink-0 w-full md:w-[300px]">
                <img
                  src="/images/kinderarztpraxis-angebot.jpg"
                  alt="Angebot"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>


          {/* Opening Hours Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Öffnungszeiten</h2>
            <Card>
              <CardContent className="p-6">
                <div className="max-w-md mx-auto">
                  {openingHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-left py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-primary min-w-[120px]">{item.day}</span>
                      <span className="text-gray-600">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-gray-700 italic">
                  Wir bitten in jedem Fall dringend um telefonische Terminabsprache. Bei akuter Erkrankung Ihres Kindes rufen Sie bitte direkt zu Beginn unserer Sprechstunde an, damit wir schnellstmöglich einen Termin für Sie finden können.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Team</h2>
            <div className="md:w-1/2 h-80 mx-auto mb-10 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/images/kinderarztpraxis-team.jpg"
                alt="Dr. med. Cornelia Busse"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Avatar className="h-32 w-32 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                    <AvatarImage src={member.imageUrl} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Kontaktdaten</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>Fürstenwalder Allee 266</p>
                    <p>12589 Berlin</p>
                    <p>Tel.: <a href="tel:+49306458903" className="hover:underline">+49306458903</a></p>
                    <p>Fax: +493064091145</p>
                    <p>Mail: <a href="mailto:kinderarztpraxis@therapiezentrum-rahnsdorf.de" className="hover:underline">kinderarztpraxis@therapiezentrum-rahnsdorf.de</a></p>
                    <p className="font-bold mt-4">Wir bitten in jedem Fall dringend um telefonische Terminabsprache!!!</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Im Notfall</h3>
                  <div className="space-y-4">
                    <p>Dr. med. Cornelia Busse (mobil): <a href="tel:+491749908068" className="hover:underline">+491749908068</a></p>
                    <p>Kassenärztlicher Notdienst: 116117</p>

                    <div className="mt-6">
                      <p className="font-semibold">Klinik für Kinder-und Jugendmedizin Sanaklinikum</p>
                      <p>Fanningerstraße 32, 10365 Berlin</p>
                      <p>Tel.: <a href="tel:+493055185104" className="hover:underline">+493055185104</a></p>
                    </div>

                    <div className="mt-6">
                      <p className="font-semibold">DRK Krankenhaus Köpenick</p>
                      <p>Salvador-Allende-Straße 2-8</p>
                      <p>Rettungsstelle</p>
                      <p>12555 Berlin</p>
                      <p>Tel.: <a href="tel:+493030353100" className="hover:underline">+493030353100</a></p>
                    </div>

                    <div className="mt-6">
                      <p className="font-semibold">Berliner Krisendienst (für psychische Notfälle)</p>
                      <p><a href="tel:+49303906380" className="hover:underline">+49303906380</a></p>
                    </div>
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

export default Kinderarztpraxis;