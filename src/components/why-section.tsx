import { Card, CardContent, CardHeader } from "./ui/card";

export default function WhySection() {
  const reasons = [
    {
      number: "01",
      title: "Solutions Digitales Sur-Mesure",
      description: "Nous développons des solutions personnalisées pour répondre aux besoins spécifiques de votre entreprise, en intégrant des technologies innovantes dans les domaines du développement web, mobile et logiciel."
    },
    {
      number: "02",
      title: "Accompagnement dans la Transformation Digitale",
      description: "Nous facilitons la transition numérique de votre entreprise en mettant en place des solutions qui vous permettent de rester compétitif, agile et à la pointe de la technologie."
    },
    {
      number: "03",
      title: "Intégration de Technologies de Pointe",
      description: "Nous intégrons des technologies modernes et évolutives pour connecter vos systèmes existants, qu'il s'agisse d'applications mobiles, de plateformes web ou d'outils internes, tout en assurant une parfaite fluidité des processus."
    },
    {
      number: "04",
      title: "Sécurité et Conformité Renforcées",
      description: "Nos solutions sont conçues pour garantir un niveau de sécurité élevé, avec des mécanismes de protection des données et des transactions sensibles, en conformité avec les standards les plus stricts de l'industrie."
    }
  ];

  return (
    <section id="why" className="py-20">
      <div className="container px-4 md:px-8">
        <div className="mb-12">
          <h4 className="mb-4 text-center text-xl font-semibold md:text-2xl">
            Pourquoi choisir Velya-tech? (04)
          </h4>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground">
            Notre solution offre des avantages exceptionnels que les services financiers traditionnels ne peuvent égaler.
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
