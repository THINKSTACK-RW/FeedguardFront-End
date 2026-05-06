import { fetchApi, buildQueryString } from './api';
import { FoodReportPayload, FoodReportResponse, FoodReportHistory, FoodReportStats, FoodRiskPrediction } from './types';

/**
 * Service handling food security reporting from the mobile app
 */
export const ReportService = {
    predictRisk: async (payload: Omit<FoodReportPayload, 'citizen_id' | 'channel'> & { citizen_id?: string }): Promise<FoodRiskPrediction> => {
        return fetchApi<FoodRiskPrediction>('/food-reports/predict', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    submitReport: async (payload: FoodReportPayload): Promise<FoodReportResponse> => {
        return fetchApi<FoodReportResponse>('/food-reports', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    getHistory: async (citizen_id: string): Promise<FoodReportHistory[]> => {
        const qs = buildQueryString({ citizen_id });
        return fetchApi<FoodReportHistory[]>(`/food-reports/history${qs}`);
    },

    getStats: async (region_id?: string): Promise<FoodReportStats> => {
        const qs = buildQueryString({ region_id });
        return fetchApi<FoodReportStats>(`/food-reports/stats${qs}`);
    }
};
