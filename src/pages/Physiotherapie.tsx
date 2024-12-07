import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Physiotherapie = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="relative bg-gradient-to-r from-primary to-primary-light text-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Physiotherapie
            </h1>
            <p className="text-xl opacity-90 animate-fade-in">
              Professional physiotherapy services for your well-being
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Mandy Haase</h1>
            <div className="relative w-64 h-64 mx-auto mb-8 group">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80"
                alt="Mandy Haase"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-lg" />
            </div>
            <p className="text-xl text-gray-600">Staatlich geprüfte Physiotherapeutin</p>
            <p className="text-xl text-gray-600">Bachelor of Health</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Services Section */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Angebot</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Funktionelles, intelligentes und nachhaltiges Ganzkörpertraining</li>
                <li>Bewegungsanalyse, Körperwahrnehmung und Entspannung</li>
                <li>Ausrichtung des Skeletts mit ökonomischem Muskeleinsatz</li>
                <li>Schulung einer aufrechten Körperhaltung im Alltag, Beruf und in der Freizeit</li>
                <li>Aktivierung der Tiefenmuskulatur inklusive Beckenboden und Zwerchfell</li>
              </ul>
            </div>

            {/* Training Formats Section */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Trainingsformate</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Einzellektionen</li>
                <li>Gruppentraining</li>
                <li>Regelmäßige Präventionskurse „Beckenbodentraining nach der CANTIENICA®-Methode" (von den Krankenkassen bezuschusst)</li>
                <li>Workshops mit variierenden Themen</li>
                <li>Unterricht vor Ort, online über Zoom oder in Kombination</li>
              </ul>
            </div>
          </div>

          {/* CANTIENICA Method Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">CANTIENICA®-Methode für Körperform & Haltung</h2>
            <div className="space-y-4 text-gray-600">
              <p>Die CANTIENICA®-Methode – Ein effektives nachhaltiges Ganzkörpertrainingsprogramm. Sie trainiert Kraft, Beweglichkeit und weckt Energie und Lebensfreude. Durch die Aufspannung der Wirbelsäule und den physiologischen Gebrauch der Tiefenmuskulatur werden die Gelenke entlastet und das Skelett aus- und aufgerichtet. Zentrale Bestandteile sind das Kennenlernen und der funktionelle Gebrauch der tiefen Rücken- und Beckenbodenmuskulatur.</p>
              <p>Das CANTIENICA®-Training bietet eine Vielzahl von anatomisch begründeten Übungen. Die Muskeln werden mit kleinen dreidimensionalen Bewegungen gekräftigt und gedehnt. Viele Übungen können problemlos im Alltag absolviert werden.</p>
              <p>Die CANTIENICA®-Methode bietet die Möglichkeit, die Gelenke und insbesondere die Wirbelsäule optimal auszurichten und die Körperhaltung im Alltag positiv zu verändern. Außerdem findet eine Schulung für das rückenschonende Verhalten statt. So wirkt das CANTIENICA®-Training sicher, effektiv und nachhaltig bei Rückenbeschwerden aller Art, Fehlhaltungen, Beckenschiefstand, Hüftarthrose, Blasenschwäche und Organsenkungen.</p>
              <p>Die CANTIENICA®-Methode wird stetig von Benita Cantieni weiterentwickelt. Weitere Informationen sind unter <a href="http://www.cantienica.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cantienica.com</a> zu finden.</p>
            </div>
          </div>

          {/* Training Times Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Trainingszeiten</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Offenes CANTIENICA®-Training</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-medium">Montag:</span> 09:00-10:00, 16:45-17:45 und 18:15-19:15</li>
                  <li><span className="font-medium">Donnerstag:</span> 17:30-18:30 und 19:00-20:00</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Präventionskurs CANTIENICA®-Beckenbodentraining</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-medium">Mittwoch:</span> 10:00-11:00 und 18:30-19:30</li>
                </ul>
              </div>
              <p className="text-gray-600 italic">Einzellektionen und Probetraining sind nach Absprache möglich.</p>
              <p className="text-gray-600 font-semibold">Ich bitte in jedem Fall dringend um telefonische Terminabsprache!!!</p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Kontaktdaten</h2>
            <div className="text-gray-600 space-y-2">
              <p>Fürstenwalder Allee 36</p>
              <p>12589 Berlin</p>
              <p>Tel.: <a href="tel:+491708088110" className="hover:underline">+491708088110</a></p>
              <p>Mail: <a href="mailto:mandy-haase@t-online.de" className="hover:underline">mandy-haase@t-online.de</a></p>
              <p>Website: <a href="http://www.cantienica-am-mueggelsee.de" target="_blank" rel="noopener noreferrer" className="hover:underline">www.cantienica-am-mueggelsee.de</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Physiotherapie;