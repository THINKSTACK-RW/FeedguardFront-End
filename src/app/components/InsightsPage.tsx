import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Cell } from "recharts";
import { ArrowUpRight, Users, Utensils, AlertTriangle } from "lucide-react";
import { AnalyticsReportService } from "../../Services/analyticsReportService";
import { ReportInsight } from "../../Services/types";

const trendData = [
    { month: "Jan", stable: 65, atRisk: 25, critical: 10 },
    { month: "Feb", stable: 62, atRisk: 28, critical: 10 },
    { month: "Mar", stable: 58, atRisk: 30, critical: 12 },
    { month: "Apr", stable: 55, atRisk: 35, critical: 10 },
    { month: "May", stable: 60, atRisk: 30, critical: 10 },
    { month: "Jun", stable: 68, atRisk: 25, critical: 7 },
];

const mealsData = [
    { name: "0 Meals", value: 5, fill: "#ef4444" },
    { name: "1 Meal", value: 15, fill: "#f59e0b" },
    { name: "2 Meals", value: 45, fill: "#10b981" },
    { name: "3+ Meals", value: 35, fill: "#3b82f6" },
];

export function InsightsPage() {
    const [insight, setInsight] = useState<ReportInsight | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInsights = async () => {
            try {
                setLoading(true);
                const data = await AnalyticsReportService.getInsights();
                setInsight(data);
            } catch (error) {
                console.error("Failed to fetch insights:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInsights();
    }, []);

    const predictionConfidence = typeof insight?.predictionConfidence === "number"
        ? `${(insight.predictionConfidence * 100).toFixed(0)}% confidence`
        : "Confidence unavailable";

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Strategic Insights</h2>
                <p className="text-gray-600 mt-1">Data-driven analysis and predictive indicators</p>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <ArrowUpRight className="w-3 h-3 mr-1" />
                                +12.5%
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">{loading ? "..." : (insight?.totalHouseholds ?? 0).toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Total Households Monitored</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <Utensils className="w-6 h-6 text-green-600" />
                            </div>
                            <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <ArrowUpRight className="w-3 h-3 mr-1" />
                                +5.2%
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">{loading ? "..." : (insight?.avgMealsPerDay ?? 0).toFixed(1)}</p>
                        <p className="text-sm text-gray-500">Avg Meals Per Day</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-red-50 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-red-600" />
                            </div>
                            <span className="flex items-center text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                                <ArrowUpRight className="w-3 h-3 mr-1" />
                                +2.1%
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">{loading ? "..." : (insight?.criticalAlerts ?? 0).toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Critical Alerts (MoM)</p>
                    </CardContent>
                </Card>

                <Card className="bg-[var(--sidebar-bg)] text-white">
                    <CardContent className="pt-6">
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Prediction</p>
                        </div>
                        <p className="text-2xl font-bold text-white mb-2">{loading ? "Loading..." : insight?.prediction || "Stable Trend"}</p>
                        <p className="text-sm text-gray-400">
                            {loading ? "Running AI prediction..." : (insight?.predictionText || "No prediction available yet.")}
                        </p>
                        <p className="text-xs text-gray-400 mt-3">{predictionConfidence}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="h-[400px]">
                    <CardHeader>
                        <CardTitle>Food Security Trends (6 Months)</CardTitle>
                        <CardDescription>Household status distribution over time</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={trendData}>
                                <defs>
                                    <linearGradient id="colorStable" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Legend />
                                <Area type="monotone" dataKey="stable" stackId="1" stroke="#10b981" fill="url(#colorStable)" name="Stable" />
                                <Area type="monotone" dataKey="atRisk" stackId="1" stroke="#f59e0b" fill="url(#colorRisk)" name="At Risk" />
                                <Area type="monotone" dataKey="critical" stackId="1" stroke="#ef4444" fill="#fee2e2" name="Critical" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="h-[400px]">
                    <CardHeader>
                        <CardTitle>Meal Frequency Analysis</CardTitle>
                        <CardDescription>Distribution of daily meals across all regions</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={mealsData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} tick={{ fill: '#374151', fontWeight: 500 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                                    {
                                        mealsData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))
                                    }
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
