import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      
      <p className="mb-6">
        At **PinnaclePlus**, your privacy matters. This Privacy Policy describes what information we collect, how we use it, how we protect it, and what choices you have. By using our services, you consent to the collection and use of information in accordance with this policy.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        We collect information in two categories:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Personal Information:</strong> This includes data you provide directly, such as your name, email address, contact number, billing/payment information, and account credentials.
        </li>
        <li>
          <strong>Non-Personal / Usage Information:</strong> We collect technical and usage data automatically, such as IP address, browser type, device type, operating system, pages visited, timestamps, and referral source.
        </li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information for the following purposes:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>To process payments, fulfill orders or subscriptions, and manage your account.</li>
        <li>To send you transactional communications (e.g. receipts, updates) and marketing messages (if you consent to them).</li>
        <li>To improve, personalize, and develop our services, features, and content.</li>
        <li>To analyze usage trends, monitor performance, and detect fraud or abuse.</li>
        <li>To comply with legal obligations, resolve disputes, and enforce our policies.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing & Disclosure</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share your information in these scenarios:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>With third-party service providers who help with payments, hosting, analytics, email delivery, etc.</li>
        <li>With affiliates or in connection with corporate transactions (e.g. merger, acquisition).</li>
        <li>When required by law, subpoena, or to protect rights, property, or safety.</li>
        <li>With your consent or at your direction.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention & Security</h2>
      <p className="mb-4">
        We retain your personal data as long as needed to fulfill the purposes described (or as required by law). After that, we either delete or anonymize it.
      </p>
      <p className="mb-6">
        We implement reasonable technical, physical, and organizational measures to protect your data from unauthorized access, disclosure, alteration, and destruction. However, no method over the internet is 100% secure.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights & Choices</h2>
      <p className="mb-4">
        Depending on your jurisdiction, you may have rights such as:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Accessing or requesting a copy of your personal data.</li>
        <li>Correcting or updating inaccurate or incomplete data.</li>
        <li>Deleting or requesting deletion of your personal data.</li>
        <li>Objecting to or restricting certain processing (e.g. direct marketing).</li>
        <li>Withdrawing consent to processing where the basis is consent.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies & Tracking Technologies</h2>
      <p className="mb-4">
        We (and third parties) use cookies, web beacons, pixels, and similar technologies to collect usage data, remember preferences, and serve personalized content and ads. You can manage or disable cookies via your browser settings, but certain site functionalities may stop working.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children’s Privacy</h2>
      <p className="mb-4">
        Our services are not intended for children under 13 (or under the minimum age in your jurisdiction). We do not knowingly collect or maintain data of children under that age. If you believe we have, please contact us to delete it.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy occasionally. Changes will be effective from the “Last Updated” date at the top of the policy. Continued use after changes indicates your acceptance.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
      <p>
        Have questions or requests about your personal data? Please reach out to us at:<br />
        <strong>Email:</strong> support@pinnacleplus.store <br />
        <strong>Address:</strong> 31, Indra Market, Jabalpur, Madhya Pradesh, 482001
      </p>
    </div>
  );
};

export default PrivacyPolicy;
