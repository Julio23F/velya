"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function FaqSection() {
  const faqs = [
    {
      question: "Pourquoi choisir Velya-tech plutôt qu'une autre concurrence ?",
      answer: "Chez Velya-tech, nous mettons à votre disposition des développeurs expérimentés et nous garantissons la qualité des applications que nous livrons. Nous nous engageons à comprendre vos besoins spécifiques et à proposer des solutions adaptées et innovantes."
    },
    {
      question: "Quels services propose Velya-tech ?",
      answer: "Velya-tech offre une large gamme de services adaptés aux besoins spécifiques de chaque entreprise. Nous nous spécialisons dans le développement de sites web modernes, d'applications mobiles performantes et de solutions logicielles sur mesure pour optimiser vos processus métier. De plus, nous assurons un service de maintenance continue pour garantir la pérennité, la sécurité et la performance de vos applications tout au long de leur cycle de vie."
    },
    {
      question: "Comment puis-je obtenir un devis pour un projet ?",
      answer: "Pour obtenir un devis, il vous suffit de nous contacter via notre formulaire de contact ou par email. Nous discuterons ensemble de vos besoins et vous fournirons une proposition détaillée, incluant les délais et les coûts."
    },
    {
      question: "Quels sont les délais de développement des projets ?",
      answer: "Les délais varient en fonction de la complexité et de la taille du projet. Cependant, nous nous engageons à respecter les délais convenus tout en maintenant un haut niveau de qualité. Chaque projet est accompagné d'un planning personnalisé."
    },
  ];
  

  return (
    <section className="bg-muted py-20">
      <div className="container px-4 md:px-8">
        <div className="mb-12 text-center">
          <h6 className="mb-2 font-semibold">Questions Fréquemment Posées</h6>
          <p className="text-lg font-medium">Vous avez d'autres questions ?</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <h2 className="mb-8 text-3xl font-bold">
            +47 <br />clients satisfaits.
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Il ne faut que quelques secondes pour commencer.
          </p>
          <Button className="bg-primary text-white" size="lg" asChild>
            <Link href="#contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
