import { useState } from "react";
import { DashboardPage } from "./DashboardPage";
import { ReportsPage } from "./ReportsPage";
import { Sidebar } from "./Sidebar";
import { useLanguage } from "../LanguageContext";

import { MapPage } from "./MapPage";
import { AlertsPage } from "./AlertsPage";
import { InsightsPage } from "./InsightsPage";
import { SettingsPage } from "./SettingsPage";

export function WebDashboard() {
  const [currentPage, setCurrentPage] = useState<string>("dashboard");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen bg-[#f3f4f6] font-sans overflow-hidden">
      <Sidebar currentPage={currentPage} onNavigate={handleNavigation} />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 -z-10" />

        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth">
          {currentPage === "dashboard" && <DashboardPage onNavigate={handleNavigation} />}
          {currentPage === "reports" && <ReportsPage onNavigate={handleNavigation} />}
          {currentPage === "map" && <MapPage />}
          {currentPage === "alerts" && <AlertsPage />}
          {currentPage === "insights" && <InsightsPage />}
          {currentPage === "settings" && <SettingsPage />}
        </div>
      </main>
    </div>
  );
}