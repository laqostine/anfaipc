import React from 'react';
import { TestTube2, Sprout } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, image, url }: {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  url: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-lg transform transition-transform hover:-translate-y-1"
  >
    <div className="absolute inset-0">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
    </div>
    <div className="relative p-8 h-full flex flex-col justify-end min-h-[400px]">
      <div className="mb-4">
        <Icon className="h-8 w-8 text-blue-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
        Visit Website →
      </span>
    </div>
  </a>
);

const Services = () => {
  const services = [
    {
      icon: TestTube2,
      title: 'AnfaChem',
      description: 'Premium chemical products and solutions for industrial applications, ensuring quality and compliance across global markets.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2340',
      url: 'https://anfachem.com'
    },
    {
      icon: Sprout,
      title: 'AnfaFert',
      description: 'Comprehensive fertilizer solutions supporting agricultural excellence and sustainable farming practices worldwide.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2340',
      url: 'https://anfafert.com'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Delivering excellence through specialized divisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;