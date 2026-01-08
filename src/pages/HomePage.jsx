import Header from '../components/Header';
import StickyButtons from '../components/StickyButtons';
import Hero from '../components/Hero';
import MapPreview from '../components/MapPreview';
import ThingsToDo from '../components/ThingsToDo';
import Itinerary from '../components/Itinerary';
import AIPlanner from '../components/AIPlanner';
import ExploreMap from '../components/ExploreMap';
import ItineraryBuilder from '../components/ItineraryBuilder';
import CreatorProfile from '../components/CreatorProfile';
import RelatedGuides from '../components/RelatedGuides';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <StickyButtons />
            <main className="pt-16">
                <Hero />
                <MapPreview />
                <ThingsToDo />
                <Itinerary />
                <AIPlanner />
                <ExploreMap />
                <ItineraryBuilder />
                <CreatorProfile />
                <RelatedGuides />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
