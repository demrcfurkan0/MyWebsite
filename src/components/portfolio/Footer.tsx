import { Github, Linkedin, Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Message */}
        <div className="terminal-window mb-10">
          <div className="terminal-header">
            <div className="terminal-dot bg-destructive" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-primary" />
            <span className="ml-3 text-xs text-muted-foreground">~/contact</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Terminal className="w-4 h-4" />
              <span className="text-xs">user@kali:~$</span>
              <span className="text-primary text-xs">echo $CONTACT</span>
            </div>
            <p className="text-foreground text-lg mb-4">
              <span className="text-primary">&gt;</span> Connection established. Ready to collaborate?
            </p>
            <a
              href="mailto:demirci.furkan1@outlook.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-glow"
            >
              demirci.furkan1@outlook.com
            </a>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/demrcfurkan0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/furkan-demirci-x/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">root@portfolio:~#</span> Built with React & Tailwind
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Furkan Demirci. All rights reserved.
          </p>
        </div>

        {/* ASCII Art Easter Egg */}
        <div className="mt-12 text-center">
          <pre className="text-[8px] md:text-[10px] text-primary/30 leading-none font-mono select-none">
            {`
    ██╗  ██╗ █████╗  ██████╗██╗  ██╗    ████████╗██╗  ██╗███████╗
    ██║  ██║██╔══██╗██╔════╝██║ ██╔╝    ╚══██╔══╝██║  ██║██╔════╝
    ███████║███████║██║     █████╔╝        ██║   ███████║█████╗  
    ██╔══██║██╔══██║██║     ██╔═██╗        ██║   ██╔══██║██╔══╝  
    ██║  ██║██║  ██║╚██████╗██║  ██╗       ██║   ██║  ██║███████╗
    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝       ╚═╝   ╚═╝  ╚═╝╚══════╝
                    ██████╗ ██╗      █████╗ ███╗   ██╗███████╗████████╗
                    ██╔══██╗██║     ██╔══██╗████╗  ██║██╔════╝╚══██╔══╝
                    ██████╔╝██║     ███████║██╔██╗ ██║█████╗     ██║   
                    ██╔═══╝ ██║     ██╔══██║██║╚██╗██║██╔══╝     ██║   
                    ██║     ███████╗██║  ██║██║ ╚████║███████╗   ██║   
                    ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   
`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
