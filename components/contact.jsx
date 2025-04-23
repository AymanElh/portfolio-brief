"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

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

      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        infoRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message envoyé!",
        description: "Merci pour votre message. Je vous répondrai dès que possible.",
      })
      e.target.reset()
    }, 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="section relative min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={infoRef} className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Restons en contact</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-purple-500/20">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="text-gray-300">aymanelhamioui2003@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-purple-500/20">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Téléphone</h4>
                    <p className="text-gray-300">+212 654684757</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Compétences Transversales</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></span>
                  Travail en équipe
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></span>
                  Sens des responsabilités
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></span>
                  Communication
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></span>
                  Résolution de problèmes
                </li>
              </ul>
            </div>
          </div>

          <div ref={formRef}>
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Envoyez-moi un message</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-300">
                      Nom
                    </label>
                    <Input
                      id="name"
                      required
                      className="bg-purple-900/20 border-purple-500/30 focus:border-purple-500/50 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-purple-900/20 border-purple-500/30 focus:border-purple-500/50 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-300">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    required
                    className="bg-purple-900/20 border-purple-500/30 focus:border-purple-500/50 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    className="bg-purple-900/20 border-purple-500/30 focus:border-purple-500/50 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Ayman EL HAMIOUI. Tous droits réservés.</p>
      </footer>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-purple-600/20 blur-3xl"></div>
    </section>
  )
}

export default Contact
