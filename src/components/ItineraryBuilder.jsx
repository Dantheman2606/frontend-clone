import { Link } from 'react-router-dom';

const days = [
    {
        day: 'Tue 11 apr',
        items: [
            { name: 'Hot Spring', image: 'https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=60&h=60&fit=crop' },
            { name: 'Text', isText: true },
            { name: 'Photospot', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=60&h=60&fit=crop' }
        ]
    },
    {
        day: 'Wed 12 apr',
        items: [
            { name: 'Hike', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=60&h=60&fit=crop' },
            { name: 'Text', isText: true },
            { name: 'Sightseeing', image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=60&h=60&fit=crop' }
        ]
    },
    {
        day: 'Thu 13 apr',
        items: [
            { name: 'Waterfall', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=60&h=60&fit=crop' },
            { name: 'Text', isText: true },
            { name: 'Stay', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=60&h=60&fit=crop' }
        ]
    }
];

function ItineraryBuilder() {
    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left - Text content */}
                    <div className="lg:w-1/3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Build Itinerary with my Spots</h2>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Start with a pre-made itinerary as a template, or build your own
                            from scratch by using all the listed things to do and adding your
                            own
                        </p>
                        <Link to="/map" className="text-sm text-gray-800 underline hover:text-gray-900 font-medium">
                            Preview
                        </Link>
                    </div>

                    {/* Right - Calendar builder */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl shadow-lg p-5">
                            {/* Day columns */}
                            <div className="flex gap-3 mb-4">
                                {days.map((dayData, index) => (
                                    <div key={index} className="flex-1">
                                        {/* Day header */}
                                        <div className="flex items-center justify-between mb-3 px-2 py-1.5 bg-gray-50 rounded-lg">
                                            <span className="text-xs text-gray-600">{dayData.day}</span>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <circle cx="12" cy="6" r="2" />
                                                    <circle cx="12" cy="12" r="2" />
                                                    <circle cx="12" cy="18" r="2" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Items */}
                                        <div className="space-y-2">
                                            {dayData.items.map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg group">
                                                    {item.isText ? (
                                                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                                                            <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M11 4H4v14a2 2 0 002 2h12a2 2 0 002-2v-7" />
                                                                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                            </svg>
                                                        </div>
                                                    ) : (
                                                        <img
                                                            src={item.image}
                                                            alt=""
                                                            className="w-8 h-8 rounded object-cover"
                                                        />
                                                    )}
                                                    <span className="text-xs text-gray-700 flex-1 truncate">{item.name}</span>
                                                    <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity">
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                            <circle cx="12" cy="6" r="2" />
                                                            <circle cx="12" cy="12" r="2" />
                                                            <circle cx="12" cy="18" r="2" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Add column button */}
                                <div className="w-8 flex-shrink-0 flex items-start pt-1">
                                    <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Add dropdown */}
                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                    <span className="font-medium">+ Add</span>
                                </div>
                                <div className="space-y-1 text-sm text-gray-600">
                                    <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <span>Thing to do</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M11 4H4v14a2 2 0 002 2h12a2 2 0 002-2v-7" />
                                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                        <span>Text</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <span>New pin</span>
                                    </div>
                                </div>
                            </div>

                            {/* Context menu - shown as floating */}
                            <div className="absolute hidden bg-white rounded-lg shadow-xl border border-gray-100 py-2 text-sm">
                                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                                    <span>+</span> Add option
                                </div>
                                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                                    <span>?</span> Make optional
                                </div>
                                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                                    <span>ⓘ</span> More Info
                                </div>
                                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2 text-red-500">
                                    <span>🗑</span> Remove
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItineraryBuilder;
