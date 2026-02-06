import { Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const languageOptions: { code: Language; label: string }[] = [
    { code: 'rw', label: t.language.kinyarwanda },
    { code: 'en', label: t.language.english },
    { code: 'fr', label: t.language.french },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 min-w-[120px]">
          <Languages className="w-4 h-4" />
          <span>{t.language.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onClick={() => setLanguage(option.code)}
            className={language === option.code ? 'bg-green-50 text-green-700' : ''}
          >
            <span className={language === option.code ? 'font-semibold' : ''}>
              {option.label}
              {language === option.code && ' ✓'}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}