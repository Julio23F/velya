import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function PricingSection() {
  const plans = [
    {
      name: "Basique",
      description: "Pour des simples utilisateurs",
      price: "0$",
      features: [
        "Activation carte virtuelle : 5$",
        "Rechargement : 4% (frais)",
        "Transfert d'argent : 4% (frais)",
        "Paiement via lien : 4% (frais)",
        "Frais transactions (MGA-USD) : 0.3$",
        "Autres transaction : 0.3$ + 1%",
        "Carte physique : Non disponible",
        "Retraits via GAB : Non disponible"
      ]
    },
    {
      name: "Professionnel",
      description: "Pour des petits commerants ou freelances",
      price: "7$/mois",
      features: [
        "Activation carte virtuelle : 5$",
        "Rechargement : 4% (frais)",
        "Transfert d'argent : 4% (frais)",
        "Paiement via lien : 50$ (3.5% frais)",
        "Frais transactions (MGA-USD) : 0.3$",
        "Autres transaction : 0.3$ + 1%",
        "Carte physique : Non disponible",
        "Retraits via GAB : Non disponible"
      ]
    },
    {
      name: "Entreprise",
      description: "Pour des grandes entreprises ou commerants",
      price: "7$/mois + 10$ pour la carte physique",
      features: [
        "Activation carte virtuelle : 5$",
        "Rechargement : 4% (frais)",
        "Transfert d'argent : 4% (frais)",
        "Paiement via lien : 70$ (3.5% frais)",
        "Frais transactions (MGA-USD) : 0.3$",
        "Autres transaction : 0.3$ + 1%",
        "Carte physique : 10$",
        "Retraits via GAB : 2%"
      ]
    }
  ];

  const currencies = [
    "USD", "GBP", "EUR", "BRL", "AUD", "INR", "CAD", "CNY", "RUB"
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-8">
        {/* <div className="mb-12 text-center">
          <h6 className="mb-2 text-sm font-medium text-primary">Tarifs</h6>
          <h2 className="text-3xl font-bold md:text-4xl">
            Simple, Tarification Transparente
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choisissez le forfait qui correspond à vos besoins. Pas de frais cachés, pas de surprises.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col border border-border">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choisir ce plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div> */}

        <div className="mt-20">
          {/* <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">
              TJM
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Nous proposons un TJM compétitif, tout en garantissant l’expertise de développeurs expérimentés et un travail soigné, à la hauteur de vos exigences.
            </p>
          </div> */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Taux Journalier Moyen</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous proposons un TJM compétitif, tout en garantissant l’expertise de développeurs expérimentés et un travail soigné, à la hauteur de vos exigences.
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-4">
            {/* {currencies.map((currency) => (
              <div key={currency} className="flex items-center justify-center">
                <Image
                  src={`https://ext.same-assets.com/1725341107/${currency === "USD" ? "2665694330" : "450616831"}.gif`}
                  alt={currency}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
            ))} */}
          </div>

          <div className="mx-auto mt-12 max-w-md rounded-lg border border-border p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">EURO</span>
                <span className="text-lg font-bold">100</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="https://www.svgrepo.com/show/54669/euro-currency-symbol.svg"
                  alt="EURO"
                  width={30}
                  height={30}
                  className="h-8 w-8 object-contain"
                />
                {/* <span className="ml-2 font-medium">EURO</span> */}
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-muted-foreground">Par</span>
                <span className="text-lg font-bold">jour</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
