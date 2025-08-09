import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="flex items-center gap-3 mb-16 animate-fade-in">
          <div className="p-2 bg-primary/10 rounded-lg">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t.experience.title}
          </h2>
        </div>
        
        <div className="relative animate-slide-up">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
          
          <div className="space-y-12">
            {t.experience.jobs.map((job, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0 pb-8">
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Left column - Job info */}
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {job.title}
                      </h3>
                      <p className="text-lg font-medium text-foreground mb-2">
                        {job.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {job.period}
                      </p>
                    </div>
                    
                    {/* Right column - Description */}
                    <div className="md:col-span-3">
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}