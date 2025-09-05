"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-primary">Mchess</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                Play
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                Learn
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                Puzzles
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                Community
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                Premium
              </a>
            </div>
          </div>

          {/* Desktop Auth & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-accent transition-colors font-medium">
                Play
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-accent transition-colors font-medium">
                Learn
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-accent transition-colors font-medium">
                Puzzles
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-accent transition-colors font-medium">
                Community
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-accent transition-colors font-medium">
                Premium
              </a>
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
