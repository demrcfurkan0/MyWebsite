
import { GraduationCap, Award, Cpu, Code, Database, Globe, Lock } from 'lucide-react';

const EducationSkillsSection = () => {
    return (
        <section id="education" className="py-20 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-primary mb-4">
                        <GraduationCap className="w-5 h-5" />
                        <span className="text-sm font-medium uppercase tracking-widest">~/education-skills</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Education <span className="text-primary">&</span> Skills
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Academic background, certifications, and technical arsenal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education & Certificates Column */}
                    <div className="space-y-12">
                        {/* Education */}
                        <div>
                            <h3 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6">
                                <GraduationCap className="w-6 h-6 text-primary" />
                                Education
                            </h3>
                            <div className="relative border-l-2 border-primary/20 pl-8 ml-3 space-y-10">
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-2 border-primary bg-background" />
                                    <h4 className="text-xl font-bold text-foreground">Bachelor of Software Engineering</h4>
                                    <p className="text-primary font-medium">Istanbul Aydin University</p>
                                    <p className="text-sm text-muted-foreground mt-1">2021 - 2025</p>
                                    <p className="text-muted-foreground mt-2">
                                        Focused on Software Engineering and Cybersecurity.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-2 border-primary bg-background" />
                                    <h4 className="text-xl font-bold text-foreground">Associate of Computer Programming</h4>
                                    <p className="text-primary font-medium">Istanbul Arel University</p>
                                    <p className="text-sm text-muted-foreground mt-1">2019 - 2021</p>
                                    <p className="text-muted-foreground mt-2">
                                        Focused on Computer Programming & Cybersecurity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Certificates */}
                        <div>
                            <h3 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6">
                                <Award className="w-6 h-6 text-primary" />
                                Certificates
                            </h3>
                            <div className="grid gap-4">
                                {[
                                    { name: "Google Cyber Security", issuer: "Google", date: "2025" },
                                    { name: "Akbank Cyber Security", issuer: "Akbank", date: "2023" },
                                    { name: "Google Project Management", issuer: "Google", date: "2025" },
                                ].map((cert, index) => (
                                    <div key={index} className="terminal-window p-4 hover:border-primary/50 transition-all group">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                                                    {cert.name}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                            </div>
                                            <span className="text-xs text-primary border border-primary/20 px-2 py-1 rounded">
                                                {cert.date}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Column */}
                    <div>
                        <h3 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6">
                            <Cpu className="w-6 h-6 text-primary" />
                            Technical Arsenal
                        </h3>

                        <div className="space-y-8">
                            {/* Programming Languages */}
                            <div className="terminal-window p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Code className="w-5 h-5 text-primary" />
                                    <h4 className="font-bold text-foreground">Software Skills</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'Java', 'FastAPI', 'Spring Boot', 'Bash', 'SQL', 'Microservices', 'Docker', 'PostgreSQL'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-md border border-white/5 hover:border-primary/50 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Security Tools */}
                            <div className="terminal-window p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Lock className="w-5 h-5 text-primary" />
                                    <h4 className="font-bold text-foreground">Security Skills</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Pentesting', 'Linux Hardening', 'Networking (TCP/IP, OSI)', 'Vulnerability Analysis', 'Malware Analysis Basics', 'Reverse Engineering', 'Python for Security', 'Log Analysis', 'Threat Detection'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-md border border-white/5 hover:border-primary/50 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="terminal-window p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Globe className="w-5 h-5 text-primary" />
                                    <h4 className="font-bold text-foreground">Tools</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Git', 'GitHub', 'Postman', 'Swagger', 'GHidra', 'Nmap', 'Wireshark', 'Nessus', 'Burp Suite', 'Metasploit'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-md border border-white/5 hover:border-primary/50 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSkillsSection;
