import './Recommendations.css'

const recommendedGuides = [
    {
        id: 1,
        title: 'Iceland Guide',
        location: 'Iceland',
        author: 'asasteinars',
        image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=400&h=500&fit=crop'
    },
    {
        id: 2,
        title: 'Adventures in Scotland',
        location: 'United Kingdom',
        author: 'travelbrian...',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop'
    },
    {
        id: 3,
        title: 'Ultimate Guide to New Zealand',
        location: 'New Zealand',
        author: 'rachitaworto',
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=500&fit=crop',
        overlay: true
    },
    {
        id: 4,
        title: "Exploring Ireland's Hidden Gems",
        location: 'Ireland',
        author: 'iambioinvesta',
        image: 'https://images.unsplash.com/photo-1533387520709-752d83de3630?w=400&h=500&fit=crop'
    }
]

function Recommendations() {
    return (
        <section className="recommendations">
            <div className="recommendations__container">
                <h2 className="recommendations__title">You may also like</h2>

                <div className="recommendations__carousel-wrapper">
                    <button className="recommendations__nav recommendations__nav--prev" aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="recommendations__carousel">
                        {recommendedGuides.map((guide) => (
                            <article key={guide.id} className="recommendations__card">
                                <div className="recommendations__card-image-wrapper">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="recommendations__card-image"
                                    />
                                    {guide.overlay && (
                                        <div className="recommendations__card-overlay">
                                            <span className="recommendations__card-overlay-label">The Ultimate Guide to</span>
                                            <span className="recommendations__card-overlay-title">NEW ZEALAND</span>
                                        </div>
                                    )}
                                </div>
                                <h3 className="recommendations__card-title">{guide.title}</h3>
                                <p className="recommendations__card-meta">
                                    {guide.location} • by {guide.author}
                                </p>
                            </article>
                        ))}
                    </div>

                    <button className="recommendations__nav recommendations__nav--next" aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Recommendations
