function StickyButtons() {
    return (
        <div className="fixed top-16 left-0 right-0 z-40 bg-slate-100/90 backdrop-blur-sm border-b border-gray-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
                <a href="#" className="text-sm text-teal-600 hover:text-teal-700 underline transition-colors">
                    Unclear? Ask me a question
                </a>
                <div className="flex items-center gap-3">
                    <button className="px-5 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-white transition-colors">
                        Preview
                    </button>
                    <button className="px-5 py-1.5 text-sm font-medium text-white bg-teal-500 rounded-full hover:bg-teal-600 transition-colors">
                        Get Access
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StickyButtons
