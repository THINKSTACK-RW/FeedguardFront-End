import { useLanguage } from '@/app/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { ChevronLeft, Bell, CheckCircle, AlertTriangle } from 'lucide-react';

interface AlertsScreenProps {
  onNavigate: (screen: string) => void;
}

export function AlertsScreen({ onNavigate }: AlertsScreenProps) {
  const { t } = useLanguage();

  // Mock data
  const alerts = [
    {
      id: 1,
      type: 'info',
      title: 'Food conditions being reviewed',
      message: t.alerts.reviewMessage,
      date: '2026-01-17',
    },
    {
      id: 2,
      type: 'success',
      title: 'Support programs planned',
      message: t.alerts.supportMessage,
      date: '2026-01-15',
    },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
      case 'info':
      default:
        return <Bell className="w-6 h-6 text-green-600" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
      default:
        return 'bg-green-50 border-green-200';
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-yellow-600 text-white p-6">
        <div className="flex items-center gap-4 mb-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('home')}
            className="text-white hover:bg-yellow-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{t.alerts.title}</h1>
            <p className="text-sm opacity-90">Community updates and notifications</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {alerts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Bell className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg mb-2">{t.alerts.noAlerts}</p>
            <p className="text-gray-500 text-sm">We'll notify you when there are important updates</p>
          </div>
        ) : (
          <div className="space-y-4">
            {alerts.map((alert) => (
              <Card
                key={alert.id}
                className={`p-5 border-2 ${getAlertColor(alert.type)}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {alert.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(alert.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Support Card */}
            <Card className="p-5 bg-gradient-to-br from-green-50 to-green-100 border-green-200 border-2">
              <div className="text-center">
                <p className="text-sm text-green-800 mb-3">
                  {t.alerts.supportMessage}
                </p>
                <Button
                  onClick={() => onNavigate('help')}
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Get Help
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
