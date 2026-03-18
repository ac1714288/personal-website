import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'
import './Globe.css'

export default function Globe() {
  const canvasRef = useRef(null)

  useEffect(() => {
    let phi = 0
    const isMobile = window.innerWidth <= 768
    const size = isMobile ? 160 : 340
    const dpr = Math.min(window.devicePixelRatio, 2)
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.5,
      mapSamples: 20000,
      mapBrightness: 8,
      baseColor: [0.1, 0.2, 0.5],
      markerColor: [1, 1, 1],
      glowColor: [0.2, 0.4, 1],
      markers: [],
      onRender(state) {
        state.phi = phi
        phi += 0.004
      },
    })

    return () => globe.destroy()
  }, [])

  return <canvas ref={canvasRef} className="globe-canvas" />
}
