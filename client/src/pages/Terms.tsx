import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-muted-foreground text-center mb-12">
          Last updated: October 2025
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>PinnaclePlus</strong>, a digital automation and
              business growth platform operated by{" "}
              <strong>Gadget Glitz</strong> (“we”, “our”, “us”).  
              These Terms & Conditions govern your access to and use of our
              website, tools, and services (collectively, the “Service”).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              2. Acceptance of Terms
            </h2>
            <p>
              By using our website or subscribing to our services, you agree to
              these Terms. If you do not agree, please do not use our platform.
              We may update these Terms from time to time, and continued use
              implies your acceptance of the updated version.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              3. Eligibility
            </h2>
            <p>
              You must be at least 18 years old or have legal parental consent to
              use our services. By using PinnaclePlus, you confirm that you meet
              these eligibility requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              4. Use of Services
            </h2>
            <p>
              You agree to use our platform only for lawful purposes and in
              accordance with these Terms. You may not use the Service to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Violate any laws or regulations.</li>
              <li>Upload malicious code, viruses, or spam.</li>
              <li>Impersonate another person or business.</li>
              <li>Exploit, harm, or attempt to access the platform without authorization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              5. Subscriptions & Payments
            </h2>
            <p>
              Some features of PinnaclePlus may require payment. All pricing,
              renewal, and billing terms are clearly listed on our checkout or
              subscription pages. By purchasing, you authorize Gadget Glitz to
              charge your chosen payment method for the relevant fees.
            </p>
            <p className="mt-3">
              You are responsible for any taxes or charges associated with your
              transactions. We reserve the right to modify pricing with prior
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              6. Refunds & Cancellations
            </h2>
            <p>
              Refunds may be provided as per our{" "}
              <a
                href="/returns"
                className="text-primary hover:underline"
              >
                Returns & Refund Policy
              </a>
              . You can cancel your subscription anytime, but please note that
              partial or mid-cycle refunds are generally not available once a
              billing period begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              7. Intellectual Property
            </h2>
            <p>
              All content, code, design, trademarks, and materials on this
              website are the property of Gadget Glitz or our licensors.
              Unauthorized reproduction or redistribution of our materials is
              strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Gadget Glitz and its team
              are not liable for any indirect, incidental, or consequential
              damages resulting from your use of PinnaclePlus. You use the
              platform at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              9. Privacy
            </h2>
            <p>
              We value your privacy. Please refer to our{" "}
              <a
                href="/privacy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>{" "}
              to learn how we collect, use, and protect your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              10. Termination
            </h2>
            <p>
              We may suspend or terminate your access if you violate these Terms
              or misuse our platform. You may also delete your account at any
              time by contacting our support team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              11. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India. Any disputes will
              be handled in the courts located in Jabalpur, Madhya Pradesh.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              12. Contact Us
            </h2>
            <p>
              For questions about these Terms, please contact us at:  
              <br />
              <strong>Email:</strong> support@pinnacleplus.in  
              <br />
              <strong>Business Address:</strong> 31, Indra Market, Jabalpur, Madhya Pradesh, 482001
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
