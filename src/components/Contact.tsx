import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }: {
  icon: React.ElementType;
  title: string;
  content: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our specialized divisions for specific inquiries
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <div className="text-center mb-8">
              <p className="text-gray-600">
                For chemical products and solutions, visit{' '}
                <a href="https://anfachem.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  AnfaChem.com
                </a>
              </p>
              <p className="text-gray-600">
                For fertilizer products and agricultural solutions, visit{' '}
                <a href="https://anfafert.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  AnfaFert.com
                </a>
              </p>
            </div>
            
            <div className="space-y-6">
              <ContactInfo
                icon={Mail}
                title="Email"
                content="o.lassri@anfaipc.com"
              />
              <ContactInfo
                icon={Phone}
                title="Phone"
                content="+212 661 32 10 93"
              />
              <ContactInfo
                icon={MapPin}
                title="Address"
                content="Mokawama Center, Bd la Résistance, 7. Kat No: 26 - FONCIERE, Casablanca, 20500, Morocco"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;