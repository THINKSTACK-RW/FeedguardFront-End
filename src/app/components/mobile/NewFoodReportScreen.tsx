import { useState } from 'react';
import { useLanguage } from '@/app/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Checkbox } from '@/app/components/ui/checkbox';
import { ChevronLeft, Check, Sparkles } from 'lucide-react';
import { ReportService } from '@/Services/reportService';
import { FoodRiskPrediction } from '@/Services/types';

// Generate a UUID for the current user session
const CURRENT_USER_ID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  const r = Math.random() * 16 | 0;
  const v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

interface NewFoodReportScreenProps {
  onNavigate: (screen: string) => void;
}

export function NewFoodReportScreen({ onNavigate }: NewFoodReportScreenProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prediction, setPrediction] = useState<FoodRiskPrediction | null>(null);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    meals: '',
    daysOfFood: '',
    foodChange: '',
    shocks: [] as string[],
  });

  const handleMealSelect = (value: string) => {
    setFormData({ ...formData, meals: value });
  };

  const handleDaysSelect = (value: string) => {
    setFormData({ ...formData, daysOfFood: value });
  };

  const handleChangeSelect = (value: string) => {
    setFormData({ ...formData, foodChange: value });
  };

  const handleShockToggle = (shock: string) => {
    const shocks = formData.shocks.includes(shock)
      ? formData.shocks.filter((s) => s !== shock)
      : [...formData.shocks, shock];
    setFormData({ ...formData, shocks });
  };

  const buildPayload = () => ({
    citizen_id: CURRENT_USER_ID,
    meals_per_day: Number(formData.meals),
    days_of_food_left: Number(formData.daysOfFood),
    food_change_type: formData.foodChange,
    shocks_experienced: formData.shocks,
    channel: 'APP',
  });

  const handleNext = async () => {
    setSubmitError('');
    if (step < 4) {
      setStep(step + 1);
    } else {
      try {
        setIsSubmitting(true);
        const payload = buildPayload();
        const riskPreview = await ReportService.predictRisk({
          citizen_id: payload.citizen_id,
          meals_per_day: payload.meals_per_day,
          days_of_food_left: payload.days_of_food_left,
          food_change_type: payload.food_change_type,
          shocks_experienced: payload.shocks_experienced,
        });
        setPrediction(riskPreview);

        const response = await ReportService.submitReport(payload);
        const finalConfidence = response.response.confidence ?? riskPreview.confidence ?? null;
        sessionStorage.setItem(
          'last_food_report_result',
          JSON.stringify({
            risk_level: response.response.risk_level,
            confidence: finalConfidence,
            prediction_source: response.response.prediction_source ?? riskPreview.source ?? 'ai',
          })
        );
        onNavigate('confirmation');
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : 'Failed to submit report');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onNavigate('home');
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.meals !== '';
      case 2:
        return formData.daysOfFood !== '';
      case 3:
        return formData.foodChange !== '';
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-6">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="text-white hover:bg-green-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{t.report.title}</h1>
            <p className="text-sm opacity-90">
              {step === 1 && t.report.step1}
              {step === 2 && t.report.step2}
              {step === 3 && t.report.step3}
              {step === 4 && t.report.step4}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full ${
                s <= step ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Step 1: Meals Per Day */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {t.report.mealsQuestion}
              </h2>
              <p className="text-gray-600">Select the number of meals your household ate yesterday</p>
            </div>

            <OptionCard
              selected={formData.meals === '0'}
              onClick={() => handleMealSelect('0')}
              label={t.report.meals0}
              color="red"
            />
            <OptionCard
              selected={formData.meals === '1'}
              onClick={() => handleMealSelect('1')}
              label={t.report.meals1}
              color="orange"
            />
            <OptionCard
              selected={formData.meals === '2'}
              onClick={() => handleMealSelect('2')}
              label={t.report.meals2}
              color="yellow"
            />
            <OptionCard
              selected={formData.meals === '3'}
              onClick={() => handleMealSelect('3')}
              label={t.report.meals3}
              color="green"
            />
          </div>
        )}

        {/* Step 2: Food Availability */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {t.report.availabilityQuestion}
              </h2>
              <p className="text-gray-600">How long will your current food last?</p>
            </div>

            <OptionCard
              selected={formData.daysOfFood === '0'}
              onClick={() => handleDaysSelect('0')}
              label={t.report.days0}
              color="red"
            />
            <OptionCard
              selected={formData.daysOfFood === '1'}
              onClick={() => handleDaysSelect('1')}
              label={t.report.days1}
              color="orange"
            />
            <OptionCard
              selected={formData.daysOfFood === '3'}
              onClick={() => handleDaysSelect('3')}
              label={t.report.days3}
              color="yellow"
            />
            <OptionCard
              selected={formData.daysOfFood === '7'}
              onClick={() => handleDaysSelect('7')}
              label={t.report.days7}
              color="green"
            />
          </div>
        )}

        {/* Step 3: Food Change */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {t.report.changeQuestion}
              </h2>
              <p className="text-gray-600">Have you reduced food quantity or quality recently?</p>
            </div>

            <OptionCard
              selected={formData.foodChange === 'none'}
              onClick={() => handleChangeSelect('none')}
              label={t.report.changeNone}
              color="green"
            />
            <OptionCard
              selected={formData.foodChange === 'quantity'}
              onClick={() => handleChangeSelect('quantity')}
              label={t.report.changeQuantity}
              color="yellow"
            />
            <OptionCard
              selected={formData.foodChange === 'quality'}
              onClick={() => handleChangeSelect('quality')}
              label={t.report.changeQuality}
              color="orange"
            />
            <OptionCard
              selected={formData.foodChange === 'both'}
              onClick={() => handleChangeSelect('both')}
              label={t.report.changeBoth}
              color="red"
            />
          </div>
        )}

        {/* Step 4: Recent Shocks */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {t.report.shocksQuestion}
              </h2>
              <p className="text-gray-600">Select all that apply (optional)</p>
            </div>

            <CheckboxCard
              checked={formData.shocks.includes('income')}
              onCheckedChange={() => handleShockToggle('income')}
              label={t.report.shockIncome}
            />
            <CheckboxCard
              checked={formData.shocks.includes('drought')}
              onCheckedChange={() => handleShockToggle('drought')}
              label={t.report.shockDrought}
            />
            <CheckboxCard
              checked={formData.shocks.includes('flood')}
              onCheckedChange={() => handleShockToggle('flood')}
              label={t.report.shockFlood}
            />
            <CheckboxCard
              checked={formData.shocks.includes('illness')}
              onCheckedChange={() => handleShockToggle('illness')}
              label={t.report.shockIllness}
            />
            <CheckboxCard
              checked={formData.shocks.includes('other')}
              onCheckedChange={() => handleShockToggle('other')}
              label={t.report.shockOther}
            />

            {prediction && (
              <Card className="p-4 border-2 border-blue-200 bg-blue-50">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-blue-700">AI predicted risk</p>
                    <p className="text-base font-semibold text-blue-900 capitalize">{prediction.risk_level}</p>
                    <p className="text-xs text-blue-700">
                      Confidence: {typeof prediction.confidence === 'number' ? `${(prediction.confidence * 100).toFixed(0)}%` : 'N/A'}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {submitError && (
              <Card className="p-3 border-2 border-red-200 bg-red-50">
                <p className="text-sm text-red-700">{submitError}</p>
              </Card>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 border-t">
        <Button
          onClick={handleNext}
          disabled={!canProceed() || isSubmitting}
          className="w-full h-14 bg-green-600 hover:bg-green-700 text-lg"
        >
          {step === 4 ? (isSubmitting ? 'Submitting...' : t.report.submitReport) : t.common.next}
        </Button>
      </div>
    </div>
  );
}

interface OptionCardProps {
  selected: boolean;
  onClick: () => void;
  label: string;
  color: 'red' | 'orange' | 'yellow' | 'green';
}

function OptionCard({ selected, onClick, label, color }: OptionCardProps) {
  const colorClasses = {
    red: 'border-red-500 bg-red-50 text-red-700',
    orange: 'border-orange-500 bg-orange-50 text-orange-700',
    yellow: 'border-yellow-500 bg-yellow-50 text-yellow-700',
    green: 'border-green-500 bg-green-50 text-green-700',
  };

  const selectedColorClasses = {
    red: 'border-red-600 bg-red-100',
    orange: 'border-orange-600 bg-orange-100',
    yellow: 'border-yellow-600 bg-yellow-100',
    green: 'border-green-600 bg-green-100',
  };

  return (
    <Card
      className={`p-5 cursor-pointer border-2 transition-all ${
        selected
          ? selectedColorClasses[color]
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <span className={`text-lg font-medium ${selected ? colorClasses[color] : 'text-gray-800'}`}>
          {label}
        </span>
        {selected && (
          <div className={`w-8 h-8 ${colorClasses[color].split(' ')[0].replace('border-', 'bg-')} rounded-full flex items-center justify-center`}>
            <Check className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
    </Card>
  );
}

interface CheckboxCardProps {
  checked: boolean;
  onCheckedChange: () => void;
  label: string;
}

function CheckboxCard({ checked, onCheckedChange, label }: CheckboxCardProps) {
  return (
    <Card
      className={`p-5 cursor-pointer border-2 transition-all ${
        checked
          ? 'border-green-600 bg-green-50'
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onCheckedChange}
    >
      <div className="flex items-center gap-4">
        <Checkbox checked={checked} onCheckedChange={onCheckedChange} className="w-6 h-6" />
        <span className="text-lg font-medium text-gray-800">{label}</span>
      </div>
    </Card>
  );
}
