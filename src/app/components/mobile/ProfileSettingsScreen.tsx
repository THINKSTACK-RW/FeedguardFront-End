import { useLanguage } from '@/app/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';
import { ChevronLeft, User, Phone, MapPin, Globe, Bell, LogOut, ChevronRight } from 'lucide-react';
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';

interface ProfileSettingsScreenProps {
  onNavigate: (screen: string) => void;
}

export function ProfileSettingsScreen({ onNavigate }: ProfileSettingsScreenProps) {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('home')}
            className="text-white hover:bg-green-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{t.profileSettings.title}</h1>
            <p className="text-sm opacity-90">Manage your account</p>
          </div>
        </div>

        {/* Profile Card */}
        <Card className="bg-white/10 backdrop-blur border-white/20 p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-white">
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-sm opacity-90">+250 788 123 456</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        {/* Account Information */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            Account Information
          </h3>
          <Card className="divide-y">
            <SettingItem
              icon={<Phone className="w-5 h-5 text-gray-600" />}
              label={t.profileSettings.phoneNumber}
              value="+250 788 123 456"
            />
            <SettingItem
              icon={<MapPin className="w-5 h-5 text-gray-600" />}
              label={t.profileSettings.location}
              value="Kigali, Rwanda"
            />
          </Card>
        </div>

        {/* Preferences */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            Preferences
          </h3>
          <Card className="divide-y">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-800">{t.profileSettings.languagePreference}</span>
              </div>
              <div className="ml-8">
                <LanguageSwitcher />
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-800">{t.profileSettings.notifications}</span>
              </div>
              <Switch defaultChecked />
            </div>
          </Card>
        </div>

        {/* About */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            About
          </h3>
          <Card className="divide-y">
            <SettingItem
              label="Version"
              value="1.0.0"
              onClick={() => {}}
            />
            <SettingItem
              label="Privacy Policy"
              onClick={() => {}}
              showChevron
            />
            <SettingItem
              label="Terms of Service"
              onClick={() => {}}
              showChevron
            />
          </Card>
        </div>

        {/* Logout Button */}
        <Button
          variant="outline"
          className="w-full h-12 border-2 border-red-600 text-red-600 hover:bg-red-50"
          onClick={() => onNavigate('splash')}
        >
          <LogOut className="w-5 h-5 mr-2" />
          {t.profileSettings.logout}
        </Button>
      </div>
    </div>
  );
}

interface SettingItemProps {
  icon?: React.ReactNode;
  label: string;
  value?: string;
  onClick?: () => void;
  showChevron?: boolean;
}

function SettingItem({ icon, label, value, onClick, showChevron }: SettingItemProps) {
  return (
    <div
      className={`p-4 ${onClick ? 'cursor-pointer hover:bg-gray-50' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-medium text-gray-800">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          {value && <span className="text-gray-600 text-sm">{value}</span>}
          {showChevron && <ChevronRight className="w-5 h-5 text-gray-400" />}
        </div>
      </div>
    </div>
  );
}
