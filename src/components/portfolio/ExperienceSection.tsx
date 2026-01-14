import { Briefcase, Download, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    title: 'Software Developer',
    company: 'Datassits',
    location: 'Beyoğlu, İstanbul',
    period: '07.2025 - 08.2025',
    current: true,
    description: [
      'Developed microservicse-based backend with Java 17 & Srping Boot.',
      'Implemented JWT authentication and access control.',
      'Designed secure API Gateway with Spring Cloud Gateway.',
      'Performed API securtiy testing with Postman & Swagger.',
      'Utilized PostgreSQL with separate isolated databases per service.',
      'Foloowed secure coding practices (input validation, error sanitization).',
      'Designed and implemented secure API Gateway routing using Spring Cloud Gateway, focusing on traffic isolation and secure tunneling.',
      'Integrated JWT-based authentication and complex access control mechanism to ensure zero-trust principles at the application level.',
    ],
  },
  {
    title: 'IT Systems & Security',
    company: 'Zentaives',
    location: 'Athens, Greece (Remote)',
    period: '2021 - 2025',
    description: [
      'Maintained network security, acccess control and backup systems.',
      'Performed scurity monitoring, user access audits and log checks.',
      'Conducted regular network security, implementing grangular access control lists (ACLs) and ensuring secure workstation provisioning.',
      'Performed endpoint hardening and managed security patches for corporate infrastructure to mitigate vulnerabilities.',
      'Managed large-scale Excel & Internal data systems securely.',
    ],
  },
  {
    title: 'IT Technician Intern',
    company: 'Memteks',
    location: 'Avcılar, Istanbul',
    period: '08.2021 - 10.2021',
    description: [
      'Installed and configured workstations, networks and security tools.',
      'Helped optimize small business network performance and privacy controls.',
      'Provided user training for secure system usage.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-widest">~/experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Career <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey through the cybersecurity landscape,
            from analyst to senior researcher.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-in ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="terminal-window p-6 hover:border-primary/50 transition-all duration-300 group">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {exp.current && (
                      <span className="ml-auto text-xs text-primary font-medium"></span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mt-1">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CV Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 border-glow font-semibold"
          >
            <a href="/FurkanDemirci_CV.pdf" download="Furkan_Demirci_CV.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Last updated: January 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
