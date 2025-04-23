"use client"

import { useEffect, useRef } from "react"

const StarField = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let stars = []
    let animationFrameId

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars() // Reinitialize stars when resizing
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create stars
    function initStars() {
      stars = []
      const starCount = Math.floor((canvas.width * canvas.height) / 1000)

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          vx: Math.random() * 0.05,
          vy: Math.random() * 0.05,
          alpha: Math.random(),
        })
      }
    }

    // Draw stars
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(16, 6, 40, 1)")
      gradient.addColorStop(1, "rgba(0, 0, 20, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()
      })

      // Draw nebula effects
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 100 + 50

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        const hue = Math.random() * 60 + 240 // Blue to purple
        gradient.addColorStop(0, `hsla(${hue}, 100%, 60%, 0.1)`)
        gradient.addColorStop(1, "rgba(0, 0, 20, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Animate stars
    function animateStars() {
      drawStars()

      // Move stars
      const scrollY = window.scrollY
      stars.forEach((star) => {
        star.x += star.vx + scrollY * 0.001
        star.y += star.vy - scrollY * 0.002

        // Reset position if star goes off screen
        if (star.x > canvas.width) star.x = 0
        if (star.x < 0) star.x = canvas.width
        if (star.y > canvas.height) star.y = 0
        if (star.y < 0) star.y = canvas.height

        // Twinkle effect
        star.alpha = Math.abs(Math.sin(Date.now() * 0.001 * star.vx))
      })

      animationFrameId = requestAnimationFrame(animateStars)
    }

    // Start animation
    initStars()
    animateStars()

    // Set up scroll event to affect stars
    const handleScroll = () => {
      const scrollSpeed = window.scrollY * 0.05
      stars.forEach((star) => {
        star.vy = Math.random() * 0.05 - scrollSpeed * 0.001
      })
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}

export default StarField
