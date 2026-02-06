import { useState } from 'react';
import { useLanguage } from '@/app/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Users, TrendingUp, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
  onSkip: () => void;
}

export function OnboardingScreen({ onComplete, onSkip }: OnboardingScreenProps) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Users,
      title: t.onboarding.slide1Title,
      text: t.onboarding.slide1Text,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: TrendingUp,
      title: t.onboarding.slide2Title,
      text: t.onboarding.slide2Text,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Shield,
      title: t.onboarding.slide3Title,
      text: t.onboarding.slide3Text,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Skip Button */}
      <div className="p-4 flex justify-end">
        <Button variant="ghost" onClick={onSkip} className="text-gray-600">
          {t.onboarding.skip}
        </Button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className={`w-32 h-32 rounded-full ${slide.bgColor} flex items-center justify-center mb-8`}>
          <Icon className={`w-16 h-16 ${slide.color}`} />
        </div>

        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          {slide.title}
        </h2>

        <p className="text-center text-gray-600 text-lg leading-relaxed max-w-md">
          {slide.text}
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mb-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-green-600'
                : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="p-6 flex gap-4">
        {currentSlide > 0 && (
          <Button
            variant="outline"
            onClick={handlePrev}
            className="flex-1 h-14"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            {t.common.back}
          </Button>
        )}
        <Button
          onClick={handleNext}
          className="flex-1 h-14 bg-green-600 hover:bg-green-700"
        >
          {currentSlide === slides.length - 1 ? t.onboarding.getStarted : t.common.next}
          {currentSlide < slides.length - 1 && <ChevronRight className="w-5 h-5 ml-2" />}
        </Button>
      </div>
    </div>
  );
}
