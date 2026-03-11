import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState, useEffect } from "react";
import { Globe, Bell, Shield, User, Smartphone, Mail, AlertCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { AuthService } from "../../Services/authService";
import { Input } from "./ui/input";

export function SettingsPage() {
    const { language, setLanguage, t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    // UI states
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await AuthService.getCurrentUser();
                if (res?.user) {
                    setName(res.user.name || "");
                    setEmail(res.user.email || "");
                    setRole(res.user.role || "");
                    // Note: Phone isn't standard in the current generic User interface, 
                    // but we can map it if it exists or leave empty.
                    setPhone((res.user as any).phone || "");
                }
            } catch (err) {
                console.error("Failed to load user info", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleSaveProfile = async () => {
        setMessage("");
        setError("");
        setIsSaving(true);
        try {
            // updateProfile payload can contain whatever fields the backend expects
            const res = await AuthService.updateProfile({
                name,
                email,
                ...(phone ? { phone: phone as any } : {})
            });
            setMessage("Profile updated successfully");
        } catch (err: any) {
            setError(err.message || "Failed to update profile");
        } finally {
            setIsSaving(false);
        }
    };

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
                        {message && (
                            <div className="bg-green-50 text-green-700 p-3 rounded-md flex items-center gap-2 text-sm border border-green-200">
                                <CheckCircle2 className="w-4 h-4" />
                                {message}
                            </div>
                        )}
                        {error && (
                            <div className="bg-red-50 text-red-700 p-3 rounded-md flex items-center gap-2 text-sm border border-red-200">
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </div>
                        )}

                        {isLoading ? (
                            <div className="py-8 text-center text-gray-400">Loading profile data...</div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Full Name</Label>
                                    <Input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="bg-gray-50 focus:bg-white transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Role</Label>
                                    <div className="flex items-center gap-2 px-3 h-10 border rounded-md bg-gray-100 text-gray-500 cursor-not-allowed">
                                        <Shield className="w-4 h-4" />
                                        <span className="capitalize">{role || "Not specified"}</span>
                                    </div>
                                    <p className="text-xs text-gray-400">Role changes must be processed by an administrator.</p>
                                </div>
                                <div className="space-y-2">
                                    <Label>Email</Label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="pl-9 bg-gray-50 focus:bg-white transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Phone</Label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Smartphone className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <Input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+250 788 000 000"
                                            className="pl-9 bg-gray-50 focus:bg-white transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => window.location.reload()}>Cancel</Button>
                    <Button
                        onClick={handleSaveProfile}
                        disabled={isSaving || isLoading}
                        className="bg-[var(--sidebar-bg)] hover:bg-gray-800 text-white"
                    >
                        {isSaving ? "Saving..." : "Save Changes"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
