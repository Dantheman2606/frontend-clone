import { Link } from 'react-router-dom';

const guides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=500&fit=crop',
        title: 'Iceland Guide',
        location: 'Iceland',
        author: 'asasteinars'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
        title: 'Adventures in Scotland',
        location: 'United Kingdom',
        author: 'traveltwo_'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=500&fit=crop',
        title: 'Ultimate Guide to New Zealand',
        location: 'New Zealand',
        author: 'rachstewartinz'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=500&fit=crop',
        title: "Exploring Ireland's Hidden Gems",
        location: 'Ireland',
        author: 'lurstonetravels'
    }
];

function RelatedGuides() {
    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">You may also like</h2>

                <div className="relative">
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {guides.map((guide) => (
                            <Link
                                to="#"
                                key={guide.id}
                                className="flex-shrink-0 w-[200px] lg:w-[220px] cursor-pointer group"
                            >
                                <div className="relative h-[260px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg mb-3">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Gradient overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">{guide.title}</h3>
                                <p className="text-xs text-gray-500">{guide.location} • by {guide.author}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        className="absolute right-0 top-[130px] w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                        aria-label="Next"
                    >
                        <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default RelatedGuides;
