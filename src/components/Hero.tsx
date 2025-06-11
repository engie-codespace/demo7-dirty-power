import React from 'react';
import { Link } from 'react-router-dom';
import ChatbotWidget from './ChatbotWidget';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted energy provider for residential and business customers
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              We offer reliable energy solutions with transparent rates
              and exceptional customer service for over 25 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/energy-types" 
                className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Discover our energy sources
              </Link>
              <Link 
                to="/offers" 
                className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
              >
                View our offers
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-80 flex gap-6">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg shadow-lg flex items-center justify-center p-8 z-10">
                <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-start">
                  <div className="text-center flex-1 min-w-[220px]">
                    <h3 className="text-2xl font-bold text-primary mb-4">Find the best offer for you</h3>
                    <p className="text-gray-600 mb-6">
                      Hello! At Goupil Energy, we believe it's possible to power your home while protecting the planet.<br/>
                      Would you be interested in an energy plan that’s as green as possible, tailored to your needs and budget?
                    </p>
                    <Link 
                      to="/compare" 
                      className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-secondary transition-colors"
                    >
                      Choose an offer
                    </Link>
                  </div>
                  <div className="flex-1 min-w-[220px]">
                    <ChatbotWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
