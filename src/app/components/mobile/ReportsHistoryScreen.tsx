import { useLanguage } from '@/app/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { useState, useEffect } from 'react';
import { ChevronLeft, FileText, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import { ReportService } from '../../../Services/reportService';

interface ReportsHistoryScreenProps {
  onNavigate: (screen: string) => void;
}

export function ReportsHistoryScreen({ onNavigate }: ReportsHistoryScreenProps) {
  const { t } = useLanguage();
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const history = await ReportService.getHistory("CURRENT_USER");

        const mappedReports = history.map((item, index) => {
          let status = 'normal';
          const r = item.risk_level?.toLowerCase() || '';
          if (r.includes('critical') || r.includes('high')) status = 'critical';
          else if (r.includes('warning') || r.includes('medium')) status = 'warning';

          return {
            id: item.id || index.toString(),
            date: item.date,
            status: status,
            meals: item.meals_per_day,
            daysOfFood: item.days_of_food_left
          };
        });
        setReports(mappedReports);
      } catch (error) {
        console.error("Error fetching report history:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
      case 'critical':
        return <AlertCircle className="w-6 h-6 text-red-600" />;
      default:
        return <CheckCircle className="w-6 h-6 text-gray-600" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'normal':
        return t.reportsHistory.normal;
      case 'warning':
        return t.reportsHistory.warning;
      case 'critical':
        return t.reportsHistory.critical;
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'critical':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6">
        <div className="flex items-center gap-4 mb-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('home')}
            className="text-white hover:bg-blue-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{t.reportsHistory.title}</h1>
            <p className="text-sm opacity-90">{t.reportsHistory.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <p className="text-gray-500">{t.common?.loading || "Loading reports..."}</p>
          </div>
        ) : reports.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg">{t.reportsHistory.noReports}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reports.map((report) => (
              <Card
                key={report.id}
                className={`p-5 border-2 ${getStatusColor(report.status)}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(report.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {new Date(report.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </h3>
                        <p className="text-sm text-gray-600">{getStatusLabel(report.status)}</p>
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="text-gray-600">{t.reportsPage.meals}: </span>
                        <span className="font-medium text-gray-800">{report.meals}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">{t.reportsPage.daysOfFood}: </span>
                        <span className="font-medium text-gray-800">{report.daysOfFood} days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Info Message */}
            <Card className="p-5 bg-blue-50 border-blue-200 border-2">
              <p className="text-sm text-blue-800 text-center">
                {t.reportsHistory.monitoringMessage}
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
