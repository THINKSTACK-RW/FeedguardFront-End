import { useLanguage, Language } from '@/app/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Check, Globe } from 'lucide-react';

interface LanguageSelectionScreenProps {
  onComplete: () => void;
}

export function LanguageSelectionScreen({ onComplete }: LanguageSelectionScreenProps) {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: 'rw', name: 'Kinyarwanda', nativeName: 'Ikinyarwanda' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
  ];

  return (
    <div className="h-full flex flex-col bg-white p-6">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Globe className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {t.language.selectLanguage}
        </h1>
        <p className="text-gray-600">Select your preferred language</p>
      </div>

      {/* Language Options */}
      <div className="flex-1 space-y-3">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full p-6 rounded-xl border-2 transition-all ${
              language === lang.code
                ? 'border-green-600 bg-green-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="font-semibold text-lg text-gray-800">
                  {lang.nativeName}
                </div>
                <div className="text-sm text-gray-600">{lang.name}</div>
              </div>
              {language === lang.code && (
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Continue Button */}
      <Button
        onClick={onComplete}
        className="w-full h-14 bg-green-600 hover:bg-green-700 text-lg mt-6"
      >
        {t.language.continue}
      </Button>
    </div>
  );
}
