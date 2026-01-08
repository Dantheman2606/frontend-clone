import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left - Portrait Image */}
                    <div className="w-full lg:w-[400px] flex-shrink-0">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=800&h=1066&fit=crop"
                                alt="Hammock with mountain view in Norway"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="flex-1 pt-4">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Norway Guide</h1>

                        <div className="flex items-center gap-4 mb-8 text-gray-600">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                                    alt="Ása Steinars"
                                    className="w-6 h-6 rounded-full object-cover"
                                />
                                <span className="text-sm">
                                    Guide by <span className="font-semibold text-gray-900">Ása Steinars</span>
                                </span>
                            </div>

                            <span className="text-sm">Norway</span>

                            <span className="text-sm flex items-center gap-1 font-medium text-gray-900">
                                ★ New
                            </span>
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed mb-10 text-[15px]">
                            <p>
                                Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I
                                often come back and I love this country almost as much as Iceland. Last summer I spent 3
                                months on the road with my van exploring everything from the south tip up to Lofoten.
                            </p>
                            <p>
                                This guide is my best tips for Norway to make sure you get the most out of your trip. It's
                                focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best
                                areas to explore in Norway.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <Link
                                to="/map"
                                className="flex-1 py-3.5 text-[15px] font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center"
                            >
                                Preview
                            </Link>
                            <button className="flex-1 py-3.5 text-[15px] font-semibold text-white bg-[#0f7c99] rounded-lg hover:bg-[#0c6b85] transition-colors shadow-sm">
                                Get Access
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
