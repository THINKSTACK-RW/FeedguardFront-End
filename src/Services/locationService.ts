import { fetchApi } from './api';
import { FeedGuardLocation, CreateLocationPayload, UpdateLocationPayload } from './types';

/**
 * Service handling Location management and geographic data
 */
export const LocationService = {
    getLocations: async (): Promise<FeedGuardLocation[]> => {
        return fetchApi<FeedGuardLocation[]>('/locations');
    },

    getLocationById: async (id: string): Promise<FeedGuardLocation> => {
        return fetchApi<FeedGuardLocation>(`/locations/${id}`);
    },

    createLocation: async (payload: CreateLocationPayload): Promise<FeedGuardLocation> => {
        return fetchApi<FeedGuardLocation>('/locations', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    updateLocation: async (id: string, payload: UpdateLocationPayload): Promise<FeedGuardLocation> => {
        return fetchApi<FeedGuardLocation>(`/locations/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    },

    deleteLocation: async (id: string): Promise<{ message: string }> => {
        return fetchApi<{ message: string }>(`/locations/${id}`, {
            method: 'DELETE'
        });
    }
};
