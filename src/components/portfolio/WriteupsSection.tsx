import { FileText, ExternalLink, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Writeup {
  title: string;
  platform: 'HackTheBox' | 'TryHackMe';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  date: string;
  excerpt: string;
  tags: string[];
  link: string;
}

const writeups: Writeup[] = [
  {
    title: 'Keeper',
    platform: 'HackTheBox',
    difficulty: 'Easy',
    date: '2026-01-10',
    excerpt: 'Exploiting a Request Tracker vulnerability and extracting KeePass master password from memory dump for privilege escalation.',
    tags: ['CVE', 'KeePass', 'Memory Forensics'],
    link: '#',
  },
  {
    title: 'CozyHosting',
    platform: 'HackTheBox',
    difficulty: 'Medium',
    date: '2025-12-28',
    excerpt: 'Command injection via Cloudhosting API leading to initial foothold, followed by PostgreSQL credential extraction and sudo exploitation.',
    tags: ['Command Injection', 'PostgreSQL', 'Spring Boot'],
    link: '#',
  },
  {
    title: 'Buffer Overflow Prep',
    platform: 'TryHackMe',
    difficulty: 'Easy',
    date: '2025-12-15',
    excerpt: 'Comprehensive walkthrough of the OSCP-style buffer overflow room covering fuzzing, offset discovery, bad characters, and shellcode generation.',
    tags: ['BOF', 'OSCP Prep', 'Windows'],
    link: '#',
  },
  {
    title: 'Clicker',
    platform: 'HackTheBox',
    difficulty: 'Hard',
    date: '2025-11-30',
    excerpt: 'PHP type juggling exploitation, NFS misconfiguration abuse, and Perl environment variable manipulation for root access.',
    tags: ['PHP', 'NFS', 'Perl'],
    link: '#',
  },
  {
    title: 'Active Directory 101',
    platform: 'TryHackMe',
    difficulty: 'Medium',
    date: '2025-11-18',
    excerpt: 'Complete AD penetration testing methodology from initial enumeration through Kerberoasting to domain admin compromise.',
    tags: ['Active Directory', 'Kerberos', 'Windows'],
    link: '#',
  },
];

const difficultyColors: Record<string, string> = {
  'Easy': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Medium': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Hard': 'bg-red-500/20 text-red-400 border-red-500/30',
  'Insane': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const platformColors: Record<string, string> = {
  'HackTheBox': 'bg-[#9FEF00]/10 text-[#9FEF00] border-[#9FEF00]/30',
  'TryHackMe': 'bg-[#88CC14]/10 text-[#88CC14] border-[#88CC14]/30',
};

const WriteupsSection = () => {
  return (
    <section id="writeups" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <FileText className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-widest">~/writeups</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            CTF <span className="text-primary">Write-ups</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed walkthroughs of machines and challenges from HackTheBox 
            and TryHackMe platforms.
          </p>
        </div>

        {/* Writeups List */}
        <div className="space-y-6">
          {writeups.map((writeup, index) => (
            <Card 
              key={writeup.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Badge 
                        variant="outline" 
                        className={platformColors[writeup.platform]}
                      >
                        {writeup.platform}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={difficultyColors[writeup.difficulty]}
                      >
                        {writeup.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {writeup.title}
                    </CardTitle>
                  </div>
                  <a 
                    href={writeup.link}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {writeup.excerpt}
                </CardDescription>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {writeup.tags.map(tag => (
                      <span 
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {new Date(writeup.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View all write-ups
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WriteupsSection;
