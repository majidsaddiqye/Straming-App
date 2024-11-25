import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#1F1E24] text-white overflow-y-auto">
      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Contact Our Friendly Team
        </h1>
        <p className="text-zinc-400">
          Let us know how we can help. We're here to make your streaming
          experience smooth and enjoyable.
        </p>
      </header>

      {/* Contact Options Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12">
        <div className="bg-[#27272a] p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-[#6556cd]">
            Chat to Sales
          </h3>
          <p className="text-zinc-400 mt-2">Speak to our friendly team.</p>
          <p className="text-zinc-400 mt-1">sales@streamingapp.com</p>
        </div>
        <div className="bg-[#27272a] p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-[#6556cd]">
            Chat to Support
          </h3>
          <p className="text-zinc-400 mt-2">We're here to help.</p>
          <p className="text-zinc-400 mt-1">support@streamingapp.com</p>
        </div>
        <div className="bg-[#27272a] p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-[#6556cd]">Visit Us</h3>
          <p className="text-zinc-400 mt-2">Visit our office HQ.</p>
          <p className="text-zinc-400 mt-1">123 Street, Streaming City</p>
        </div>
        <div className="bg-[#27272a] p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-[#6556cd]">Call Us</h3>
          <p className="text-zinc-400 mt-2">Mon-Fri: 8 AM to 5 PM</p>
          <p className="text-zinc-400 mt-1">+92-300-0000000</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 md:px-12 mt-12">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="bg-[#27272a] p-6 rounded-lg">
          {/* Question 1 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">
              How can I subscribe to a plan?
            </h3>
            <p className="text-zinc-400 mt-2">
              You can subscribe via the app or our website. Simply log in and
              select your preferred plan.
            </p>
          </div>
          {/* Question 2 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">
              Can I cancel anytime?
            </h3>
            <p className="text-zinc-400 mt-2">
              Yes, you can cancel your subscription anytime from your account
              settings.
            </p>
          </div>
          {/* Question 3 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">
              How can I contact support?
            </h3>
            <p className="text-zinc-400 mt-2">
              You can reach out to us via email at support@streamingapp.com or
              through the live chat feature on our website.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white">
          Ready to explore endless streaming?
        </h2>
        <p className="text-zinc-400 mt-2">
          Start your journey with us today. Sign up for a free trial.
        </p>
        <div className="mt-6">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#6556cd] text-white font-semibold rounded-lg shadow-md hover:bg-[#27272a] transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
