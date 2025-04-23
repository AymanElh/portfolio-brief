"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Award } from "lucide-react"

const TimelineItem = ({ year, title, institution, location, icon: Icon, isLeft, delay }) => {
  const itemRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRef.current,
        {
          opacity: 0,
          x: isLeft ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: delay * 0.2,
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, itemRef)

    return () => ctx.revert()
  }, [delay, isLeft])

  return (
    <div
      ref={itemRef}
      className={`flex ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} flex-col md:items-center mb-10`}
    >
      <div className={`md:w-1/2 ${isLeft ? "md:pl-10" : "md:pr-10"} md:text-${isLeft ? "left" : "right"}`}>
        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20">
          <span className="text-purple-400 font-semibold">{year}</span>
          <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
          <p className="text-gray-300 mt-1">{institution}</p>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      <div className="md:w-1/2"></div>
    </div>
  )
}

const Education = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const educationItems = [
    {
      year: "2024 - Present",
      title: "Développement web Full Stack",
      institution: "YouCode – UM6P",
      location: "Youssoufia",
      icon: GraduationCap,
      isLeft: false,
      delay: 0,
    },
    {
      year: "2020 - 2024",
      title: "DEUG en Sciences Mathématiques et Applications",
      institution: "Faculté des Sciences",
      location: "Agadir",
      icon: GraduationCap,
      isLeft: true,
      delay: 1,
    },
    {
      year: "2020",
      title: "Baccalauréat en sciences mathématiques",
      institution: "Lycee Abdelah Ibn Yassine",
      location: "Inezgane",
      icon: GraduationCap,
      isLeft: false,
      delay: 2,
    },
  ]

  const certificationItems = [
    {
      year: "2023",
      title: "CS50x Introduction to computer sciences",
      institution: "Harvard University",
      location: "Online",
      icon: Award,
      isLeft: false,
      delay: 3,
    },
    {
      year: "2023",
      title: "CS50P Introduction to programming with python",
      institution: "Harvard University",
      location: "Online",
      icon: Award,
      isLeft: true,
      delay: 4,
    },
  ]

  return (
    <section id="education" ref={sectionRef} className="section relative min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Formation & Certificats
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white text-center mb-10">Formation</h3>
            {educationItems.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                institution={item.institution}
                location={item.location}
                icon={item.icon}
                isLeft={item.isLeft}
                delay={item.delay}
              />
            ))}

            <h3 className="text-2xl font-semibold text-white text-center my-10">Certificats</h3>
            {certificationItems.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                institution={item.institution}
                location={item.location}
                icon={item.icon}
                isLeft={item.isLeft}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl"></div>
    </section>
  )
}

export default Education
