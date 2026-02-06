import { useLanguage } from '@/app/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { FileText, Bell, HelpCircle, User, Leaf } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const { t } = useLanguage();
  const hasReportedToday = false; // Mock data

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Leaf className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{t.common.feedguard}</h1>
              <p className="text-sm opacity-90">{t.home.greeting}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('profile')}
            className="text-white hover:bg-green-500"
          >
            <User className="w-6 h-6" />
          </Button>
        </div>

        {/* Report Status */}
        <Card className="bg-white/10 backdrop-blur border-white/20 p-4">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${hasReportedToday ? 'bg-green-400' : 'bg-yellow-400'}`} />
            <p className="text-white text-sm">
              {hasReportedToday ? t.home.lastReportToday : t.home.noReportToday}
            </p>
          </div>
        </Card>
      </div>

      {/* Main Actions */}
      <div className="flex-1 p-6 space-y-4">
        {/* Primary Action */}
        <Button
          onClick={() => onNavigate('report')}
          className="w-full h-20 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg shadow-lg"
        >
          <FileText className="w-6 h-6 mr-3" />
          {t.home.reportButton}
        </Button>

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card
            className="p-6 cursor-pointer hover:shadow-md transition-shadow border-2 border-gray-200 hover:border-green-500"
            onClick={() => onNavigate('history')}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-800">{t.home.viewReports}</p>
            </div>
          </Card>

          <Card
            className="p-6 cursor-pointer hover:shadow-md transition-shadow border-2 border-gray-200 hover:border-green-500"
            onClick={() => onNavigate('alerts')}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <Bell className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="font-semibold text-gray-800">{t.home.alerts}</p>
            </div>
          </Card>
        </div>

        {/* Help Card */}
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">{t.home.help}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t.registration.privacyNote}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('help')}
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
