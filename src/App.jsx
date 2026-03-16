import { useState, useEffect, useCallback } from 'react'
import { slides } from './slidesData'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slide = slides[currentIndex]

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
      <div className="slide-viewport">
        <div className="slide-scope" key={currentIndex}>
          <style dangerouslySetInnerHTML={{ __html: slide.css }} />
          <div dangerouslySetInnerHTML={{ __html: slide.html }} />
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
