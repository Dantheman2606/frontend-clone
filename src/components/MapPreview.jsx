import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: null,
    iconUrl: null,
    shadowUrl: null,
});

// Custom pin creator
const createPin = (color, icon) => {
    return L.divIcon({
        className: 'custom-pin',
        html: `<div style="
            background-color: ${color};
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: white;
        ">${icon}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
    });
};

const pins = [
    // Lofoten area clusters
    { pos: [68.1, 13.5], color: '#f97316', icon: '📷' }, // Orange
    { pos: [68.2, 14.2], color: '#14b8a6', icon: '🏔️' }, // Teal
    { pos: [67.9, 13.1], color: '#ec4899', icon: '🍽️' }, // Pink
    { pos: [68.3, 14.8], color: '#a855f7', icon: '🏨' }, // Purple
    { pos: [68.15, 13.8], color: '#14b8a6', icon: '🥾' }, // Teal

    // Western Norway clusters (Fjords)
    { pos: [61.0, 6.5], color: '#14b8a6', icon: '📷' },
    { pos: [60.8, 7.0], color: '#f97316', icon: '🏔️' },
    { pos: [61.2, 6.2], color: '#ec4899', icon: '🏨' },
    { pos: [61.4, 6.8], color: '#14b8a6', icon: '🥾' },
    { pos: [60.5, 6.0], color: '#eab308', icon: '🍽️' }, // Yellow
    { pos: [62.0, 7.0], color: '#14b8a6', icon: '📷' },
    { pos: [62.5, 7.5], color: '#a855f7', icon: '🏨' }
];

function MapPreview() {
    const navigate = useNavigate();

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Access My Local Secrets</h2>

                <div
                    className="relative rounded-2xl overflow-hidden shadow-lg h-[450px] cursor-pointer group isolation-auto"
                    onClick={() => navigate('/map')}
                >
                    <MapContainer
                        center={[65.0, 12.0]}
                        zoom={5}
                        scrollWheelZoom={false}
                        dragging={false}
                        zoomControl={false}
                        doubleClickZoom={false}
                        attributionControl={false}
                        className="h-full w-full z-0"
                    >
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        />

                        {pins.map((pin, idx) => (
                            <Marker
                                key={idx}
                                position={pin.pos}
                                icon={createPin(pin.color, pin.icon)}
                            />
                        ))}
                    </MapContainer>

                    {/* Transparent overlay to capture clicks and show hover effect */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-[1000]"></div>

                    {/* Expand icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md z-[1001]">
                        <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MapPreview;
