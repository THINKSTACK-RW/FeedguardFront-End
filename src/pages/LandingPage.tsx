import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    ShieldCheck,
    ArrowRight,
    ChevronDown,
    Activity,
    Map,
    Globe,
    BellRing,
    ClipboardCheck,
    BarChart3,
    Layers,
    Send,
    Menu,
    X,
    MessageSquare,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';
import { useLanguage } from '../app/LanguageContext';
import { LanguageSwitcher } from '../app/components/LanguageSwitcher';
import { Button } from '../app/components/ui/button';

export function LandingPage() {
    const { t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="FeedGuard Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                            <span className="font-bold text-2xl tracking-tight text-gray-900">
                                FeedGuard
                            </span>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">{t.landing.aboutTitle}</a>
                            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">{t.landing.featuresTitle}</a>
                            <a href="#impact" onClick={(e) => scrollToSection(e, 'impact')} className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">{t.landing.impactTitle}</a>
                            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">{t.landing.faqTitle}</a>
                            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
                                <LanguageSwitcher />
                                <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">Login</Link>
                                <Link to="/register">
                                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 shadow-md transition-all hover:shadow-lg">
                                        {t.landing.register}
                                    </Button>
                                </Link>
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <LanguageSwitcher />
                            <button className="text-gray-500 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4"
                    >
                        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block text-base font-medium text-gray-700">{t.landing.aboutTitle}</a>
                        <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="block text-base font-medium text-gray-700">{t.landing.featuresTitle}</a>
                        <a href="#impact" onClick={(e) => scrollToSection(e, 'impact')} className="block text-base font-medium text-gray-700">{t.landing.impactTitle}</a>
                        <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block text-base font-medium text-gray-700">{t.landing.faqTitle}</a>
                        <hr className="border-gray-100" />
                        <Link to="/login" className="block text-base font-medium text-gray-700">Login</Link>
                        <Link to="/register" className="block text-center bg-green-600 text-white font-medium py-3 rounded-xl mt-4">
                            {t.landing.register}
                        </Link>
                    </motion.div>
                )}
            </header>

            <main className="pt-20">
                {/* 1. Hero Section */}
                <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-green-50/50 to-white pt-24 pb-32">
                    <div className="absolute inset-0 z-0">
                        {/* Subtle background circles */}
                        <div className="absolute top-20 left-10 w-96 h-96 bg-green-300/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-emerald-400/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-8">
                                <ShieldCheck className="w-4 h-4" />
                                {t.landing.heroTitle}
                            </motion.div>
                            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                                {t.landing.heroSubtitle}
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
                                {t.landing.heroDescription}
                            </motion.p>
                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link to="/register" className="w-full sm:w-auto">
                                    <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-green-600/20 group transition-all">
                                        {t.landing.register}
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="w-full sm:w-auto">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-gray-200 text-gray-700 hover:bg-gray-50">
                                        {t.landing.learnMore}
                                    </Button>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. About Us Section */}
                <section id="about" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeIn}>
                                <h2 className="text-green-600 font-semibold tracking-wide uppercase text-sm mb-2">{t.landing.aboutTitle}</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                    {t.landing.aboutSubtitle}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {t.landing.aboutDescription}
                                </p>
                            </motion.div>
                            <motion.div variants={fadeIn} className="relative">
                                <div className="aspect-square bg-green-50 rounded-full absolute -inset-4 blur-2xl opacity-50"></div>
                                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10 grid grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                                            <Database className="w-6 h-6 text-green-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900">Data Driven</h4>
                                        <p className="text-sm text-gray-500">Decisions backed by community numbers.</p>
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                                            <ShieldCheck className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900">Secure & Private</h4>
                                        <p className="text-sm text-gray-500">User identity stays strictly protected.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                                            <Globe className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900">National Scale</h4>
                                        <p className="text-sm text-gray-500">Empowering regions country-wide.</p>
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                                            <Activity className="w-6 h-6 text-green-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900">Real-time</h4>
                                        <p className="text-sm text-gray-500">Live health monitoring of communities.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. How It Works Section */}
                <section id="how-it-works" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.landing.howItWorksTitle}</h2>
                            <p className="text-lg text-gray-600">A simple, effective, and continuous cycle for identifying risks early.</p>
                        </div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: ClipboardCheck, title: t.landing.how1Title, desc: t.landing.how1Desc },
                                { icon: BarChart3, title: t.landing.how2Title, desc: t.landing.how2Desc },
                                { icon: Layers, title: t.landing.how3Title, desc: t.landing.how3Desc },
                                { icon: Send, title: t.landing.how4Title, desc: t.landing.how4Desc },
                            ].map((step, idx) => (
                                <motion.div key={idx} variants={fadeIn} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative">
                                    <div className="text-6xl font-black text-gray-50 absolute right-6 top-6 select-none">
                                        {idx + 1}
                                    </div>
                                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                        <step.icon className="w-7 h-7 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{step.title}</h3>
                                    <p className="text-gray-600 relative z-10">{step.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* 4. Key Features Section */}
                <section id="features" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.landing.featuresTitle}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex gap-6 group">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Activity className="w-8 h-8 text-red-500" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.landing.feature1Title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t.landing.feature1Desc}</p>
                                </div>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex gap-6 group">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Map className="w-8 h-8 text-blue-500" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.landing.feature2Title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t.landing.feature2Desc}</p>
                                </div>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex gap-6 group">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Globe className="w-8 h-8 text-purple-500" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.landing.feature3Title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t.landing.feature3Desc}</p>
                                </div>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex gap-6 group">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <BellRing className="w-8 h-8 text-amber-500" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.landing.feature4Title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t.landing.feature4Desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. Impact / Why It Matters Section */}
                <section id="impact" className="py-24 bg-[#064e3b] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        {/* Decorative background pattern */}
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="polka-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <circle fill="currentColor" cx="20" cy="20" r="2"></circle>
                                </pattern>
                            </defs>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto">
                            <h2 className="text-green-300 font-semibold tracking-wide uppercase text-sm mb-4">{t.landing.impactTitle}</h2>
                            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                {t.landing.impactSubtitle}
                            </h3>
                            <p className="text-xl text-green-50 mb-12">
                                {t.landing.impactDesc}
                            </p>
                            <Link to="/register">
                                <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-bold shadow-xl transition-all hover:scale-105">
                                    Get Started Today
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* 6. FAQ Section */}
                <section id="faq" className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.landing.faqTitle}</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                { q: t.landing.faq1Q, a: t.landing.faq1A },
                                { q: t.landing.faq2Q, a: t.landing.faq2A },
                                { q: t.landing.faq3Q, a: t.landing.faq3A },
                                { q: t.landing.faq4Q, a: t.landing.faq4A }
                            ].map((faq, index) => (
                                <motion.div
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                                    key={index}
                                    className="bg-gray-50 rounded-2xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:bg-gray-100 transition-colors"
                                    >
                                        <span className="font-semibold text-lg text-gray-900">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-gray-600">{faq.a}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Contact Section */}
                <section id="contact" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.landing.contactTitle}</h2>
                                <p className="text-lg text-gray-600 mb-10">{t.landing.contactSubtitle}</p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 flex-shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{t.landing.contactAddressTitle}</h4>
                                            <p className="text-gray-600">{t.landing.contactAddressValue}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 flex-shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{t.landing.contactPhoneTitle}</h4>
                                            <p className="text-gray-600">{t.landing.contactPhoneValue}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 flex-shrink-0">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{t.landing.contactEmailTitle}</h4>
                                            <p className="text-gray-600">{t.landing.contactEmailValue}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.landing.contactNamePlaceholder}</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.landing.contactEmailPlaceholder}</label>
                                        <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.landing.contactMessagePlaceholder}</label>
                                        <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors" placeholder="How can we help?"></textarea>
                                    </div>
                                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6 text-lg">
                                        {t.landing.contactSend}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            {/* 8. Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/logo.png" alt="FeedGuard Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                                <span className="font-bold text-2xl tracking-tight text-white">
                                    FeedGuard
                                </span>
                            </div>
                            <p className="text-gray-400 max-w-sm mb-6">
                                {t.landing.footerAbout}
                            </p>
                            <LanguageSwitcher />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">{t.landing.footerLinks}</h4>
                            <ul className="space-y-4">
                                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-400 hover:text-white transition-colors">{t.landing.aboutTitle}</a></li>
                                <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-gray-400 hover:text-white transition-colors">{t.landing.featuresTitle}</a></li>
                                <li><a href="#impact" onClick={(e) => scrollToSection(e, 'impact')} className="text-gray-400 hover:text-white transition-colors">{t.landing.impactTitle}</a></li>
                                <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-gray-400 hover:text-white transition-colors">{t.landing.faqTitle}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">{t.landing.footerContact}</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kigali, Rwanda</li>
                                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +250 780 000 000</li>
                                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@feedguard.org</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                        <p>{t.landing.footerCopyright}</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Need to create a fake Database icon since lucide-react didn't export it in older versions sometimes?
// Database is a standard Lucide icon. I will import it along with others.
function Database(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    );
}
