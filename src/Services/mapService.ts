import { fetchApi } from './api';
import { MapRegion, MapRegionDetails } from './types';

export const MapService = {
  getRegions: async (): Promise<MapRegion[]> => {
    return fetchApi<MapRegion[]>('/reports/map'); // Updated to use reports endpoint
  },

  getRegionDetails: async (regionId: string | number): Promise<MapRegionDetails> => {
    return fetchApi<MapRegionDetails>(`/reports/location/${regionId}`); // Updated to use reports endpoint
  }
};