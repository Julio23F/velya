"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Twitter, Linkedin, Mail, Facebook, Youtube } from "lucide-react";

export default function HeroSection() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1.2 } });

    // Animation des textes (titre, paragraphe, boutons)
    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 })
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0 },
        "-=1"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0 },
        "-=1"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1 },
        "-=1"
      );
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden mb-[50px]">
      <div className="container">
        <div className="absolute top-0 left-0 grid grid-cols-6 gap-4 p-4">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#E0363A] rounded-full" />
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-start justify-center">
            <h1
              ref={titleRef}
              className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight"
            >
              Vous avez un projet tech,{" "}
              <span className="text-primary">nous sommes là</span>.
            </h1>
            <p
              ref={paragraphRef}
              className="mb-8 max-w-lg text-xl text-muted-foreground"
            >
              Velya-Tech est une Entreprise de Services du Numérique (ESN),
              avec l’innovation dans nos veines.
            </p>
            <div
              ref={buttonsRef}
              className="flex flex-col gap-4 sm:flex-row mb-5"
            >
              <Button className="bg-primary text-white" size="lg" asChild>
                <Link href="#contact">Commencer</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">En savoir plus</Link>
              </Button>
            </div>
            <div className="mt-5" style={{ marginTop: "35px" }}>
              <p className="mb-2">Suivez-nous sur :</p>
              <div
                className="flex mt-2"
                ref={socialRef}
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 p-2 rounded-full bg-[#333333] text-white hover:bg-black transition duration-300"
                >
                  <Twitter className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/julio-faralahy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 p-2 rounded-full bg-[#0e76a8] text-white hover:bg-[#0b5f87] transition duration-300"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href="mailto:juliofaralahy23@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 p-2 rounded-full bg-[#FF0000] text-white hover:bg-[#c23b2e] transition duration-300"
                >
                  <Mail className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.facebook.com/julio.faralahy.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 p-2 rounded-full bg-[#3b5998] text-white hover:bg-[#2d4373] transition duration-300"
                >
                  <Facebook className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div
              ref={imageRef}
              className="relative h-full w-full flex justify-center"
            >
              <Image
                src="/assets/images/bg.png"
                alt="Utilisateur de carte virtuelle"
                width={600}
                height={600}
                className="mx-auto object-contain"
              />
              <div className="absolute bottom-4 right-4 rounded-full bg-background px-4 py-2 shadow-lg">
                <span className="font-bold text-primary">
                  +47 clients satisfaits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
