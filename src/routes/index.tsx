import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moderne Testside | Velkommen" },
      {
        name: "description",
        content: "En hurtig, moderne testside bygget med TanStack Start og Tailwind CSS.",
      },
      { property: "og:title", content: "Moderne Testside | Velkommen" },
      {
        property: "og:description",
        content: "En hurtig, moderne testside bygget med TanStack Start og Tailwind CSS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Rocket,
    title: "Hurtig opstart",
    description: "Kom i gang på få minutter med et moderne fundament klar til produktion.",
  },
  {
    icon: Zap,
    title: "Ydeevne først",
    description: "Bygget med fokus på hastighed, lave bundle-størrelser og glidende interaktioner.",
  },
  {
    icon: Shield,
    title: "Type-sikker",
    description: "Fuld TypeScript-dækning fra router til serverfunktioner og UI-komponenter.",
  },
  {
    icon: BarChart3,
    title: "Skalerbart design",
    description: "Designsystem med semantiske tokens, der vokser pænt med din applikation.",
  },
];

const stats = [
  { value: "99%", label: "Oppe-tid" },
  { value: "<100 ms", label: "API-respons" },
  { value: "10+", label: " integrationsklare" },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-coral" />
            <span className="text-lg font-bold tracking-tight">Nexus</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#features" className="text-muted-foreground hover:text-foreground">
              Funktioner
            </a>
            <a href="#stats" className="text-muted-foreground hover:text-foreground">
              Statistik
            </a>
            <a href="#kontakt" className="text-muted-foreground hover:text-foreground">
              Kontakt
            </a>
          </nav>
          <Button size="sm">Kom i gang</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Abstrakt moderne baggrund"
            className="h-full w-full object-cover"
            width={1440}
            height={900}
          />
          <div className="absolute inset-0 bg-hero/60" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:py-32">
          <Badge
            variant="secondary"
            className="mb-6 bg-background/90 text-foreground backdrop-blur-sm"
          >
            Ny testside live
          </Badge>
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-hero-foreground sm:text-5xl lg:text-6xl">
            En hurtig, moderne testside
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-hero-foreground/80">
            Bygget med TanStack Start, Tailwind CSS og shadcn/ui. Dette er et lynhurtigt fundament,
            du kan tilpasse til dit næste projekt.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              Udforsk funktioner <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-hero-foreground/30 bg-hero-foreground/10 text-hero-foreground hover:bg-hero-foreground/20"
            >
              Se dokumentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Alt du behøver</h2>
          <p className="mt-4 text-muted-foreground">
            Et samlet sæt værktøjer og mønstre, der gør det nemt at bygge professionelle
            applikationer.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="group transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="w-full border-y bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 sm:flex-row lg:py-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-4xl font-bold tracking-tight text-primary">{stat.value}</div>
              <div className="mt-1 text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
        <div className="rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground lg:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Klar til at bygge noget nyt?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Tag dette fundament videre, og tilpas det til dit produkt. Det tager kun få minutter at
            komme i gang.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" className="gap-2">
              <CheckCircle2 className="h-4 w-4" /> Start nu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Kontakt os
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto w-full border-t bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-coral" />
            <span className="font-semibold">Nexus</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexus. En testside bygget med Lovable.
          </p>
        </div>
      </footer>
    </div>
  );
}
