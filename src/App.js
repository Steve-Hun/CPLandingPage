import React from 'react';

function App() {
  const handleJoinWaitlist = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScxyxTjGOb9y_XQrPlp6pq4TxQswG6T8ya1BUa5OthEE5jTWQ/viewform?usp=header', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <img 
            src="careprice_logo.png"
            alt="CarePrice Logo"
            className="mx-auto mb-8 w-64"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            Transparent Dental Pricing, No Surprises
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find accurate dental procedure costs with ease and make informed healthcare decisions.
          </p>
          <button
            onClick={handleJoinWaitlist}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default App; 