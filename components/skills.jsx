"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Database, Server, Palette, Terminal, Users } from "lucide-react"

const SkillCategory = ({ icon: Icon, title, skills, delay }) => {
  const categoryRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        categoryRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay * 0.1,
          scrollTrigger: {
            trigger: categoryRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, categoryRef)

    return () => ctx.revert()
  }, [delay])

  return (
    <div
      ref={categoryRef}
      className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-purple-500/20 mr-4">
          <Icon className="h-6 w-6 text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "TailwindCSS", "React JS"],
      delay: 0,
    },
    {
      icon: Server,
      title: "Back-End Development",
      skills: ["PHP", "Laravel", "Rest API"],
      delay: 1,
    },
    {
      icon: Database,
      title: "Bases de données",
      skills: ["MySQL", "PostgreSQL"],
      delay: 2,
    },
    {
      icon: Palette,
      title: "Outils",
      skills: ["Figma", "Git", "Github", "Trello", "Notion", "Jira", "Postman", "Docker"],
      delay: 3,
    },
    {
      icon: Users,
      title: "Methode Agile",
      skills: ["Scrum"],
      delay: 4,
    },
    {
      icon: Terminal,
      title: "Langues",
      skills: ["Arabe: Maternelle", "Anglais: A2", "Français: A2"],
      delay: 5,
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="section relative min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Compétences Techniques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl"></div>
    </section>
  )
}

export default Skills
