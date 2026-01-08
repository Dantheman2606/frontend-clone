import { useState } from 'react';

const faqData = [
    {
        question: 'How do I access the Guide and Map?',
        answer: 'After purchasing, you will receive instant access to the guide and interactive map through your Rexby account. You can access it on any device through our website or mobile app.'
    },
    {
        question: 'Do I need internet connection?',
        answer: 'The map requires an internet connection to load initially, but you can download areas for offline use. The guide content is also available offline once loaded.'
    },
    {
        question: 'How long will I have access?',
        answer: 'You will have lifetime access to the guide and all future updates. Once purchased, it is yours forever.'
    },
    {
        question: 'Can I share it with my travel buddy?',
        answer: 'Each purchase is for individual use. However, you can share your screen while traveling together or purchase a second license at a discounted rate.'
    }
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left - Title */}
                    <div className="lg:w-1/4 flex-shrink-0">
                        <h2 className="text-2xl font-bold text-gray-900">Your questions, answered</h2>
                    </div>

                    {/* Right - Accordion */}
                    <div className="lg:w-3/4">
                        <div className="divide-y divide-gray-200">
                            {faqData.map((item, index) => (
                                <div key={index} className="py-4">
                                    <button
                                        onClick={() => toggleQuestion(index)}
                                        className="w-full flex items-center justify-between text-left"
                                    >
                                        <span className="text-sm text-gray-700 font-medium">{item.question}</span>
                                        <svg
                                            className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                    {openIndex === index && (
                                        <div className="mt-3 text-sm text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
