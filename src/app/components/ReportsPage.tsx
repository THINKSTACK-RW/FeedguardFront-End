import {
  FileText,
  Download,
  Search,
  Calendar,
  MapPin,
  Users,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter,
  ChevronDown,
  Eye,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  ChevronUp,
  User,
  Phone,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { AnalyticsReportService, RegionalReport, IndividualResponse } from "../../Services/analyticsReportService";
import { DetailedReport } from "../../Services/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useLanguage } from "../LanguageContext";

interface ReportsPageProps {
  onNavigate: (page: string) => void;
}

export function ReportsPage({ onNavigate }: ReportsPageProps) {
  const { t } = useLanguage();
  const [filterRegion, setFilterRegion] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [regionalReports, setRegionalReports] = useState<RegionalReport[]>([]);
  const [expandedLocations, setExpandedLocations] = useState<Set<string>>(new Set());
  const [summaryStats, setSummaryStats] = useState({
    totalReports: 0,
    critical: 0,
    warning: 0,
    stable: 0,
    avgCompleteness: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegionalReportsData = async () => {
      try {
        setLoading(true);
        const reportsData = await AnalyticsReportService.getRegionalReports(
          filterRegion === "all" ? undefined : filterRegion,
          filterStatus === "all" ? undefined : filterStatus as any
        );
        setRegionalReports(reportsData);

        // Calculate summary stats from regional reports
        const totalReports = reportsData.reduce((sum, report) => sum + report.totalResponses, 0);
        const totalCritical = reportsData.reduce((sum, report) => sum + report.critical, 0);
        const totalWarning = reportsData.reduce((sum, report) => sum + report.warning, 0);
        const totalStable = reportsData.reduce((sum, report) => sum + report.stable, 0);
        
        setSummaryStats({
          totalReports,
          critical: totalCritical,
          warning: totalWarning,
          stable: totalStable,
          avgCompleteness: 85, // Mock value
        });
      } catch (error) {
        console.error("Error fetching regional reports data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegionalReportsData();
  }, [filterRegion, filterStatus]);

  const toggleLocationExpansion = (locationId: string) => {
    setExpandedLocations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(locationId)) {
        newSet.delete(locationId);
      } else {
        newSet.add(locationId);
      }
      return newSet;
    });
  };

  const downloadLocationReport = async (locationId: string, locationName: string) => {
    try {
      const response = await fetch(`/api/reports/location/${locationId}/export?format=csv`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${locationName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_responses.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading location report:", error);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "critical":
        return <Badge className="bg-red-100 text-red-700 border-red-200">Critical</Badge>;
      case "warning":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
            Warning
          </Badge>
        );
      case "stable":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Stable</Badge>;
      default:
        return null;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-red-600" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-green-600" />;
      default:
        return <div className="w-4 h-4 border-t-2 border-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl text-gray-900">Regional Reports</h2>
          <p className="text-gray-600 mt-1">
            Detailed food security reports by region
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Reports</p>
                <p className="text-2xl text-gray-900">{summaryStats.totalReports}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Critical</p>
                <p className="text-2xl text-red-600">{summaryStats.critical}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Warning</p>
                <p className="text-2xl text-yellow-600">{summaryStats.warning}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Stable</p>
                <p className="text-2xl text-green-600">{summaryStats.stable}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg. Response</p>
                <p className="text-2xl text-blue-600">{summaryStats.avgCompleteness}%</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search regions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterRegion} onValueChange={setFilterRegion}>
              <SelectTrigger>
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All Regions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="kibera">Kibera District</SelectItem>
                <SelectItem value="makina">Makina Village</SelectItem>
                <SelectItem value="lindi">Lindi Area</SelectItem>
                <SelectItem value="soweto">Soweto East</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="stable">Stable</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="latest">
              <SelectTrigger>
                <Clock className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="critical">Critical First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Regional Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Food Security Reports</CardTitle>
          <CardDescription>
            Click on any location to view individual responses from each citizen
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <AnimatePresence>
              {loading && regionalReports.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Loading regional reports...
                </div>
              ) : regionalReports.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No reports found.
                </div>
              ) : (
                regionalReports.map((region) => (
                  <motion.div
                    key={region.locationId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    layout
                  >
                    {/* Location Summary Card */}
                    <Card 
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => toggleLocationExpansion(region.locationId)}
                    >
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <MapPin className="w-5 h-5 text-gray-400" />
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {region.locationName}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {region.district} → {region.sector} → {region.village}
                                </p>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="text-center">
                                <p className="text-2xl font-bold text-blue-600">{region.totalResponses}</p>
                                <p className="text-xs text-gray-600">Total Responses</p>
                              </div>
                              
                              <div className="text-center">
                                <p className="text-2xl font-bold text-green-600">{region.stable}</p>
                                <p className="text-xs text-gray-600">Stable</p>
                              </div>
                              
                              <div className="text-center">
                                <p className="text-2xl font-bold text-yellow-600">{region.warning}</p>
                                <p className="text-xs text-gray-600">At Risk</p>
                              </div>
                              
                              <div className="text-center">
                                <p className="text-2xl font-bold text-red-600">{region.critical}</p>
                                <p className="text-xs text-gray-600">Critical</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 mt-4">
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">Avg Meals/Day:</span>
                                <span className="text-sm font-semibold">{region.avgMealsPerDay}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">Avg Days Food:</span>
                                <span className="text-sm font-semibold">{region.avgDaysOfFoodLeft}</span>
                              </div>
                              {getStatusBadge(region.overallStatus.toLowerCase())}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 ml-4">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                downloadLocationReport(region.locationId, region.locationName);
                              }}
                            >
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                            {expandedLocations.has(region.locationId) ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Individual Responses (Expandable) */}
                    <AnimatePresence>
                      {expandedLocations.has(region.locationId) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <Card className="mt-2 border-l-4 border-l-blue-500">
                            <CardHeader>
                              <CardTitle className="text-lg">Individual Responses</CardTitle>
                              <CardDescription>
                                Detailed responses from {region.totalResponses} citizens in {region.locationName}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="overflow-x-auto">
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Citizen</TableHead>
                                      <TableHead>Contact</TableHead>
                                      <TableHead>Date</TableHead>
                                      <TableHead>Meals/Day</TableHead>
                                      <TableHead>Days Food</TableHead>
                                      <TableHead>Food Change</TableHead>
                                      <TableHead>Shocks</TableHead>
                                      <TableHead>AI Confidence</TableHead>
                                      <TableHead>Status</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    {region.responses.map((response) => (
                                      <TableRow key={response.id} className="hover:bg-gray-50">
                                        <TableCell>
                                          <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-gray-400" />
                                            <div>
                                              <p className="text-sm font-medium">{response.citizenName}</p>
                                              <p className="text-xs text-gray-600">ID: {response.citizenId}</p>
                                            </div>
                                          </div>
                                        </TableCell>
                                        <TableCell>
                                          <div className="flex items-center gap-1">
                                            <Phone className="w-3 h-3 text-gray-400" />
                                            <span className="text-sm">{response.citizenPhone}</span>
                                          </div>
                                        </TableCell>
                                        <TableCell>
                                          <div className="text-sm">
                                            <p className="text-gray-900">{response.date}</p>
                                            <p className="text-gray-600">{response.time}</p>
                                          </div>
                                        </TableCell>
                                        <TableCell>
                                          <span className="text-sm font-medium">{response.mealsPerDay || 'N/A'}</span>
                                        </TableCell>
                                        <TableCell>
                                          <span className="text-sm font-medium">{response.daysOfFoodLeft || 'N/A'}</span>
                                        </TableCell>
                                        <TableCell>
                                          <span className="text-sm">{response.foodChangeType || 'None'}</span>
                                        </TableCell>
                                        <TableCell>
                                          <div className="text-sm">
                                            {response.shocksExperienced.length > 0 ? (
                                              <div className="space-y-1">
                                                {response.shocksExperienced.slice(0, 2).map((shock, index) => (
                                                  <div key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                                    {shock}
                                                  </div>
                                                ))}
                                                {response.shocksExperienced.length > 2 && (
                                                  <div className="text-xs text-gray-600">
                                                    +{response.shocksExperienced.length - 2} more
                                                  </div>
                                                )}
                                              </div>
                                            ) : (
                                              <span className="text-sm text-gray-600">None</span>
                                            )}
                                          </div>
                                        </TableCell>
                                        <TableCell>
                                          <span className="text-sm font-medium">
                                            {typeof response.confidence === 'number'
                                              ? `${(response.confidence * 100).toFixed(0)}%`
                                              : 'N/A'}
                                          </span>
                                        </TableCell>
                                        <TableCell>
                                          {getStatusBadge(response.riskLevel)}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="text-lg">Immediate Action Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-900">Kibera District</p>
                  <p className="text-xs text-gray-600">45 critical households</p>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Alert
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-900">Lindi Area</p>
                  <p className="text-xs text-gray-600">32 critical households</p>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Alert
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="text-lg">Monitor Closely</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-900">Makina Village</p>
                  <p className="text-xs text-gray-600">Trend increasing</p>
                </div>
                <Badge variant="outline" className="border-yellow-300 text-yellow-700">
                  Watch
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-900">Raila Village</p>
                  <p className="text-xs text-gray-600">Trend increasing</p>
                </div>
                <Badge variant="outline" className="border-yellow-300 text-yellow-700">
                  Watch
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-lg">Positive Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-900">Soweto East</p>
                  <p className="text-xs text-gray-600">Improving steadily</p>
                </div>
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Good
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-900">Gatwekera</p>
                  <p className="text-xs text-gray-600">Stable conditions</p>
                </div>
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Good
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}