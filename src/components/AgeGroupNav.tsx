import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AgeGroupNav = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="group relative overflow-hidden rounded-xl bg-primary hover:bg-primary-light transition-colors duration-300 p-12 text-center text-white w-full h-auto"
            >
              <h2 className="text-3xl font-bold mb-4">Adults</h2>
              <p className="opacity-90">Specialized care for adult patients</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <nav className="py-4">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">1. Private Psychotherapie (tiefenpsychologisch orientiert)</a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">2. Private Physiotherapie</a>
                </li>
                <li className="space-y-2">
                  <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">3. AD(H)S</a>
                  <ul className="pl-6 space-y-2">
                    <li>
                      <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">3.1 Online Testung/ weiblich sozialisierte Personen</a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">3.2 Testung vor Ort</a>
                    </li>
                  </ul>
                </li>
                <li className="space-y-2">
                  <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">4. Ergotherapie</a>
                  <ul className="pl-6 space-y-2">
                    <li>
                      <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">4.1 Therpiezentrum Jouanneaux (Marianne Jouanneaux)</a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">4.2 Ergotherapiepraxis Busse (Katharina Hallal)</a>
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
              className="group relative overflow-hidden rounded-xl bg-secondary hover:bg-secondary-light transition-colors duration-300 p-12 text-center text-white w-full h-auto"
            >
              <h2 className="text-3xl font-bold mb-4">Kids</h2>
              <p className="opacity-90">Expert pediatric healthcare services</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <nav className="py-4">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">1. Kinderaerztliche Leistungen</a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:text-primary-light whitespace-nowrap">2. Ergotherapie</a>
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