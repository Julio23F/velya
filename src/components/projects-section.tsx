'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const [selectedType, setSelectedType] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "MuseVibes",
      description: "Application mobile de streaming musical...",
      image: "/assets/images/realisations/musevibes.jpeg",
      type: "mobile",
      gradient: "from-blue-900 to-blue-700"
    },
    {
      id: 2,
      title: "Youstudy",
      description: "Application web pour connecter enseignants et élèves...",
      image: "/assets/images/realisations/youstudy.jpeg",
      type: "web",
      gradient: "from-purple-900 to-purple-700"
    },
    {
      id: 3,
      title: "Domestik",
      description: "Application mobile collaborative de gestion des tâches...",
      image: "/assets/images/realisations/domestik.jpeg",
      type: "mobile",
      gradient: "from-blue-900 to-blue-700"
    },
    {
      id: 4,
      title: "Site vitrine pour un client",
      description: "Site vitrine professionnel avec paiement intégré...",
      image: "/assets/images/realisations/portfolio.jpeg",
      type: "web",
      gradient: "from-purple-900 to-purple-700"
    },
    {
      id: 5,
      title: "Agritech",
      description: "Solution mobile connectée pour la qualité des produits agricoles...",
      image: "/assets/images/realisations/agritech.jpeg",
      type: "mobile",
      gradient: "from-blue-900 to-blue-700"
    },
    {
      id: 6,
      title: "M Sos",
      description: "Application de mise en relation avec matching intelligent...",
      image: "/assets/images/realisations/msos.jpeg",
      type: "web",
      gradient: "from-purple-900 to-purple-700"
    },
  ];


  const filteredUserTypes = selectedType === 'all'
    ? projects
    : projects.filter((user) => user.type === selectedType);

    useEffect(() => {
      if (!sectionRef.current || !titleRef.current || !filterRef.current) return;
    
      const ctx = gsap.context(() => {
        gsap.set([titleRef.current, ...Array.from(filterRef.current!.children)], {
          autoAlpha: 0,
          y: 50
        });
    
        gsap.to(titleRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });
    
        gsap.to(Array.from(filterRef.current!.children), {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }, sectionRef);
    
      return () => ctx.revert();
    }, []);
    

  return (
    <section ref={sectionRef} className="bg-muted py-20">
      <div className="container px-4 md:px-8">
        <div className="mb-12 text-center">
          <h5 ref={titleRef} className="mb-6 text-lg font-semibold md:text-xl">
            Explorez nos projets conçus pour répondre aux besoins des<br className="hidden md:block" /> professionnels et particuliers.
          </h5>
          <div ref={filterRef} className="flex justify-center gap-4">
            {['all', 'mobile', 'web'].map((type) => (
              <button
                key={type}
                className={`px-6 py-2 text-lg font-semibold transition-colors duration-200 ${
                  selectedType === type
                    ? 'bg-primary text-white'
                    : 'bg-transparent text-muted-foreground'
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type === 'all' ? 'Tous' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredUserTypes.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              layout
            >
              <div className="flex flex-col lg:flex-row items-start gap-4 bg-[#fff] rounded-md">
                <div className="w-full lg:w-1/2 space-y-3 p-5">
                  <h2 className="text-xl font-semibold text-gray-800 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium " style={{fontSize: "0.8em"}}>
                    VOIR L'APPLICATION
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {/* <div className={`w-full lg:w-1/2 relative rounded-lg overflow-hidden bg-gradient-to-br ${project.gradient} p-2`}> */}
                <div className={`w-full lg:w-1/2 relative rounded-lg overflow-hidden bg-gradient-to-br p-2`}>
                  {/* <div className="relative h-[200px]"> */}
                  <div className="h-[200px] w-full overflow-hidden rounded-md">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      </div>
    </section>
  );
}
