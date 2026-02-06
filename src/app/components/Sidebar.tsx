import { useState } from "react";
import { motion } from "motion/react";
import {
    LayoutDashboard,
    BarChart2,
    Users,
    FileText,
    HelpCircle,
    Settings,
    Search,
    ChevronDown,
    Command,
    Shield,
    MapPin,
    Bell
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface SidebarProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
    const { t } = useLanguage();
    const [activeItem, setActiveItem] = useState(currentPage);

    const menuItems = [
        { id: "dashboard", label: t.navigation.dashboard, icon: LayoutDashboard },
        { id: "reports", label: t.navigation.reports, icon: FileText },
        { id: "map", label: t.navigation.map, icon: MapPin },
        { id: "alerts", label: t.navigation.alerts, icon: Bell },
        { id: "insights", label: t.navigation.insights, icon: BarChart2 },
        { id: "settings", label: t.navigation.settings, icon: Settings },
    ];

    return (
        <div className="w-64 h-screen bg-[var(--sidebar-bg)] text-[var(--sidebar-fg)] flex flex-col p-4 border-r border-[#064e3b] sticky top-0 hidden md:flex">
            {/* Brand */}
            <div className="flex items-center gap-3 px-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-[var(--sidebar-accent)] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">FeedGuard</span>
            </div>



            {/* Search */}
            <div className="relative mb-8 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-white transition-colors" />
                <input
                    type="text"
                    placeholder="Search for..."
                    className="w-full bg-transparent border border-[#065f46] rounded-xl pl-10 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--sidebar-accent)] focus:ring-1 focus:ring-[var(--sidebar-accent)] transition-all placeholder:text-gray-400"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-[#4b5563] border border-[#2d3748] rounded px-1.5 py-0.5 pointer-events-none">
                    <Command className="w-3 h-3" />
                    <span className="text-[10px] font-medium">F</span>
                </div>
            </div>

            {/* Navigation */}
            <div className="mb-auto">
                <div className="text-xs font-semibold text-gray-500 mb-4 px-2 uppercase tracking-wider">Navigation</div>
                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => {
                                setActiveItem(item.id);
                                onNavigate(item.id);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors relative group ${activeItem === item.id
                                ? "text-white"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center gap-3 relative z-10">
                                <item.icon className={`w-5 h-5 ${activeItem === item.id ? "text-[var(--sidebar-accent)]" : "text-gray-500 group-hover:text-gray-300"}`} />
                                {item.label}
                            </div>

                            {activeItem === item.id && (
                                <motion.div
                                    layoutId="sidebar-active"
                                    className="absolute inset-0 bg-[var(--sidebar-active-bg)] rounded-xl z-0"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </nav>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-1 mt-6">


                <div className="pt-4 mt-4 border-t border-[#064e3b]">
                    <div className="flex items-center gap-3 px-2 py-2 cursor-pointer hover:bg-white/5 rounded-xl transition-colors">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 p-[2px]">
                            <img
                                src="https://github.com/shadcn.png"
                                alt="User"
                                className="w-full h-full rounded-full border-2 border-[var(--sidebar-bg)]"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">Alex Williamson</p>
                            <p className="text-xs text-gray-500 truncate">#dela-1974</p>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
