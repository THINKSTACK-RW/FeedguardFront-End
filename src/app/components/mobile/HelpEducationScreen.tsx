import { useLanguage } from '@/app/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { ChevronLeft, HelpCircle, BookOpen, Phone } from 'lucide-react';

interface HelpEducationScreenProps {
  onNavigate: (screen: string) => void;
}

export function HelpEducationScreen({ onNavigate }: HelpEducationScreenProps) {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-purple-600 text-white p-6">
        <div className="flex items-center gap-4 mb-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('home')}
            className="text-white hover:bg-purple-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{t.helpEducation.title}</h1>
            <p className="text-sm opacity-90">Learn about food security</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        {/* Emergency Card */}
        <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200 border-2">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-2">
                {t.helpEducation.emergencyContacts}
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                {t.helpEducation.emergencyContactsText}
              </p>
              <div className="bg-white rounded-lg p-3 border border-red-300">
                <p className="text-center text-2xl font-bold text-red-600">119</p>
                <p className="text-center text-xs text-gray-600 mt-1">Emergency Hotline</p>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold">{t.helpEducation.whatIsFoodSecurity}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 pl-8 pr-4 pb-2">
                  {t.helpEducation.whatIsFoodSecurityText}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <HelpCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-semibold">{t.helpEducation.whyReporting}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 pl-8 pr-4 pb-2">
                  {t.helpEducation.whyReportingText}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="font-semibold">{t.helpEducation.howDataUsed}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 pl-8 pr-4 pb-2">
                  {t.helpEducation.howDataUsedText}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Info Card */}
        <Card className="p-5 bg-blue-50 border-blue-200 border-2">
          <p className="text-sm text-blue-800 text-center">
            Your information is used only for food security monitoring and is kept confidential.
          </p>
        </Card>
      </div>
    </div>
  );
}
