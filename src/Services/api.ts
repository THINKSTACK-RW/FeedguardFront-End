/**
 * Base configuration and generic fetch utilities for API integration.
 * Replace the API_BASE_URL with your actual backend URL.
 * You can also replace this entirely with Axios if preferred.
 */

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Utility to build query strings from an object
 */
export function buildQueryString(params?: Record<string, string | number | undefined | null>): string {
    if (!params) return '';
    const cleanParams = Object.fromEntries(
        Object.entries(params)
            .filter(([_, v]) => v != null)
            .map(([k, v]) => [k, String(v)])
    ) as Record<string, string>;

    const searchParams = new URLSearchParams(cleanParams);
    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : '';
}

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = localStorage.getItem('token');

    const defaultHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (token) {
        defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    });

    if (!response.ok) {
        // Attempt to extract an error message from response
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
            const errorData = await response.json();
            if (errorData.message) errorMessage = errorData.message;
        } catch (e) {
            // JSON parse failed, ignore
        }
        throw new Error(errorMessage);
    }

    // Handle empty responses
    if (response.status === 204) return {} as T;

    return response.json();
}
