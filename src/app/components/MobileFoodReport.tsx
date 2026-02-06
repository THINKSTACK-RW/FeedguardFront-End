import { useState } from "react";
import { ChevronLeft, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { useLanguage } from "../LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MobileFoodReportProps {
  onNavigate: (screen: string) => void;
}

export function MobileFoodReport({ onNavigate }: MobileFoodReportProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    mealsPerDay: "",
    foodAvailability: "",
    concerns: "",
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleAnswer = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
    if (step < totalSteps) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => onNavigate("confirmation"), 300);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center gap-4 p-4">
          <button
            onClick={() => (step === 1 ? onNavigate("welcome") : setStep(step - 1))}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              {step === 1 && t.report.step1}
              {step === 2 && t.report.step2}
              {step === 3 && t.report.step3}
            </p>
            <Progress value={progress} className="mt-2 h-2" />
          </div>
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="max-w-md mx-auto space-y-6">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="space-y-2">
                <h2 className="text-2xl text-gray-900">
                  {t.report.mealsLabel}
                </h2>
                <p className="text-gray-600">
                  {t.report.statusDescription}
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: t.report.meals3, value: "3+" },
                  { label: t.report.meals2, value: "2" },
                  { label: t.report.meals1, value: "1" },
                  { label: t.report.meals0, value: "0" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer("mealsPerDay", option.value)}
                    className="w-full p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-left text-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900">{option.label}</span>
                      {answers.mealsPerDay === option.value && (
                        <Check className="w-6 h-6 text-green-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="space-y-2">
                <h2 className="text-2xl text-gray-900">
                  {t.report.daysOfFoodLabel}
                </h2>
                <p className="text-gray-600">
                  {t.report.statusDescription}
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: t.report.days7, value: "7+" },
                  { label: t.report.days3, value: "3-7" },
                  { label: t.report.days1, value: "1-2" },
                  { label: t.report.days0, value: "0" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer("foodAvailability", option.value)}
                    className="w-full p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-left text-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900">{option.label}</span>
                      {answers.foodAvailability === option.value && (
                        <Check className="w-6 h-6 text-green-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="space-y-2">
                <h2 className="text-2xl text-gray-900">
                  {t.report.mainConcernLabel}
                </h2>
                <p className="text-gray-600">
                  {t.report.concernsDescription}
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: t.report.concernShortage, value: "shortage" },
                  { label: t.report.concernAfford, value: "afford" },
                  { label: t.report.concernCrop, value: "crop" },
                  { label: t.report.concernNone, value: "none" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer("concerns", option.value)}
                    className="w-full p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-left text-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900">{option.label}</span>
                      {answers.concerns === option.value && (
                        <Check className="w-6 h-6 text-green-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}