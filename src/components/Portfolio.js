import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Award, Underline } from 'lucide-react';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [terminalText, setTerminalText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    // Dynamic roles array
    const roles = [
        "Cloud Engineer & DevOps Specialist",
        "Network Engineer & Infrastructure Expert",
        "Site Reliability Engineer (SRE)",
        "Solution Architect",
        "Cloud Security & Compliance Specialist"
    ];

    const terminalCommands = [
        '$ whoami',
        'sai-kalyan-burra',
        '$ cat skills.txt',
        'Cloud Engineering | AWS | Terraform | Kubernetes',
        '$ uptime',
        '99.5% availability achieved ✅',
        '$ git log --oneline',
        'feat: reduced deployment time by 85%',
        'feat: optimized response time 200ms → 50ms',
        '$ ./linkops-platform --status',
        'Handling 10,000+ concurrent requests 🚀'
    ];

    useEffect(() => {
        setIsVisible(true);

        // Terminal typing animation
        let currentIndex = 0;
        let currentCommand = '';
        let isTyping = true;

        const typeInterval = setInterval(() => {
            if (currentIndex < terminalCommands.length) {
                const command = terminalCommands[currentIndex];

                if (isTyping) {
                    if (currentCommand.length < command.length) {
                        currentCommand += command[currentCommand.length];
                        setTerminalText(prev => {
                            const lines = prev.split('\n');
                            lines[lines.length - 1] = currentCommand;
                            return lines.join('\n');
                        });
                    } else {
                        isTyping = false;
                        setTimeout(() => {
                            currentIndex++;
                            currentCommand = '';
                            isTyping = true;
                            setTerminalText(prev => prev + '\n');
                        }, 800);
                    }
                }
            } else {
                clearInterval(typeInterval);
            }
        }, 80);

        return () => clearInterval(typeInterval);
    }, []);

    // Typing effect for dynamic roles
    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let timeout;

        if (isTyping) {
            // Typing phase
            if (displayedText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1));
                }, 80); // Typing speed
            } else {
                // Finished typing, brief pause then start deleting
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 300); // Very short pause after typing (300ms)
            }
        } else {
            // Deleting phase
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 30); // Fast deleting speed (30ms)
            } else {
                // Finished deleting, brief pause then move to next role
                timeout = setTimeout(() => {
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    setIsTyping(true);
                }, 100); // Very short pause before next role (100ms)
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isTyping, currentRoleIndex, roles]);

    // Cursor blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500); // Blink every 500ms

        return () => clearInterval(cursorInterval);
    }, []);

    const skills = {
        "Cloud Platforms": ["AWS (EC2, S3, RDS, ECS, EKS)", "Google Cloud Platform", "Digital Ocean"],
        "Infrastructure": ["Terraform", "Docker & Kubernetes", "Packer", "CloudFormation"],
        "CI/CD & DevOps": ["GitHub Actions", "Jenkins", "ArgoCD", "GitOps"],
        "Languages": ["Java (Spring Boot)", "Python", "Bash", "React", "MySQL"]
    };

    const projects = [
        {
            title: "LinkOps Platform",
            subtitle: "Cloud-Native URL Shortening Service",
            period: "May 2025 - Present",
            tech: "Spring Boot • MySQL • Docker • Redis • Kubernetes • AWS ECS • Terraform",
            highlights: [
                "🚀 Handles 10,000+ concurrent requests with 99.5% uptime",
                "⚡ Reduced response time from 200ms to 50ms with Redis caching",
                "🔧 85% faster deployments with automated DevOps pipeline",
                "📊 Supports 1M+ daily redirections across 5 microservices"
            ]
        },
        {
            title: "Cloud-Native Backend Application",
            subtitle: "Scalable Web Infrastructure on AWS",
            period: "January - April 2025",
            tech: "Spring Boot • MySQL • AWS • Terraform • GitHub Actions",
            highlights: [
                "🌐 Supports 5,000+ concurrent users with 99% uptime",
                "⏱️ 40% reduction in infrastructure provisioning time",
                "🔒 SOC 2 compliance with AWS Secrets Manager integration",
                "💰 30% storage cost reduction with S3 lifecycle policies"
            ]
        }
    ];

    const achievements = [
        { metric: "99.5%", label: "System Uptime" },
        { metric: "85%", label: "Deployment Time Reduction" },
        { metric: "10K+", label: "Concurrent Requests" },
        { metric: "75%", label: "Database Query Reduction" }
    ];

    return (
        <div style={styles.container}>
            {/* Background Elements */}
            <div style={styles.backgroundElements}>
                <div style={styles.floatingOrb1}></div>
                <div style={styles.floatingOrb2}></div>
                <div style={styles.floatingOrb3}></div>
                <div style={styles.floatingOrb4}></div>
                <div style={styles.gridPattern}></div>
                <div style={styles.sparkle1}></div>
                <div style={styles.sparkle2}></div>
                <div style={styles.sparkle3}></div>
                <div style={styles.sparkle4}></div>
            

                {/* Floating Emoji Effects */}
                <div style={styles.emojiFloat1}>☁️</div>
                <div style={styles.emojiFloat2}>⚡</div>
                <div style={styles.emojiFloat3}>🚀</div>
                <div style={styles.emojiFloat4}>💻</div>
                <div style={styles.emojiFloat5}>🔧</div>
                <div style={styles.emojiFloat6}>⚙️</div>
                <div style={styles.emojiFloat8}>📊</div>
                <div style={styles.emojiFloat9}>🗄️</div>
                <div style={styles.emojiFloat10}>✨</div>
            </div>
            {/* Add keyframes for animations */}
            <style>
                {`
                    @keyframes pulse {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                    
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px) translateX(0px);
                        }
                        25% {
                            transform: translateY(-20px) translateX(10px);
                        }
                        50% {
                            transform: translateY(-10px) translateX(-5px);
                        }
                        75% {
                            transform: translateY(-30px) translateX(5px);
                        }
                    }
                    
                    @keyframes gridMove {
                        0% {
                            transform: translate(0, 0);
                        }
                        100% {
                            transform: translate(60px, 60px);
                        }
                    }
                    
                    @keyframes sparkle {
                        0%, 100% {
                            opacity: 0;
                            transform: scale(0);
                        }
                        50% {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                        @keyframes emojiFloat {
                        0%, 100% {
                            transform: translateY(0px) translateX(0px) rotate(0deg);
                        }
                        25% {
                            transform: translateY(-15px) translateX(10px) rotate(5deg);
                        }
                        50% {
                            transform: translateY(-25px) translateX(-5px) rotate(-3deg);
                        }
                        75% {
                            transform: translateY(-10px) translateX(8px) rotate(2deg);
                        }
                    }
                    @keyframes emojiBounce {
                        0%, 100% {
                            transform: translateY(0px) scale(1);
                        }
                        50% {
                            transform: translateY(-20px) scale(1.1);
                        }
                    }
                    @keyframes emojiSpin {
                        0% {
                            transform: rotate(0deg) translateY(0px);
                        }
                        50% {
                            transform: rotate(180deg) translateY(-15px);
                        }
                        100% {
                            transform: rotate(360deg) translateY(0px);
                        }
                    }
                    @keyframes emojiEntrance {
                        0% {
                            opacity: 0;
                            transform: translateY(-50px) scale(0.5);
                        }
                        100% {
                            opacity: 0.8;
                            transform: translateY(0px) scale(1);
                `}
            </style>
            
            {/* Navigation */}
            <nav style={styles.nav}>
                <div style={styles.navContent}>
                    <div style={styles.logo}>&lt;Sai/Kalyan&gt;</div>
                    <div style={styles.navLinks}>
                        <a href="#projects" style={styles.navLink}>Projects</a>
                        <a href="#skills" style={styles.navLink}>Skills</a>
                        <a href="#contact" style={styles.navLink}>Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroGrid}>
                    <div style={{
                        ...styles.heroLeft,
                        ...(isVisible ? styles.visible : styles.hidden)
                    }}>
                        <h1 style={styles.heroTitle}>
                            <span style={styles.gradientText}>Sai Kalyan</span>
                            <br />
                            <span>Burra</span>
                        </h1>
                        
                        {/* Dynamic Role Title with Typing Effect */}
                        <div style={styles.roleContainer}>
                            <p style={styles.heroSubtitle}>
                                <span style={styles.dynamicRole}>
                                    {displayedText}
                                </span>
                                <span style={{
                                    ...styles.typingCursor,
                                    opacity: showCursor ? 1 : 0
                                }}>|</span>
                            </p>
                        </div>
                        
                        <p style={styles.heroDescription}>
                            Building scalable cloud infrastructure with{' '}
                            <span style={styles.highlight1}>99.5% uptime</span>, implementing automated CI/CD pipelines that reduce deployment time by{' '}
                            <span style={styles.highlight2}>85%</span>, and architecting microservices that handle{' '}
                            <span style={styles.highlight3}>10,000+ concurrent requests</span>.
                        </p>

                        {/* Achievement Metrics */}
                        <div style={styles.metrics}>
                            {achievements.map((achievement, index) => (
                                <div key={index} style={styles.metricCard}>
                                    <div style={styles.metricValue}>{achievement.metric}</div>
                                    <div style={styles.metricLabel}>{achievement.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Links */}
                        <div style={styles.contactButtons}>
                            <a href="mailto:burra.sa@northeastern.edu" style={styles.primaryButton}>
                                <Mail size={20} />
                                Get In Touch
                            </a>
                            <a href="https://github.com/Sai9700128" target='_blank' style={styles.secondaryButton}>
                                <Github size={20} />
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/sai-kalyan-burra/" target='_blank' style={styles.secondaryButton}>
                                <Linkedin size={20} />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Terminal Preview */}
                    <div style={{
                        ...styles.heroRight,
                        ...(isVisible ? styles.visibleDelayed : styles.hidden)
                    }}>
                        <div style={styles.terminal}>
                            <div style={styles.terminalHeader}>
                                <div style={styles.terminalDots}>
                                    <div style={styles.redDot}></div>
                                    <div style={styles.yellowDot}></div>
                                    <div style={styles.greenDot}></div>
                                </div>
                                <span style={styles.terminalTitle}>sai@cloud-terminal</span>
                            </div>
                            <div style={styles.terminalBody}>
                                <pre style={styles.terminalText}>{terminalText}</pre>
                                <span style={styles.cursor}>|</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Timeline */}
            <section style={styles.educationSection}>
                <div style={styles.education}>
                    <div style={styles.sectionContent}>
                        <h3 style={styles.educationTitle}>Education</h3>
                        <div style={styles.timeline}>
                            {/* Timeline Line */}
                            <div style={styles.timelineLine}></div>
                            
                            <div style={styles.timelineItem}>
                                <div style={styles.timelineContent}>
                                    <div style={styles.educationCard}>
                                        <h4 style={styles.institutionName}>Northeastern University</h4>
                                        <p style={styles.degreeName}>Master of Science in Information Systems</p>
                                        <p style={styles.location}>Boston, MA</p>
                                    </div>
                                    <div style={styles.timelineDate}>Expected Dec 2024</div>
                                </div>
                                <div style={styles.timelineDot}></div>
                            </div>
                            
                            <div style={{...styles.timelineItem, ...styles.timelineItemRight}}>
                                <div style={styles.timelineContent}>
                                    <div style={styles.timelineDate}>Aug 2021</div>
                                    <div style={styles.educationCard}>
                                        <h4 style={styles.institutionName}>KL University</h4>
                                        <p style={styles.degreeName}>Bachelor in Electronics and Communication Engineering</p>
                                        <p style={styles.location}>Hyderabad, India</p>
                                    </div>
                                </div>
                                <div style={styles.timelineDot}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Project */}
            <section style={styles.featuredProject}>
                <div style={styles.sectionContent}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>Featured Project</h2>
                        <p style={styles.sectionSubtitle}>My Interactive Terminal Website - Live & Production Ready</p>
                    </div>

                    <div style={styles.projectCard}>
                        <div style={styles.projectGrid}>
                            <div>
                                <div style={styles.projectHeader}>
                                    <Terminal style={styles.terminalIcon} size={32} />
                                    <h3 style={styles.projectTitle}>Terminal Portfolio Experience</h3>
                                </div>
                                <p style={styles.projectDescription}>
                                    An interactive terminal-based portfolio that showcases my technical skills through a unique command-line interface.
                                    Built with modern web technologies and deployed on cloud infrastructure.
                                </p>

                                <div style={styles.projectFeatures}>
                                    <div style={styles.feature}>
                                        <div style={styles.featureDot1}></div>
                                        <span>Interactive command-line interface</span>
                                    </div>
                                    <div style={styles.feature}>
                                        <div style={styles.featureDot2}></div>
                                        <span>Real-time system monitoring</span>
                                    </div>
                                    <div style={styles.feature}>
                                        <div style={styles.featureDot3}></div>
                                        <span>Cloud-deployed with 99.9% uptime</span>
                                    </div>
                                </div>

                                <a href="http://saikalyanbportfolio.vercel.app" target="_blank" style={styles.projectButton}>
                                    <ExternalLink size={20} />
                                    Experience the Terminal
                                </a>
                            </div>

                            <div style={styles.terminalDemo}>
                                <div style={styles.terminalDemoHeader}>
                                    <span style={styles.terminalDemoTitle}>~ Welcome to Terminal Portfolio ~</span>
                                </div>
                                <div style={styles.terminalDemoBody}>
                                    <div style={styles.helpCommand}>$ help</div>
                                    <div style={styles.helpText}>Available commands:</div>
                                    <div style={styles.helpItem}>about    - Learn about me</div>
                                    <div style={styles.helpItem}>projects - View my projects</div>
                                    <div style={styles.helpItem}>skills   - Technical expertise</div>
                                    <div style={styles.helpItem}>contact  - Get in touch</div>
                                    <div style={styles.helpCommand}>$ █</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" style={styles.projectsSection}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleCenter}>Project Portfolio</h2>

                    <div style={styles.projectsList}>
                        {projects.map((project, index) => (
                            <div key={index} style={styles.projectItem}>
                                <div style={styles.projectItemGrid}>
                                    <div style={styles.projectInfo}>
                                        <h3 style={styles.projectItemTitle}>{project.title}</h3>
                                        <p style={styles.projectSubtitle}>{project.subtitle}</p>
                                        <p style={styles.projectPeriod}>{project.period}</p>
                                        <p style={styles.projectTech}>{project.tech}</p>

                                        <div style={styles.projectHighlights}>
                                            {project.highlights.map((highlight, i) => (
                                                <div key={i} style={styles.highlight}>{highlight}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={styles.projectActions}>
                                        <a href="https://github.com/Sai9700128?tab=repositories" style={styles.projectActionSecondary}>Source Code</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" style={styles.skillsSection}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleCenter}>Technical Expertise</h2>

                    <div style={styles.skillsGrid}>
                        {Object.entries(skills).map(([category, items], index) => (
                            <div key={index} style={styles.skillCard}>
                                <h3 style={styles.skillCategory}>{category}</h3>
                                <div style={styles.skillsList}>
                                    {items.map((skill, i) => (
                                        <div key={i} style={styles.skillItem}>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div style={styles.certifications}>
                        <h3 style={styles.certificationsTitle}>Certifications</h3>
                        <div style={styles.certificationsGrid}>
                            <div 
                                style={styles.certificationCard1}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(66, 133, 244, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(66, 133, 244, 0.1)';
                                }}
                            >
                                <div style={styles.gcpLogo}>
                                    <span style={styles.gcpLogoText}>G</span>
                                    <span style={styles.gcpLogoCloud}>☁️</span>
                                    <span style={styles.gcpLogoP}>P</span>
                                </div>
                                <div style={styles.certificationName}>Google Cloud Certified</div>
                                <div style={styles.certificationDetails}>Cloud Digital Leader</div>
                            </div>
                            <div 
                                style={styles.certificationCard2}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 69, 0, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 69, 0, 0.1)';
                                }}
                            >
                                <div style={styles.oracleLogo}>
                                    <div style={styles.oracleLogoContainer}>
                                        <span style={styles.oracleLogoO}>O</span>
                                        <span style={styles.oracleLogoRacle}>RACLE</span>
                                    </div>
                                    <div style={styles.oracleCloudText}>CLOUD</div>
                                </div>
                                <div style={styles.certificationName}>Oracle Cloud Infrastructure</div>
                                <div style={styles.certificationDetails}>Certified Architect Associate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={styles.contactSection}>
                <div style={styles.contactContent}>
                    <h2 style={styles.contactTitle}>Let's Build Something Amazing</h2>
                    <p style={styles.contactDescription}>
                        Ready to discuss how I can help your team achieve 99.5% uptime and optimize your cloud infrastructure.
                    </p>

                    <div style={styles.contactGrid}>
                        <a href="mailto:burra.sa@northeastern.edu" style={styles.contactCard}>
                            <Mail style={styles.contactIcon1} size={32} />
                            <div style={styles.contactLabel}>Email</div>
                            <div style={styles.contactValue}>burra.sa@northeastern.edu</div>
                        </a>
                        <a href="https://www.linkedin.com/in/sai-kalyan-burra/" target='_blank' style={styles.contactCard}>
                            <Linkedin style={styles.contactIcon2} size={32} />
                            <div style={styles.contactLabel}>LinkedIn</div>
                            <div style={styles.contactValue}>Connect with me</div>
                        </a>
                        <a href="https://github.com/Sai9700128" target='_blank' style={styles.contactCard}>
                            <Github style={styles.contactIcon3} size={32} />
                            <div style={styles.contactLabel}>Github</div>
                            <div style={styles.contactValue}>View my code</div>
                        </a>
                    </div>

                    <div style={styles.location}>
                        <p>📍 Boston, MA • (857) 339-8482</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <div style={styles.footerContent}>
                    <p>&copy; 2025 Sai Kalyan Burra. Building the future with cloud technology.</p>
                </div>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 25%, #2d4a5c 50%, #1a2332 75%, #0f1419 100%)',
        position: 'relative',
        color: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflow: 'hidden',
    },
    backgroundElements: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
    },
    floatingOrb1: {
        position: 'absolute',
        top: '15%',
        left: '8%',
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, rgba(251, 146, 60, 0.08) 50%, transparent 100%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        animation: 'float 9s ease-in-out infinite',
    },
    floatingOrb2: {
        position: 'absolute',
        top: '55%',
        right: '12%',
        width: '220px',
        height: '220px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)',
        borderRadius: '50%',
        filter: 'blur(45px)',
        animation: 'float 11s ease-in-out infinite reverse',
    },
    floatingOrb3: {
        position: 'absolute',
        bottom: '25%',
        left: '55%',
        width: '180px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.18) 0%, rgba(34, 197, 94, 0.06) 50%, transparent 100%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 13s ease-in-out infinite',
    },
    floatingOrb4: {
        position: 'absolute',
        top: '30%',
        left: '75%',
        width: '120px',
        height: '120px',
        background: 'radial-gradient(circle, rgba(245, 101, 101, 0.15) 0%, rgba(245, 101, 101, 0.05) 50%, transparent 100%)',
        borderRadius: '50%',
        filter: 'blur(35px)',
        animation: 'float 15s ease-in-out infinite reverse',
    },
    gridPattern: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.4,
        animation: 'gridMove 25s linear infinite',
    },
    sparkle1: {
        position: 'absolute',
        top: '20%',
        left: '85%',
        width: '5px',
        height: '5px',
        background: '#fb923c',
        borderRadius: '50%',
        boxShadow: '0 0 15px #fb923c',
        animation: 'sparkle 3.5s ease-in-out infinite',
    },
    sparkle2: {
        position: 'absolute',
        top: '75%',
        left: '15%',
        width: '4px',
        height: '4px',
        background: '#06b6d4',
        borderRadius: '50%',
        boxShadow: '0 0 12px #06b6d4',
        animation: 'sparkle 4.5s ease-in-out infinite 1.5s',
    },
    sparkle3: {
        position: 'absolute',
        top: '45%',
        left: '92%',
        width: '3px',
        height: '3px',
        background: '#22c55e',
        borderRadius: '50%',
        boxShadow: '0 0 10px #22c55e',
        animation: 'sparkle 5.5s ease-in-out infinite 2.5s',
    },
    sparkle4: {
        position: 'absolute',
        top: '65%',
        left: '70%',
        width: '3px',
        height: '3px',
        background: '#f59e0b',
        borderRadius: '50%',
        boxShadow: '0 0 8px #f59e0b',
        animation: 'sparkle 6s ease-in-out infinite 1s',
    },
    // Floating Emoji Effects
    emojiFloat1: {
        position: 'absolute',
        top: '8%',
        left: '15%',
        fontSize: '2rem',
        animation: 'emojiEntrance 1s ease-out 0.5s both, emojiFloat 8s ease-in-out infinite 1.5s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    emojiFloat2: {
        position: 'absolute',
        top: '12%',
        right: '20%',
        fontSize: '1.8rem',
        animation: 'emojiEntrance 1s ease-out 1s both, emojiBounce 6s ease-in-out infinite 2s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    emojiFloat3: {
        position: 'absolute',
        top: '15%',
        left: '50%',
        fontSize: '2.2rem',
        animation: 'emojiEntrance 1s ease-out 1.5s both, emojiSpin 10s ease-in-out infinite 3.5s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    emojiFloat4: {
        position: 'absolute',
        top: '20%',
        right: '10%',
        fontSize: '1.6rem',
        animation: 'emojiEntrance 1s ease-out 2s both, emojiFloat 7s ease-in-out infinite 3s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    emojiFloat5: {
        position: 'absolute',
        top: '25%',
        left: '25%',
        fontSize: '1.4rem',
        animation: 'emojiEntrance 1s ease-out 2.5s both, emojiBounce 9s ease-in-out infinite 4.5s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    emojiFloat6: {
        position: 'absolute',
        top: '18%',
        left: '75%',
        fontSize: '1.5rem',
        animation: 'emojiEntrance 1s ease-out 3s both, emojiSpin 8s ease-in-out infinite 4s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    emojiFloat7: {
        position: 'absolute',
        top: '30%',
        right: '35%',
        fontSize: '1.7rem',
        animation: 'emojiEntrance 1s ease-out 3.5s both, emojiFloat 11s ease-in-out infinite 5s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    emojiFloat8: {
        position: 'absolute',
        top: '10%',
        left: '35%',
        fontSize: '1.3rem',
        animation: 'emojiEntrance 1s ease-out 4s both, emojiBounce 7s ease-in-out infinite 6s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    emojiFloat9: {
        position: 'absolute',
        top: '22%',
        right: '50%',
        fontSize: '1.4rem',
        animation: 'emojiEntrance 1s ease-out 4.5s both, emojiFloat 9s ease-in-out infinite 6.3s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    emojiFloat10: {
        position: 'absolute',
        top: '16%',
        left: '65%',
        fontSize: '1.6rem',
        animation: 'emojiEntrance 1s ease-out 5s both, emojiSpin 6s ease-in-out infinite 7s',
        opacity: 0,
        zIndex: 5,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    nav: {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        background: 'rgba(15, 20, 25, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    },
    navContent: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    navLinks: {
        display: 'flex',
        gap: '1.5rem',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    hero: {
        paddingTop: '6rem',
        paddingBottom: '5rem',
        padding: '6rem 1.5rem 5rem',
        position: 'relative',
        zIndex: 1,
    },
    heroGrid: {
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        '@media (max-width: 1024px)': {
            gridTemplateColumns: '1fr',
        },
    },
    heroLeft: {
        transition: 'all 1s ease',
    },
    heroRight: {
        transition: 'all 1s ease',
    },
    visible: {
        transform: 'translateY(0)',
        opacity: 1,
    },
    visibleDelayed: {
        transform: 'translateY(0)',
        opacity: 1,
        transitionDelay: '0.3s',
    },
    hidden: {
        transform: 'translateY(2.5rem)',
        opacity: 0,
    },
    heroTitle: {
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        lineHeight: '1.1',
        '@media (max-width: 1024px)': {
            fontSize: '3rem',
        },
    },
    gradientText: {
        background: 'linear-gradient(to right, #06b6d4, #fb923c, #22c55e)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    // Dynamic role styles
    roleContainer: {
        height: '2rem', // Fixed height to prevent layout jumps
        marginBottom: '1.5rem',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
    },
    heroSubtitle: {
        fontSize: '1.25rem',
        color: '#cbd5e1',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
    },
    dynamicRole: {
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: '600',
        minHeight: '1.5rem', // Ensure consistent height
    },
    typingCursor: {
        color: '#06b6d4',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        marginLeft: '2px',
        transition: 'opacity 0.1s ease-in-out',
    },
    heroDescription: {
        fontSize: '1.125rem',
        color: '#94a3b8',
        lineHeight: '1.75',
        marginBottom: '2rem',
    },
    highlight1: {
        color: '#06b6d4',
        fontWeight: '600',
    },
    highlight2: {
        color: '#fb923c',
        fontWeight: '600',
    },
    highlight3: {
        color: '#22c55e',
        fontWeight: '600',
    },
    metrics: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginBottom: '2rem',
        '@media (max-width: 1024px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
    },
    metricCard: {
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(8px)',
        borderRadius: '0.5rem',
        padding: '1rem',
        border: '1px solid rgba(6, 182, 212, 0.2)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
    },
    metricValue: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#06b6d4',
    },
    metricLabel: {
        fontSize: '0.875rem',
        color: '#94a3b8',
    },
    contactButtons: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
    },
    primaryButton: {
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'transform 0.3s ease',
    },
    secondaryButton: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'background 0.3s ease',
    },
    terminal: {
        background: 'rgba(15, 20, 25, 0.85)',
        backdropFilter: 'blur(20px)',
        borderRadius: '0.5rem',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 20px rgba(6, 182, 212, 0.1)',
    },
    terminalHeader: {
        background: 'rgba(26, 35, 50, 0.6)',
        padding: '0.75rem 1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    terminalDots: {
        display: 'flex',
        gap: '0.5rem',
    },
    redDot: {
        width: '0.75rem',
        height: '0.75rem',
        backgroundColor: '#ef4444',
        borderRadius: '50%',
    },
    yellowDot: {
        width: '0.75rem',
        height: '0.75rem',
        backgroundColor: '#eab308',
        borderRadius: '50%',
    },
    greenDot: {
        width: '0.75rem',
        height: '0.75rem',
        backgroundColor: '#22c55e',
        borderRadius: '50%',
    },
    terminalTitle: {
        marginLeft: '1rem',
        fontSize: '0.875rem',
        color: '#94a3b8',
    },
    terminalBody: {
        padding: '1.5rem',
        fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
        fontSize: '0.875rem',
    },
    terminalText: {
        color: '#22c55e',
        whiteSpace: 'pre-wrap',
        margin: 0,
    },
    cursor: {
        color: '#22c55e',
        animation: 'pulse 1s infinite',
    },
    educationSection: {
        padding: '5rem 1.5rem',
        background: 'rgba(26, 35, 50, 0.3)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 1,
    },
    education: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    educationTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '3rem',
        textAlign: 'center',
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    timeline: {
        position: 'relative',
        width: '115%',
        maxWidth: '800px',
        margin: '0 auto',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    timelineLine: {
        position: 'absolute',
        left: '50%',
        top: '0',
        bottom: '0',
        width: '2px',
        backgroundColor: '#374151',
        transform: 'translateX(-50%)',
        zIndex: 0,
    },
    timelineItem: {
        position: 'relative',
        marginBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '800px',
    },
    timelineItemRight: {
        flexDirection: 'row-reverse',
    },
    timelineContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        width: '100%',
        maxWidth: '700px',
        position: 'relative',
        zIndex: 1,
        justifyContent: 'space-between',
    },
    timelineDate: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#94a3b8',
        minWidth: '140px',
        textAlign: 'center',
        flex: '0 0 auto',
    },
    educationCard: {
        background: 'rgba(251, 146, 60, 0.15)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(251, 146, 60, 0.3)',
        borderRadius: '1rem',
        padding: '1.5rem',
        width: '280px',
        maxWidth: '280px',
        flex: '0 0 auto',
    },
    institutionName: {
        fontSize: '1.125rem',
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: '0.5rem',
        lineHeight: '1.4',
    },
    degreeName: {
        fontSize: '1rem',
        color: '#cbd5e1',
        marginBottom: '0.5rem',
        lineHeight: '1.4',
    },
    location: {
        fontSize: '0.875rem',
        color: '#94a3b8',
        margin: 0,
    },
    timelineDot: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '12px',
        height: '12px',
        backgroundColor: '#fb923c',
        borderRadius: '50%',
        border: '3px solid #0f1419',
        zIndex: 2,
    },
    featuredProject: {
        padding: '5rem 1.5rem',
        background: 'rgba(26, 35, 50, 0.4)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 1,
    },
    sectionContent: {
        maxWidth: '1280px',
        margin: '0 auto',
    },
    sectionHeader: {
        textAlign: 'center',
        marginBottom: '4rem',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    sectionTitleCenter: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '4rem',
        textAlign: 'center',
    },
    sectionSubtitle: {
        fontSize: '1.25rem',
        color: '#94a3b8',
    },
    projectCard: {
        background: 'linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(251, 146, 60, 0.1))',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(6, 182, 212, 0.2)',
        backdropFilter: 'blur(4px)',
    },
    projectGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'center',
        '@media (max-width: 1024px)': {
            gridTemplateColumns: '1fr',
        },
    },
    projectHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1rem',
    },
    terminalIcon: {
        color: '#06b6d4',
    },
    projectTitle: {
        fontSize: '1.875rem',
        fontWeight: 'bold',
        margin: 0,
    },
    projectDescription: {
        fontSize: '1.125rem',
        color: '#cbd5e1',
        marginBottom: '1.5rem',
        lineHeight: '1.75',
    },
    projectFeatures: {
        marginBottom: '2rem',
    },
    feature: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.75rem',
    },
    featureDot1: {
        width: '0.5rem',
        height: '0.5rem',
        backgroundColor: '#06b6d4',
        borderRadius: '50%',
    },
    featureDot2: {
        width: '0.5rem',
        height: '0.5rem',
        backgroundColor: '#fb923c',
        borderRadius: '50%',
    },
    featureDot3: {
        width: '0.5rem',
        height: '0.5rem',
        backgroundColor: '#22c55e',
        borderRadius: '50%',
    },
    projectButton: {
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        padding: '1rem 2rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1.125rem',
        transition: 'transform 0.3s ease',
    },
    terminalDemo: {
        background: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    terminalDemoHeader: {
        background: 'rgba(26, 35, 50, 0.6)',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem 0.5rem 0 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    terminalDemoTitle: {
        fontSize: '0.875rem',
        color: '#94a3b8',
    },
    terminalDemoBody: {
        padding: '1rem',
        fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
        fontSize: '0.875rem',
    },
    helpCommand: {
        color: '#22c55e',
        marginBottom: '0.5rem',
    },
    helpText: {
        color: '#cbd5e1',
        marginBottom: '0.5rem',
    },
    helpItem: {
        color: '#06b6d4',
        marginLeft: '1rem',
        marginBottom: '0.25rem',
    },
    projectsSection: {
        padding: '5rem 1.5rem',
        position: 'relative',
        zIndex: 1,
    },
    projectsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    projectItem: {
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(6, 182, 212, 0.2)',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    },
    projectItemGrid: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2rem',
        '@media (max-width: 1024px)': {
            gridTemplateColumns: '1fr',
        },
    },
    projectInfo: {
        flex: 1,
    },
    projectItemTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.75rem',
    },
    projectSubtitle: {
        color: '#cbd5e1',
        marginBottom: '0.75rem',
    },
    projectPeriod: {
        fontSize: '0.875rem',
        color: '#94a3b8',
        marginBottom: '1rem',
    },
    projectTech: {
        color: '#06b6d4',
        fontSize: '0.875rem',
        marginBottom: '1.5rem',
        fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
    },
    projectHighlights: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    highlight: {
        color: '#cbd5e1',
    },
    projectActions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        justifyContent: 'center',
    },
    projectActionPrimary: {
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        color: 'white',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'background 0.3s ease',
    },
    projectActionSecondary: {
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        color: 'white',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'border-color 0.3s ease',
    },
    skillsSection: {
        padding: '5rem 1.5rem',
        background: 'rgba(45, 74, 92, 0.3)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 1,
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '3rem',
        '@media (max-width: 1024px)': {
            gridTemplateColumns: '1fr',
        },
    },
    skillCard: {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(4px)',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    skillCategory: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#06b6d4',
        marginBottom: '1rem',
    },
    skillsList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
    },
    skillItem: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '1.5rem',
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
        color: '#cbd5e1',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        cursor: 'default',
    },
    certifications: {
        textAlign: 'center',
    },
    certificationsTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
    },
    certificationsGrid: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
    },
    certificationCard1: {
        background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.15), rgba(52, 168, 83, 0.15))',
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid rgba(66, 133, 244, 0.3)',
        textAlign: 'center',
        boxShadow: '0 8px 25px rgba(66, 133, 244, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
    },
    certificationCard2: {
        background: 'linear-gradient(135deg, rgba(255, 69, 0, 0.15), rgba(255, 140, 0, 0.15))',
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 69, 0, 0.3)',
        textAlign: 'center',
        boxShadow: '0 8px 25px rgba(255, 69, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
    },
    // GCP Logo Styling
    gcpLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    gcpLogoText: {
        color: '#4285f4',
        fontFamily: 'Google Sans, sans-serif',
        fontSize: '1.8rem',
        fontWeight: '700',
    },
    gcpLogoCloud: {
        margin: '0 0.25rem',
        fontSize: '1.2rem',
        filter: 'hue-rotate(210deg)',
    },
    gcpLogoP: {
        color: '#34a853',
        fontFamily: 'Google Sans, sans-serif',
        fontSize: '1.8rem',
        fontWeight: '700',
    },
    // Oracle Logo Styling
    oracleLogo: {
        marginBottom: '1rem',
        fontFamily: 'Arial, sans-serif',
    },
    oracleLogoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '0.25rem',
    },
    oracleLogoO: {
        color: '#ff4500',
        fontSize: '2rem',
        fontWeight: 'bold',
        textShadow: '0 2px 4px rgba(255, 69, 0, 0.3)',
    },
    oracleLogoRacle: {
        color: '#ff6b35',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
        marginLeft: '0.1rem',
    },
    oracleCloudText: {
        color: '#ff8c00',
        fontSize: '0.9rem',
        fontWeight: '600',
        letterSpacing: '2px',
    },
    certificationName: {
        fontWeight: '600',
        marginBottom: '0.25rem',
    },
    certificationDetails: {
        fontSize: '0.875rem',
        color: '#94a3b8',
    },
    contactSection: {
        padding: '5rem 1.5rem',
        position: 'relative',
        zIndex: 1,
    },
    contactContent: {
        maxWidth: '1024px',
        margin: '0 auto',
        textAlign: 'center',
    },
    contactTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
    },
    contactDescription: {
        fontSize: '1.25rem',
        color: '#94a3b8',
        marginBottom: '3rem',
    },
    contactGrid: {
        background: 'linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(251, 146, 60, 0.1))',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(6, 182, 212, 0.2)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        marginBottom: '2rem',
        '@media (max-width: 1024px)': {
            gridTemplateColumns: '1fr',
        },
    },
    contactCard: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'background 0.3s ease',
        textAlign: 'center',
    },
    contactIcon1: {
        color: '#06b6d4',
        margin: '0 auto 0.75rem',
    },
    contactIcon2: {
        color: '#fb923c',
        margin: '0 auto 0.75rem',
    },
    contactIcon3: {
        color: '#22c55e',
        margin: '0 auto 0.75rem',
    },
    contactLabel: {
        fontWeight: '600',
        marginBottom: '0.25rem',
    },
    contactValue: {
        fontSize: '0.875rem',
        color: '#94a3b8',
    },
    footer: {
        borderTop: '1px solid rgba(6, 182, 212, 0.2)',
        padding: '2rem 1.5rem',
        background: 'rgba(15, 20, 25, 0.6)',
        backdropFilter: 'blur(10px)',
    },
    footerContent: {
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center',
        color: '#94a3b8',
    },
};

export default Portfolio;