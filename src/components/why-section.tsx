import { Card, CardContent, CardHeader } from "./ui/card";

export default function WhySection() {
  const reasons = [
    {
      number: "01",
      title: "Solutions Digitales Sur-Mesure",
      description: "Nous créons des solutions personnalisées pour répondre aux besoins spécifiques de votre entreprise avec des technologies innovantes."
    },
    {
      number: "02",
      title: "Accompagnement dans la Transformation Digitale",
      description: "Nous vous aidons à rester compétitif et agile grâce à des solutions de transformation numérique adaptées."
    },
    {
      number: "03",
      title: "Intégration de Technologies de Pointe",
      description: "Nous intégrons des technologies modernes pour connecter vos systèmes et fluidifier vos processus."
    },
    {
      number: "04",
      title: "Sécurité et Conformité Renforcées",
      description: "Nos solutions garantissent une sécurité maximale et la conformité avec les normes strictes de l'industrie."
    }
  ];
  

  return (
    <section id="why" className="py-20">
      <div className="container px-4 md:px-8">
        <div className="mb-12">
          <h4 className="mb-4 text-center text-xl font-semibold md:text-2xl">
            Pourquoi choisir Velya-tech ? (04)
          </h4>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground">
            Velya-tech vous propose des développeurs qualifiés pour créer des applications performantes et innovantes, adaptées à vos besoins et à la croissance de votre entreprise.
          </p>

        </div>


        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          {reasons.map((reason) => (
            <div key={reason.number} className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-primary">{reason.number}</span>
                <h5 className="text-lg font-semibold md:text-xl">{reason.title}</h5>
              </div>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
