"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du titre et du paragraphe
      gsap.from(".solution-title", {
        scrollTrigger: {
          trigger: ".solution-title",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".solution-text", {
        scrollTrigger: {
          trigger: ".solution-text",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Animation des images en cascade
      gsap.utils.toArray<HTMLElement>(".solution-image").forEach((img, i) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // nettoyage
  }, []);

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="solution-title text-5xl font-bold mb-6">
            L'innovation au service de vos projets
          </h1>
          <p className="solution-text text-xl text-gray-600 max-w-3xl mx-auto">
            Nous concevons des solutions digitales sur mesure en plaçant la technologie
            et la créativité au cœur de notre ADN.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg solution-image">
            <Image
              src="https://ext.same-assets.com/2531071546/748078606.webp"
              alt="Échanger de l'argent"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg solution-image">
            <Image
              src="https://ext.same-assets.com/2531071546/2750164968.webp"
              alt="Envoyer de l'argent"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg solution-image">
            <Image
              src="https://ext.same-assets.com/2531071546/1939077912.webp"
              alt="Joie d'utiliser le service"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
