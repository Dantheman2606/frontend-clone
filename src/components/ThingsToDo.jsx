import { useRef } from 'react';
import { Link } from 'react-router-dom';

const thingsData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=800&fit=crop',
        category: 'Activity',
        icon: '🤸',
        title: 'Kayak is a must'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=600&h=800&fit=crop',
        category: 'Sightseeing',
        icon: '📷',
        title: 'Walk around a beautiful old fishing town'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=800&fit=crop',
        category: 'Hike',
        icon: '🥾',
        title: 'Spectacular mountain views'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=800&fit=crop',
        category: 'Food',
        icon: '🍽️',
        title: 'Best cinnamon buns in Norway'
    }
];

function ThingsToDo() {
    const scrollContainer = useRef(null);

    const scroll = (direction) => {
        if (scrollContainer.current) {
            const scrollAmount = 340; // Card width + gap
            scrollContainer.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left - Text content */}
                    <div className="lg:w-1/4 flex-shrink-0 pt-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">161 things to do</h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                            Get a curated list of all the best things
                            to do with exact location, detailed info
                            and inspiring content
                        </p>
                        <Link to="/map" className="text-sm font-bold text-gray-900 underline hover:text-gray-700 decoration-2 underline-offset-4">
                            Preview
                        </Link>
                    </div>

                    {/* Right - Carousel */}
                    <div className="lg:w-3/4 relative">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 z-10 border border-gray-100"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div
                            ref={scrollContainer}
                            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-1"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {thingsData.map((item) => (
                                <Link
                                    to="/map"
                                    key={item.id}
                                    className="flex-shrink-0 w-[300px] group"
                                    style={{ scrollSnapAlign: 'start' }}
                                >
                                    <div className="relative h-[380px] rounded-2xl overflow-hidden mb-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-lg">{item.icon}</span>
                                        <span className="text-sm font-medium text-gray-500">{item.category}</span>
                                    </div>
                                    <h3 className="text-md font-bold text-gray-900 leading-tight">{item.title}</h3>
                                </Link>
                            ))}

                            {/* Preview Card */}
                            <Link
                                to="/map"
                                className="flex-shrink-0 w-[300px] group"
                                style={{ scrollSnapAlign: 'start' }}
                            >
                                <div className="h-[380px] rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                                    <span className="font-bold text-gray-900 text-lg">Preview</span>
                                </div>
                            </Link>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-5 top-[190px] -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 z-10 border border-gray-100"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ThingsToDo;
