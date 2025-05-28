import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AgeGroupNav = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="group relative overflow-hidden rounded-xl bg-primary hover:bg-primary-light transition-colors duration-300 p-12 text-center text-white w-full h-auto flex flex-col items-center"
            >
              <h2 className="text-3xl font-bold">Erwachsene</h2>
              {/* <p className="text-sm mt-4 opacity-90">Spezialisierte Betreuung erwachsener Patienten</p> */}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <nav className="py-4">
              <ul className="space-y-4">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary before:rounded-full hover:before:bg-primary-light transition-colors">
                  <a href="/kinderarztpraxis" className="text-primary hover:text-primary-light block transition-colors">1. Private Psychotherapie (tiefenpsychologisch orientiert)</a>
                </li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary before:rounded-full hover:before:bg-primary-light transition-colors">
                  <a href="/raum-fur-haltung-bewegung-und-balance" className="text-primary hover:text-primary-light block transition-colors">2. Private Physiotherapie</a>
                </li>
                <li className="space-y-2">
                  <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary before:rounded-full hover:before:bg-primary-light transition-colors">
                    3. AD(H)S
                  </div>
                  <ul className="pl-6 space-y-2">
                    <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary-light before:rounded-full hover:before:bg-primary transition-colors">
                      <a href="/neuroperspektiven" className="text-primary hover:text-primary-light block transition-colors">3.1 Online Testung/ weiblich sozialisierte Personen</a>
                    </li>
                    <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary-light before:rounded-full hover:before:bg-primary transition-colors">
                      <a href="/ergotherapiebusse" className="text-primary hover:text-primary-light block transition-colors">3.2 Testung vor Ort</a>
                    </li>
                  </ul>
                </li>
                <li className="space-y-2">
                  <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary before:rounded-full hover:before:bg-primary-light transition-colors">
                    4. Ergotherapie
                  </div>
                  <ul className="pl-6 space-y-2">
                    <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary-light before:rounded-full hover:before:bg-primary transition-colors">
                      <a href="/neuroperspektiven" className="text-primary hover:text-primary-light block transition-colors">4.1 Therapiezentrum Jouanneaux (Marianne Jouanneaux)</a>
                    </li>
                    <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary-light before:rounded-full hover:before:bg-primary transition-colors">
                      <a href="/ergotherapiebusse" className="text-primary hover:text-primary-light block transition-colors">4.2 Ergotherapiepraxis Busse (Katharina Hallal)</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="group relative overflow-hidden rounded-xl bg-secondary hover:bg-secondary-light transition-colors duration-300 p-12 text-center text-white w-full h-auto flex flex-col items-center"
            >
              <h2 className="text-3xl font-bold">Kinder</h2>
              {/* <p className="text-sm mt-4 opacity-90">Kompetente pädiatrische Gesundheitsdienstleistungen</p> */}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <nav className="py-4">
              <ul className="space-y-4">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary before:rounded-full hover:before:bg-primary-light transition-colors">
                  <a href="/kinderarztpraxis" className="text-primary hover:text-primary-light block transition-colors">1. Kinderaerztliche Leistungen</a>
                </li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-primary before:rounded-full hover:before:bg-primary-light transition-colors">
                  <a href="/ergotherapiebusse" className="text-primary hover:text-primary-light block transition-colors">2. Ergotherapie</a>
                </li>
              </ul>
            </nav>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AgeGroupNav;
