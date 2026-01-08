import { Link } from 'react-router-dom';

function AIPlanner() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Your Personal Travel Planner</h2>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left - Text content */}
                    <div className="lg:w-1/3 pt-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Ask my Guide Anything</h3>
                        <p className="text-gray-600 leading-relaxed mb-8 text-sm max-w-sm">
                            Rexby is trained on Ása Steinars local knowledge, enabling it to
                            answer questions just like Ása Steinars, but faster
                        </p>
                        <Link to="/map" className="text-sm font-bold text-gray-900 underline hover:text-gray-700 decoration-2 underline-offset-4">
                            Preview
                        </Link>
                    </div>

                    {/* Right - Chat widget */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden max-w-xl">
                            <div className="p-8">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                                            alt="Ása Steinars"
                                            className="w-12 h-12 rounded-lg object-cover"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-[10px] text-white border-2 border-white">
                                            AI
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Ása Steinars</div>
                                        <div className="text-xs text-gray-500">Digital version</div>
                                    </div>
                                </div>

                                {/* Bot message */}
                                <div className="text-sm text-gray-600 leading-relaxed mb-8">
                                    Hi there, I am Ása Steinars Guide. I have been trained to answer travel questions just like
                                    Ása Steinars would do in person, but faster.
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-100 mb-8"></div>

                                {/* User question */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                    <div className="text-sm font-bold text-gray-900">
                                        What is the best season to visit?
                                    </div>
                                </div>

                                {/* Thinking */}
                                <div className="text-sm text-gray-400 italic mb-6 pl-11">
                                    Thinking...
                                </div>

                                {/* Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Message..."
                                        className="w-full py-3.5 pl-5 pr-12 text-sm bg-gray-50 border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-gray-400"
                                    />
                                    <button
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1e293b] text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
                                    >
                                        <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AIPlanner;
