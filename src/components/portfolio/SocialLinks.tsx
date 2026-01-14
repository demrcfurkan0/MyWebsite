import { Github, Linkedin, ExternalLink } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  hoverBg: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/demrcfurkan0',
    icon: <Github className="w-6 h-6" />,
    color: 'group-hover:text-foreground',
    hoverBg: 'hover:bg-[#333]/20 hover:border-[#333]',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/furkan-demirci-x/',
    icon: <Linkedin className="w-6 h-6" />,
    color: 'group-hover:text-[#0A66C2]',
    hoverBg: 'hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50',
  },
  {
    name: 'TryHackMe',
    url: 'https://tryhackme.com/p/7urky',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.278a.336.336 0 0 0 .336-.335V5.291A5.296 5.296 0 0 0 10.705 0zm0 1.342a3.95 3.95 0 0 1 3.949 3.949v8.065H4.762a3.182 3.182 0 0 1-3.178-3.178 3.182 3.182 0 0 1 3.178-3.178h.336V5.291a3.95 3.95 0 0 1 3.607-3.949zm2.943 5.053a.67.67 0 0 0-.671.671v2.687a.67.67 0 0 0 .671.671.67.67 0 0 0 .671-.671V7.066a.67.67 0 0 0-.671-.671zm-4.39.335a.67.67 0 0 0-.672.672v2.351a.67.67 0 0 0 .671.671.67.67 0 0 0 .671-.671V7.402a.67.67 0 0 0-.67-.672zM4.762 8.403a.67.67 0 0 0-.671.671v1.008a.67.67 0 0 0 .671.67.67.67 0 0 0 .671-.67V9.074a.67.67 0 0 0-.671-.671zm15.062.839a4.525 4.525 0 0 0-4.52 4.52v.839a.336.336 0 0 0 .336.336h.335v-.839a3.847 3.847 0 0 1 3.849-3.849 3.847 3.847 0 0 1 3.849 3.849v.839h.671v-.839a4.525 4.525 0 0 0-4.52-4.52zm-.336 6.031a.336.336 0 0 0-.335.336v8.056a.336.336 0 0 0 .335.335h4.184a.336.336 0 0 0 .336-.335v-2.016h-.672v1.68h-3.512v-7.384h3.512v1.68h.672v-2.016a.336.336 0 0 0-.336-.336zm-9.41.336a.336.336 0 0 0-.336.335v7.72a.336.336 0 0 0 .336.336h3.848a3.182 3.182 0 0 0 3.178-3.178v-1.679a3.182 3.182 0 0 0-3.178-3.178h-3.177v-.02a.336.336 0 0 0-.336-.336h-.336zm.672.671h3.177a2.51 2.51 0 0 1 2.507 2.507v1.679a2.51 2.51 0 0 1-2.507 2.507h-3.177z"/>
      </svg>
    ),
    color: 'group-hover:text-[#88CC14]',
    hoverBg: 'hover:bg-[#88CC14]/10 hover:border-[#88CC14]/50',
  },
  {
    name: 'HackTheBox',
    url: 'https://app.hackthebox.com/users/2441322',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.996 0a.626.626 0 0 0-.312.088L.378 6.677A.625.625 0 0 0 .063 7.2v9.596c0 .216.111.416.293.53l11.308 6.59a.625.625 0 0 0 .63.003l11.33-6.59a.625.625 0 0 0 .313-.54V7.2a.625.625 0 0 0-.306-.525L12.308.084A.625.625 0 0 0 11.996 0zm-.004 1.259l10.584 6.18-4.222 2.475-6.362-3.669-6.345 3.66L1.42 7.44zm-.1 5.62l5.659 3.264-5.56 3.248-5.66-3.263zm-6.374 4.126l5.547 3.205v6.541L1.313 14.11zm12.847.016v6.524l-5.752 3.347V14.27z"/>
      </svg>
    ),
    color: 'group-hover:text-[#9FEF00]',
    hoverBg: 'hover:bg-[#9FEF00]/10 hover:border-[#9FEF00]/50',
  },
];

const SocialLinks = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg transition-all duration-300 hover:scale-105 ${link.hoverBg} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className={`text-muted-foreground transition-colors duration-300 ${link.color}`}>
                {link.icon}
              </span>
              <span className="font-medium text-foreground">{link.name}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
