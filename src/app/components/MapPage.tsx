// src/app/components/MapPage.tsx
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useLanguage } from "../LanguageContext";
import { MapPin, Filter, ZoomIn, ZoomOut, AlertTriangle, Users, TrendingUp, Download, Eye } from "lucide-react";
import { MapService } from "../../Services/mapService"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapRegion {
  id: string;
  x: number;
  y: number;
  region: string;
  district: string;
  sector: string;
  village: string;
  status: 'critical' | 'warning' | 'stable';
  households: number;
  totalResponses: number;
  critical: number;
  warning: number;
  stable: number;
  risk: string;
  mealsPerDay: number;
  daysOfFood: number;
  latitude: number;
  longitude: number;
}

// Custom marker component
function CustomMarker({ region, onClick }: { region: MapRegion; onClick: () => void }) {
  const map = useMap();
  
  const getMarkerColor = (status: string) => {
    switch (status) {
      case 'critical': return '#ef4444';
      case 'warning': return '#eab308';
      default: return '#22c55e';
    }
  };

  const customIcon = L.divIcon({
    html: `
      <div style="
        position: relative;
        width: 24px;
        height: 24px;
      ">
        ${region.status === 'critical' ? `
          <div style="
            position: absolute;
            width: 32px;
            height: 32px;
            left: -4px;
            top: -4px;
            background-color: rgba(239, 68, 68, 0.3);
            border-radius: 50%;
            animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          "></div>
        ` : ''}
        <div style="
          width: 24px;
          height: 24px;
          background-color: ${getMarkerColor(region.status)};
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
        ">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
        </div>
      </div>
      <style>
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      </style>
    `,
    className: 'custom-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });

  return (
    <Marker
      position={[region.latitude, region.longitude]}
      icon={customIcon}
      eventHandlers={{
        click: onClick,
      }}
    >
      <Popup>
        <div className="p-2 min-w-[200px]">
          <h3 className="font-bold text-sm mb-1">{region.region}</h3>
          <p className="text-xs text-gray-600 mb-1">{region.district}</p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600">{region.totalResponses} responses</span>
            {getStatusBadge(region.status)}
          </div>
          <div className="grid grid-cols-3 gap-1 text-xs">
            <div className="text-center">
              <div className="font-bold text-green-600">{region.stable}</div>
              <div className="text-gray-600">Stable</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-yellow-600">{region.warning}</div>
              <div className="text-gray-600">At Risk</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-red-600">{region.critical}</div>
              <div className="text-gray-600">Critical</div>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'critical':
      return <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Critical</span>;
    case 'warning':
      return <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Warning</span>;
    default:
      return <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Stable</span>;
  }
}

export function MapPage() {
  const { t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<MapRegion | null>(null);
  const [zoom, setZoom] = useState(1);
  const [mapMarkers, setMapMarkers] = useState<MapRegion[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch regions from backend
  const fetchRegions = async () => {
    try {
      setLoading(true);
      const regions = await MapService.getRegions();
      setMapMarkers(regions);
    } catch (error) {
      console.error("Error fetching regions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegions();

    // Optional: refresh every 30 seconds for real-time updates
    const interval = setInterval(fetchRegions, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'critical':
        return <Badge className="bg-red-100 text-red-700 border-red-200">Critical</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Warning</Badge>;
      default:
        return <Badge className="bg-green-100 text-green-700 border-green-200">Stable</Badge>;
    }
  };

  const downloadRegionReport = async (regionId: string, regionName: string) => {
    try {
      const response = await fetch(`/api/reports/location/${regionId}/export?format=csv`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${regionName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_responses.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading region report:", error);
    }
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Geographic Intelligence</h2>
          <p className="text-gray-600 mt-1">Real-time spatial food security monitoring</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-white">
            <Filter className="w-4 h-4 mr-2" />
            Filter Layers
          </Button>
          <Button variant="outline" className="bg-white" onClick={() => setZoom(z => Math.max(0.5, z - 0.2))}>
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="bg-white" onClick={() => setZoom(z => Math.min(2, z + 0.2))}>
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Map Container */}
      <Card className="flex-1 min-h-[500px] overflow-hidden relative border-none shadow-lg bg-white">
        {/* Real Leaflet Map */}
        <div className="absolute inset-0">
          <MapContainer
            center={[-1.9403, 29.8739]} // Center of Rwanda
            zoom={8}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Location Markers */}
            {!loading && mapMarkers.map((marker) => (
              <CustomMarker
                key={marker.id}
                region={marker}
                onClick={() => setSelectedRegion(marker)}
              />
            ))}
          </MapContainer>
        </div>

        {/* Loading indicator overlay */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading map data...</p>
            </div>
          </div>
        )}

        {/* Selected Region Detail Panel */}
        <AnimatePresence>
          {selectedRegion && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="absolute right-4 top-4 bottom-4 w-80 bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-6 border border-gray-100 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">{selectedRegion.region}</h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedRegion(null)}>✕</Button>
              </div>

              <div className="space-y-6">
                {/* Location Info */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>District:</strong> {selectedRegion.district}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Sector:</strong> {selectedRegion.sector}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Village:</strong> {selectedRegion.village}
                  </p>
                </div>

                {/* Status */}
                <div className={`p-4 rounded-xl ${selectedRegion.status === 'critical' ? 'bg-red-50 border border-red-100' :
                  selectedRegion.status === 'warning' ? 'bg-yellow-50 border border-yellow-100' :
                    'bg-green-50 border border-green-100'
                  }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className={`w-5 h-5 ${selectedRegion.status === 'critical' ? 'text-red-500' :
                      selectedRegion.status === 'warning' ? 'text-yellow-500' :
                        'text-green-500'
                      }`} />
                    <span className={`font-semibold ${selectedRegion.status === 'critical' ? 'text-red-700' :
                      selectedRegion.status === 'warning' ? 'text-yellow-700' :
                        'text-green-700'
                      }`}>
                      Status: {selectedRegion.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    This region is currently showing {selectedRegion.risk.toLowerCase()} indicators of food insecurity.
                  </p>
                </div>

                {/* Response Statistics */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Responses</p>
                    <p className="text-2xl font-bold text-gray-900">{selectedRegion.totalResponses}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Households</p>
                    <p className="text-lg font-bold text-gray-900">{selectedRegion.households}</p>
                  </div>

                  {/* Risk Breakdown */}
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 mb-2">Risk Breakdown</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center p-2 bg-green-50 rounded-lg">
                        <p className="text-lg font-bold text-green-600">{selectedRegion.stable}</p>
                        <p className="text-xs text-gray-600">Stable</p>
                      </div>
                      <div className="text-center p-2 bg-yellow-50 rounded-lg">
                        <p className="text-lg font-bold text-yellow-600">{selectedRegion.warning}</p>
                        <p className="text-xs text-gray-600">At Risk</p>
                      </div>
                      <div className="text-center p-2 bg-red-50 rounded-lg">
                        <p className="text-lg font-bold text-red-600">{selectedRegion.critical}</p>
                        <p className="text-xs text-gray-600">Critical</p>
                      </div>
                    </div>
                  </div>

                  {/* Food Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Avg Meals/Day</p>
                      <p className="text-lg font-bold text-gray-900">{selectedRegion.mealsPerDay}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Avg Days Food</p>
                      <p className="text-lg font-bold text-gray-900">{selectedRegion.daysOfFood}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-[var(--sidebar-bg)] hover:bg-gray-800 text-white"
                    onClick={() => downloadRegionReport(selectedRegion.id, selectedRegion.region)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(`/reports?location=${selectedRegion.id}`, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Detailed Responses
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}