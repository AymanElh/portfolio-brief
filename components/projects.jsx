"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const ProjectCard = ({ title, description, technologies, link, github, delay }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay * 0.2,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, cardRef)

    return () => ctx.revert()
  }, [delay])

  return (
    <Card
      ref={cardRef}
      className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <CardHeader>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400">{technologies}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        {link && (
          <Button
            variant="outline"
            size="sm"
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
            onClick={() => window.open(link, "_blank")}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Button>
        )}
        {github && (
          <Button
            variant="outline"
            size="sm"
            className="border-blue-500/50 text-blue-400 hover:bg-blue-500/20"
            onClick={() => window.open(github, "_blank")}
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

const Projects = () => {
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

  const projects = [
    {
      title: "HRMS",
      description:
        "Système de gestion des ressources humaines basé sur Laravel, permettant la gestion des employés, des départements et des demandes de congé. Il inclut des fonctionnalités d'authentification, d'approbation de congés et de gestion des profils.",
      technologies: "PHP, Laravel, PostgreSQL",
      link: "https://hrms-project.com",
      github: "https://github.com/AymanElh/hrms",
      delay: 0,
    },
    {
      title: "DevBlog",
      description:
        "Développé une plateforme de blog en PHP (OOP) et MySQL permettant aux utilisateurs de lire et commenter des articles. Mis en place un système de validation des publications et un tableau de bord administrateur avec statistiques en temps réel.",
      technologies: "PHP (OOP), MySQL",
      link: "https://devblog-project.com",
      github: "https://github.com/AymanElh/devblog",
      delay: 1,
    },
    {
      title: "Youdemy",
      description:
        "Développement d'une plateforme de cours en ligne avec PHP (OOP) et MySQL, intégrant l'authentification, la gestion multi-rôles (administrateur, enseignant, étudiant) et l'inscription aux cours. Application des principes SOLID et des design patterns.",
      technologies: "PHP (OOP), MySQL",
      link: "https://youdemy-project.com",
      github: "https://github.com/AymanElh/youdemy",
      delay: 2,
    },
    {
      title: "Scrum Board",
      description:
        "Développement d'un tableau de gestion de taches interactif, conçu avec HTML, CSS, JavaScript et Bootstrap.",
      technologies: "HTML, CSS, JavaScript, Bootstrap",
      link: "https://scrumboard-project.com",
      github: "https://github.com/AymanElh/scrumboard",
      delay: 3,
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="section relative min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Projets Réalisés
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              github={project.github}
              delay={project.delay}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-20 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-20 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl"></div>
    </section>
  )
}

export default Projects
