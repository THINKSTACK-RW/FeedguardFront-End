import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { useLanguage } from "../LanguageContext";
import { MapPin, Search, Filter, ZoomIn, ZoomOut, Layers, AlertTriangle } from "lucide-react";

// Mock data for map markers
const mapMarkers = [
    { id: 1, x: 200, y: 150, region: "Kibera", status: "critical", households: 450, risk: "High" },
    { id: 2, x: 450, y: 280, region: "Makina", status: "warning", households: 320, risk: "Moderate" },
    { id: 3, x: 300, y: 400, region: "Lindi", status: "stable", households: 280, risk: "Low" },
    { id: 4, x: 600, y: 200, region: "Soweto", status: "stable", households: 500, risk: "Low" },
];

export function MapPage() {
    const { t } = useLanguage();
    const [selectedRegion, setSelectedRegion] = useState<any>(null);
    const [zoom, setZoom] = useState(1);

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
            <Card className="flex-1 min-h-[500px] overflow-hidden relative border-none shadow-lg bg-[#e5e7eb]">
                <div className="absolute inset-0 bg-blue-50/30 overflow-hidden">
                    {/* Simulated Map Background - CSS Pattern */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: "radial-gradient(#9ca3af 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                            transform: `scale(${zoom})`,
                            transformOrigin: "center center",
                            transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                        }}
                    />

                    {/* Interactive Map Area (Simulated with absolute positioning) */}
                    <motion.div
                        className="w-full h-full relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            transform: `scale(${zoom})`,
                            transformOrigin: "center center",
                            transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                        }}
                    >
                        {/* Simulated Map Shapes using simple SVGs or just colored regions could be complex, 
                    using markers on a grid for now as it's a frontend simulation */}

                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <line x1="200" y1="150" x2="450" y2="280" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                            <line x1="450" y1="280" x2="600" y2="200" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>

                        {mapMarkers.map((marker) => (
                            <motion.button
                                key={marker.id}
                                className="absolute group focus:outline-none"
                                style={{ left: marker.x, top: marker.y }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedRegion(marker)}
                            >
                                <div className={`
                            w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center
                            ${marker.status === 'critical' ? 'bg-red-500 animate-pulse' :
                                        marker.status === 'warning' ? 'bg-yellow-500' : 'bg-green-500'}
                        `}>
                                    <MapPin className="w-3 h-3 text-white" />
                                </div>
                                {/* Tooltip on hover */}
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                    <p className="text-xs font-bold text-gray-900">{marker.region}</p>
                                    <p className="text-[10px] text-gray-500">{marker.households} households</p>
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

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

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Households Reporting</p>
                                        <p className="text-2xl font-bold text-gray-900">{selectedRegion.households}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Meals/Day</p>
                                            <p className="text-lg font-bold text-gray-900">1.2</p>
                                        </div>
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Stock</p>
                                            <p className="text-lg font-bold text-gray-900">3 days</p>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full bg-[var(--sidebar-bg)] hover:bg-gray-800 text-white">
                                    View Detailed Report
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </div>
    );
}
