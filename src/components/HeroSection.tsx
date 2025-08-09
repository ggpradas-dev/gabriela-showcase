import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, ExternalLink, Github, Linkedin } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding pt-32">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-xl font-semibold">
                G
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-hero-glow to-transparent opacity-20 blur-md"></div>
            </div>
          </div>

          {/* Available for work badge */}
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/ggpradas-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 no-underline"
              aria-label={`${t.hero.availableForWork} - LinkedIn`}
            >
              <Badge 
                variant="secondary" 
                className="bg-success text-success-foreground hover:bg-success/90 transition-colors inline-flex items-center space-x-2"
              >
                <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse"></div>
                <span>{t.hero.availableForWork}</span>
                <ExternalLink className="w-3 h-3" />
              </Badge>
            </a>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            {t.hero.greeting}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t.hero.subtitle}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <a
                href="mailto:ggpradas.dev@gmail.com"
                className="inline-flex items-center space-x-2"
                aria-label={t.hero.contact}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{t.hero.contact}</span>
              </a>
            </Button>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/ggpradas-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                  aria-label={`${t.hero.linkedin} - External link`}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>{t.hero.linkedin}</span>
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/ggpradas-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                  aria-label={`${t.hero.github} - External link`}
                >
                  <Github className="w-4 h-4" />
                  <span>{t.hero.github}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}