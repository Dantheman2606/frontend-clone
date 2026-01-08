function CreatorProfile() {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left - Profile card */}
                    <div className="lg:w-1/3 w-full">
                        <div className="bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
                                alt="Ása Steinars"
                                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                            />
                            <h3 className="text-lg font-bold text-gray-900 mb-0.5">Ása Steinars</h3>
                            <p className="text-xs text-gray-400 mb-5 font-medium tracking-wide">Travel Business</p>

                            {/* Social icons */}
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.068 3.155 9.387 7.625 11.176.13.023.23-.075.23-.127 0-.46-.01-1.696-.015-3.33-3.064.665-3.71-1.477-3.71-1.477-.546-1.387-1.333-1.756-1.333-1.756-1.0-.684.076-.67.076-.67 1.105.078 1.687 1.135 1.687 1.135 1.082 1.854 2.84 1.32 3.532 1.008.11-.784.423-1.32.77-1.624-2.446-.278-5.018-1.223-5.018-5.44 0-1.203.43-2.185 1.135-2.956-.114-.278-.492-1.398.108-2.914 0 0 .925-.296 3.03 1.13A10.51 10.51 0 0 1 12 7.842a10.5 10.5 0 0 1 2.757.38c2.103-1.425 3.027-1.128 3.027-1.128.602 1.516.223 2.636.11 2.914.707.77 1.134 1.753 1.134 2.956 0 4.226-2.575 5.16-5.028 5.434.436.375.823 1.116.823 2.25 0 1.623-.015 2.93-.015 3.326 0 .054.1.154.234.125C20.848 21.385 24 17.067 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Location tags */}
                            <div className="flex items-center justify-center gap-2">
                                <span className="px-4 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-full">Iceland</span>
                                <span className="px-4 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-full">Norway</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Bio */}
                    <div className="lg:w-2/3 pt-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Guide by Ása Steinars</h2>
                        <p className="text-xs text-gray-400 mb-6 font-medium">Joined in April 2022</p>

                        <p className="text-sm text-gray-600 leading-7 mb-8 max-w-2xl">
                            Ása Steinars is an adventure photographer and videographer from Iceland. Growing up
                            in the north, surrounded by extreme landscapes and forever changing weather has
                            given her a tight bond to nature and its forces. This you can clearly see in her
                            photography. She works as a full time content creator, helping people to travel Iceland
                            like she does. She has a total following of almost 2 million across her social media
                            platforms.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-8 py-2.5 text-sm font-bold text-gray-900 bg-white border border-gray-900 rounded-xl hover:bg-gray-50 transition-colors">
                                Message
                            </button>
                            <button className="px-8 py-2.5 text-sm font-bold text-gray-900 bg-white border border-gray-900 rounded-xl hover:bg-gray-50 transition-colors">
                                Storefront
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreatorProfile;
