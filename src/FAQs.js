import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="faqs" className="border-2 p-5 rounded-lg shadow-lg bg-white/5 my-6 hover:bg-white/15">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleFAQ}
      >
        <h3 className="text-xl font-semibold text-green-500">{question}</h3>
        <button
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          ▼
        </button>
      </div>
      {isOpen && <p className="mt-3 text-white">{answer}</p>}
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: "How do I book an e-ticket?",
      answer: "To book an e-ticket, simply message our WhatsApp number with your travel details and follow the prompts.",
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel your booking through WhatsApp by following the cancellation prompts.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Refunds are issued based on the cancellation policy of the respective service provider.",
    },
    // Add more FAQs here as needed
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 pt-22 pb-44">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-500">FAQs</h1>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
