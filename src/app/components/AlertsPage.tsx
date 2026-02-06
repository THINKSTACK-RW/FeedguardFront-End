import { motion } from "motion/react";
import { AlertCircle, AlertTriangle, CheckCircle, Clock, MapPin, ChevronRight, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const alerts = [
    {
        id: 1,
        region: "Kibera District",
        type: "Critical",
        message: "Severe food shortage reported by 45% of households.",
        time: "10 mins ago",
        affected: 450,
        status: "new"
    },
    {
        id: 2,
        region: "Makina Village",
        type: "Warning",
        message: "Increasing price of maize flour reported.",
        time: "2 hours ago",
        affected: 120,
        status: "investigating"
    },
    {
        id: 3,
        region: "Lindi Area",
        type: "Stable",
        message: "Food distribution completed successfully.",
        time: "5 hours ago",
        affected: 300,
        status: "resolved"
    },
    {
        id: 4,
        region: "Soweto East",
        type: "Critical",
        message: "Water scarcity impacting cooking ability.",
        time: "1 day ago",
        affected: 890,
        status: "new"
    }
];

export function AlertsPage() {
    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Priority Alerts</h2>
                    <p className="text-gray-600 mt-1">Real-time notifications requiring attention</p>
                </div>
                <Button className="bg-[var(--sidebar-bg)] text-white hover:bg-gray-800">
                    <Bell className="w-4 h-4 mr-2" />
                    Manage Notifications
                </Button>
            </div>

            <div className="grid gap-4">
                {alerts.map((alert, index) => (
                    <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className={`
                border-l-4 transition-all hover:shadow-md cursor-pointer
                ${alert.type === 'Critical' ? 'border-l-red-500' :
                                alert.type === 'Warning' ? 'border-l-yellow-500' : 'border-l-green-500'}
            `}>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className={`
                    p-3 rounded-full shrink-0
                    ${alert.type === 'Critical' ? 'bg-red-50 text-red-600' :
                                            alert.type === 'Warning' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'}
                  `}>
                                        {alert.type === 'Critical' ? <AlertCircle className="w-6 h-6" /> :
                                            alert.type === 'Warning' ? <AlertTriangle className="w-6 h-6" /> :
                                                <CheckCircle className="w-6 h-6" />}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-semibold text-gray-900 text-lg">{alert.region}</h3>
                                                    <Badge variant="outline" className={`
                                ${alert.type === 'Critical' ? 'bg-red-50 text-red-700 border-red-200' :
                                                            alert.type === 'Warning' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-green-50 text-green-700 border-green-200'}
                            `}>
                                                        {alert.type}
                                                    </Badge>
                                                </div>
                                                <p className="text-gray-600">{alert.message}</p>
                                            </div>
                                            <span className="text-sm text-gray-400 whitespace-nowrap flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {alert.time}
                                            </span>
                                        </div>

                                        <div className="mt-4 flex items-center gap-6 text-sm text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{alert.region}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <AlertCircle className="w-4 h-4" />
                                                <span>{alert.affected} households affected</span>
                                            </div>

                                            <div className="ml-auto flex gap-2">
                                                <Button size="sm" variant="outline">Dismiss</Button>
                                                <Button size="sm" className={`${alert.type === 'Critical' ? 'bg-red-600 hover:bg-red-700' :
                                                        alert.type === 'Warning' ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'
                                                    } text-white`}>
                                                    Take Action
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
