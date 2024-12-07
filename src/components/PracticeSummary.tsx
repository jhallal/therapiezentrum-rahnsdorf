interface PracticeSummaryProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const PracticeSummary = ({ id, title, description, imageUrl }: PracticeSummaryProps) => {
  return (
    <div id={id} className="py-16 border-b last:border-b-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={imageUrl}
              alt={`${title} Team`}
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSummary;