'use client';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';

export default function UsersSection() {
  const [selectedType, setSelectedType] = useState('all');

  const userTypes = [
    {
      title: "MuseVibes",
      description: "Application mobile de streaming musical avec la possibilité de créer des salons virtuels pour écouter et partager de la musique entre amis en temps réel.",
      image: "/assets/images/realisations/musevibes.jpeg",
      type: "mobile"
    },
    {
      title: "Domestik",
      description: "Application mobile collaborative de gestion des tâches ménagères. Elle intègre un algorithme de répartition automatique des tâches, idéale pour la colocation ou la vie en communauté.",
      image: "/assets/images/realisations/domestik.jpeg",
      type: "mobile"
    },
    {
      title: "Agritech",
      description: "Solution mobile connectée à un dispositif électronique pour surveiller et garantir la qualité des produits agricoles, visant à améliorer les pratiques agricoles intelligentes.",
      image: "/assets/images/realisations/agritech.jpeg",
      type: "mobile"
    },
    {
      title: "Youstudy",
      description: "Application web développée pour connecter enseignants et élèves. Elle permet la création, le partage et la visualisation de cours en ligne, dans un environnement simple et intuitif.",
      image: "/assets/images/realisations/youstudy.jpeg",
      type: "web"
    },
    {
      title: "Site vitrine pour un client",
      description: "Développement d’un site vitrine professionnel incluant l'intégration de multiples moyens de paiement et une compatibilité avec diverses plateformes e-commerce.",
      image: "/assets/images/realisations/portfolio.jpeg",
      type: "web"
    },
    // {
    //   title: "Myclasse",
    //   description: "Plateforme tout-en-un dédiée à l’accompagnement scolaire, axée sur le conseil et l’orientation des élèves, avec des outils personnalisés pour guider leur parcours académique.",
    //   image: "/assets/images/realisations/myclasse.PNG",
    //   type: "web"
    // },
    {
      title: "M Sos",
      description: "Application de mise en relation, pensée pour favoriser des rencontres authentiques grâce à un système de matching intelligent.",
      image: "/assets/images/realisations/msos.jpeg",
      type: "web"
    },
  ];

  const filteredUserTypes = selectedType === 'all' 
    ? userTypes 
    : userTypes.filter((user) => user.type === selectedType);

  return (
    <section className="bg-muted py-20">
      <div className="container px-4 md:px-8">
        <div className="mb-12 text-center">
          <h5 className="mb-6 text-lg font-semibold md:text-xl">
            Explorez nos projets conçus pour répondre aux besoins des<br className="hidden md:block" /> professionnels et particuliers.
          </h5>
          <div className="flex justify-center gap-4">
            <button 
              className={`px-6 py-2 text-lg font-semibold ${selectedType === 'all' ? 'bg-primary text-white' : 'bg-transparent text-muted-foreground'}`} 
              onClick={() => setSelectedType('all')}
            >
              Tous
            </button>
            <button 
              className={`px-6 py-2 text-lg font-semibold ${selectedType === 'mobile' ? 'bg-primary text-white' : 'bg-transparent text-muted-foreground'}`} 
              onClick={() => setSelectedType('mobile')}
            >
              Mobile
            </button>
            <button 
              className={`px-6 py-2 text-lg font-semibold ${selectedType === 'web' ? 'bg-primary text-white' : 'bg-transparent text-muted-foreground'}`} 
              onClick={() => setSelectedType('web')}
            >
              Web
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUserTypes.map((user) => (
            <Card key={user.title} className="overflow-hidden border-0 shadow-sm">
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
          ))}
        </div>
      </div>
    </section>
  );
}
