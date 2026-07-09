import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Briefcase } from 'lucide-react';
import myprofilePic from '../assets/mypicture.png';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [terminalText, setTerminalText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    const roles = useMemo(() => [
        "Cloud Engineer & DevOps Specialist",
        "Multi-Cloud Infrastructure Architect",
        "Infrastructure Automation Engineer",
        "Open Source Contributor"
    ], []);

    const terminalCommands = useMemo(() => [
        '$ whoami',
        'sai-kalyan-burra',
        'Cloud & DevOps Engineer | MS @ Northeastern',
        '',
        '$ cat achievements.txt',
        '> 50+ microservices scaled via GitOps',
        '> ~80% CI pipeline runtime reduction',
        '> Zero-touch DR failover',
        '> PRs #256 & #257 merged upstream',
        '',
        '$ tech_stack --current',
        'Cloud: AWS, GCP',
        'IaC: Terraform, CloudFormation, Helm',
        'Containers: Kubernetes (EKS/GKE), Docker, Istio',
        'CI/CD: GitHub Actions, ArgoCD, GitLab',
        'Security: Vault, OPA, Trivy, IAM',
        'Observability: Prometheus, Grafana, Loki, Tempo',
        'Code: Python, Go, Bash, TypeScript, Java, x86 Assembly',
        'Linux: UFW, fail2ban, Nginx, systemd, TLS',
        '',
        '$ ls certifications/',
        'google-cloud-digital-leader.cert',
        'aws-solutions-architect.in-progress',
        '',
        '$ ./connect',
        'saikalyanx1@gmail.com',
        'LinkedIn | GitHub'
    ], []);

    useEffect(() => {
        setIsVisible(true);

        let currentIndex = 0;
        let currentCommand = '';
        let commandIsTyping = true;

        const typeInterval = setInterval(() => {
            if (currentIndex < terminalCommands.length) {
                const command = terminalCommands[currentIndex];

                if (commandIsTyping) {
                    if (currentCommand.length < command.length) {
                        currentCommand += command[currentCommand.length];
                        setTerminalText(prev => {
                            const lines = prev.split('\n');
                            lines[lines.length - 1] = currentCommand;
                            return lines.join('\n');
                        });
                    } else {
                        commandIsTyping = false;
                        setTimeout(() => {
                            currentIndex++;
                            currentCommand = '';
                            commandIsTyping = true;
                            setTerminalText(prev => prev + '\n');
                        }, 400);
                    }
                }
            } else {
                clearInterval(typeInterval);
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, [terminalCommands]);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let timeout;

        if (isTyping) {
            if (displayedText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsTyping(false), 300);
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 30);
            } else {
                timeout = setTimeout(() => {
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    setIsTyping(true);
                }, 100);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isTyping, currentRoleIndex, roles]);

    useEffect(() => {
        const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
        return () => clearInterval(cursorInterval);
    }, []);

    const skills = {
        "Cloud Platforms": ["AWS (EC2, VPC, S3, RDS, IAM, EKS, ECR, ECS/Fargate, Lambda, CloudWatch, Route 53, Secrets Manager)", "GCP (GKE, Cloud SQL)"],
        "Containers & Orchestration": ["Kubernetes (EKS/GKE)", "Docker", "docker-compose", "Helm", "Istio Service Mesh"],
        "Infrastructure as Code": ["Terraform (multi-region modules)", "AWS CloudFormation"],
        "CI/CD & GitOps": ["Git", "GitLab", "GitHub Actions", "ArgoCD", "Build & Release Automation", "Deployment Pipelines"],
        "Observability & Monitoring": ["Prometheus", "Grafana", "Loki", "CloudWatch", "Kubecost", "Alerting Rules", "node_exporter", "Runbooks"],
        "Security": ["HashiCorp Vault", "OPA Gatekeeper", "Trivy Container Scanning", "IAM Policies", "SSE-S3 Encryption"],
        "Networking & Systems": ["Linux Administration (Ubuntu 24.04, CentOS)", "systemd", "SSH hardening", "UFW", "fail2ban", "Nginx", "TLS/certbot", "logrotate", "cron", "TCP/IP", "DNS", "VPC/Subnet Design", "Network Policies", "mTLS", "SSH Tunneling"],
        "Languages & Scripting": ["Python", "Go", "Bash/Shell Scripting", "Java", "JavaScript", "TypeScript", "Node.js", "x86 Assembly"]
    };

    const projects = [
        {
            title: "ShipForge - Cloud-Native CI/CD & Microservices Platform",
            subtitle: "Production-Grade Kubernetes Platform with GitOps & Zero-Trust Security",
            period: "December 2025 - May 2026",
            tech: "GitHub Actions, ArgoCD, Terraform, Helm, Docker, Kubernetes (EKS), Prometheus, Grafana, Istio, Vault, OPA Gatekeeper, Go",
            summary: "Built a cloud-native CI/CD platform scaling from 3 to 50+ microservices using reusable Terraform modules and GitOps via ArgoCD ApplicationSets. GitHub Actions matrix builds with change detection cut pipeline runtime by ~80%. Full observability stack (Prometheus, Grafana, Loki, Tempo) provides deployment health visibility across all services. Zero-trust security enforced via Istio mTLS, OPA Gatekeeper, and HashiCorp Vault - achieving zero critical findings in Trivy scans.",
            githubUrl: "https://github.com/Sai9700128/gitops_app_Taskflow",
            githubUrl2: "https://github.com/Sai9700128/gitops-config",
            githubLabel1: "App",
            githubLabel2: "GitOps",
            hasTwoLinks: true,
        },
        {
            title: "MyOS - Interactive Operating System from Scratch",
            subtitle: "Bare-Metal x86 Kernel with a Custom Bootloader and Interactive Shell",
            period: "December 2025",
            tech: "x86 Assembly (NASM), QEMU, Make, Bare-Metal / OS Development",
            summary: "Wrote a custom bootloader and kernel in x86 Assembly, running in 32-bit protected mode with direct VGA text-mode display output. Built a keyboard-driven command shell handling PS/2 input, supporting commands like info, list, mem, and time. Implemented low-level system introspection entirely from raw hardware interaction, with no OS or libc underneath.",
        },
        {
            title: "LinuxOps Homelab - Production Server Hardening",
            subtitle: "Hardened Ubuntu 24.04 EC2 with Nginx, TLS, and Host Observability",
            period: "June 2026",
            tech: "Ubuntu 24.04, Nginx, Let's Encrypt, UFW, fail2ban, node_exporter, systemd, cron, logrotate",
            summary: "Provisioned and hardened a production-grade Ubuntu 24.04 EC2 server serving a live static site over HTTPS. Implemented SSH key-only auth, UFW host firewall, fail2ban brute-force protection, and automated security patching. Configured Nginx with TLS termination, security headers (HSTS, X-Frame-Options), and logrotate. Deployed node_exporter as a systemd service for host-level metrics. Documented all operational procedures in a runbook.",
            githubUrl: "https://github.com/Sai9700128/linux-ops-homelab",
        },
        {
            title: "InfraLens - AI-Powered Terraform Review Pipeline",
            subtitle: "Automated Infrastructure Code Review with Policy Enforcement",
            period: "April 2026",
            tech: "GitHub Actions, Claude API, OPA Rego, tflint, Checkov",
            summary: "Built an AI-powered Terraform review pipeline using GitHub Actions and the Claude API to analyze infrastructure diffs on every PR. OPA Rego policy gates block merges on critical findings. tflint and Checkov run as pre-AI static analysis to reduce noise - Claude's output is structured as severity-tiered JSON consumed by OPA for automated enforcement and PR comment feedback.",
            githubUrl: "https://github.com/Sai9700128/AI_infra_reviewer",
        },
        {
            title: "OpsiMate - Open Source Contributor",
            subtitle: "Unified Alert Management Platform",
            period: "January 2026",
            tech: "Terraform, Helm, Kubernetes, AWS EKS, EC2, GitHub Actions",
            summary: "Contributed Terraform modules and Helm charts to an open-source alert management platform - PRs #256 and #257 merged upstream. Helm packaging cut contributor onboarding from 4+ hours to under 10 minutes. Introduced CI quality gates (Helm linting, Terraform plan validation, unit tests) at the PR level, adopted as the standard across all subsequent contributions.",
            githubUrl: "https://github.com/Sai9700128/OpsiMate",
        },
        {
            title: "Multi-Region Disaster Recovery on AWS",
            subtitle: "Active-Passive DR with Automated Failover",
            period: "November - December 2025",
            tech: "Terraform, AWS (EC2, RDS, S3, Route 53, Lambda, CloudWatch), GitHub Actions, Bash",
            summary: "Designed an active-passive DR architecture across two AWS regions targeting a 5-minute RPO and 15-minute RTO. Automated failover via Route 53 health checks and DNS failover routing - zero human involvement during simulated regional outages.",
            githubUrl: "https://github.com/Sai9700128/Multi-Region-DR",
        },
        {
            title: "Cloud-Native WebApp - Production AWS Infrastructure",
            subtitle: "Scalable AWS Infrastructure with Terraform & Packer",
            period: "January - April 2025",
            tech: "Terraform, AWS, Packer, GitHub Actions, CloudWatch, GCP",
            summary: "Architected AWS infrastructure supporting 5,000+ concurrent users with 99% uptime. Automated AMI builds with Packer reduced deployment time by 40%. S3 lifecycle policies managing 500GB+ data cut storage costs by 30%. Terraform module refactoring reduced infrastructure code duplication by 60% across environments.",
            githubUrl: "https://github.com/Sai9700128/Webapp",
            githubUrl2: "https://github.com/Sai9700128/tf-aws-infra",
            githubLabel1: "App",
            githubLabel2: "Infra",
            hasTwoLinks: true,
        },
    ];

    const experiences = [
        {
            company: "American Technology Initiative",
            role: "Linux System Admin Volunteer",
            period: "June 2026 - Present",
            location: "Remote",
            highlights: [
                "Architected a production-ready 2-node Kubernetes cluster on a dual-Linux server environment for a nonprofit, configuring networking, container runtime prerequisites, and node bootstrapping from scratch.",
                "Standardized on open-source Kubernetes tooling to match managed-service functionality at zero licensing cost, selecting a configuration built for long-term maintainability over quick setup.",
                "Driving a technical specification comparing high-end and entry-level AI server builds across CPU/GPU options and total cost of ownership, translating supplier research into a procurement-ready recommendation."
            ]
        },
        {
            company: "Independent",
            role: "Freelance Web & Cloud Systems Consultant",
            period: "November 2023 - February 2024",
            location: "Remote",
            highlights: [
                "Delivered self-sufficient infrastructure for small business clients by provisioning and administering Linux-based EC2 instances, owning patching, monitoring, and backup cycles end to end.",
                "Architected low-cost S3-based hosting with scoped IAM access controls, cutting hosting costs and removing the need for a dedicated server for client static websites.",
                "Designed and deployed a serverless AWS Lambda pipeline triggered on S3 uploads to automate image processing for a client engagement, eliminating manual resizing work.",
                "Took two local businesses, a bakery and an embroidery shop, from concept to live web presence, independently owning WordPress site design, hosting configuration, and go-live."
            ]
        },
        {
            company: "Builtin Tech (Start-up)",
            role: "Software Engineer Intern - Cloud Infrastructure & Application Development",
            period: "February 2023 - July 2023",
            location: "Hyderabad, India",
            highlights: [
                "Led a 5-person team delivering a cross-platform property management app - sprint planning, code reviews, Git standards, and Firebase backend in JavaScript.",
                "Built FinOps dashboards via AWS Organizations and CloudWatch billing alarms, surfacing 20% in previously untracked cloud spend.",
                "Hardened S3 with SSE-S3 encryption, versioning, lifecycle rules, and VPC endpoints - documented as an internal compliance runbook."
            ]
        }
    ];

    const achievements = [
        { metric: "50+", label: "Microservices Scaled" },
        { metric: "~80%", label: "CI Runtime Reduction" },
        { metric: "2", label: "OSS PRs Merged" }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.dotGridBg}></div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap');
                @keyframes terminalBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                a:hover { opacity: 0.85; }
            `}</style>

            {/* Nav */}
            <nav style={styles.nav}>
                <div style={styles.navContent}>
                    <div style={styles.logo}>Sai Kalyan Burra</div>
                    <div style={styles.navLinks}>
                        <a href="#experience" style={styles.navLink}>Experience</a>
                        <a href="#projects" style={styles.navLink}>Projects</a>
                        <a href="#skills" style={styles.navLink}>Skills</a>
                        <a href="#contact" style={styles.navLink}>Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section style={styles.hero}>
                <div style={styles.heroGrid}>
                    <div style={{ ...styles.heroLeft, ...(isVisible ? styles.visible : styles.hidden) }}>
                        <p style={styles.heroGreeting}>Hello,</p>
                        <h1 style={styles.heroTitle}>
                            <span style={styles.heroName}>Sai Kalyan here!</span>
                        </h1>
                        <div style={styles.roleContainer}>
                            <p style={styles.heroSubtitle}>
                                <span style={styles.dynamicRole}>{displayedText}</span>
                                <span style={{ ...styles.typingCursor, opacity: showCursor ? 1 : 0 }}>|</span>
                            </p>
                        </div>
                        <p style={styles.heroDescription}>
                            Cloud and DevOps engineer specializing in AWS infrastructure, CI/CD automation, Kubernetes orchestration, and observability. Experienced with Terraform-based IaC, GitOps pipelines (GitHub Actions + ArgoCD), and monitoring stacks (Prometheus, Grafana, Loki). Open source contributor with production-level exposure to cost optimization, security hardening, and Linux server operations.
                        </p>
                        <div style={styles.socialRow}>
                            <a href="mailto:saikalyanx1@gmail.com" style={styles.socialIcon} title="Email"><Mail size={20} /></a>
                            <a href="https://github.com/Sai9700128" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} title="GitHub"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/sai-kalyan-burra/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} title="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>
                    <div style={{ ...styles.heroRight, ...(isVisible ? styles.visibleDelayed : styles.hidden) }}>
                        <div style={styles.profileCard}>
                            <div style={styles.profileImageWrapper}>
                                <img src={myprofilePic} alt="Sai Kalyan Burra" style={styles.profileImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Strip */}
            <section style={styles.metricsStrip}>
                <div style={styles.metricsContent}>
                    {achievements.map((a, i) => (
                        <div key={i} style={styles.metricItem}>
                            <div style={styles.metricValue}>{a.metric}</div>
                            <div style={styles.metricLabel}>{a.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section style={styles.lightSection}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleDark}>Education</h2>
                    <div style={styles.educationGrid}>
                        <div style={styles.eduCard}>
                            <div style={styles.eduPeriod}>Sep 2024 - Apr 2026</div>
                            <h4 style={styles.eduInstitution}>Northeastern University</h4>
                            <p style={styles.eduDegree}>Master of Science in Software Engineering Systems</p>
                            <p style={styles.eduLocation}>Boston, MA</p>
                            <p style={styles.eduCoursework}>Coursework: Network Structures & Cloud Computing, Linux for Networking, Operating Systems</p>
                        </div>
                        <div style={styles.eduCard}>
                            <div style={styles.eduPeriod}>Jun 2021 - Apr 2024</div>
                            <h4 style={styles.eduInstitution}>KL University</h4>
                            <p style={styles.eduDegree}>Bachelor in Electronics and Communication Engineering</p>
                            <p style={styles.eduLocation}>Hyderabad, India</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" style={styles.lightSectionAlt}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleDark}>Professional Experience</h2>
                    <p style={styles.sectionSubDark}>Building scalable solutions in the cloud</p>
                    <div style={styles.expList}>
                        {experiences.map((exp, i) => (
                            <div key={i} style={styles.expCard}>
                                <div style={styles.expHeader}>
                                    <div style={styles.expIconWrap}><Briefcase size={22} color="#1a1a1a" /></div>
                                    <div>
                                        <h3 style={styles.expCompany}>{exp.company}</h3>
                                        <p style={styles.expRole}>{exp.role}</p>
                                        <div style={styles.expMeta}>
                                            <span>{exp.period}</span>
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={styles.expHighlights}>
                                    {exp.highlights.map((h, j) => (
                                        <div key={j} style={styles.expHighlight}>
                                            <div style={styles.expDot}></div>
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Project */}
            <section style={styles.darkSection}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleLight}>Featured Project</h2>
                    <p style={styles.sectionSubLight}>ShipForge - Cloud-Native CI/CD & Microservices Platform</p>
                    <div style={styles.featuredCard}>
                        <div style={styles.featuredGrid}>
                            <div>
                                <div style={styles.featuredHeader}>
                                    <Terminal size={28} color="#ffffff" />
                                    <h3 style={styles.featuredTitle}>ShipForge</h3>
                                </div>
                                <p style={styles.featuredDesc}>
                                    A cloud-native CI/CD and microservices platform scaled from 3 to 50+ services using reusable Terraform modules and GitOps via ArgoCD ApplicationSets. GitHub Actions matrix builds cut pipeline runtime by ~80%. Full observability stack provides deployment health visibility. Zero-trust security via Istio mTLS, OPA Gatekeeper, and HashiCorp Vault.
                                </p>
                                <div style={styles.featuredFeatures}>
                                    {[
                                        "50+ services via GitHub Actions dynamic matrix builds",
                                        "ArgoCD ApplicationSets with Git directory generators",
                                        "Zero-trust: Istio mTLS + OPA Gatekeeper + Vault",
                                        "Observability: Prometheus + Grafana + Loki + Tempo"
                                    ].map((f, i) => (
                                        <div key={i} style={styles.featuredFeature}>
                                            <span style={styles.featureBullet}>-</span>
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                                <div style={styles.featuredButtons}>
                                    <a href="https://github.com/Sai9700128/gitops_app_Taskflow" target="_blank" rel="noopener noreferrer" style={styles.btnLight}>
                                        <Github size={18} />App
                                    </a>
                                    <a href="https://github.com/Sai9700128/gitops-config" target="_blank" rel="noopener noreferrer" style={styles.btnOutlineLight}>
                                        <Github size={18} />GitOps
                                    </a>
                                </div>
                            </div>
                            <div style={styles.terminalDemo}>
                                <div style={styles.terminalDemoHeader}>
                                    <div style={styles.terminalDots}>
                                        <div style={{ ...styles.dot, background: '#ff5f57' }}></div>
                                        <div style={{ ...styles.dot, background: '#febc2e' }}></div>
                                        <div style={{ ...styles.dot, background: '#28c840' }}></div>
                                    </div>
                                    <span style={styles.terminalDemoTitle}>ShipForge Deployment</span>
                                </div>
                                <div style={styles.terminalDemoBody}>
                                    <div style={styles.cmdLine}>$ kubectl get deployments -n shipforge | head -6</div>
                                    <div style={styles.cmdOutput}>NAME              READY   STATUS</div>
                                    <div style={styles.cmdResult}>api-gateway       3/3     Running</div>
                                    <div style={styles.cmdResult}>task-service      3/3     Running</div>
                                    <div style={styles.cmdResult}>user-service      3/3     Running</div>
                                    <div style={styles.cmdResult}>... 47 more services</div>
                                    <div style={styles.cmdLine}>$ argocd app sync shipforge</div>
                                    <div style={styles.cmdResult}>OK Synced (Healthy) - 50+ apps</div>
                                    <div style={styles.cmdLine}>$ _</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" style={styles.lightSectionAlt}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleDark}>Project Portfolio</h2>
                    <div style={styles.projectsList}>
                        {projects.map((project, index) => (
                            <div key={index} style={styles.projectItem}>
                                <div style={styles.projectItemGrid}>
                                    <div>
                                        <h3 style={styles.projectItemTitle}>{project.title}</h3>
                                        <p style={styles.projectSubtitle}>{project.subtitle}</p>
                                        <p style={styles.projectPeriod}>{project.period}</p>
                                        <p style={styles.projectTech}>{project.tech}</p>
                                        <p style={styles.projectSummary}>{project.summary}</p>
                                    </div>
                                    <div style={styles.projectActions}>
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={styles.btnDark}>
                                                <Github size={16} />
                                                {project.hasTwoLinks ? project.githubLabel1 : 'GitHub'}
                                            </a>
                                        )}
                                        {project.hasTwoLinks && (
                                            <a href={project.githubUrl2} target="_blank" rel="noopener noreferrer" style={styles.btnOutlineDark}>
                                                <Github size={16} />
                                                {project.githubLabel2}
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={styles.btnOutlineDark}>
                                                <ExternalLink size={16} />
                                                Live Site
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" style={styles.lightSection}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleDark}>Technical Expertise</h2>
                    <div style={styles.skillsGrid}>
                        {Object.entries(skills).map(([category, items], index) => (
                            <div key={index} style={styles.skillCard}>
                                <h3 style={styles.skillCategory}>{category}</h3>
                                <div style={styles.skillsList}>
                                    {items.map((skill, i) => (
                                        <div key={i} style={styles.skillPill}>{skill}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Terminal Section */}
            <section style={styles.darkSection}>
                <div style={styles.sectionContent}>
                    <div style={styles.terminalFull}>
                        <div style={styles.terminalHeader}>
                            <div style={styles.terminalDots}>
                                <div style={{ ...styles.dot, background: '#ff5f57' }}></div>
                                <div style={{ ...styles.dot, background: '#febc2e' }}></div>
                                <div style={{ ...styles.dot, background: '#28c840' }}></div>
                            </div>
                            <span style={styles.terminalHeaderTitle}>sai@cloud-terminal</span>
                        </div>
                        <div style={styles.terminalFullBody}>
                            <pre style={styles.terminalText}>{terminalText}</pre>
                            <span style={styles.terminalCursor}>|</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" style={styles.lightSectionAlt}>
                <div style={styles.contactContent}>
                    <h2 style={styles.contactTitle}>Build Something Amazing Together</h2>
                    <p style={styles.contactDesc}>Ready to discuss new opportunities, collaborations, or just chat about tech?</p>
                    <div style={styles.contactGrid}>
                        <a href="mailto:saikalyanx1@gmail.com" style={styles.contactCard}>
                            <Mail size={28} color="#1a1a1a" />
                            <div style={styles.contactCardLabel}>Email</div>
                            <div style={styles.contactCardValue}>saikalyanx1@gmail.com</div>
                        </a>
                        <a href="https://www.linkedin.com/in/sai-kalyan-burra/" target="_blank" rel="noopener noreferrer" style={styles.contactCard}>
                            <Linkedin size={28} color="#1a1a1a" />
                            <div style={styles.contactCardLabel}>LinkedIn</div>
                            <div style={styles.contactCardValue}>Connect with me</div>
                        </a>
                        <a href="https://github.com/Sai9700128" target="_blank" rel="noopener noreferrer" style={styles.contactCard}>
                            <Github size={28} color="#1a1a1a" />
                            <div style={styles.contactCardLabel}>GitHub</div>
                            <div style={styles.contactCardValue}>View my code</div>
                        </a>
                    </div>
                    <p style={styles.locationText}>Brookline, MA - (857) 339-8482</p>
                </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <div style={styles.footerContent}>
                    <p>Copyright 2026 Sai Kalyan Burra. Building the future with cloud technology.</p>
                </div>
            </footer>
        </div>
    );
};

const styles = {
    container: { minHeight: '100vh', background: '#1a1a1a', color: '#1a1a1a', fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', position: 'relative', overflow: 'hidden' },
    dotGridBg: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 },
    nav: { position: 'fixed', top: 0, width: '100%', zIndex: 100, background: 'rgba(26, 26, 26, 0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.08)' },
    navContent: { maxWidth: '1200px', margin: '0 auto', padding: '1.1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    logo: { fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.01em' },
    navLinks: { display: 'flex', gap: '2rem' },
    navLink: { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.01em' },
    hero: { paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 2rem 5rem', position: 'relative', zIndex: 1, background: 'transparent' },
    heroGrid: { maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' },
    heroLeft: { transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' },
    heroRight: { transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex', justifyContent: 'center' },
    visible: { transform: 'translateY(0)', opacity: 1 },
    visibleDelayed: { transform: 'translateY(0)', opacity: 1, transitionDelay: '0.2s' },
    hidden: { transform: 'translateY(30px)', opacity: 0 },
    heroGreeting: { fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)', fontWeight: '400', marginBottom: '0.25rem', letterSpacing: '-0.01em' },
    heroTitle: { fontSize: '4.5rem', fontWeight: '700', lineHeight: '1.05', marginBottom: '0.75rem', letterSpacing: '-0.03em' },
    heroName: { color: '#ffffff' },
    heroWave: { fontSize: '3.5rem' },
    roleContainer: { height: '2rem', marginBottom: '1.75rem', overflow: 'hidden', display: 'flex', alignItems: 'center' },
    heroSubtitle: { fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', margin: 0, display: 'flex', alignItems: 'center' },
    dynamicRole: { color: 'rgba(255,255,255,0.85)', fontWeight: '500', minHeight: '1.5rem' },
    typingCursor: { color: '#ffffff', fontWeight: '300', fontSize: '1.25rem', marginLeft: '1px', transition: 'opacity 0.1s' },
    heroDescription: { fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '560px' },
    socialRow: { display: 'flex', gap: '1rem', alignItems: 'center' },
    socialIcon: { width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', textDecoration: 'none', background: 'transparent' },
    profileCard: { position: 'relative', borderRadius: '20px', overflow: 'hidden', maxWidth: '380px', width: '100%', aspectRatio: '3/4' },
    profileImageWrapper: { width: '100%', height: '100%' },
    profileImage: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', display: 'block' },
    metricsStrip: { background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '3rem 2rem', position: 'relative', zIndex: 1 },
    metricsContent: { maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' },
    metricItem: {},
    metricValue: { fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.03em' },
    metricLabel: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontWeight: '500', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' },
    lightSection: { background: '#f7f7f7', padding: '5rem 2rem', position: 'relative', zIndex: 2 },
    lightSectionAlt: { background: '#ffffff', padding: '5rem 2rem', position: 'relative', zIndex: 2 },
    darkSection: { background: '#1a1a1a', padding: '5rem 2rem', position: 'relative', zIndex: 2 },
    sectionContent: { maxWidth: '1200px', margin: '0 auto' },
    sectionTitleDark: { fontSize: '2.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem', textAlign: 'center', letterSpacing: '-0.03em' },
    sectionTitleLight: { fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', textAlign: 'center', letterSpacing: '-0.03em' },
    sectionSubDark: { fontSize: '1.1rem', color: '#888', textAlign: 'center', marginBottom: '3rem' },
    sectionSubLight: { fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: '3rem' },
    educationGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' },
    eduCard: { background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid #e8e8e8' },
    eduPeriod: { fontSize: '0.8rem', color: '#999', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' },
    eduInstitution: { fontSize: '1.25rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' },
    eduDegree: { fontSize: '0.95rem', color: '#555', lineHeight: '1.5', marginBottom: '0.5rem' },
    eduLocation: { fontSize: '0.85rem', color: '#999', margin: 0 },
    eduCoursework: { fontSize: '0.8rem', color: '#888', marginTop: '0.75rem', fontStyle: 'italic', lineHeight: '1.5' },
    expCard: { background: '#f7f7f7', borderRadius: '20px', padding: '2.5rem', border: '1px solid #e8e8e8' },
    expList: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    expHeader: { display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '2rem' },
    expIconWrap: { background: '#e8e8e8', borderRadius: '12px', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
    expCompany: { fontSize: '1.4rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.3rem' },
    expRole: { fontSize: '1rem', color: '#555', marginBottom: '0.5rem' },
    expMeta: { display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: '#999' },
    expHighlights: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    expHighlight: { display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#444', lineHeight: '1.65', fontSize: '0.95rem' },
    expDot: { width: '6px', height: '6px', backgroundColor: '#1a1a1a', borderRadius: '50%', marginTop: '0.55rem', flexShrink: 0 },
    featuredCard: { background: 'rgba(255,255,255,0.04)', borderRadius: '20px', padding: '3rem', border: '1px solid rgba(255,255,255,0.08)' },
    featuredGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' },
    featuredHeader: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' },
    featuredTitle: { fontSize: '2rem', fontWeight: '700', color: '#ffffff', margin: 0, letterSpacing: '-0.02em' },
    featuredDesc: { fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.75', marginBottom: '1.5rem' },
    featuredFeatures: { marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' },
    featuredFeature: { display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' },
    featureBullet: { color: 'rgba(255,255,255,0.3)', fontWeight: '300' },
    featuredButtons: { display: 'flex', gap: '0.75rem' },
    terminalDemo: { background: '#111111', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' },
    terminalDemoHeader: { background: '#1a1a1a', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)' },
    terminalDots: { display: 'flex', gap: '6px' },
    dot: { width: '10px', height: '10px', borderRadius: '50%' },
    terminalDemoTitle: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' },
    terminalDemoBody: { padding: '1.25rem', fontFamily: '"JetBrains Mono", Monaco, "Cascadia Code", monospace', fontSize: '0.8rem', lineHeight: '1.7' },
    cmdLine: { color: '#28c840', marginBottom: '0.25rem' },
    cmdOutput: { color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' },
    cmdResult: { color: 'rgba(255,255,255,0.7)', paddingLeft: '1rem', marginBottom: '0.15rem' },
    projectsList: { display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' },
    projectItem: { background: '#f7f7f7', borderRadius: '20px', padding: '2.5rem', border: '1px solid #e8e8e8' },
    projectItemGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' },
    projectItemTitle: { fontSize: '1.35rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem', letterSpacing: '-0.01em' },
    projectSubtitle: { color: '#666', marginBottom: '0.5rem', fontSize: '0.95rem' },
    projectPeriod: { fontSize: '0.8rem', color: '#aaa', marginBottom: '0.75rem' },
    projectTech: { color: '#1a1a1a', fontSize: '0.8rem', marginBottom: '1.25rem', fontFamily: '"JetBrains Mono", Monaco, monospace', fontWeight: '500' },
    projectSummary: { color: '#555', fontSize: '0.95rem', lineHeight: '1.7' },
    projectActions: { display: 'flex', flexDirection: 'column', gap: '0.6rem', justifyContent: 'center' },
    skillsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '3rem', marginBottom: '3rem' },
    skillCard: { background: '#ffffff', borderRadius: '16px', padding: '1.75rem', border: '1px solid #e8e8e8' },
    skillCategory: { fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' },
    skillsList: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
    skillPill: { background: '#f0f0f0', border: '1px solid #e0e0e0', borderRadius: '100px', padding: '0.4rem 0.85rem', fontSize: '0.8rem', color: '#444', fontWeight: '500' },
    certSection: { textAlign: 'center' },
    certTitle: { fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1.5rem' },
    certGrid: { display: 'flex', justifyContent: 'center', gap: '1.5rem' },
    certCard: { background: '#ffffff', borderRadius: '16px', padding: '2rem 2.5rem', border: '1px solid #e8e8e8', textAlign: 'center', minWidth: '240px' },
    certLogo: { fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: '700', color: '#1a1a1a' },
    certName: { fontWeight: '600', color: '#1a1a1a', marginBottom: '0.25rem' },
    certDetail: { fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem' },
    certDate: { fontSize: '0.75rem', color: '#aaa', fontStyle: 'italic' },
    certInProgress: { fontSize: '0.8rem', color: '#1a1a1a', fontWeight: '600' },
    terminalFull: { background: '#111111', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', maxWidth: '800px', margin: '0 auto' },
    terminalHeader: { background: '#1a1a1a', padding: '0.85rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)' },
    terminalHeaderTitle: { fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginLeft: '0.5rem' },
    terminalFullBody: { padding: '1.5rem', fontFamily: '"JetBrains Mono", Monaco, "Cascadia Code", monospace', fontSize: '0.8rem', minHeight: '300px' },
    terminalText: { color: '#28c840', whiteSpace: 'pre-wrap', margin: 0, lineHeight: '1.6' },
    terminalCursor: { color: '#28c840', animation: 'terminalBlink 1s infinite' },
    contactContent: { maxWidth: '900px', margin: '0 auto', textAlign: 'center' },
    contactTitle: { fontSize: '2.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem', letterSpacing: '-0.03em' },
    contactDesc: { fontSize: '1.1rem', color: '#888', marginBottom: '3rem' },
    contactGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '2rem' },
    contactCard: { background: '#f7f7f7', borderRadius: '16px', padding: '2rem', border: '1px solid #e8e8e8', textDecoration: 'none', color: 'inherit', textAlign: 'center' },
    contactCardLabel: { fontWeight: '600', color: '#1a1a1a', marginTop: '0.75rem', marginBottom: '0.25rem' },
    contactCardValue: { fontSize: '0.85rem', color: '#999' },
    locationText: { fontSize: '0.9rem', color: '#aaa' },
    btnDark: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1a1a1a', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '10px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' },
    btnOutlineDark: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#1a1a1a', padding: '0.75rem 1.5rem', borderRadius: '10px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', border: '1.5px solid #d0d0d0' },
    btnLight: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', color: '#1a1a1a', padding: '0.85rem 1.75rem', borderRadius: '10px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' },
    btnOutlineLight: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#ffffff', padding: '0.85rem 1.75rem', borderRadius: '10px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', border: '1.5px solid rgba(255,255,255,0.2)' },
    footer: { borderTop: '1px solid #e8e8e8', padding: '2rem', background: '#ffffff', textAlign: 'center' },
    footerContent: { maxWidth: '1200px', margin: '0 auto', color: '#aaa', fontSize: '0.85rem' },
};

export default Portfolio;