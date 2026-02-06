import {
  Bell,
  ArrowUpRight,
  MoreVertical,
  TrendingDown,
  Droplets,
  Recycle,
  AlertCircle,
  Users,
  Utensils
} from "lucide-react";
import { motion, Variants } from "motion/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { useLanguage } from "../LanguageContext";
import { Button } from "./ui/button";

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { t } = useLanguage();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  // Mock Data - FeedGuard Context
  const chartData = [
    { name: "Mon", stable: 45, atRisk: 12 },
    { name: "Tue", stable: 52, atRisk: 15 },
    { name: "Wed", stable: 48, atRisk: 10 },
    { name: "Thu", stable: 61, atRisk: 18 },
    { name: "Fri", stable: 55, atRisk: 14 },
    { name: "Sat", stable: 67, atRisk: 9 },
    { name: "Sun", stable: 70, atRisk: 8 },
  ];

  const regionData = [
    { region: "Kibera District", households: "2,453", risk: "Critical", trend: "up", status: "Action Req" },
    { region: "Lindi Area", households: "1,211", risk: "Warning", trend: "up", status: "Monitor" },
    { region: "Makina Village", households: "3,364", risk: "Stable", trend: "down", status: "Good" },
    { region: "Soweto West", households: "1,855", risk: "Stable", trend: "down", status: "Good" },
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t.dashboard.title}</h1>
          <p className="text-gray-500 mt-1">{t.dashboard.subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full bg-white text-gray-500 hover:text-gray-900 shadow-sm border border-gray-100 transition-colors"
            onClick={() => onNavigate("alerts")}
          >
            <Bell className="w-5 h-5" />
          </button>
          <Button className="bg-[#064e3b] hover:bg-[#065f46] text-white rounded-full px-6 shadow-lg shadow-green-900/20">
            {t.home.reportButton}
          </Button>
        </div>
      </div>

      {/* Top Row Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Dark Card (Total Households) */}
        <motion.div variants={itemVariants} className="bg-[var(--card-dark-bg)] rounded-[2rem] p-6 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-xl">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">{t.dashboard.totalHouseholds}</p>
              <h3 className="text-4xl font-bold tracking-tight">8,942</h3>
            </div>
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
              <ArrowUpRight className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">+12%</span>
            </div>
            <span className="text-sm text-gray-400">{t.dashboard.last30Days}</span>
          </div>

          {/* Decorative gradients */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Card 2: White Card (Critical Alerts) */}
        <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">{t.dashboard.criticalAlerts}</p>
              <h3 className="text-4xl font-bold tracking-tight text-gray-900">145</h3>
            </div>
            <div className="p-3 bg-red-50 rounded-full">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-full">
              <ArrowUpRight className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-600">+5%</span>
            </div>
            <span className="text-sm text-gray-400">{t.dashboard.last24Hours}</span>
          </div>
        </motion.div>

        {/* Card 3: Green Card (Avg Meals) - Custom styling from template */}
        <motion.div variants={itemVariants} className="bg-[var(--card-green-bg)] rounded-[2rem] p-6 text-[var(--card-green-fg)] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="opacity-80 text-sm font-medium mb-1">{t.dashboard.mealsPerDay}</p>
              <h3 className="text-4xl font-bold tracking-tight">2.1</h3>
            </div>
            <div className="p-3 bg-white/50 rounded-full backdrop-blur-sm">
              <Utensils className="w-6 h-6 text-[var(--card-green-fg)]" />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/40 rounded-full backdrop-blur-md">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm font-bold">+0.3</span>
            </div>
            <span className="text-sm opacity-70">{t.dashboard.last7Days}</span>
          </div>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Large Chart Section */}
        <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{t.dashboard.trendOverTime}</h3>
              <p className="text-sm text-gray-500 mt-1">Food security stability vs risk</p>
            </div>
            <Button variant="outline" className="rounded-full px-4 h-9 text-sm">
              {t.common.filter} <MoreVertical className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorStable" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="stable" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorStable)" name={t.dashboard.stable} />
                <Area type="monotone" dataKey="atRisk" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorRisk)" name={t.dashboard.atRisk} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Region List / Ranking */}
        <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">{t.dashboard.regionalBreakdown}</h3>
            <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>

          <div className="flex-1 space-y-6">
            {regionData.map((item, index) => (
              <div key={index} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-12 rounded-full ${item.risk === 'Critical' ? 'bg-red-500' :
                    item.risk === 'Warning' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-amber-500 transition-colors">{item.region}</h4>
                    <p className="text-sm text-gray-500">{item.households} {t.dashboard.households}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium px-2 py-1 rounded-lg ${item.risk === 'Critical' ? 'bg-red-50 text-red-600' :
                    item.risk === 'Warning' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'
                    }`}>
                    {item.risk === 'Critical' ? t.dashboard.critical :
                      item.risk === 'Warning' ? t.dashboard.atRisk : t.dashboard.stable}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-6 rounded-xl border-gray-200 hover:bg-gray-50" onClick={() => onNavigate("reports")}>
            {t.dashboard.viewDetails}
          </Button>
        </motion.div>

      </div>

      {/* Visual Analytics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-[#f0fdf4] rounded-[2rem] p-8 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[#166534] mb-2">{t.dashboard.quickInsights}</h3>
            <p className="text-[#15803d]/80 max-w-md">
              {t.dashboard.insight1}
            </p>
            <div className="mt-6 flex gap-3">
              <Button className="bg-[#166534] hover:bg-[#15803d] text-white rounded-xl shadow-none border-none">
                View Report
              </Button>
            </div>
          </div>
          {/* abstract bg decoration */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#dcfce7] to-transparent pointer-events-none" />
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">System Status</h3>
            <div className="flex items-center gap-2 text-green-600 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-semibold">All Systems Operational</span>
            </div>
            <p className="text-sm text-gray-500">Last updated: Just now</p>
          </div>
          <div className="w-24 h-24 rounded-full border-4 border-gray-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">98%</span>
          </div>
        </motion.div>
      </div>

    </motion.div>
  );
}