// src/app/components/hooks/useRwandaMap.ts
import { useEffect } from 'react';
import L from 'leaflet';
import { MapService } from '../../Services/mapService';

export const useRwandaMap = () => {
  useEffect(() => {
    // Initialize map centered on Rwanda
    const map = L.map('map').setView([-1.9403, 29.8739], 7);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Load regions
    const loadRegions = async () => {
      try {
        const regions = await MapService.getRegions();
        regions.forEach(region => {
          L.marker([region.lat, region.lng])
            .addTo(map)
            .bindPopup(`
              <b>${region.name}</b><br>
              Population: ${region.population || 'N/A'}<br>
              Info: ${region.info || 'N/A'}
            `);
        });
      } catch (error) {
        console.error('Error loading regions:', error);
      }
    };

    loadRegions();

    // Optional: real-time refresh every 30s
    const interval = setInterval(loadRegions, 30000);

    return () => {
      clearInterval(interval);
      map.remove(); // cleanup when component unmounts
    };
  }, []);
};