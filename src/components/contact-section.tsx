"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Nous contacter</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Vous avez des questions ou besoin d&apos;aide? N&apos;hésitez pas à nous contacter.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Votre email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Sujet</Label>
              <Input id="subject" placeholder="Le sujet de votre message" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Votre message"
                className="min-h-32"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-white">
              Envoyer le message
            </Button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Ou contactez-nous directement à{" "}
              <a
                href="mailto:Contact@velia-tech.com"
                className="text-primary hover:underline"
              >
                Contact@velia-tech.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
