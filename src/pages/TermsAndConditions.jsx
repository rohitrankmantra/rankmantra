import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsAndConditions = () => {
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
              "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Terms & <span className="text-red-600">Conditions</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            These terms govern your use of RankMantra’s website and services.
            By accessing our site or engaging our services, you agree to the
            following terms.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#FEFAF8] py-16 lg:px-32 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8 lg:p-12 border-t-4 border-red-600">

          <div data-aos="fade-up" className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Services and Deliverables
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Services are provided according to agreed scopes, timelines, and
                pricing. Deliverables are considered accepted upon final
                approval or after a reasonable review period. Changes outside
                scope may incur additional costs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Client Responsibilities
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Clients must provide accurate information, timely approvals, and
                necessary access for project completion. Delays due to missing
                inputs may affect timelines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Payments and Refunds
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Payments are due as per invoices and milestones. Due to the
                nature of digital services, refunds are assessed case-by-case,
                subject to contractual terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Intellectual Property
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Upon full payment, rights to final deliverables are transferred
                to the client unless otherwise agreed. RankMantra retains rights
                to pre-existing materials, frameworks, or reusable components.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Acceptable Use
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                You agree not to use our services or site for unlawful,
                harmful, or abusive activities, including infringing content,
                spamming, or security violations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Limitation of Liability
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                RankMantra is not liable for indirect, incidental, or
                consequential damages. Our total liability is limited to fees
                paid for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold" style={{ color: "#7a6960" }}>
                Changes to Terms
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We may update these terms to reflect changes in services or
                regulations. Continued use of our site constitutes acceptance of
                the updated terms.
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

export default TermsAndConditions;