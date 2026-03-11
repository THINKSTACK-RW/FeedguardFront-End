import { fetchApi } from './api';
import { QuestionLogic, CreateQuestionLogicPayload, UpdateQuestionLogicPayload } from './types';

/**
 * Service handling Question logic and conditional rules
 */
export const QuestionLogicService = {
    getQuestionLogicList: async (): Promise<QuestionLogic[]> => {
        return fetchApi<QuestionLogic[]>('/question-logic');
    },

    getQuestionLogicById: async (id: string): Promise<QuestionLogic> => {
        return fetchApi<QuestionLogic>(`/question-logic/${id}`);
    },

    createQuestionLogic: async (payload: CreateQuestionLogicPayload): Promise<QuestionLogic> => {
        return fetchApi<QuestionLogic>('/question-logic', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    updateQuestionLogic: async (id: string, payload: UpdateQuestionLogicPayload): Promise<QuestionLogic> => {
        return fetchApi<QuestionLogic>(`/question-logic/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    },

    deleteQuestionLogic: async (id: string): Promise<{ message: string }> => {
        return fetchApi<{ message: string }>(`/question-logic/${id}`, {
            method: 'DELETE'
        });
    }
};
