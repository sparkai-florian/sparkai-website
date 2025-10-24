import React from 'react';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  CogIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline';

const automationPackages = [
  {
    icon: UserGroupIcon,
    title: 'Smart Recruitment Automation',
    price: '1,999',
    tagline: 'Hire faster. Work smarter.',
    description: 'Let your recruitment process run on autopilot. This automation collects applications from LinkedIn, checks qualifications, sends email questions to qualified candidates, and even schedules interviews — all managed through Google Sheets. Your HR team only meets pre-qualified candidates while the system does the heavy lifting.',
    includes: [
      'Automatic LinkedIn applicant collection',
      'Qualification screening',
      'Auto-emails & test task distribution',
      'Google Meet interview scheduling',
      'Centralized candidate tracking'
    ]
  },
  {
    icon: DocumentChartBarIcon,
    title: 'Invoice & Bill Automation',
    price: '899',
    tagline: 'Your accounting, fully automated.',
    description: 'Transform invoices and bills into clean, structured data inside Google Sheets. Using smart document parsing and OCR, this automation extracts key info (supplier, date, amount, tax) and organizes everything for instant reporting or upload to your accounting system.',
    includes: [
      'PDF, image, or email invoice reading',
      'Auto-entry into Google Sheets',
      'Expense categorization',
      'Optional accounting API integration'
    ]
  },
  {
    icon: DocumentTextIcon,
    title: 'Proposal & Contract Generator',
    price: '1,499',
    tagline: 'Turn forms into ready-to-send documents.',
    description: 'Imagine filling out a short form and instantly receiving a ready-made proposal, contract, or invoice — personalized for your client. This automation converts survey inputs into official documents and sends them automatically for approval or signature.',
    includes: [
      'Client survey form integration',
      'Automatic proposal & invoice generation',
      'Google Docs / PDF output',
      'Auto-email delivery to client'
    ]
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Customer Engagement Automation',
    price: '799',
    tagline: 'Stay connected automatically.',
    description: 'Send personalized messages to clients for special offers, reminders, or even holiday greetings — all triggered automatically from your data. Perfect for maintaining consistent and thoughtful communication.',
    includes: [
      'SMS / WhatsApp / Email notifications',
      'Event-based triggers (birthdays, appointments, purchases)',
      'Custom templates for campaigns',
      'Google Sheets & CRM integration'
    ]
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Lead Generation Scraper',
    price: '999',
    tagline: 'Leads that find you.',
    description: 'Automate the process of discovering new potential clients. This scraper gathers business details from websites or Google Maps and neatly organizes them into your spreadsheet for outreach or CRM upload.',
    includes: [
      'Website & Google Maps scraping',
      'Lead data enrichment (name, phone, email, website)',
      'Export to Google Sheets',
      'Optional lead scoring & email finder'
    ]
  },
  {
    icon: PencilSquareIcon,
    title: 'AI Blog & Content Posting Automation',
    price: '999',
    tagline: 'Let your content publish itself.',
    description: 'Transform your content workflow with an AI-powered system that writes, formats, and posts blog articles automatically — daily or weekly — to your favorite platforms. Simply add a topic or keyword, and the system generates an SEO-optimized article, uploads it to your website, and shares it across connected platforms like WordPress, Medium, or LinkedIn.',
    includes: [
      'AI-generated blog posts based on chosen topics or keywords',
      'Automatic publishing schedule (daily, weekly, or custom)',
      'Integration with WordPress, Medium, or LinkedIn',
      'Image generation and formatting support',
      'Google Sheets control panel to edit topics or frequency'
    ]
  }
];

export default function AutomationDevelopment() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              Automation
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00FFA3] via-[#00FFA3] to-[#00FFA3] bg-clip-text text-transparent">
              That Works For You
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl font-semibold text-white/90 mb-4 max-w-3xl mx-auto">
            Save Time. Cut Costs. Automate Everything.
          </p>
          
          <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We build intelligent automations that connect your tools, eliminate repetitive work, 
            and let your business run smoothly — even while you sleep.
          </p>
        </div>

        {/* Automation Packages Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {automationPackages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 via-white/10 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] rounded-3xl overflow-hidden h-full">
                  {/* Card Header with Icon */}
                  <div className="relative p-8 pb-6">
                    {/* Background gradient overlay */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
                    
                    <div className="relative flex items-start justify-between mb-6">
                      {/* Icon */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#00FFA3] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00FFA3] to-[#00FFA3]/80 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Price Badge */}
                      <div className="relative">
                        <div className="relative bg-white/10 rounded-xl px-4 py-2 shadow-lg border border-white/20">
                          <div className="text-xs font-bold text-white/80 mb-0.5">FROM</div>
                          <div className="text-2xl font-bold text-white">€{pkg.price}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                      {pkg.title}
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-base font-semibold text-white">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="px-8 pb-8">
                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Includes</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent"></div>
                      </div>
                      
                      {pkg.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <div className="mt-0.5 flex-shrink-0">
                            <CheckCircleIcon className="w-5 h-5 text-white group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-sm text-gray-300 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
