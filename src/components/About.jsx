import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avenger from "/avenger.jpg";
import korean from "/korean.jpg";
import bollywood from "/bollywood.jpg";
import reacher from "/reacher.webp";

const About = () => {
  document.title = "About";
  const [activeSection, setActiveSection] = useState("about");
  const navigate = useNavigate();

  // Video details with titles and URLs
  const [about, setabout] = useState([
    { title: "Avengers", url: avenger },
    { title: "Korean Drama", url: korean },
    { title: "Bollywood", url: bollywood },
    { title: "Reacher", url: reacher },
  ]);

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center bg-gray-800 px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">StreamSnax</h1>
        <nav className="flex space-x-4">
          <button
            onClick={() => navigate("/")}
            className={`px-4 py-2 rounded ${
              activeSection === "home" ? "bg-purple-500" : "bg-gray-700"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className={`px-4 py-2 rounded ${
              activeSection === "about" ? "bg-purple-500" : "bg-gray-700"
            }`}
          >
            About
          </button>
        </nav>
      </header>

      {/* Content */}
      <main className="p-6 flex-grow">
        {activeSection === "about" && (
          <div>
            {/* Continue Watching Section */}
            <h2 className="text-2xl font-bold mb-4">Continue Watching</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {about.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 flex items-center"
                >
                  <div className="w-20 h-20 bg-gray-600 rounded-lg mr-4 overflow-hidden">
                    {/* Render Image */}
                    <img
                      className="w-full h-full object-cover"
                      src={item.url}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    {/* Render Title */}
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">1:26:53</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscription Details Section */}
            <h2 className="text-2xl font-bold mb-4">Subscription Plans</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">1 Month</h3>
                <p className="text-purple-500 mt-2">$9.99</p>
              </div>
              <div className="bg-purple-500 text-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold">6 Months</h3>
                <p className="mt-2">$41.99</p>
                <p className="text-sm mt-1">Save 31%</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">12 Months</h3>
                <p className="text-purple-500 mt-2">$69.99</p>
                <p className="text-sm mt-1">Save 45%</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/")}
              className="bg-purple-500 w-full py-3 mt-6 rounded-lg"
            >
              Start Free Trial
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4 text-gray-400">
        © 2024 StreamingSnax. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
