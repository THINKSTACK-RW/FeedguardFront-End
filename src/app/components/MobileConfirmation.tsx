import { CheckCircle2, Home, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../LanguageContext";
import { useEffect, useState } from "react";

interface MobileConfirmationProps {
  onNavigate: (screen: string) => void;
}

export function MobileConfirmation({ onNavigate }: MobileConfirmationProps) {
  const { t } = useLanguage();
  const [reportResult, setReportResult] = useState<{
    risk_level?: string;
    confidence?: number | null;
    prediction_source?: string;
  } | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("last_food_report_result");
    if (!raw) return;
    try {
      setReportResult(JSON.parse(raw));
    } catch (error) {
      console.error("Failed to read last report result:", error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-14 h-14 text-white" />
          </div>
        </div>

        {/* Thank you message */}
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <h1 className="text-3xl text-gray-900">{t.confirmation.title}</h1>
          <p className="text-xl text-gray-700">
            {t.confirmation.subtitle}
          </p>
        </div>

        {/* Impact message */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <h3 className="text-lg text-gray-900">
            {t.confirmation.whatNext}
          </h3>
          {reportResult && (
            <div className="rounded-xl bg-blue-50 border border-blue-200 p-3 text-left">
              <p className="text-sm text-blue-700">AI Assessment</p>
              <p className="text-base font-semibold text-blue-900 capitalize">
                Risk: {reportResult.risk_level || "unknown"}
              </p>
              <p className="text-xs text-blue-700">
                Confidence: {typeof reportResult.confidence === "number" ? `${(reportResult.confidence * 100).toFixed(0)}%` : "N/A"}
              </p>
            </div>
          )}
          <div className="space-y-3 text-left">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-700">
                {t.confirmation.message}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-700">
                {t.confirmation.whatNextText}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-700">
                {t.confirmation.needHelpText}
              </p>
            </div>
          </div>
        </div>

        {/* Community impact stats */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
          <p className="text-sm opacity-90 mb-2">{t.welcome.householdsReporting}</p>
          <p className="text-3xl mb-1">1,248</p>
          <p className="text-sm opacity-90">
            {t.welcome.communitiesProtected}
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
          <Button
            onClick={() => onNavigate("home")}
            className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 rounded-xl shadow-md"
          >
            <Home className="w-5 h-5 mr-2" />
            {t.confirmation.backToHome}
          </Button>
          <Button
            variant="outline"
            className="w-full h-14 text-lg rounded-xl border-2"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share FeedGuard
          </Button>
        </div>
      </div>
    </div>
  );
}