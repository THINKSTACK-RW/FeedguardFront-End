import { fetchApi } from './api';
import {
    SmsStartPayload, SmsStartResponse, SmsReceivePayload,
    SmsInvitePayload, SmsInviteResponse, SmsStats,
    SurveyCreatePayload, SurveyCreateResponse
} from './types';

/**
 * Service handling SMS-based surveys for basic phones
 */
export const SmsService = {
    startSurvey: async (payload: SmsStartPayload): Promise<SmsStartResponse> => {
        return fetchApi<SmsStartResponse>('/sms/start', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    receiveSms: async (payload: SmsReceivePayload): Promise<string> => {
        return fetchApi<string>('/sms/receive', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    inviteCitizens: async (payload: SmsInvitePayload): Promise<SmsInviteResponse> => {
        return fetchApi<SmsInviteResponse>('/sms/invite', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    getStats: async (): Promise<SmsStats> => {
        return fetchApi<SmsStats>('/sms/stats');
    },

    createSurvey: async (payload?: SurveyCreatePayload): Promise<SurveyCreateResponse> => {
        return fetchApi<SurveyCreateResponse>('/sms/create-survey', {
            method: 'POST',
            body: payload ? JSON.stringify(payload) : undefined
        });
    }
};
