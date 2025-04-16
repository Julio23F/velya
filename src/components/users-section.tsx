'use client';

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function UsersSection() {
  const [selectedType, setSelectedType] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const userTypes = [
    {
      title: "MuseVibes",
      description: "Application mobile de streaming musical...",
      image: "/assets/images/realisations/musevibes.jpeg",
      type: "mobile"
    },
    {
      title: "Youstudy",
      description: "Application web pour connecter enseignants et élèves...",
      image: "/assets/images/realisations/youstudy.jpeg",
      type: "web"
    },
    {
      title: "Domestik",
      description: "Application mobile collaborative de gestion des tâches...",
      image: "/assets/images/realisations/domestik.jpeg",
      type: "mobile"
    },
    {
      title: "Site vitrine pour un client",
      description: "Site vitrine professionnel avec paiement intégré...",
      image: "/assets/images/realisations/portfolio.jpeg",
      type: "web"
    },
    {
      title: "Agritech",
      description: "Solution mobile connectée pour la qualité des produits agricoles...",
      image: "/assets/images/realisations/agritech.jpeg",
      type: "mobile"
    },
    {
      title: "M Sos",
      description: "Application de mise en relation avec matching intelligent...",
      image: "/assets/images/realisations/msos.jpeg",
      type: "web"
    },
  ];

  const filteredUserTypes = selectedType === 'all'
    ? userTypes
    : userTypes.filter((user) => user.type === selectedType);

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
            {filteredUserTypes.map((user) => (
              <motion.div
                key={user.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                layout // Animation de réorganisation fluide
              >
                <Card className="overflow-hidden border-0 shadow-sm">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={user.image}
                      alt={user.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h6 className="mb-2 text-lg font-semibold">{user.title}</h6>
                    <p className="text-sm text-muted-foreground">{user.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
