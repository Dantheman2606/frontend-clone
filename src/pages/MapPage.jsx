import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Sample spots data for Norway
const spots = [
    { id: 1, name: 'Trolltunga', lat: 60.124, lng: 6.74, category: 'activity', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300' },
    { id: 2, name: 'Lofoten Islands', lat: 68.15, lng: 14.0, category: 'favorite', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300' },
    { id: 3, name: 'Preikestolen', lat: 58.987, lng: 6.187, category: 'activity', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=300' },
    { id: 4, name: 'Geirangerfjord', lat: 62.11, lng: 7.09, category: 'favorite', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
    { id: 5, name: 'Bergen', lat: 60.39, lng: 5.32, category: 'sleep', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300' },
    { id: 6, name: 'Tromsø', lat: 69.65, lng: 18.96, category: 'favorite', image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=300' },
    { id: 7, name: 'Flåm', lat: 60.86, lng: 7.12, category: 'activity', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300' },
    { id: 8, name: 'Svolvær', lat: 68.23, lng: 14.57, category: 'sleep', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300' },
    { id: 9, name: 'Reine', lat: 67.93, lng: 13.09, category: 'favorite', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=300' },
    { id: 10, name: 'Ålesund', lat: 62.47, lng: 6.15, category: 'activity', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300' },
];

// Custom marker icons
const createIcon = (category, isActive = false) => {
    const colors = {
        activity: '#f97316', // orange
        sleep: '#a855f7',    // purple
        favorite: '#eab308', // yellow
    };
    const color = colors[category] || '#14b8a6';
    const size = isActive ? 36 : 28;
    const border = isActive ? '3px solid #0ea5e9' : '2px solid white';

    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border: ${border};
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <span style="color: white; font-size: ${isActive ? 14 : 12}px;">
        ${category === 'activity' ? '🏃' : category === 'sleep' ? '🛏️' : '⭐'}
      </span>
    </div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
    });
};

// Component to handle map centering
function MapController({ selectedSpot }) {
    const map = useMap();

    useEffect(() => {
        if (selectedSpot) {
            map.flyTo([selectedSpot.lat, selectedSpot.lng], 10, { duration: 0.5 });
        }
    }, [selectedSpot, map]);

    return null;
}

export default function MapPage() {
    const [selectedSpot, setSelectedSpot] = useState(null);
    const [filter, setFilter] = useState('all');
    const [showFilter, setShowFilter] = useState(false);
    const carouselRef = useRef(null);

    const filteredSpots = filter === 'all'
        ? spots
        : spots.filter(spot => spot.category === filter);

    const handleMarkerClick = (spot) => {
        setSelectedSpot(spot);
        // Scroll carousel to show selected card
        const cardElement = document.getElementById(`spot-card-${spot.id}`);
        if (cardElement && carouselRef.current) {
            cardElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Leaflet Map */}
            <MapContainer
                center={[65, 12]}
                zoom={5}
                className="absolute inset-0 z-0"
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapController selectedSpot={selectedSpot} />

                {filteredSpots.map((spot) => (
                    <Marker
                        key={spot.id}
                        position={[spot.lat, spot.lng]}
                        icon={createIcon(spot.category, selectedSpot?.id === spot.id)}
                        eventHandlers={{
                            click: () => handleMarkerClick(spot),
                        }}
                    >
                        <Popup>
                            <div className="text-center">
                                <img
                                    src={spot.image}
                                    alt={spot.name}
                                    className="w-32 h-20 object-cover rounded-lg mb-2"
                                />
                                <h3 className="font-semibold text-gray-800">{spot.name}</h3>
                                <span className="text-xs text-gray-500 capitalize">{spot.category}</span>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* Floating Header */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center gap-3">
                <Link
                    to="/"
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>

                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="Search or Ask"
                        className="w-full px-4 py-2.5 bg-white rounded-full shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <svg className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="px-4 py-2.5 bg-white rounded-full shadow-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Filter
                </button>

                <button className="px-4 py-2.5 bg-white rounded-full shadow-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Build Itinerary
                </button>
            </div>

            {/* Filter Dropdown */}
            {showFilter && (
                <div className="absolute top-20 left-4 z-20 bg-white rounded-2xl shadow-xl p-4 w-64">
                    <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
                    <div className="space-y-2">
                        {['all', 'activity', 'sleep', 'favorite'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { setFilter(cat); setShowFilter(false); }}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors capitalize ${filter === cat
                                        ? 'bg-teal-500 text-white'
                                        : 'hover:bg-gray-100 text-gray-700'
                                    }`}
                            >
                                {cat === 'all' ? '🌍 All Spots' : cat === 'activity' ? '🏃 Activities' : cat === 'sleep' ? '🛏️ Accommodations' : '⭐ Favorites'}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Bottom Carousel */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/20 to-transparent pt-8 pb-4">
                <div
                    ref={carouselRef}
                    className="flex gap-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                >
                    {filteredSpots.map((spot) => (
                        <div
                            key={spot.id}
                            id={`spot-card-${spot.id}`}
                            onClick={() => handleMarkerClick(spot)}
                            className={`flex-shrink-0 w-36 h-48 rounded-2xl overflow-hidden shadow-lg cursor-pointer snap-center transition-all duration-300 ${selectedSpot?.id === spot.id
                                    ? 'ring-4 ring-teal-400 scale-105'
                                    : 'hover:scale-105'
                                }`}
                        >
                            <div className="relative w-full h-full">
                                <img
                                    src={spot.image}
                                    alt={spot.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                    <h4 className="text-white font-medium text-sm leading-tight">{spot.name}</h4>
                                    <span className="text-white/70 text-xs capitalize">{spot.category}</span>
                                </div>
                                <div className={`absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs ${spot.category === 'activity' ? 'bg-orange-500' :
                                        spot.category === 'sleep' ? 'bg-purple-500' : 'bg-yellow-500'
                                    }`}>
                                    {spot.category === 'activity' ? '🏃' : spot.category === 'sleep' ? '🛏️' : '⭐'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
