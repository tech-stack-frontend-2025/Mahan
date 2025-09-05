import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad2, Puzzle, GraduationCap, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    title: "Play Online",
    description: "New Game, Play Bots, Play Friends",
    details: "Challenge players worldwide or practice against AI opponents of varying difficulty levels.",
  },
  {
    icon: Puzzle,
    title: "Solve Puzzles",
    description: "Daily puzzles, themed challenges",
    details: "Sharpen your tactical skills with thousands of puzzles updated daily.",
  },
  {
    icon: GraduationCap,
    title: "Learn",
    description: "Interactive lessons, game review",
    details: "Master chess fundamentals with structured lessons from beginner to grandmaster level.",
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description: "Review vs. AI/players, move suggestions",
    details: "Deep game analysis with engine suggestions to improve your understanding.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-card-foreground mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-card-foreground opacity-80 max-w-2xl mx-auto">
            From casual games to serious study, Mchess provides all the tools for your chess journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-serif text-xl">{feature.title}</CardTitle>
                <CardDescription className="font-medium text-accent">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-card-foreground opacity-80 mb-4 leading-relaxed">{feature.details}</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
