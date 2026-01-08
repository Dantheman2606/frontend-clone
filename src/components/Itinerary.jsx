import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: null,
    iconUrl: null,
    shadowUrl: null,
});

const routePositions = [
    [68.23, 14.56], // Svolvær
    [68.18, 14.22],
    [68.15, 13.80],
    [68.08, 13.55],
    [67.93, 13.08], // Reine
    [67.88, 12.98]  // Å
];

const startIcon = L.divIcon({
    className: 'custom-pin',
    html: `<div style="background-color: #14b8a6; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 2px rgba(0,0,0,0.3);"></div>`,
    iconSize: [12, 12],
});

function Itinerary() {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                    {/* Left - Text content */}
                    <div className="lg:w-1/4 flex-shrink-0 pt-0 lg:pt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-4">1 itinerary</h2>
                        <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm">
                            Get expertly curated itineraries that
                            help you organise all the 'things to do' in
                            an ideal time order
                        </p>
                        <Link to="/map" className="text-sm font-bold text-gray-900 underline hover:text-gray-700 decoration-2 underline-offset-4">
                            Preview
                        </Link>
                    </div>

                    {/* Right - Cards */}
                    <div className="lg:w-3/4 flex gap-4 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide w-full">
                        {/* Map Card */}
                        <Link to="/map" className="flex-shrink-0 w-[280px] lg:w-[300px] group">
                            <div className="relative rounded-2xl overflow-hidden h-[340px] lg:h-[380px] shadow-sm border border-gray-100 isolation-auto">
                                {/* Leaflet Map for focused Norway view */}
                                <div className="h-full w-full pointer-events-none">
                                    <MapContainer
                                        center={[68.1, 13.8]}
                                        zoom={8}
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

                                        {/* Route Line */}
                                        <Polyline
                                            positions={routePositions}
                                            pathOptions={{ color: '#14b8a6', weight: 4, opacity: 0.8, lineCap: 'round' }}
                                        />

                                        {/* Markers at key points */}
                                        <Marker position={routePositions[0]} icon={startIcon} />
                                        <Marker position={routePositions[2]} icon={startIcon} />
                                        <Marker position={routePositions[4]} icon={startIcon} />
                                        <Marker position={routePositions[5]} icon={startIcon} />
                                    </MapContainer>
                                </div>

                                {/* Info badge */}
                                <div className="absolute bottom-4 left-4 z-[1000]">
                                    <div className="text-xs text-black/70 font-bold mb-0.5 bg-white/80 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm">8 days</div>
                                    <div className="text-lg font-bold text-black/90 drop-shadow-sm mt-1">Lofoten Road Trip</div>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-[1001]"></div>
                            </div>
                        </Link>

                        {/* Preview Card */}
                        <Link to="/map" className="flex-shrink-0 w-[300px]">
                            <div className="h-[380px] rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                                <span className="font-bold text-gray-900 text-lg">Preview</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Itinerary;
