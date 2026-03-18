import { useState, useEffect, useCallback } from 'react'
import { slides } from './slidesData'
import { globalHtmlById } from './globalSlideHtml'
import { fetchPricingRegion } from './geoRegion'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [pricingRegion, setPricingRegion] = useState('IN')
  const slide = slides[currentIndex]

  const slideHtml =
    pricingRegion === 'global' && globalHtmlById[slide.id]
      ? globalHtmlById[slide.id]
      : slide.html

  useEffect(() => {
    fetchPricingRegion().then(setPricingRegion)
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i < slides.length - 1 ? i + 1 : i))
  }, [])

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : i))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goNext()
      } else if (e.key === 'ArrowLeft') {
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  return (
    <div className="app">
      {/* Small screens: landscape only — show overlay in portrait */}
      <div className="rotate-overlay" aria-hidden="true">
        <div className="rotate-overlay-content">
          <span className="rotate-icon" aria-hidden="true">↻</span>
          <p className="rotate-title">Landscape only</p>
          <p className="rotate-message">Please rotate your device to landscape to view this presentation.</p>
        </div>
      </div>

      <div className="slide-viewport">
        <div className="slide-fit">
          <div className="slide-scale-wrap">
            <div
              className="slide-scope"
              key={currentIndex + (pricingRegion === 'global' ? '-g' : '-in')}
            >
              <style dangerouslySetInnerHTML={{ __html: slide.css }} />
              <div dangerouslySetInnerHTML={{ __html: slideHtml }} />
            </div>
          </div>
        </div>
      </div>

      <nav className="nav">
        <button
          type="button"
          className="nav-btn"
          onClick={goPrev}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          ←
        </button>
        <span className="nav-counter">
          {currentIndex + 1} / {slides.length}
        </span>
        <button
          type="button"
          className="nav-btn"
          onClick={goNext}
          disabled={currentIndex === slides.length - 1}
          aria-label="Next slide"
        >
          →
        </button>
      </nav>

      <p className="hint">Use ← → arrow keys to navigate</p>
    </div>
  )
}

export default App
