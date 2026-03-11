import { fetchApi, buildQueryString } from './api';
import { DashboardStats, TrendData, RegionBreakdown, MealFrequency } from './types';

/**
 * Service handling dashboard statistics and analytics
 */
export const DashboardService = {
    getStats: async (): Promise<DashboardStats> => {
        return fetchApi<DashboardStats>('/dashboard/stats');
    },

    getTrends: async (period: '7d' | '30d' | '90d' = '30d'): Promise<TrendData[]> => {
        const qs = buildQueryString({ period });
        return fetchApi<TrendData[]>(`/dashboard/trends${qs}`);
    },

    getRegions: async (): Promise<RegionBreakdown[]> => {
        return fetchApi<RegionBreakdown[]>('/dashboard/regions');
    },

    getMealFrequency: async (): Promise<MealFrequency[]> => {
        return fetchApi<MealFrequency[]>('/dashboard/meal-frequency');
    }
};
