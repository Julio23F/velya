"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Pourquoi?", href: "#why" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/#hero" className="flex items-center gap-2 font-bold">
          <span className="text-xl font-bold">Velya-tech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="outline" asChild>
            <Link href="#contact">Se connecter</Link>
          </Button>
          <Button className="bg-primary text-white">
            <Link href="#contact">S'inscrire</Link>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="#contact" onClick={toggleMenu}>Se connecter</Link>
              </Button>
              <Button className="w-full bg-primary text-white" asChild>
                <Link href="#contact" onClick={toggleMenu}>S'inscrire</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
