import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const PROJECT_LINKS = {
  'Blog Project': {
    code: 'https://github.com/ggpradas-dev/blog-project',
    demo: 'https://blog-project-q767.onrender.com/',
  },
  'App Store': {
    code: 'https://github.com/ggpradas-dev/app-store',
    demo: 'https://advisercloud-project-a027e.firebaseapp.com/dashboard',
  },
};

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto container-padding">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
          {t.projects.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          {t.projects.items.map((project, index) => {
            const links = PROJECT_LINKS[project.title as keyof typeof PROJECT_LINKS];
            
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <Badge variant="outline">{project.badge}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2"
                        aria-label={`${project.codeLabel} - ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                        <span>{project.codeLabel}</span>
                      </a>
                    </Button>
                    
                    <Button size="sm" asChild>
                      <a
                        href={links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2"
                        aria-label={`${project.demoLabel} - ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{project.demoLabel}</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}