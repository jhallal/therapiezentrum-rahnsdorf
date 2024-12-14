const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light text-white py-32 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Welcome to Therapiezentrum Rahnsdorf
          </h1>
          <p className="text-xl opacity-90 animate-fade-in">
            Comprehensive healthcare solutions for your entire family
          </p>
        </div>
      </div>
      <div 
        className="absolute bottom-0 right-0 w-1/3 h-full opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};

export default Banner;
