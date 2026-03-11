import { fetchApi } from './api';
import { SurveyResponse, CreateSurveyResponsePayload, UpdateSurveyResponsePayload } from './types';

/**
 * Service handling Survey responses
 */
export const ResponseService = {
    getResponses: async (): Promise<SurveyResponse[]> => {
        return fetchApi<SurveyResponse[]>('/responses');
    },

    getResponseById: async (id: string): Promise<SurveyResponse> => {
        return fetchApi<SurveyResponse>(`/responses/${id}`);
    },

    createResponse: async (payload: CreateSurveyResponsePayload): Promise<SurveyResponse> => {
        return fetchApi<SurveyResponse>('/responses', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    updateResponse: async (id: string, payload: UpdateSurveyResponsePayload): Promise<SurveyResponse> => {
        return fetchApi<SurveyResponse>(`/responses/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    },

    deleteResponse: async (id: string): Promise<{ message: string }> => {
        return fetchApi<{ message: string }>(`/responses/${id}`, {
            method: 'DELETE'
        });
    }
};
