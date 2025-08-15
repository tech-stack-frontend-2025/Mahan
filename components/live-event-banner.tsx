import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Trophy } from "lucide-react"

export function LiveEventBanner() {
  return (
    <section className="py-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
          <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Trophy className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-serif font-bold">Mchess Championship</h3>
                <p className="text-primary-foreground/80">Part of the Community Championships</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-center">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="font-semibold">AUG 14 - 15</span>
              </div>
              <Button variant="secondary" size="lg">
                Watch Now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
