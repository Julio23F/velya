import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CircleDollarSign, Send, PlusCircle, RefreshCw } from "lucide-react";
import { Monitor, Smartphone, Code, Palette } from 'lucide-react';

export default function ServicesSection() {

  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-white" />,
      title: "WEB",
      description: "Conception et développement de sites web modernes, réactifs et performants, adaptés à vos besoins."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "MOBILE",
      description: "Développement d'applications mobiles sur mesure pour Android et iOS, offrant une expérience utilisateur fluide et intuitive."
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "LOGICIEL",
      description: "Création de logiciels personnalisés et de solutions sur mesure pour optimiser et automatiser vos processus métier."
    },
    {
      icon: <Palette className="h-8 w-8 text-white" />,
      title: "WEB MARKETING & GRAPHISME",
      description: "Création d’identités visuelles percutantes, conception graphique et stratégies marketing digital pour valoriser votre marque et atteindre vos objectifs."
    }
  ];

  

  return (
    <section id="services" className="bg-muted py-20">
      <div className="container px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium text-primary">Services</p>
          <h3 className="text-3xl font-bold md:text-4xl">
            Expertise digitale et accompagnement
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Velya-Tech vous guide dans votre transformation numérique : développement d’applications, intégration technologique et support personnalisé pour faire évoluer vos projets.
          </p>
        </div>



        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="border-0 shadow-md">
              <CardHeader className="p-4 pb-0">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
