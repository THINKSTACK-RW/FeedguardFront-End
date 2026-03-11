import { fetchApi, buildQueryString } from './api';
import { Alert, AlertActionResponse, AlertStats, GenerateAlertsResponse } from './types';

/**
 * Service handling system alerts and interventions
 */
export const AlertService = {
    getAlerts: async (status?: string, severity?: string): Promise<Alert[]> => {
        const qs = buildQueryString({ status, severity });
        return fetchApi<Alert[]>(`/alerts${qs}`);
    },

    dismissAlert: async (id: string): Promise<AlertActionResponse> => {
        return fetchApi<AlertActionResponse>(`/alerts/${id}/dismiss`, {
            method: 'POST'
        });
    },

    takeAction: async (id: string, action: string): Promise<AlertActionResponse> => {
        return fetchApi<AlertActionResponse>(`/alerts/${id}/action`, {
            method: 'POST',
            body: JSON.stringify({ action })
        });
    },

    getStats: async (): Promise<AlertStats> => {
        return fetchApi<AlertStats>('/alerts/stats');
    },

    generateAlerts: async (): Promise<GenerateAlertsResponse> => {
        return fetchApi<GenerateAlertsResponse>('/alerts/generate', {
            method: 'POST'
        });
    }
};
