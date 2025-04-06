import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden" style={{marginBottom: "50px"}}> {/* Réduction de py-20 à py-10 */}
      <div className="container " >
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-start justify-center">
            <h1 className="mb-6 max-w-3xl">
              Vous avez un projet tech, <span className="text-primary">nous sommes là</span>.
            </h1>
            <p className="mb-8 max-w-lg text-xl text-muted-foreground">
              Velya-Tech est une Entreprise de Services du Numérique (ESN), avec l’innovation dans nos veines.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="bg-primary text-white" size="lg" asChild>
                <Link href="#contact">Commencer</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">En savoir plus</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative h-full w-full">
              <Image
                src="/assets/images/bg.png"
                alt="Utilisateur de carte virtuelle"
                width={600}
                height={600}
                className="mx-auto object-contain"
              />
              <div className="absolute bottom-4 right-4 rounded-full bg-background px-4 py-2 shadow-lg">
                <span className="font-bold text-primary">+47 clients satisfaits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
