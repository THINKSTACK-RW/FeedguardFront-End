import { Shield, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MobileWelcomeProps {
  onNavigate: (screen: string) => void;
}

export function MobileWelcome({ onNavigate }: MobileWelcomeProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-6">
      {/* Language Switcher */}
      <div className="absolute top-4 left-4">
        <LanguageSwitcher />
      </div>

      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-lg">
              <Shield className="w-14 h-14 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-4xl text-gray-900">{t.welcome.title}</h1>
          <p className="text-xl text-gray-700">
            {t.welcome.subtitle}
          </p>
        </div>

        {/* Message */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.welcome.message}
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => onNavigate("report")}
          className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 rounded-xl shadow-md"
        >
          {t.welcome.reportButton}
        </Button>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-2xl text-green-600">1,247</p>
            <p className="text-sm text-gray-600">{t.welcome.householdsReporting}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-2xl text-green-600">23</p>
            <p className="text-sm text-gray-600">{t.welcome.communitiesProtected}</p>
          </div>
        </div>
      </div>
    </div>
  );
}