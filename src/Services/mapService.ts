import { fetchApi } from './api';
import { MapRegion, MapRegionDetails } from './types';

export const MapService = {
  getRegions: async (): Promise<MapRegion[]> => {
    return fetchApi<MapRegion[]>('/map/regions'); // matches backend
  },

  getRegionDetails: async (regionId: string | number): Promise<MapRegionDetails> => {
    return fetchApi<MapRegionDetails>(`/map/regions/${regionId}`); // matches backend
  }
};