import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Statistik | Nexus analyseoverblik" },
      {
        name: "description",
        content:
          "Fuldt overblik over besøgende, sidevisninger, sessionslængde, bounce rate, kilder, enheder og lande.",
      },
      { property: "og:title", content: "Statistik | Nexus analyseoverblik" },
      {
        property: "og:description",
        content:
          "Fuldt overblik over besøgende, sidevisninger, sessionslængde, bounce rate, kilder, enheder og lande.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StatsPage,
});

const period = "16.–23. august 2026";

const metrics = [
  { label: "Besøgende", value: "1", hint: "Unikke besøgende i perioden" },
  { label: "Sidevisninger", value: "3", hint: "Samlede sidevisninger" },
  { label: "Sidevisninger pr. besøg", value: "3,0", hint: "Gennemsnit pr. session" },
  { label: "Sessionslængde", value: "20,7 s", hint: "Gennemsnitlig varighed" },
  { label: "Bounce rate", value: "0 %", hint: "Besøg med kun én side" },
];

const series = [
  { date: "16. aug", visitors: 0, pageviews: 0, duration: 0 },
  { date: "17. aug", visitors: 0, pageviews: 0, duration: 0 },
  { date: "18. aug", visitors: 0, pageviews: 0, duration: 0 },
  { date: "19. aug", visitors: 0, pageviews: 0, duration: 0 },
  { date: "20. aug", visitors: 0, pageviews: 0, duration: 0 },
  { date: "21. aug", visitors: 0, pageviews: 0, duration: 0 },
  { date: "22. aug", visitors: 0, pageviews: 0, duration: 0 },
  { date: "23. aug", visitors: 1, pageviews: 3, duration: 20.73 },
];

const breakdowns = [
  { title: "Sider", rows: [{ label: "/", value: 1 }] },
  { title: "Kilder", rows: [{ label: "Direkte", value: 1 }] },
  { title: "Enheder", rows: [{ label: "Desktop", value: 1 }] },
  { title: "Lande", rows: [{ label: "Danmark (DK)", value: 1 }] },
];

function StatsPage() {
  const maxPageviews = Math.max(...series.map((d) => d.pageviews), 1);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-coral" />
            <span className="text-lg font-bold tracking-tight">Nexus</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Tilbage til forsiden
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Statistik</h1>
        <p className="mt-3 text-muted-foreground">Alle analysetal for perioden {period}.</p>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((m) => (
            <Card key={m.label}>
              <CardHeader className="pb-2">
                <CardDescription>{m.label}</CardDescription>
                <CardTitle className="text-3xl text-primary">{m.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{m.hint}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Udvikling over tid</h2>
          <Card className="mt-4">
            <CardContent className="pt-6">
              <div className="flex h-48 items-end gap-3">
                {series.map((d) => (
                  <div key={d.date} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t bg-primary/80"
                      style={{ height: `${(d.pageviews / maxPageviews) * 100}%`, minHeight: "2px" }}
                      aria-label={`${d.date}: ${d.pageviews} sidevisninger`}
                    />
                    <span className="text-xs text-muted-foreground">{d.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/50 text-left">
                <tr>
                  <th className="px-4 py-3 font-medium">Dato</th>
                  <th className="px-4 py-3 font-medium">Besøgende</th>
                  <th className="px-4 py-3 font-medium">Sidevisninger</th>
                  <th className="px-4 py-3 font-medium">Sessionslængde (s)</th>
                </tr>
              </thead>
              <tbody>
                {series.map((d) => (
                  <tr key={d.date} className="border-t">
                    <td className="px-4 py-3">{d.date}</td>
                    <td className="px-4 py-3">{d.visitors}</td>
                    <td className="px-4 py-3">{d.pageviews}</td>
                    <td className="px-4 py-3">{d.duration.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {breakdowns.map((b) => (
            <Card key={b.title}>
              <CardHeader>
                <CardTitle className="text-base">{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {b.rows.map((r) => (
                  <div key={r.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{r.label}</span>
                    <span className="font-semibold">{r.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
