import { fetchApi } from './api';
import { Question, CreateQuestionPayload, UpdateQuestionPayload } from './types';

/**
 * Service handling Survey question management
 */
export const QuestionService = {
    getQuestions: async (): Promise<Question[]> => {
        return fetchApi<Question[]>('/questions');
    },

    getQuestionById: async (id: string): Promise<Question> => {
        return fetchApi<Question>(`/questions/${id}`);
    },

    createQuestion: async (payload: CreateQuestionPayload): Promise<Question> => {
        return fetchApi<Question>('/questions', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    updateQuestion: async (id: string, payload: UpdateQuestionPayload): Promise<Question> => {
        return fetchApi<Question>(`/questions/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    },

    deleteQuestion: async (id: string): Promise<{ message: string }> => {
        return fetchApi<{ message: string }>(`/questions/${id}`, {
            method: 'DELETE'
        });
    }
};
