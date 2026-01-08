import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: null,
    iconUrl: null,
    shadowUrl: null,
});

const thumbnails = [
    { id: 1, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=120&h=120&fit=crop' },
    { id: 2, image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=120&h=120&fit=crop' },
    { id: 3, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&h=120&fit=crop' },
    { id: 4, image: 'https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=120&h=120&fit=crop' },
    { id: 5, image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=120&h=120&fit=crop' },
    { id: 6, image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=120&h=120&fit=crop' },
    { id: 7, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=120&h=120&fit=crop' },
    { id: 8, image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=120&h=120&fit=crop' },
];

const createPin = (color) => {
    return L.divIcon({
        className: 'custom-pin',
        html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></div>`,
        iconSize: [14, 14],
    });
};

const pins = [
    { pos: [59.91, 10.75], color: '#f97316' }, // Oslo
    { pos: [60.39, 5.32], color: '#14b8a6' },  // Bergen
    { pos: [63.43, 10.39], color: '#ec4899' }, // Trondheim
    { pos: [69.64, 18.95], color: '#a855f7' }, // Tromsø
    { pos: [58.97, 5.73], color: '#f97316' },  // Stavanger
    { pos: [68.23, 14.56], color: '#14b8a6' }, // Svolvær (Lofoten)
    { pos: [62.47, 6.15], color: '#ec4899' },  // Ålesund
    { pos: [61.11, 10.46], color: '#eab308' }, // Lillehammer
    { pos: [66.31, 14.14], color: '#a855f7' }, // Mo i Rana
    { pos: [70.66, 23.68], color: '#f97316' }, // Hammerfest
];

function ExploreMap() {
    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left - Text content */}
                    <div className="lg:w-1/3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Explore with my Map</h2>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Get an interactive, playful, and easy-to-navigate map that you
                            can personalize by adding and favoriting spots, then filter to see
                            only what matters to you.
                        </p>
                        <Link to="/map" className="text-sm text-gray-800 underline hover:text-gray-900 font-medium">
                            Preview
                        </Link>
                    </div>

                    {/* Right - Map with thumbnails */}
                    <div className="lg:w-2/3">
                        <Link to="/map" className="block relative group">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[320px] isolation-auto bg-slate-50 border border-gray-100">
                                {/* Leaflet Map */}
                                <div className="h-full w-full pointer-events-none">
                                    <MapContainer
                                        center={[65.0, 15.0]}
                                        zoom={5}
                                        zoomControl={false}
                                        dragging={false}
                                        scrollWheelZoom={false}
                                        doubleClickZoom={false}
                                        touchZoom={false}
                                        attributionControl={false}
                                        className="h-full w-full bg-slate-100"
                                    >
                                        <TileLayer
                                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                                        />

                                        {pins.map((pin, i) => (
                                            <Marker key={i} position={pin.pos} icon={createPin(pin.color)} />
                                        ))}
                                    </MapContainer>
                                </div>

                                {/* Photo thumbnails at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 z-[1000]">
                                    <div className="flex gap-3 justify-center">
                                        {thumbnails.map((thumb) => (
                                            <div
                                                key={thumb.id}
                                                className="w-12 h-12 rounded-lg overflow-hidden shadow-lg border-2 border-white flex-shrink-0 bg-gray-200"
                                            >
                                                <img
                                                    src={thumb.image}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none z-[1001]"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExploreMap;
