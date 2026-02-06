import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Globe, Bell, Shield, User, Smartphone, Mail } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function SettingsPage() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{t.profileSettings.title}</h2>
                <p className="text-gray-600 mt-1">Manage your account and platform preferences</p>
            </div>

            <div className="grid gap-6">
                {/* Language & Regional */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Globe className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <CardTitle className="text-lg">Language & Regional</CardTitle>
                                <CardDescription>Customize your localization preferences</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div className="space-y-0.5">
                                <Label className="text-base">{t.profileSettings.languagePreference}</Label>
                                <p className="text-sm text-gray-500">Select your preferred interface language</p>
                            </div>
                            <Select value={language} onValueChange={(val: any) => setLanguage(val)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="rw">Kinyarwanda</SelectItem>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="fr">Français</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Notifications */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-yellow-50 rounded-lg">
                                <Bell className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div>
                                <CardTitle className="text-lg">Notifications</CardTitle>
                                <CardDescription>Manage how you receive alerts</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Critical Alerts</Label>
                                <p className="text-sm text-gray-500">Receive immediate notifications for critical food insecurity updates</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Weekly Reports</Label>
                                <p className="text-sm text-gray-500">Get a summary of regional status every Monday</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">SMS Notifications</Label>
                                <p className="text-sm text-gray-500">Receive urgent alerts via SMS to your registered number</p>
                            </div>
                            <Switch />
                        </div>
                    </CardContent>
                </Card>

                {/* Profile Information */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <User className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <CardTitle className="text-lg">Profile Information</CardTitle>
                                <CardDescription>Your personal and role details</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Full Name</Label>
                                <div className="p-2 border rounded-md bg-gray-50 text-gray-700">Alex Williamson</div>
                            </div>
                            <div className="space-y-2">
                                <Label>Role</Label>
                                <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50 text-gray-700">
                                    <Shield className="w-4 h-4 text-green-600" />
                                    Community Leader
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50 text-gray-700">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    alex.w@feedguard.org
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Phone</Label>
                                <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50 text-gray-700">
                                    <Smartphone className="w-4 h-4 text-gray-400" />
                                    +250 788 123 456
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-[var(--sidebar-bg)] hover:bg-gray-800 text-white">Save Changes</Button>
                </div>
            </div>
        </div>
    );
}
