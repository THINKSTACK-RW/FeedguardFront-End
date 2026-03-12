import { fetchApi, buildQueryString } from './api';
import { ReportSummary, DetailedReport, ReportInsight } from './types';

// Define types for regional reports
export interface RegionalReport {
  locationId: string;
  locationName: string;
  district: string;
  sector: string;
  village: string;
  totalResponses: number;
  critical: number;
  warning: number;
  stable: number;
  overallStatus: 'Critical' | 'Warning' | 'Stable';
  avgMealsPerDay: number;
  avgDaysOfFoodLeft: number;
  responses: IndividualResponse[];
}

export interface IndividualResponse {
  id: string;
  citizenId: string;
  citizenName: string;
  citizenPhone: string;
  date: string;
  time: string;
  mealsPerDay: number;
  daysOfFoodLeft: number;
  foodChangeType: string;
  shocksExperienced: string[];
  riskLevel: string;
  status: string;
}

/**
 * Service handling analytics reports, detailed data and insights export
 */
export const AnalyticsReportService = {
    getSummary: async (region_id?: string, date_range: '7d' | '30d' | '90d' = '30d'): Promise<ReportSummary> => {
        const qs = buildQueryString({ region_id, date_range });
        return fetchApi<ReportSummary>(`/reports/summary${qs}`);
    },

    getRegionalReports: async (region_id?: string, status?: 'critical' | 'warning' | 'stable', date_range?: '7d' | '30d' | '90d'): Promise<RegionalReport[]> => {
        const qs = buildQueryString({ region_id, status, date_range });
        return fetchApi<RegionalReport[]>(`/reports/regional${qs}`);
    },

    getDetailedReports: async (region_id?: string, status?: 'critical' | 'warning' | 'stable', date_range?: '7d' | '30d' | '90d'): Promise<DetailedReport[]> => {
        const qs = buildQueryString({ region_id, status, date_range });
        return fetchApi<DetailedReport[]>(`/reports/detailed${qs}`);
    },

    exportReports: async (format: 'csv' | 'pdf', region_id?: string, date_range?: '7d' | '30d' | '90d'): Promise<Blob> => {
        const qs = buildQueryString({ format, region_id, date_range });
        // Note: This endpoint might return a downloadable file (Blob) rather than standard JSON
        const token = localStorage.getItem('token');
        const apiUrl = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8000/api';
        const response = await fetch(`${apiUrl}/reports/export${qs}`, {
            headers: token ? { 'Authorization': `Bearer ${token}` } : {}
        });

        if (!response.ok) {
            throw new Error(`Export failed: ${response.status}`);
        }
        return response.blob();
    },

    getInsights: async (): Promise<ReportInsight> => {
        return fetchApi<ReportInsight>('/reports/insights');
    }
};
