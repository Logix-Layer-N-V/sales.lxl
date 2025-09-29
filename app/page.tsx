import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, DollarSign, Target, BarChart3, Zap, CheckCircle, Handshake } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { YouTubeModal } from "@/components/youtube-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function LogixLayerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logix-layer-logo.png" alt="Logix Layer Logo" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Logix Layer N.V.</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge variant="secondary" className="mb-6">
            AI-Powered Data & IT-Automation Solution
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Stop met reageren — <span className="text-accent">begin te leiden</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            {"Wij bouwen vertrouwen door gerichte oplossingen die tijd, \ngeld én focus optimaliseren binnen uw organisatie. \nOnze AI-powered\nDATA & IT Automation solutions geven u helderheid, controle en vertrouwen."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://elevenlabs.io/app/talk-to?agent_id=agent_3301k6asmx4mftkanvkz6jawd96c" ><Button size="lg" className="text-lg px-8">
              Start 10-minuten audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button></a> 
            <YouTubeModal
              videoId="4Y03Vv7PGr8"
              triggerText="Bekijk demo"
              variant="outline"
              size="lg"
              className="text-lg px-8"
            />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Herkent u dit probleem?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              {"De meeste ondernemers met wie ik spreek, verdrinken in Data — maar hongeren naar inzicht"}
            </p>
          </div>

          <Card className="p-8 mb-8 border-destructive/20 bg-destructive/5">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold mb-2">Tijd verspilling</h3>
                  <p className="text-sm text-muted-foreground">
                    Uren besteed aan handmatige rapportages in plaats van strategische groei
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold mb-2">Geld inefficiëntie</h3>
                  <p className="text-sm text-muted-foreground">
                    Verborgen kosten en operationele verspilling door gebrek aan inzicht
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold mb-2">Focus verlies</h3>
                  <p className="text-sm text-muted-foreground">
                    Brandjes blussen in plaats van bouwen aan de toekomst van uw bedrijf
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              {"U heeft systemen, harde werkende mensen… maar beslissingen voelen nog steeds als gokken. Klopt dat?"}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Daarom hebben we Logix Layer opgericht</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto">
              Wij verkopen niet alleen automatisering — wij leveren helderheid, controle en vertrouwen. Onze AI-Powered
              Data & IT automation solutions zijn op maat gemaakt voor uw bedrijf.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-accent/20 bg-accent/5">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tijd</h3>
                <p className="text-muted-foreground mb-4">
                  {
                    "Stel u voor: 15+ uur per week minder handmatig data verzamelen. Uw team werkt aan strategie — niet aan Excel-sheets."
                  }
                </p>
                <div className="text-sm font-medium text-accent">15+ uur per week bespaard</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-accent/20 bg-accent/5">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Geld</h3>
                <p className="text-muted-foreground mb-4">
                  {
                    "Een klant verlaagde operationele verspilling met 22% in 60 dagen — alleen door de juiste workflows te automatiseren."
                  }
                </p>
                <div className="text-sm font-medium text-accent">22% kostenbesparing in 60 dagen</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-accent/20 bg-accent/5">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Focus</h3>
                <p className="text-muted-foreground mb-4">
                  {
                    "U krijgt één live dashboard dat u precies vertelt waar u moet investeren, inkrimpen of schakelen — zodat u beter slaapt én sneller groeit."
                  }
                </p>
                <div className="text-sm font-medium text-accent">Één dashboard, volledige controle</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Op maat, geen standaardoplossing</h2>
            <p className="text-lg text-muted-foreground text-balance">
              {
                "Wij doen geen 'one-size-fits-all'. We beginnen met een korte audit van uw grootste pijnpunt — in slechts 10 minuten."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">Snelle implementatie</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  De meeste klanten zijn binnen 5 dagen live met hun eerste automatiseringsworkflow.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    10-minuten audit van uw pijnpunten
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Op maat gemaakte oplossing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Geen onnodige frutsels
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                    <Handshake className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">Slimme prijsstelling</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Onze pilots starten met een laag-risico investering — zodat u ROI ziet voordat u verdergaat.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    One-time setup fee
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Maandelijkse API kosten
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Support fee
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Integration Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-lg"></div>
            <img
              src="/modern-data-integration-dashboard-with-ai-automati.jpg"
              alt="AI-powered data integration dashboard"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-background/80 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Dashboard Voorbeeld</h3>
                <p className="text-muted-foreground">Real-time inzichten in uw bedrijfsprocessen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            {"Als u het zat bent om te gokken, geld te verspillen of wakker te liggen met 'wat als?'"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            {
              "heeft u, momenteel 10 minuten om uw grootste bottleneck te analyseren. Als het logisch is, plannen we een 15-minuten demo van uw oplossing — geen generieke presentatie."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="text-lg px-8">
              Start 10-minuten audit call call 
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Plan 15-minuten demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Akkoord? Laten we dat oplossen.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/logix-layer-logo.png" alt="Logix Layer Logo" width={24} height={24} className="w-6 h-6" />
              <span className="font-semibold">Logix Layer N.V.</span>
            </div>
            <div className="text-sm text-muted-foreground">AI-Powered Data & IT-Automation Solution</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
