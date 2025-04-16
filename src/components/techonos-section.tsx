import React from 'react';
import { Code2, Database, FileCode2, Layers, Server } from 'lucide-react';

function TechnosSection() {
  const technologies = [
    {
      name: 'React',
      logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
      color: 'rgb(97, 218, 251)'
    },
    {
      name: 'Angular',
      logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
      color: '#dd1b16'
    },
    // {
    //   name: 'Symfony',
    //   logo: 'https://symfony.com/logos/symfony_black_03.png',
    //   color: '#000000'
    // },
    {
      name: 'Laravel',
      logo: 'https://laravel.com/img/logomark.min.svg',
      color: '#FF2D20'
    },
    {
      logo: 'https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg',
      color: '#027DFD'
    },
    // {
    //   name: 'Cypress',
    //   logo: 'https://www.cypress.io/images/layouts/cypress-logo.svg',
    //   color: '#24262E'
    // },
    {
      logo: 'https://static.djangoproject.com/img/logos/django-logo-negative.svg',
      color: '#092E20'
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A2A2A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      {/* <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 Q150,250 300,400 T600,500 T1000,400"
          fill="none"
          stroke="#606060"
          strokeWidth="1"
        />
        <path
          d="M0,350 Q200,300 400,450 T800,550 T1200,450"
          fill="none"
          stroke="#606060"
          strokeWidth="1"
        />
        <ellipse
          cx="700"
          cy="300"
          rx="80"
          ry="40"
          fill="none"
          stroke="#606060"
          strokeWidth="1"
        />
      </svg> */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 Q150,250 300,400 T600,500 T1000,400"
          fill="none"
          stroke="#606060"
          strokeWidth="1"
        />
        <path
          d="M0,350 Q200,300 400,450 T800,550 T1200,450"
          fill="none"
          stroke="#606060"
          strokeWidth="1"
        />
        {/* <path
          d="M200,200 C300,150 400,300 200,400 C0,500 300,600 500,400"
          fill="none"
          stroke="#606060"
          strokeWidth="1"
        /> */}
      </svg>

      {/* Background Dots */}
      <div className="absolute top-0 left-0 grid grid-cols-6 gap-4 p-4">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-[#fff] rounded-full" />
        ))}
      </div>
      <div className="absolute bottom-0 right-[-10px] grid grid-cols-3 gap-4 p-4">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-[#fff] rounded-full" />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quelques unes
          </h1>
          <h2 className="text-3xl md:text-4xl mb-4">
            des <span className="text-gray-400">technologies</span> utilisées
          </h2>
          <p className="text-gray-400 mb-16">
            Les Langages, Frameworks ou Solutions que nous utilisons au quotidien
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 items-center" style={{marginTop: "150px", gap: "50px", }}>
            {technologies.map((tech, key) => (
              <div key={key} className="h-full flex  items-center justify-center">
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} logo`} 
                  className="h-16 md:h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-xl font-semibold text-white opacity-90 group-hover:opacity-100">
                  {tech.name && tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnosSection;