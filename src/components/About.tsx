import React from 'react';
import { Target, Users2, Globe2 } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Global Offices', value: '12+' },
    { label: 'Team Members', value: '80+' },
    { label: 'Annual Revenue', value: '$50M+' },
    { label: 'Partner Network', value: '60+' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize global trade through innovative solutions and sustainable practices.'
    },
    {
      icon: Users2,
      title: 'Our Vision',
      description: 'Becoming the world\'s most trusted partner in international supply chain management.'
    },
    {
      icon: Globe2,
      title: 'Global Network',
      description: 'Leveraging our worldwide presence to deliver seamless solutions across continents.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Setting the Standard in Global Trade
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With decades of experience in international markets, AnfaIPC has established itself as a leader in global supply chain solutions. Our commitment to excellence and innovation drives us to deliver exceptional value to our partners worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2340"
              alt="Global Operations"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-50 rounded-lg -z-10" />
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <img
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2340"
            alt="Industrial Facility"
            className="rounded-lg shadow-lg h-64 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340"
            alt="Global Shipping"
            className="rounded-lg shadow-lg h-64 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2340"
            alt="Business Meeting"
            className="rounded-lg shadow-lg h-64 w-full object-cover"
          />
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-gray-50 p-8 rounded-lg">
              <value.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;