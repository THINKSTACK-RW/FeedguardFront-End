import { useEffect } from 'react';
import { useLanguage } from '@/app/LanguageContext';
import { Leaf } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full bg-gradient-to-br from-green-600 to-green-700 flex flex-col items-center justify-center p-8 text-white">
      <div className="mb-8 animate-bounce">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <Leaf className="w-14 h-14 text-green-600" />
        </div>
      </div>
      
      <h1 className="text-5xl font-bold mb-4">{t.common.feedguard}</h1>
      <p className="text-center text-lg opacity-90 max-w-sm">
        {t.splash.tagline}
      </p>
      
      <div className="mt-12">
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
