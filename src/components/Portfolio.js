import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Award, Underline, BookOpen, Edit3, Calendar, ArrowRight, Briefcase } from 'lucide-react';
import myprofilePic from '../assets/mypicture.png';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [terminalText, setTerminalText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    const roles = [
        "Cloud Engineer & DevOps Specialist",
        "Multi-Cloud Infrastructure Architect",
        "Site Reliability Engineering Enthusiast",
        "Infrastructure Automation Engineer",
        "Open Source Contributor"
    ];

    const terminalCommands = [
        '$ whoami',
        'sai-kalyan-burra',
        'Cloud Engineer | MS @ Northeastern',
        '',
        '$ cat achievements.txt',
        '→ 97% faster deployments via GitOps',
        '→ 70% faster incident detection',
        '→ 80% reduced attack surface',
        '→ 1,000+ GitHub contributions',
        '',
        '$ tech_stack --current',
        '☁️  Cloud: AWS • GCP',
        '🔧 IaC: Terraform • Helm • ArgoCD',
        '🐳 Containers: Kubernetes • Docker • Istio',
        '🔐 Security: Vault • OPA • Trivy',
        '📊 Observability: Prometheus • Grafana • Loki',
        '💻 Code: Python • Bash • TypeScript • Java',
        '',
        '$ ls certifications/',
        'google-cloud-digital-leader.cert',
        'aws-solutions-architect.in-progress',
        '',
        '$ ./connect',
        '📧 burra.sa@northeastern.edu',
        '💼 LinkedIn | 🐙 GitHub | ✍️ Medium'
    ];

    const blogPosts = [
        {
            title: "Deploying My First Application on Kubernetes: A 2048 Game Journey",
            excerpt: "Learning Kubernetes by deploying a real project",
            date: "Aug 2025",
            readTime: "5 min read",
            category: "Container Orchestration",
            featured: true
        },
        {
            title: "My First Docker Adventure: From Clueless to Containerized in One Weekend 🐳",
            excerpt: "How I went from 'What's a container?' to containerizing my entire portfolio website",
            date: "July 2025",
            readTime: "12 min read",
            category: "Cloud Engineering"
        },
        {
            title: "How DNS Resolution Works: A Step-by-Step Breakdown",
            excerpt: "Understanding how your browser finds the right server",
            date: "May 2025",
            readTime: "2 min read",
            category: "Networking"
        }
    ];

    useEffect(() => {
        setIsVisible(true);

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
                        }, 400);
                    }
                }
            } else {
                clearInterval(typeInterval);
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, []);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let timeout;

        if (isTyping) {
            if (displayedText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 300);
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
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    const skills = {
        "Cloud Platforms": ["AWS (EC2, VPC, S3, RDS, IAM, EKS, ECR, Lambda, CloudWatch, Route 53)", "GCP (Compute Engine, Cloud SQL)"],
        "DevOps & IaC": ["Terraform", "Docker", "Kubernetes", "Helm", "ArgoCD", "GitHub Actions", "GitOps", "Linux", "CI/CD Pipelines"],
        "Orchestration & Service Mesh": ["Kubernetes (EKS)", "Istio", "mTLS", "Traffic Management", "Resource Optimization"],
        "Security": ["HashiCorp Vault", "OPA Gatekeeper", "Network Policies", "Trivy", "Container Scanning"],
        "Observability": ["Prometheus", "Grafana", "Loki", "CloudWatch", "Kubecost", "Alerting"],
        "Programming & Databases": ["Python", "Bash", "JavaScript", "TypeScript", "Java", "MySQL", "AWS RDS", "GCP Cloud SQL"]
    };

    const projects = [
        {
            title: "TaskFlow — Cloud-Native Microservices Platform",
            subtitle: "Production-Grade Kubernetes Platform with GitOps & Zero-Trust Security",
            period: "December 2025 - Present",
            tech: "AWS EKS • Terraform • ArgoCD • Helm • GitHub Actions • Prometheus • Grafana • Istio • Vault • OPA Gatekeeper",
            highlights: [
                "🚀 Reduced deployment time from 2+ hours to 5 minutes by implementing CI/CD pipeline with GitHub Actions and GitOps-based continuous deployment using ArgoCD",
                "🏗️ Provisioned production AWS infrastructure (EKS, RDS, ECR, VPC) using Terraform IaC, achieving 100% reproducible deployments and 15-minute environment setup time",
                "🔐 Implemented zero-trust security using Network Policies, Istio mTLS encryption, and OPA Gatekeeper policy enforcement, reducing attack surface by 80%",
                "🔑 Eliminated hardcoded credentials by integrating HashiCorp Vault for dynamic secrets injection with automatic rotation and zero-downtime credential updates",
                "📊 Reduced mean time to detection by 70% using Prometheus metrics, Grafana dashboards, and Loki centralized logging with proactive alerting"
            ],
            githubUrl: "https://github.com/Sai9700128/gitops_app_Taskflow",
            githubUrl2: "https://github.com/Sai9700128/gitops-config",
            githubLabel1: "Repo 1",
            githubLabel2: "Repo 2",
            hasTwoLinks: true,
        },
        {
            title: "Open Source Contributor — OpsiMate",
            subtitle: "DevOps Monitoring Platform — Active Contributor",
            period: "January 2026",
            tech: "Terraform • Helm • Kubernetes • AWS EKS • EC2 • GitHub Actions • CI/CD",
            highlights: [
                "🔧 Developed Terraform infrastructure modules for automated test environment provisioning, including lightweight Kubernetes cluster and EC2 instances with integrated monitoring",
                "📦 Created production-ready Helm charts for Kubernetes deployment, including deployments, services, ConfigMaps, secrets management, and persistent volume configurations",
                "⚡ Built GitHub Actions CI/CD workflows for Helm chart validation and Terraform testing, enabling one-command environment setup that reduced provisioning time from hours to minutes"
            ],
            githubUrl: "https://github.com/OpsiMate/OpsiMate",
        },
        {
            title: "Multi-Region Disaster Recovery on AWS",
            subtitle: "Active-Passive DR Solution with Automated Failover",
            period: "September - October 2025",
            tech: "Terraform • AWS (EC2, RDS, S3, Route 53, Lambda, CloudWatch) • GitHub Actions • Bash",
            highlights: [
                "🌐 Architected active-passive disaster recovery solution across 2 AWS regions (us-east-1, us-west-2), configuring warm standby infrastructure targeting 5-minute RPO and 15-minute RTO",
                "🏗️ Automated infrastructure provisioning using Terraform modules for VPCs, subnets, EC2 instances, RDS MySQL databases, and S3 buckets with versioning across both regions",
                "🔄 Implemented Route 53 health checks with failover routing, RDS cross-region read replicas, and S3 cross-region replication for automated failover and data redundancy"
            ],
            githubUrl: "https://github.com/Sai9700128/Multi-Region-DR",
        },
        {
            title: "Multi-Cloud Data Transfer with AWS and GCP",
            subtitle: "Automated Data Pipeline for Multi-Cloud Architecture",
            period: "September 2025",
            tech: "Google Cloud Platform (GCP) • Google Cloud Storage • Storage Transfer Service • Identity Federation • AWS S3",
            highlights: [
                "☁️ Built an automated data transfer pipeline between AWS S3 and Google Cloud Storage to demonstrate multi-cloud architecture capabilities",
                "🔄 Implemented disaster recovery strategies leveraging cross-cloud data replication",
                "🔐 Configured Identity Federation for secure cross-cloud authentication and access management"
            ],
            noGithub: true,
        },
        {
            title: "Cloud-Native Application — WebApp",
            subtitle: "Production AWS Infrastructure with Terraform & Packer",
            period: "January - April 2025",
            tech: "Terraform • AWS • Packer • GitHub Actions • Amazon CloudWatch • GCP",
            highlights: [
                "🏗️ Architected AWS infrastructure supporting 5,000+ concurrent users with 99% uptime",
                "⚡ Automated AMI builds with Packer reducing deployment time by 40% (45min to 27min)",
                "💰 Configured S3 encryption and lifecycle policies managing 500GB+ data with 30% cost reduction",
                "♻️ Refactored Terraform modules reducing infrastructure code duplication by 60% across environments"
            ],
            githubUrl: "https://github.com/Sai9700128/Webapp",
            githubUrl2: "https://github.com/Sai9700128/tf-aws-infra",
            githubLabel1: "App Repo",
            githubLabel2: "Infra Repo",
            hasTwoLinks: true,
        },
        {
            title: "Roomies Radar",
            subtitle: "Roommate & Rental Accommodation Matching Platform",
            period: "October - December 2024",
            tech: "Domain-Driven Design (DDD) • JWT Authentication • Progressive Web App (PWA)",
            highlights: [
                "🏠 Developed a comprehensive platform to connect individuals looking for compatible roommates and rental accommodations using Domain-Driven Design (DDD) principles",
                "🔐 Implemented secure user authentication with JWT-based registration and login",
                "🎯 Built sophisticated roommate matching based on preferences like gender, food habits, and room type",
                "📱 Created Progressive Web App (PWA) ensuring accessibility and performance across all devices"
            ],
            noGithub: true,
        }
    ];

    const experience = {
        company: "Built-in Tech (Start-up)",
        role: "Software Engineer Intern — Mobile Development & AWS Infrastructure",
        period: "February 2023 - July 2023",
        location: "Hyderabad, India",
        highlights: [
            "Built cross-platform mobile application using Flutter and Dart, integrating Firebase services (Authentication, Cloud Firestore, Cloud Storage) to enable real-time data synchronization for 200+ property listings",
            "Configured AWS Organizations for multi-account structure and implemented CloudWatch billing alarms, reducing unplanned cloud spend by 20%",
            "Implemented S3 bucket policies with server-side encryption (SSE-S3), versioning, and lifecycle rules to automate storage tiering and enforce data security compliance",
            "Deployed production website using S3 static hosting and CloudFront CDN, reducing page load times by 60% and cutting hosting costs by 40% versus EC2-based hosting"
        ]
    };

    // Updated achievements to match resume metrics
    const achievements = [
        { metric: "97%", label: "Faster Deployments" },
        { metric: "70%", label: "Faster Detection" },
        { metric: "80%", label: "Reduced Attack Surface" },
        { metric: "1,000+", label: "GitHub Contributions" }
    ];

    return (
        <div style={styles.container}>
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
                    
                    @keyframes profileGlow {
                        0%, 100% {
                            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(251, 146, 60, 0.2);
                        }
                        50% {
                            box-shadow: 0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(251, 146, 60, 0.3);
                        }
                    }
                    
                    @keyframes profileFloat {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-5px);
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
                        }
                    }
                    
                    @keyframes slideInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
            
            <nav style={styles.nav}>
                <div style={styles.navContent}>
                    <div style={styles.logo}>&lt;Sai/Kalyan&gt;</div>
                    <div style={styles.navLinks}>
                        <a href="#experience" style={styles.navLink}>Experience</a>
                        <a href="#projects" style={styles.navLink}>Projects</a>
                        <a href="#blog" style={styles.navLink}>Blog</a>
                        <a href="#skills" style={styles.navLink}>Skills</a>
                        <a href="#contact" style={styles.navLink}>Contact</a>
                    </div>
                </div>
            </nav>

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
                            Cloud Engineer with proven results:{' '}
                            <span style={styles.highlight1}>97% faster deployments</span> via GitOps,{' '}
                            <span style={styles.highlight2}>70% faster incident detection</span> through Prometheus/Grafana observability, and{' '}
                            <span style={styles.highlight3}>80% reduced attack surface</span> using zero-trust security. 
                            Hands-on expertise in AWS, Terraform, Kubernetes, and CI/CD automation. 
                            Active open source contributor with <span style={styles.highlight1}>1,000+ GitHub contributions</span>.
                        </p>

                        <div style={styles.metrics}>
                            {achievements.map((achievement, index) => (
                                <div key={index} style={styles.metricCard}>
                                    <div style={styles.metricValue}>{achievement.metric}</div>
                                    <div style={styles.metricLabel}>{achievement.label}</div>
                                </div>
                            ))}
                        </div>

                        <div style={styles.contactButtons}>
                            <a href="mailto:burra.sa@northeastern.edu" style={styles.primaryButton}>
                                <Mail size={20} />
                                Get In Touch
                            </a>
                            <a href="https://github.com/Sai9700128" target='_blank' rel="noopener noreferrer" style={styles.secondaryButton}>
                                <Github size={20} />
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/sai-kalyan-burra/" target='_blank' rel="noopener noreferrer" style={styles.secondaryButton}>
                                <Linkedin size={20} />
                                LinkedIn
                            </a>
                        </div>
                    </div>

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
                                <div style={styles.profileSection}>
                                    <div style={styles.profileImageContainer}>
                                        <img 
                                            src={myprofilePic}
                                            alt="Sai Kalyan Burra"
                                            style={styles.profileImage}
                                        />
                                        <div style={styles.profileBorder}></div>
                                    </div>
                                    <div style={styles.profileInfo}>
                                        <div style={styles.profileName}>Sai Kalyan Burra</div>
                                        <div style={styles.profileRole}>Cloud & DevOps Engineer</div>
                                        <div style={styles.profileStatus}>
                                            <div style={styles.statusDot}></div>
                                            Available for opportunities
                                        </div>
                                    </div>
                                </div>
                                <div style={styles.terminalDivider}></div>
                                <pre style={styles.terminalText}>{terminalText}</pre>
                                <span style={styles.cursor}>|</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={styles.educationSection}>
                <div style={styles.education}>
                    <div style={styles.sectionContent}>
                        <h3 style={styles.educationTitle}>Education</h3>
                        <div style={styles.timeline}>
                            <div style={styles.timelineLine}></div>
                            
                            <div style={styles.timelineItem}>
                                <div style={styles.timelineContent}>
                                    <div style={styles.educationCard}>
                                        <h4 style={styles.institutionName}>Northeastern University</h4>
                                        <p style={styles.degreeName}>Master of Science in Software Engineering Systems</p>
                                        <p style={styles.location}>Boston, MA</p>
                                    </div>
                                    <div style={styles.timelineDate}>Sep 2024 - May 2026</div>
                                </div>
                                <div style={styles.timelineDot}></div>
                            </div>
                            
                            <div style={{...styles.timelineItem, ...styles.timelineItemRight}}>
                                <div style={styles.timelineContent}>
                                    <div style={styles.timelineDate}>Jun 2021 - Apr 2024</div>
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

            {/* Experience Section */}
            <section id="experience" style={styles.experienceSection}>
                <div style={styles.sectionContent}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>Professional Experience</h2>
                        <p style={styles.sectionSubtitle}>Building scalable solutions in the cloud</p>
                    </div>

                    <div style={styles.experienceCard}>
                        <div style={styles.experienceHeader}>
                            <div style={styles.experienceIcon}>
                                <Briefcase size={24} />
                            </div>
                            <div style={styles.experienceInfo}>
                                <h3 style={styles.experienceCompany}>{experience.company}</h3>
                                <p style={styles.experienceRole}>{experience.role}</p>
                                <div style={styles.experienceMeta}>
                                    <span style={styles.experiencePeriod}>{experience.period}</span>
                                    <span style={styles.experienceLocation}>📍 {experience.location}</span>
                                </div>
                            </div>
                        </div>
                        <div style={styles.experienceHighlights}>
                            {experience.highlights.map((highlight, index) => (
                                <div key={index} style={styles.experienceHighlight}>
                                    <div style={styles.highlightDot}></div>
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={styles.featuredProject}>
                <div style={styles.sectionContent}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>Featured Project</h2>
                        <p style={styles.sectionSubtitle}>TaskFlow — Production-Grade Kubernetes Platform</p>
                    </div>

                    <div style={styles.projectCard}>
                        <div style={styles.projectGrid}>
                            <div>
                                <div style={styles.projectHeader}>
                                    <Terminal style={styles.terminalIcon} size={32} />
                                    <h3 style={styles.projectTitle}>TaskFlow</h3>
                                </div>
                                <p style={styles.projectDescription}>
                                    A cloud-native microservices platform featuring GitOps deployment, zero-trust security, 
                                    and comprehensive observability. Achieved 97% faster deployments and 70% faster incident detection.
                                </p>

                                <div style={styles.projectFeatures}>
                                    <div style={styles.feature}>
                                        <div style={styles.featureDot1}></div>
                                        <span>GitOps with ArgoCD & GitHub Actions</span>
                                    </div>
                                    <div style={styles.feature}>
                                        <div style={styles.featureDot2}></div>
                                        <span>Zero-trust: Istio mTLS + OPA Gatekeeper</span>
                                    </div>
                                    <div style={styles.feature}>
                                        <div style={styles.featureDot3}></div>
                                        <span>Observability: Prometheus + Grafana + Loki</span>
                                    </div>
                                    <div style={styles.feature}>
                                        <div style={styles.featureDot1}></div>
                                        <span>Secrets: HashiCorp Vault dynamic injection</span>
                                    </div>
                                </div>

                                <div style={styles.featuredProjectButtons}>
                                    <a href="https://github.com/Sai9700128/gitops_app_Taskflow" target="_blank" rel="noopener noreferrer" style={styles.projectButton}>
                                        <Github size={20} />
                                        Repo 1
                                    </a>
                                    <a href="https://github.com/Sai9700128/gitops-config" target="_blank" rel="noopener noreferrer" style={styles.projectButtonSecondary}>
                                        <Github size={20} />
                                        Repo 2
                                    </a>
                                </div>
                            </div>

                            <div style={styles.terminalDemo}>
                                <div style={styles.terminalDemoHeader}>
                                    <span style={styles.terminalDemoTitle}>~ TaskFlow Deployment Pipeline ~</span>
                                </div>
                                <div style={styles.terminalDemoBody}>
                                    <div style={styles.helpCommand}>$ kubectl get deployments -n taskflow</div>
                                    <div style={styles.helpText}>NAME              READY   STATUS</div>
                                    <div style={styles.helpItem}>api-gateway       3/3     Running</div>
                                    <div style={styles.helpItem}>task-service      3/3     Running</div>
                                    <div style={styles.helpItem}>user-service      3/3     Running</div>
                                    <div style={styles.helpCommand}>$ argocd app sync taskflow</div>
                                    <div style={styles.helpItem}>✓ Synced (Healthy)</div>
                                    <div style={styles.helpCommand}>$ █</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="blog" style={styles.blogSection}>
                <div style={styles.sectionContent}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>Latest from My Blog</h2>
                        <p style={styles.sectionSubtitle}>Insights on cloud engineering, DevOps, and modern infrastructure</p>
                    </div>

                    <div style={styles.blogGrid}>
                        <div style={styles.featuredBlogCard}>
                            <div style={styles.featuredBlogHeader}>
                                <div style={styles.featuredBlogIcon}>
                                    <BookOpen size={24} />
                                </div>
                                <span style={styles.featuredBlogLabel}>Featured Article</span>
                            </div>
                            <h3 style={styles.featuredBlogTitle}>{blogPosts[0].title}</h3>
                            <p style={styles.featuredBlogExcerpt}>{blogPosts[0].excerpt}</p>
                            <div style={styles.featuredBlogMeta}>
                                <div style={styles.blogMetaItem}>
                                    <Calendar size={16} />
                                    <span>{blogPosts[0].date}</span>
                                </div>
                                <div style={styles.blogMetaItem}>
                                    <Edit3 size={16} />
                                    <span>{blogPosts[0].readTime}</span>
                                </div>
                                <div style={styles.blogCategory}>{blogPosts[0].category}</div>
                            </div>
                            <a 
                                href="https://medium.com/@saikalyan.burra/deploying-my-first-application-on-kubernetes-a-2048-game-journey-bc8e182055f2" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={styles.featuredBlogButton}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateX(5px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(6, 182, 212, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateX(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(6, 182, 212, 0.3)';
                                }}
                            >
                                <span>Read on Medium</span>
                                <ArrowRight size={20} />
                            </a>
                        </div>

                        <div style={styles.blogPostsList}>
                            {blogPosts.slice(1).map((post, index) => (
                                <a
                                    key={index}
                                    href="https://medium.com/@saikalyan.burra/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.blogPostCard}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(6, 182, 212, 0.2)';
                                        e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <div style={styles.blogPostHeader}>
                                        <h4 style={styles.blogPostTitle}>{post.title}</h4>
                                        <div style={styles.blogPostCategory}>{post.category}</div>
                                    </div>
                                    <p style={styles.blogPostExcerpt}>{post.excerpt}</p>
                                    <div style={styles.blogPostMeta}>
                                        <span style={styles.blogPostDate}>{post.date}</span>
                                        <span style={styles.blogPostReadTime}>{post.readTime}</span>
                                    </div>
                                    <div style={styles.blogPostReadMore}>
                                        <span>Read More</span>
                                        <ExternalLink size={16} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div style={styles.blogCTA}>
                        <h3 style={styles.blogCTATitle}>Want to Read More?</h3>
                        <p style={styles.blogCTADescription}>
                            Follow me on Medium for in-depth technical articles about cloud engineering, DevOps best practices, and infrastructure automation.
                        </p>
                        <a 
                            href="https://medium.com/@saikalyan.burra" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={styles.blogCTAButton}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(251, 146, 60, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(251, 146, 60, 0.3)';
                            }}
                        >
                            <BookOpen size={20} />
                            <span>Follow on Medium</span>
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </section>

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
                                        {!project.noGithub && (
                                            <a 
                                                href={project.githubUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={styles.projectActionPrimary}
                                            >
                                                <Github size={18} />
                                                {project.hasTwoLinks ? project.githubLabel1 : 'Source Code'}
                                            </a>
                                        )}
                                        {project.hasTwoLinks && (
                                            <a 
                                                href={project.githubUrl2} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={styles.projectActionPrimary}
                                            >
                                                <Github size={18} />
                                                {project.githubLabel2}
                                            </a>
                                        )}
                                        {project.noGithub && (
                                            <div style={styles.projectPrivateLabel}>
                                                🔒 Private Project
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                                <div style={styles.certificationValidity}>Valid: Jan 2023 - Jan 2026</div>
                            </div>
                            <div 
                                style={styles.certificationCard2}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 153, 0, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 153, 0, 0.1)';
                                }}
                            >
                                <div style={styles.awsLogo}>
                                    <span style={styles.awsLogoText}>AWS</span>
                                    <span style={styles.awsLogoCloud}>☁️</span>
                                </div>
                                <div style={styles.certificationName}>AWS Certified</div>
                                <div style={styles.certificationDetails}>Solutions Architect - Associate</div>
                                <div style={styles.certificationInProgress}>🎯 In Progress</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" style={styles.contactSection}>
                <div style={styles.contactContent}>
                    <h2 style={styles.contactTitle}>Let's Build Something Amazing</h2>
                    <p style={styles.contactDescription}>
                        Ready to discuss new opportunities, collaborations, or just chat about tech? I'm all ears!
                    </p>

                    <div style={styles.contactGrid}>
                        <a href="mailto:burra.sa@northeastern.edu" style={styles.contactCard}>
                            <Mail style={styles.contactIcon1} size={32} />
                            <div style={styles.contactLabel}>Email</div>
                            <div style={styles.contactValue}>burra.sa@northeastern.edu</div>
                        </a>
                        <a href="https://www.linkedin.com/in/sai-kalyan-burra/" target='_blank' rel="noopener noreferrer" style={styles.contactCard}>
                            <Linkedin style={styles.contactIcon2} size={32} />
                            <div style={styles.contactLabel}>LinkedIn</div>
                            <div style={styles.contactValue}>Connect with me</div>
                        </a>
                        <a href="https://github.com/Sai9700128" target='_blank' rel="noopener noreferrer" style={styles.contactCard}>
                            <Github style={styles.contactIcon3} size={32} />
                            <div style={styles.contactLabel}>Github</div>
                            <div style={styles.contactValue}>View my code</div>
                        </a>
                    </div>

                    <div style={styles.locationInfo}>
                        <p>📍 Brookline, MA • (857) 339-8482</p>
                    </div>
                </div>
            </section>

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
    },
    gradientText: {
        background: 'linear-gradient(to right, #06b6d4, #fb923c, #22c55e)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    roleContainer: {
        height: '2rem',
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
        minHeight: '1.5rem',
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
    profileSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
        padding: '1rem',
        background: 'rgba(6, 182, 212, 0.05)',
        borderRadius: '0.5rem',
        border: '1px solid rgba(6, 182, 212, 0.2)',
    },
    profileImageContainer: {
        position: 'relative',
        flexShrink: 0,
    },
    profileImage: {
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid transparent',
        background: 'linear-gradient(45deg, #06b6d4, #fb923c)',
        backgroundClip: 'padding-box',
        animation: 'profileGlow 3s ease-in-out infinite',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },
    profileBorder: {
        position: 'absolute',
        top: '-3px',
        left: '-3px',
        width: '166px',
        height: '166px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #06b6d4, #fb923c, #22c55e)',
        zIndex: -1,
        animation: 'profileGlow 3s ease-in-out infinite',
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: '1.125rem',
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: '0.25rem',
    },
    profileRole: {
        fontSize: '0.875rem',
        color: '#06b6d4',
        marginBottom: '0.5rem',
    },
    profileStatus: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.75rem',
        color: '#94a3b8',
    },
    statusDot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#22c55e',
        animation: 'pulse 2s ease-in-out infinite',
    },
    terminalDivider: {
        height: '1px',
        background: 'linear-gradient(to right, transparent, #06b6d4, transparent)',
        margin: '1rem 0',
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
    // Experience Section Styles
    experienceSection: {
        padding: '5rem 1.5rem',
        background: 'rgba(15, 20, 25, 0.6)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 1,
    },
    experienceCard: {
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(251, 146, 60, 0.1))',
        borderRadius: '1.5rem',
        padding: '2.5rem',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
    experienceHeader: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.5rem',
        marginBottom: '2rem',
    },
    experienceIcon: {
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        borderRadius: '0.75rem',
        padding: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    experienceInfo: {
        flex: 1,
    },
    experienceCompany: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: '0.5rem',
    },
    experienceRole: {
        fontSize: '1.125rem',
        color: '#06b6d4',
        marginBottom: '0.75rem',
    },
    experienceMeta: {
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
    },
    experiencePeriod: {
        fontSize: '0.875rem',
        color: '#94a3b8',
    },
    experienceLocation: {
        fontSize: '0.875rem',
        color: '#94a3b8',
    },
    experienceHighlights: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    experienceHighlight: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        color: '#cbd5e1',
        lineHeight: '1.6',
    },
    highlightDot: {
        width: '8px',
        height: '8px',
        backgroundColor: '#06b6d4',
        borderRadius: '50%',
        marginTop: '0.5rem',
        flexShrink: 0,
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
    featuredProjectButtons: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
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
    projectButtonSecondary: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
        padding: '1rem 2rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1.125rem',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        transition: 'all 0.3s ease',
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
    blogSection: {
        padding: '5rem 1.5rem',
        background: 'rgba(15, 20, 25, 0.6)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 1,
    },
    blogGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
    },
    featuredBlogCard: {
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(251, 146, 60, 0.1))',
        borderRadius: '1.5rem',
        padding: '2.5rem',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },
    featuredBlogHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1.5rem',
    },
    featuredBlogIcon: {
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        borderRadius: '0.5rem',
        padding: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    featuredBlogLabel: {
        fontSize: '0.875rem',
        fontWeight: '600',
        color: '#06b6d4',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    featuredBlogTitle: {
        fontSize: '1.75rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        lineHeight: '1.3',
        color: '#ffffff',
    },
    featuredBlogExcerpt: {
        fontSize: '1.125rem',
        color: '#cbd5e1',
        lineHeight: '1.6',
        marginBottom: '2rem',
    },
    featuredBlogMeta: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
    },
    blogMetaItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#94a3b8',
        fontSize: '0.875rem',
    },
    blogCategory: {
        background: 'rgba(251, 146, 60, 0.2)',
        color: '#fb923c',
        padding: '0.25rem 0.75rem',
        borderRadius: '1rem',
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    featuredBlogButton: {
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        padding: '1rem 2rem',
        borderRadius: '0.75rem',
        fontWeight: '600',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1.125rem',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
    },
    blogPostsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    blogPostCard: {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(8px)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    },
    blogPostHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem',
        gap: '1rem',
    },
    blogPostTitle: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#ffffff',
        lineHeight: '1.4',
        margin: 0,
        flex: 1,
    },
    blogPostCategory: {
        background: 'rgba(6, 182, 212, 0.2)',
        color: '#06b6d4',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.5rem',
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        flexShrink: 0,
    },
    blogPostExcerpt: {
        color: '#94a3b8',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        fontSize: '0.95rem',
    },
    blogPostMeta: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.875rem',
        color: '#64748b',
        marginBottom: '1rem',
    },
    blogPostDate: {
        fontWeight: '500',
    },
    blogPostReadTime: {
        fontStyle: 'italic',
    },
    blogPostReadMore: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#06b6d4',
        fontSize: '0.875rem',
        fontWeight: '600',
        transition: 'all 0.3s ease',
    },
    blogCTA: {
        textAlign: 'center',
        marginTop: '4rem',
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(6, 182, 212, 0.1))',
        borderRadius: '1.5rem',
        border: '1px solid rgba(251, 146, 60, 0.2)',
        backdropFilter: 'blur(8px)',
    },
    blogCTATitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    blogCTADescription: {
        fontSize: '1.125rem',
        color: '#94a3b8',
        marginBottom: '2rem',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 2rem',
    },
    blogCTAButton: {
        background: 'linear-gradient(to right, #fb923c, #06b6d4)',
        padding: '1rem 2.5rem',
        borderRadius: '0.75rem',
        fontWeight: '600',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '1.125rem',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 25px rgba(251, 146, 60, 0.3)',
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
        background: 'linear-gradient(to right, #06b6d4, #fb923c)',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        color: 'white',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
    },
    projectPrivateLabel: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        color: '#94a3b8',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.2)',
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
        background: 'linear-gradient(135deg, rgba(255, 153, 0, 0.15), rgba(255, 153, 0, 0.1))',
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 153, 0, 0.3)',
        textAlign: 'center',
        boxShadow: '0 8px 25px rgba(255, 153, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
    },
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
    awsLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    awsLogoText: {
        color: '#ff9900',
        fontFamily: 'Amazon Ember, sans-serif',
        fontSize: '1.8rem',
        fontWeight: '700',
    },
    awsLogoCloud: {
        margin: '0 0.25rem',
        fontSize: '1.2rem',
    },
    certificationName: {
        fontWeight: '600',
        marginBottom: '0.25rem',
    },
    certificationDetails: {
        fontSize: '0.875rem',
        color: '#94a3b8',
        marginBottom: '0.5rem',
    },
    certificationValidity: {
        fontSize: '0.75rem',
        color: '#64748b',
        fontStyle: 'italic',
    },
    certificationInProgress: {
        fontSize: '0.75rem',
        color: '#fb923c',
        fontWeight: '600',
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
    locationInfo: {
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