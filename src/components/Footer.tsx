import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-4xl mx-auto container-padding py-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}