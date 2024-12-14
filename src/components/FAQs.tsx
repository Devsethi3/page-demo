"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web design, development, SEO optimization, and digital marketing solutions tailored to your needs.",
    },
    {
      question: "How long does a project take?",
      answer:
        "The timeline depends on the project scope. Typically, it ranges from 2 to 6 weeks.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer ongoing support and maintenance services to ensure your website runs smoothly.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based, depending on the complexity and requirements. Contact us for a detailed quote.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl py-24 mx-auto p-6">
      <div className="flex items-center justify-center flex-col">
        <Badge
          variant="secondary"
          className="bg-zinc-900 font-thin py-1 text-white hover:bg-zinc-800"
        >
          FAQs
        </Badge>

        <h2 className="mt-6 text-3xl md:text-4xl lg:text-6xl mb-10 lg:max-w-5xl text-center leading-tight tracking-tight text-zinc-900">
          <span className="text-muted-foreground">Get the Answers</span> <br /> to Common Questions
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center p-4 bg-gray-100 dark:bg-slate-800 rounded-lg"
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="p-4 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
