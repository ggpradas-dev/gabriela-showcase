import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto container-padding">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
          {t.experience.title}
        </h2>
        
        <div className="space-y-6 animate-slide-up">
          {t.experience.jobs.map((job, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      {job.company}
                    </p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    {job.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  {job.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}