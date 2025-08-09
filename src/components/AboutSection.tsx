import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto container-padding">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
          {t.about.title}
        </h2>
        
        <Card className="animate-slide-up">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.about.content}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}