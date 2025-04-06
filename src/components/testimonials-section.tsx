"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "FARALAHY Julio",
      role: "Lead Developer",
      quote: "Je dirige une équipe de développeurs expérimentés avec pour objectif de livrer des solutions robustes, efficaces et alignées sur les besoins du client.",
      avatar: "/assets/images/pdp.jpg"
    },
    {
      name: "FARALAHY Julio",
      role: "Lead Developer",
      quote: "Je dirige une équipe de développeurs expérimentés avec pour objectif de livrer des solutions robustes, efficaces et alignées sur les besoins du client.",
      avatar: "/assets/images/pdp.jpg"
    },
    {
      name: "FARALAHY Julio",
      role: "Lead Developer",
      quote: "Je dirige une équipe de développeurs expérimentés avec pour objectif de livrer des solutions robustes, efficaces et alignées sur les besoins du client.",
      avatar: "/assets/images/pdp.jpg"
    },
    {
      name: "FARALAHY Julio",
      role: "Lead Developer",
      quote: "Je dirige une équipe de développeurs expérimentés avec pour objectif de livrer des solutions robustes, efficaces et alignées sur les besoins du client.",
      avatar: "/assets/images/pdp.jpg"
    },
    
    
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium text-primary">Notre équipe</p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Membre de notre notre<br /> équipe
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Consultez ici les membre de notre équipe et leur role:
          </p>
        </div>
        {/* <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Membre de notre notre<br /> équipe</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consultez ici les membre de notre équipe et leur role:
          </p>
        </div> */}

        <div className="mt-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, key) => (
                <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full border-0 shadow-sm">
                      <CardContent className="flex flex-col items-center p-6">
                        <Avatar className="h-16 w-16 mb-4">
                          {testimonial.avatar ? (
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          ) : (
                            <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                          )}
                        </Avatar>
                        <blockquote className="mb-4 text-center text-sm text-muted-foreground">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="text-center">
                          <h5 className="font-medium">{testimonial.name}</h5>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
