import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StickyButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Show when scrolled past header/hero threshold (e.g. 100px)
            if (currentScrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-gray-200 shadow-md animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <a
                    href="#"
                    className="text-sm font-bold text-gray-800 underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
                >
                    Unclear? Ask me a question
                </a>

                <div className="flex items-center gap-4">
                    <button className="px-8 py-3 text-sm font-bold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Preview
                    </button>
                    <button className="px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#1788ae] to-[#136f8e] rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                        Get Access
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StickyButtons;
