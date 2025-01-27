import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Therapiezentrum Rahnsdorf</h3>
            <address className="not-italic">
              Waldschützpfad 21<br />
              12589 Berlin
            </address>
          </div>
          <div className="flex md:justify-end items-start">
            <Link to="/impressum" className="hover:text-secondary transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;