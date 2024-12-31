import React, { useState } from "react";
import GreenTick from "../Component/Img/Gtick.png";
import plus from "../Component/Img/plus.png";
import minus from "../Component/Img/minus.png";

const Page8 = () => {
  const [openFAQ, setOpenFAQ] = useState(null);


  const toggleFAQ = (faqIndex) => {
    setOpenFAQ((prev) => (prev === faqIndex ? null : faqIndex)); 
  };


  const faqs = [
    {
      question: "Website response time, how to improve?",
      answer:
        "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur."
    },
    {
      question: "How to contact with riders emergency?",
      answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur."
    },
    {
      question: "App install failed, how to update system information?",
      answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur."
    },
    {
      question: "What is the expected delivery time?",
      answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur."
    },
    {
      question: "New update fixed all bugs and issues",
      answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur."
    }
  ];

  return (
    <div className="container mx-auto p-4 sm:px-8">
      <div className="text-[#F1AE66] text-xs sm:text-sm md:text-base lg:text-sm whitespace-nowrap text-center">
        FREQUENT QUESTIONS
      </div>
      <h1 className="font-bold text-gray-800 text-center text-xl mt-2">
        Do you have any questions?
      </h1>
      <div className="space-y-4 mt-4 faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            <div className="flex items-center" onClick={() => toggleFAQ(index)}>
              <span className="text-green-500 mr-2">
                <img
                  src={openFAQ === index ? minus : plus}
                  alt="toggle"
                  className="w-4 h-4"
                />
              </span>
              <div>{faq.question}</div>
            </div>
            {openFAQ === index && (
              <p className="text-gray-600 text-sm mt-1 ml-6 hidden md:block">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page8;
