import { fetchApi } from './api';
import { User, CreateUserPayload, UpdateUserPayload } from './types';

/**
 * Service handling User management and administration
 */
export const UserService = {
    getUsers: async (): Promise<User[]> => {
        return fetchApi<User[]>('/users');
    },

    getUserById: async (id: string): Promise<User> => {
        return fetchApi<User>(`/users/${id}`);
    },

    createUser: async (payload: CreateUserPayload): Promise<User> => {
        return fetchApi<User>('/users', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    updateUser: async (id: string, payload: UpdateUserPayload): Promise<User> => {
        return fetchApi<User>(`/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
    },

    deleteUser: async (id: string): Promise<{ message: string }> => {
        return fetchApi<{ message: string }>(`/users/${id}`, {
            method: 'DELETE'
        });
    }
};
