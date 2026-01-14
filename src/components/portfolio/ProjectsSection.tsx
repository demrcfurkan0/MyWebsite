import { Github, ExternalLink, Terminal, Code2, Shield, Network, Bug, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'NetRecon',
    description: 'Advanced network reconnaissance tool with automated port scanning, service enumeration, and vulnerability assessment capabilities.',
    tags: ['Python', 'Network', 'Recon'],
    icon: <Network className="w-6 h-6" />,
    github: '#',
  },
  {
    title: 'CryptoBreaker',
    description: 'Cryptographic analysis toolkit for identifying and exploiting weak encryption implementations in target applications.',
    tags: ['Python', 'Cryptography', 'Exploit'],
    icon: <Lock className="w-6 h-6" />,
    github: '#',
  },
  {
    title: 'SQLi-Hunter',
    description: 'Automated SQL injection detection and exploitation framework with support for multiple database backends.',
    tags: ['Python', 'SQL', 'Exploit'],
    icon: <Bug className="w-6 h-6" />,
    github: '#',
  },
  {
    title: 'ShellForge',
    description: 'Custom shellcode generator and encoder with AV evasion techniques for red team engagements.',
    tags: ['C', 'Assembly', 'Malware'],
    icon: <Terminal className="w-6 h-6" />,
    github: '#',
  },
  {
    title: 'AuthBypass',
    description: 'Authentication bypass testing toolkit for common web vulnerabilities including JWT manipulation and session hijacking.',
    tags: ['JavaScript', 'Web', 'Auth'],
    icon: <Shield className="w-6 h-6" />,
    github: '#',
  },
  {
    title: 'BinaryGhost',
    description: 'Binary analysis and reverse engineering framework with automated vulnerability pattern detection.',
    tags: ['Python', 'Reversing', 'Binary'],
    icon: <Code2 className="w-6 h-6" />,
    github: '#',
  },
];

const tagColors: Record<string, string> = {
  'Python': 'bg-[#3776AB]/20 text-[#3776AB] border-[#3776AB]/30',
  'Network': 'bg-primary/20 text-primary border-primary/30',
  'Recon': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Cryptography': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Exploit': 'bg-destructive/20 text-destructive border-destructive/30',
  'SQL': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'C': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  'Assembly': 'bg-red-500/20 text-red-400 border-red-500/30',
  'Malware': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Web': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Auth': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Reversing': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  'Binary': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Terminal className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-widest">~/projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Security <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Custom tools and scripts developed for penetration testing, 
            vulnerability research, and security automation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:border-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl mt-4 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className={`text-xs ${tagColors[tag] || 'bg-secondary text-secondary-foreground'}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
