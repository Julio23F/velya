import Image from "next/image";

export default function SolutionSection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium text-primary">A propos</p>
          <h2 className="text-3xl font-bold md:text-4xl">
            L'innovation au service de vos projets
          </h2>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-12 text-lg text-muted-foreground">
            Nous concevons des solutions digitales sur mesure en plaçant la technologie et la créativité au cœur de notre ADN.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="https://ext.same-assets.com/2531071546/748078606.webp"
              alt="Échanger de l'argent"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="https://ext.same-assets.com/2531071546/2750164968.webp"
              alt="Envoyer de l'argent"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
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
