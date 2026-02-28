import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <NavBar transparent />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Privacy <span className="text-red-600">Policy</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            RankMantra is committed to protecting your privacy. This policy
            explains what data we collect, how we use it, and your rights.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#FEFAF8] py-16 lg:px-32 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8 lg:p-12 border-t-4 border-red-600">

          <div data-aos="fade-up" className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Information We Collect
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We collect personal information you provide directly, such as
                name, email, phone number, and business details when you contact
                us, request a quote, or subscribe to newsletters. We also collect
                usage data like pages visited, time spent, and device information
                to improve performance and user experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We use data to provide and improve services, respond to
                inquiries, personalize content, send updates with your consent,
                and analyze performance. We do not sell your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Data Sharing
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We may share data with trusted partners for service delivery
                (such as hosting and analytics) under strict confidentiality
                agreements and only for legitimate business purposes. We comply
                with legal obligations when required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Cookies and Tracking
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We use cookies and similar technologies to enhance site
                functionality, remember preferences, and measure performance.
                You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Data Security
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We implement technical and organizational measures to protect
                your information against unauthorized access, alteration, or
                disclosure. No method of transmission over the internet is
                entirely secure, but we strive for industry best practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Your Rights
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                You may request access, correction, or deletion of your personal
                data. To exercise your rights or ask questions, contact us at
                <span className="ml-1 font-medium text-red-600">
                  info@rankmantra.com
                </span>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Updates to This Policy
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We may update this policy to reflect changes in practices or
                regulations. The latest version will always be available on this
                page.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DO NOT TOUCH FOOTER */}
      <section className="w-full max-h-auto py-4 lg:px-30 overflow-hidden border-b border-orange-100 relative mt-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/267401/pexels-photo-267401.jpeg)",
          }}
        ></div>
        <div className="relative z-10">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;