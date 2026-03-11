import { fetchApi } from './api';
import { Citizen, CreateCitizenPayload, UpdateCitizenPayload } from './types';

/**
 * Service handling Citizen management and demographic data
 */
export const CitizenService = {
    getCitizens: async (): Promise<Citizen[]> => {
        return fetchApi<Citizen[]>('/citizens');
    },

    getCitizenById: async (id: string): Promise<Citizen> => {
        return fetchApi<Citizen>(`/citizens/${id}`);
    },

    createCitizen: async (payload: CreateCitizenPayload): Promise<Citizen> => {
        return fetchApi<Citizen>('/citizens', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    updateCitizen: async (id: string, payload: UpdateCitizenPayload): Promise<Citizen> => {
        return fetchApi<Citizen>(`/citizens/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    },

    deleteCitizen: async (id: string): Promise<{ message: string }> => {
        return fetchApi<{ message: string }>(`/citizens/${id}`, {
            method: 'DELETE'
        });
    }
};
