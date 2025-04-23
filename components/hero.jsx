"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation
      gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" })

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1.5, delay: 0.3, ease: "power3.out" },
      )

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" },
      )

      // Floating animation
      gsap.to(titleRef.current, {
        y: "+=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      className="section relative h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="z-10 max-w-4xl">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600"
        >
          Ayman EL HAMIOUI
        </h1>
        <h2 ref={subtitleRef} className="text-2xl md:text-3xl font-medium mb-8 text-gray-300">
          Full Stack Developer
        </h2>
        <div ref={buttonRef}>
          <Button
            onClick={scrollToAbout}
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg group"
          >
            Explore My Universe
            <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  )
}

export default Hero
