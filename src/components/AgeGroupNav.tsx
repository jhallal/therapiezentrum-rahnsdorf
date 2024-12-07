const AgeGroupNav = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <a
          href="#adults"
          className="group relative overflow-hidden rounded-xl bg-primary hover:bg-primary-light transition-colors duration-300 p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Adults</h2>
          <p className="opacity-90">Specialized care for adult patients</p>
        </a>
        <a
          href="#kids"
          className="group relative overflow-hidden rounded-xl bg-secondary hover:bg-secondary-light transition-colors duration-300 p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Kids</h2>
          <p className="opacity-90">Expert pediatric healthcare services</p>
        </a>
      </div>
    </div>
  );
};

export default AgeGroupNav;