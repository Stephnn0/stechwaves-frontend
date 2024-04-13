import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Stechwaves Terms of Service</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Stechwaves! These terms and conditions outline the rules
            and regulations for the use of Stechwaves's Website, located at
            stechwaves.com.
          </p>
          <p className="text-gray-700 mb-4">
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Stechwaves if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>
          <p className="text-gray-700 mb-4">
            The following terminology applies to these Terms and Conditions,
            Privacy Statement, and Disclaimer Notice and all Agreements:
            "Client", "You", and "Your" refers to you, the person accessing this
            website and accepting Stechwaves's terms and conditions.
          </p>
        </section>

        {/* Add more sections as needed */}

        <footer className="text-gray-500 text-sm mt-8">
          Last updated: January 30, 2024 | Version 1.0
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
