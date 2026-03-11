import { fetchApi } from './api';
import { Survey, CreateSurveyPayload, UpdateSurveyPayload } from './types';

/**
 * Service handling Survey management and administration
 */
export const SurveyService = {
    getSurveys: async (): Promise<Survey[]> => {
        return fetchApi<Survey[]>('/surveys');
    },

    getSurveyById: async (id: string): Promise<Survey> => {
        return fetchApi<Survey>(`/surveys/${id}`);
    },

    createSurvey: async (payload: CreateSurveyPayload): Promise<Survey> => {
        return fetchApi<Survey>('/surveys', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    updateSurvey: async (id: string, payload: UpdateSurveyPayload): Promise<Survey> => {
        return fetchApi<Survey>(`/surveys/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    },

    deleteSurvey: async (id: string): Promise<{ message: string }> => {
        return fetchApi<{ message: string }>(`/surveys/${id}`, {
            method: 'DELETE'
        });
    }
};
