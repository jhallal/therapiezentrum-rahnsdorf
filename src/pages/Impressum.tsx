import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-4xl font-bold text-primary mb-8">Impressum</h1>
        
        <section className="prose max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            THERAPIEZENTRUM<br />
            Street 222<br />
            0000 Berlin
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456789<br />
            E-Mail: info@therapiezentrum.de
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Dr. Sample Name<br />
            THERAPIEZENTRUM<br />
            Street 222<br />
            0000 Berlin
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            https://ec.europa.eu/consumers/odr
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;