import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-16">
      <div className="container px-4 md:px-8">
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">
            Profitez de l'expertise de notre équipe.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h4 className="font-semibold">Nous contacter</h4>
            <Link
              href="mailto:Contact@velia-tech.com"
              className="block text-muted-foreground hover:text-primary"
            >
              Contact@velia-tech.com
            </Link>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Liens rapides</h4>
            <ul className="space-y-2">
              {[
                { name: "Acceuil", href: "#hero" },
                { name: "Services", href: "#services" },
                { name: "Pourquoi?", href: "#why" },
                { name: "Tarifs", href: "#pricing" },
                { name: "Témoignages", href: "#testimonials" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Réseaux sociaux</h4>
            <ul className="space-y-2">
              {[
                { name: "LinkedIn", href: "#" },
                { name: "Instagram", href: "#" },
                { name: "Facebook", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Mentions légales</h4>
            <ul className="space-y-2">
              {[
                { name: "Politique de confidentialité", href: "#" },
                { name: "Term de service", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border py-8">
          <div className="text-sm text-muted-foreground">
            2025 Velya-tech • Fait par{" "}
            <Link href="https://julio23f.vercel.app/" className="text-primary hover:underline">
              FARALAHY Julio.
            </Link>
          </div>
          <Link
            href="#hero"
            className="flex items-center gap-2 rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-white"
          >
            <ChevronUp className="h-4 w-4" />
            <span className="sr-only">Revenir en haut</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
