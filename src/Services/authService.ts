import { fetchApi } from './api';
import { User, AuthResponse, CreateUserPayload } from './types';

/**
 * Service handling authentication operations
 */
export const AuthService = {
    register: async (payload: CreateUserPayload): Promise<AuthResponse> => {
        return fetchApi<AuthResponse>('/auth/register', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    login: async (email: string, password: string): Promise<AuthResponse> => {
        return fetchApi<AuthResponse>('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    },

    logout: async (): Promise<void> => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },

    getCurrentUser: async (): Promise<{ user: User } | null> => {
        const token = localStorage.getItem('token');
        if (!token) return null;

        try {
            return await fetchApi<{ user: User }>('/auth/profile');
        } catch (e) {
            return null;
        }
    },

    updateProfile: async (payload: Partial<User>): Promise<{ message: string; user: User }> => {
        return fetchApi<{ message: string; user: User }>('/auth/profile', {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    },

    changePassword: async (payload: { currentPassword?: string; newPassword?: string }): Promise<{ message: string }> => {
        return fetchApi<{ message: string }>('/auth/change-password', {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    }
};
