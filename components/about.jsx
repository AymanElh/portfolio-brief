"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { User, Mail, Phone, Github, Linkedin } from "lucide-react"

const About = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate content on scroll
      gsap.fromTo(
        contentRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section relative min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          About Me
        </h2>

        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <User className="h-6 w-6 text-purple-400" />
              <h3 className="text-2xl font-semibold text-white">Ayman EL HAMIOUI</h3>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-purple-400" />
              <p className="text-gray-300">aymanelhamioui2003@gmail.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-purple-400" />
              <p className="text-gray-300">+212 654684757</p>
            </div>

            <div className="flex items-center space-x-4">
              <Github className="h-6 w-6 text-purple-400" />
              <p className="text-gray-300">AymanElh</p>
            </div>

            <div className="flex items-center space-x-4">
              <Linkedin className="h-6 w-6 text-purple-400" />
              <p className="text-gray-300">Ayman ELHAMIOUI</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-white">Professional Profile</h3>
              <p className="text-gray-300 leading-relaxed">
                Développeur Full Stack passionné avec une expertise en PHP (Laravel), MySQL, JavaScript et une solide
                compréhension des design patterns et principes SOLID. Expérience dans la création d'applications web
                performantes, sécurisées et évolutives. Habitué aux méthodes Agile Scrum, je collabore efficacement en
                équipe et cherche à optimiser chaque projet grâce à des bonnes pratiques de développement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-blue-600/20 blur-3xl"></div>
    </section>
  )
}

export default About
