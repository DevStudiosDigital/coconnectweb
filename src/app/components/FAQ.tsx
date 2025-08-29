"use client";
import { useState } from "react";
interface FAQItem {
  question: string;
  answer: string;
}
const faqs: FAQItem[] = [
  {
    question: "How is this service free?",
    answer: "(Co-Connect is a product by Community3. We are veterans in the web3 space and have multiple marketing products and agencies active. Co-Connect is a value add for both those in the network, as well as our own clients)",
  },
  {
    question: "How will the connections be made?",
    answer: "(We don't rely on mass automation. Every introduction is crafted by hand to ensure relevance and authenticity. When we find a match worth your time, you’ll receive a personalized message on Telegram explaining why we think the connection matters.)",
  },
  {
    question: "Who will I receive connections to?",
    answer: "(We are a B2B network made up of other projects, founders and entrepreneurs.)",
  },
  {
    question: "How do you ensure the quality of your network?",
    answer: "(We complete our due diligence before allowing anyone into the exclusive network. We also maintain regular checkups with all projects in the network)",
  },
  {
    question: "What other services do you provide?",
    answer: "(Our main brand, Community3, provides a full range of GTM / marketing services for web3 & web2.5 companies.",
  },
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-[url('/faq-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto p-6 min-h-[600px]">
          <div className="pb-10">
              <h2 className="text-center font-bold text-secondary sm:text-[50px] text-[30px]">
              Frequently <span className="text-primary">Asked</span> Questions
              </h2>          
              <div className="w-40 h-1 mx-auto my-2 rounded-full 
                  bg-gradient-to-r from-primary via-secondary to-primary 
                  bg-[length:200%_100%]"></div>
          </div>
          <div className="space-y-5 max-w-[650px] mx-auto transition-all pb-20">
              {faqs.map((faq, idx) => (
              <div
                  key={idx}
                  className={`group border-b border-primary rounded-0 p-4 hover:px-4 px-0 cursor-pointer transition-all 
                  ${openIndex === idx ? "bg-primary px-4" : "hover:bg-primary"}`}
                  onClick={() => toggle(idx)}>
                  <div className="flex justify-between items-center">
                  <h3
                      className={`sm:text-lg text-sm font-semibold transition-colors ${
                      openIndex === idx ? "text-foreground" : "text-secondary"
                      } group-hover:text-foreground`}
                  >
                      {faq.question}
                  </h3>
                  <span
                      className={`text-xl transition-colors ${
                      openIndex === idx ? "text-foreground" : "text-secondary"
                      } group-hover:text-foreground`}
                  >
                      {openIndex === idx ? "-" : "+"}
                  </span>
                  </div>
                  {openIndex === idx && (
                  <p className="mt-2 transition-colors !text-foreground">{faq.answer}</p>
                  )}
              </div>
              ))}
          </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center w-full py-10 pt-0">
          <a
            className="rounded-full border-[2px] border-solid border-primary flex items-center justify-center text-primary gap-2  
            font-medium text-[20px] px-10 py-2 transition-all transform hover:bg-primary hover:text-black hover:-translate-y-2"
            href="https://calendly.com/rik-community3/30min"
            target="_blank"
          >
            Book a Call
          </a>
        </div>      
      </div>
    </div>
  );
}
