import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CircleDollarSign, Send, PlusCircle, ArrowLeftRight, Wallet } from "lucide-react";
import { Monitor, Smartphone, Code, Palette } from 'lucide-react';
import React from 'react';

function ExpertiseCard({ 
  icon: Icon, 
  title, 
  description, 
  bgColor 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
}) {
  return (
    <div className={`${bgColor} rounded-3xl p-8 text-white flex flex-col h-full`}>
      <Icon className="w-12 h-12 mb-6" />
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg opacity-90">{description}</p>
    </div>
  );
}


export default function ServicesSection() {

  const services = [
    {
      icon: Monitor,
      title: "WEB",
      description: "Conception et développement de sites web modernes, réactifs et performants, adaptés à vos besoins.",
      bgColor: "bg-teal-500",
    },
    {
      icon: Smartphone,
      title: "MOBILE",
      description: "Développement d'applications mobiles sur mesure pour Android et iOS, offrant une expérience utilisateur fluide et intuitive.",
      bgColor: "bg-black",
    },
    {
      icon: Code,
      title: "LOGICIEL",
      description: "Création de logiciels personnalisés et de solutions sur mesure pour optimiser et automatiser vos processus métier.",
      bgColor: "bg-teal-500",
    },
    {
      icon: Palette,
      title: "WEB MARKETING & GRAPHISME",
      description: "Création d’identités visuelles percutantes, conception graphique et stratégies marketing digital pour valoriser votre marque et atteindre vos objectifs.",
      bgColor: "bg-gray-800",
    }
  ];

  

  return (
    <section id="services" className="bg-muted my-20">
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Expertise digitale et accompagnement</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Velya-Tech vous guide dans votre transformation numérique : développement d’applications, intégration technologique et support personnalisé pour faire évoluer vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ExpertiseCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
