import React from 'react';

const ReturnsPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-6">Returns & Refund Policy</h1>
      
      <p className="mb-6">
        At <strong>PinnaclePlus</strong>, we stand behind the quality of our products and services. 
        Whether you're purchasing digital automation tools, subscription plans, or physical accessories 
        from our store, we want you to have complete confidence in your experience. 
        If you’re not fully satisfied, we’re here to help with simple, transparent return and refund options.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Eligibility for Returns</h2>
      <p className="mb-4">
        To qualify for a return or refund, the following conditions must be met:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>The return request must be initiated within <strong>30 days of the original purchase date</strong>.</li>
        <li>Items must be in their original, unused, and undamaged condition.</li>
        <li>A valid <strong>proof of purchase</strong> (invoice or order ID) is required.</li>
        <li>Returned products must include all original packaging, manuals, and accessories (if applicable).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Non-Returnable Items</h2>
      <p className="mb-4">
        Certain items and services are exempt from being returned or refunded:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Digital products or subscriptions once accessed, downloaded, or activated.</li>
        <li>Gift cards or promotional credits.</li>
        <li>Personalized or custom items that have been specially created for you.</li>
        <li>Services already rendered (e.g. completed digital marketing campaigns).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Return Process</h2>
      <p className="mb-4">
        To initiate a return, please follow these simple steps:
      </p>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Contact our <strong>support team</strong> at <a href="mailto:support@pinnacleplus.store" className="underline text-blue-400">support@pinnacleplus.store</a> with your order number and reason for return.</li>
        <li>Our team will review your request and provide return authorization along with the return shipping address (if applicable).</li>
        <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Refunds</h2>
      <p className="mb-4">
        Approved refunds will be processed within <strong>5–7 business days</strong> of receipt of the returned item or confirmation of digital cancellation. 
        The refund will be credited to your original payment method. 
      </p>
      <p className="mb-6">
        Please note that your bank or payment provider may take additional time to reflect the refund in your account.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Late or Missing Refunds</h2>
      <p className="mb-6">
        If you haven’t received your refund after 10 business days, please first check with your bank or credit card company. 
        If the issue persists, contact us at <a href="mailto:support@pinnacleplus.store" className="underline text-blue-400">support@pinnacleplus.store</a> and we’ll assist you immediately.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Exchanges</h2>
      <p className="mb-6">
        We replace defective or damaged physical items free of charge. 
        If you need to exchange an item for the same one, send us an email and we’ll guide you through the process.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
      <p>
        For any questions about our return and refund process, please contact our friendly support team:<br />
        <strong>Email:</strong> support@pinnacleplus.store<br />
        <strong>Business Address:</strong> 31, Indra Market, Jabalpur, Madhya Pradesh, 482001
      </p>
    </div>
  );
};

export default ReturnsPolicy;
