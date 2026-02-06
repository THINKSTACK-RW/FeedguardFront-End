import { useState } from 'react';
import { useLanguage } from '@/app/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Phone, Shield } from 'lucide-react';

interface RegistrationScreenProps {
  onComplete: () => void;
}

export function RegistrationScreen({ onComplete }: RegistrationScreenProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    if (phone.length >= 10) {
      setStep('otp');
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      onComplete();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white p-6">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          {step === 'phone' ? (
            <Phone className="w-10 h-10 text-green-600" />
          ) : (
            <Shield className="w-10 h-10 text-green-600" />
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {t.registration.title}
        </h1>
      </div>

      {/* Form */}
      <div className="flex-1">
        {step === 'phone' ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="phone" className="text-lg mb-2 block">
                {t.registration.phoneLabel}
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t.registration.phonePlaceholder}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-14 text-lg"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                {t.registration.privacyNote}
              </p>
            </div>

            <Button
              onClick={handleSendOTP}
              disabled={phone.length < 10}
              className="w-full h-14 bg-green-600 hover:bg-green-700 text-lg"
            >
              {t.registration.sendOTP}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <Label htmlFor="otp" className="text-lg mb-2 block">
                {t.registration.otpLabel}
              </Label>
              <Input
                id="otp"
                type="text"
                placeholder={t.registration.otpPlaceholder}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="h-14 text-lg text-center tracking-widest"
                maxLength={6}
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Code sent to {phone}
              </p>
            </div>

            <Button
              onClick={handleVerifyOTP}
              disabled={otp.length !== 6}
              className="w-full h-14 bg-green-600 hover:bg-green-700 text-lg"
            >
              {t.registration.verifyOTP}
            </Button>

            <Button
              variant="ghost"
              onClick={() => setStep('phone')}
              className="w-full"
            >
              {t.common.back}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
