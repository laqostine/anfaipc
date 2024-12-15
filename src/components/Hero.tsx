import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2340"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Global Supply Chain
            <span className="block mt-2">Excellence & Innovation</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            Delivering comprehensive supply chain solutions with unmatched expertise in chemicals, fertilizers, and industrial trade across international markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors group">
              Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center px-8 py-4 text-sm font-medium text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded transition-all">
              Connect With Us
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '50+', label: 'Countries Served' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;