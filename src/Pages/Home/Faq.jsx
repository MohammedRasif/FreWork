import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default first item open

    const faqData = [
        {
            question: "How does the AI-powered project setup work?",
            answer: "Absolutely, we implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with GDPR, HIPAA, and other regulations. Your data is stored in SOC 2 compliant data centers.",
        },
        {
            question: "Can I integrate with other tools we already use?",
            answer: "Yes, our platform supports integrations with a wide range of tools, including Slack, Trello, and Google Workspace, ensuring seamless workflow management.",
        },
        {
            question: "How long does it take to set up?",
            answer: "Setup typically takes less than 15 minutes with our AI-powered onboarding process, guiding you step-by-step.",
        },
        {
            question: "Can I customize the platform for my industry?",
            answer: "Absolutely, our platform offers industry-specific templates and customization options to fit your needs.",
        },
        {
            question: "What kind of support do you offer?",
            answer: "We provide 24/7 customer support via chat, email, and phone, along with a dedicated account manager for premium users.",
        },
        {
            question: "Is there a free trial?",
            answer: "Yes, we offer a 14-day free trial with full access to all features, no credit card required.",
        },
        {
            question: "How often do you release updates?",
            answer: "We release updates quarterly, with regular bug fixes and new features based on user feedback.",
        },
    ];

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
            <h1 className="uppercase text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-10 py-8 tracking-wider">
                FREQUENTLY ASKED QUESTIONS
            </h1>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div
                            onClick={() => toggleItem(index)}
                            className="py-4 px-6 text-gray-800 text-lg font-semibold flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors duration-300"
                        >
                            <span>{item.question}</span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <ChevronDown className="w-5 h-5" />
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0, y: -10 }}
                                    animate={{ height: "auto", opacity: 1, y: 0 }}
                                    exit={{ height: 0, opacity: 0, y: -10 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                        opacity: { duration: 0.3 },
                                        y: { duration: 0.4 },
                                    }}
                                    className="px-6 py-4 text-gray-600 text-sm border-t border-gray-200"
                                >
                                    <p>{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;