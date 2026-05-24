import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, BookOpen, ArrowRight, Briefcase } from 'lucide-react';
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
        "Site Reliability Engineering Enthusiast",
        "Infrastructure Automation Engineer",
        "Open Source Contributor"
    ], []);

    const terminalCommands = useMemo(() => [
        '$ whoami',
        'sai-kalyan-burra',
        'Cloud & DevOps Engineer | MS @ Northeastern',
        '',
        '$ cat achievements.txt',
        '→ 50+ microservices scaled via GitOps',
        '→ ~80% CI pipeline runtime reduction',
        '→ ~70% faster incident detection (MTTD)',
        '→ Zero-touch DR failover',
        '',
        '$ tech_stack --current',
        '☁️  Cloud: AWS • GCP',
        '🔧 IaC: Terraform • CloudFormation • Helm',
        '🐳 Containers: Kubernetes (EKS/GKE) • Docker • Istio',
        '🔁 CI/CD: GitHub Actions • ArgoCD • GitLab',
        '🔐 Security: Vault • OPA • Trivy • IAM',
        '📊 Observability: Prometheus • Grafana • Loki • Tempo',
        '💻 Code: Python • Go • Bash • TypeScript • Java',
        '',
        '$ ls certifications/',
        'google-cloud-digital-leader.cert',
        'aws-solutions-architect.in-progress',
        '',
        '$ ./connect',
        '📧 burra.sa@northeastern.edu',
        '💼 LinkedIn | 🐙 GitHub | ✍️ Medium'
    ], []);

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
        "Cloud Platforms": ["AWS (EC2, VPC, S3, RDS, IAM, EKS, ECR, ECS/Fargate, Lambda, CloudWatch, Route 53, Secrets Manager)", "GCP (GKE, Cloud SQL)"],
        "Containers & Orchestration": ["Kubernetes (EKS/GKE)", "Docker", "docker-compose", "Helm", "Istio Service Mesh"],
        "Infrastructure as Code": ["Terraform (multi-region modules)", "AWS CloudFormation"],
        "CI/CD & GitOps": ["Git", "GitLab", "GitHub Actions", "ArgoCD", "Build & Release Automation", "Deployment Pipelines"],
        "Observability & Incident Response": ["Prometheus", "Grafana", "Loki", "CloudWatch", "Kubecost", "Alerting Rules", "On-Call Triage", "Runbooks"],
        "Security": ["HashiCorp Vault", "OPA Gatekeeper", "Trivy Container Scanning", "IAM Policies", "SSE-S3 Encryption"],
        "Networking & Systems": ["Linux Administration (Ubuntu, CentOS)", "TCP/IP", "DNS", "Firewall Rules", "VPC/Subnet Design", "Network Policies", "mTLS", "Nginx", "Bastion Host", "SSH Tunneling"],
        "Languages & Scripting": ["Python", "Go", "Bash/Shell Scripting", "Java", "JavaScript", "TypeScript", "Node.js", "HTML"]
    };

    const projects = [
        {
            title: "TaskFlow — Cloud-Native CI/CD & Microservices Platform",
            subtitle: "Production-Grade Kubernetes Platform with GitOps & Zero-Trust Security",
            period: "December 2025 - May 2026",
            tech: "GitHub Actions • ArgoCD • Terraform • Helm • Docker • Kubernetes (EKS) • Prometheus • Grafana • Istio • Vault • OPA Gatekeeper • Go",
            highlights: [
                "🚀 Scaled the platform from 3 to 50+ microservices — primarily written in Go alongside Python, Node.js, Java, and Rust — by designing reusable Terraform modules with for_each patterns, reducing per-service infrastructure config to variable declarations and provisioning identical environments in ~15 minutes",
                "🏗️ Built a CI/CD platform handling 50+ services using GitHub Actions dynamic matrix builds with change detection — only affected services are built, tested, scanned, and pushed per commit, reducing pipeline runtime by ~80% versus full rebuilds",
                "🔄 Eliminated manual ArgoCD Application configuration by implementing ApplicationSets with Git directory generators to auto-discover and deploy new services via GitOps — adding a service requires zero CD pipeline changes",
                "📊 Deployed Prometheus alerting rules and Grafana dashboards with Loki log aggregation and Tempo distributed tracing for incident detection and triage — added Kubecost for cost monitoring, reducing MTTD by ~70%",
                "🔐 Reduced the cluster attack surface by enforcing Kubernetes Network Policies, Istio mTLS for service-to-service encryption, OPA Gatekeeper for policy-as-code, and HashiCorp Vault for centralized secrets management"
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
                "🔧 Contributed Terraform modules and Helm charts to an open-source DevOps monitoring platform, with all PRs merged upstream — cutting contributor onboarding from 4+ hours to under 10 minutes by packaging provisioning into a single command",
                "⚡ Introduced continuous integration quality gates into the project's PR workflow — Helm chart linting, Terraform plan validation, and automated unit tests — shifting misconfiguration detection from post-deploy incidents to code review",
                "📝 Authored technical documentation including architecture decision records, contributor guides, and operational runbooks; collaborated with maintainers to define reusable Helm packaging conventions adopted as the project standard"
            ],
            githubUrl: "https://github.com/OpsiMate/OpsiMate",
        },
        {
            title: "Multi-Region Disaster Recovery on AWS",
            subtitle: "Active-Passive DR Solution with Automated Failover",
            period: "November - December 2025",
            tech: "Terraform • AWS (EC2, RDS, S3, Route 53, Lambda, CloudWatch) • GitHub Actions • Bash",
            highlights: [
                "🌐 Designed an active-passive DR architecture for a distributed system across two AWS regions with warm standby, targeting a 5-minute RPO and 15-minute RTO to meet SLA requirements",
                "🔄 Automated failover using Route 53 health checks, DNS failover routing, and cross-region replication, achieving zero human involvement during simulated regional outages"
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
        company: "Builtin Tech (Start-up)",
        role: "Software Engineer Intern — Cloud Infrastructure & Application Development",
        period: "February 2023 - July 2023",
        location: "Hyderabad, India",
        highlights: [
            "Coordinated a 5-person team building a cross-platform property management app — handled sprint planning, code reviews, and Git workflow standards, integrating CI processes while architecting the Firebase backend with JavaScript, shipping on schedule with a 99.5% crash-free rate",
            "Migrated static site hosting to Amazon S3 and CloudFront, wrote Bash scripts for cache invalidation and build release orchestration — reducing page load times by ~60% and hosting costs by ~40%",
            "Built FinOps dashboards using AWS Organizations, CloudWatch billing alarms, and cost anomaly detection to address zero cloud spend visibility, surfacing ~20% in previously untracked costs",
            "Hardened S3 storage with SSE-S3 encryption, versioning, lifecycle rules, and VPC endpoints, bringing the layer into full compliance with data retention requirements"
        ]
    };

    const achievements = [
        { metric: "50+", label: "Microservices Scaled" },
        { metric: "~80%", label: "CI Runtime Reduction" },
        { metric: "~70%", label: "Faster Detection (MTTD)" }
    ];

    return (
        <div style={styles.container}>
            {/* Dot grid background for hero */}
            <div style={styles.dotGridBg}></div>

            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap');

                    @keyframes pulse {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }

                    @keyframes profileFloat {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-5px); }
                    }

                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes terminalBlink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }

                    a:hover {
                        opacity: 0.85;
                    }
                `}
            </style>

            {/* ── Navigation ── */}
            <nav style={styles.nav}>
                <div style={styles.navContent}>
                    <div style={styles.logo}>Sai Kalyan Burra</div>
                    <div style={styles.navLinks}>
                        <a href="#experience" style={styles.navLink}>Experience</a>
                        <a href="#projects" style={styles.navLink}>Projects</a>
                        <a href="#blog" style={styles.navLink}>Blog</a>
                        <a href="#skills" style={styles.navLink}>Skills</a>
                        <a href="#contact" style={styles.navLink}>Contact</a>
                    </div>
                </div>
            </nav>

            {/* ── Hero (Dark) ── */}
            <section style={styles.hero}>
                <div style={styles.heroGrid}>
                    <div style={{
                        ...styles.heroLeft,
                        ...(isVisible ? styles.visible : styles.hidden)
                    }}>
                        <p style={styles.heroGreeting}>Hello,</p>
                        <h1 style={styles.heroTitle}>
                            <span style={styles.heroName}>Sai Kalyan here!</span>
                            <span style={styles.heroWave}> 👋🏽</span>
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
                            Cloud and DevOps engineer specializing in AWS infrastructure, CI/CD automation, Kubernetes orchestration, and observability. Experienced with Terraform-based IaC, GitOps pipelines (GitHub Actions + ArgoCD), and monitoring stacks (Prometheus, Grafana, Loki). Open source contributor with production-level exposure to cost optimization, security hardening, incident response, and technical documentation.
                        </p>

                        <div style={styles.socialRow}>
                            <a href="mailto:burra.sa@northeastern.edu" style={styles.socialIcon} title="Email">
                                <Mail size={20} />
                            </a>
                            <a href="https://github.com/Sai9700128" target='_blank' rel="noopener noreferrer" style={styles.socialIcon} title="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/sai-kalyan-burra/" target='_blank' rel="noopener noreferrer" style={styles.socialIcon} title="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://medium.com/@saikalyan.burra" target='_blank' rel="noopener noreferrer" style={styles.socialIcon} title="Medium">
                                <BookOpen size={20} />
                            </a>
                        </div>
                    </div>

                    <div style={{
                        ...styles.heroRight,
                        ...(isVisible ? styles.visibleDelayed : styles.hidden)
                    }}>
                        <div style={styles.profileCard}>
                            <div style={styles.profileImageWrapper}>
                                <img
                                    src={myprofilePic}
                                    alt="Sai Kalyan Burra"
                                    style={styles.profileImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Metrics Strip (Dark → Light transition) ── */}
            <section style={styles.metricsStrip}>
                <div style={styles.metricsContent}>
                    {achievements.map((achievement, index) => (
                        <div key={index} style={styles.metricItem}>
                            <div style={styles.metricValue}>{achievement.metric}</div>
                            <div style={styles.metricLabel}>{achievement.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Education (Light) ── */}
            <section style={styles.lightSection}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleDark}>Education</h2>
                    <div style={styles.educationGrid}>
                        <div style={styles.eduCard}>
                            <div style={styles.eduPeriod}>Sep 2024 — Apr 2026</div>
                            <h4 style={styles.eduInstitution}>Northeastern University</h4>
                            <p style={styles.eduDegree}>Master of Science in Software Engineering Systems</p>
                            <p style={styles.eduLocation}>Boston, MA</p>
                            <p style={styles.eduCoursework}>Coursework: Network Structures & Cloud Computing, Linux for Networking, Operating Systems</p>
                        </div>
                        <div style={styles.eduCard}>
                            <div style={styles.eduPeriod}>Jun 2021 — Apr 2024</div>
                            <h4 style={styles.eduInstitution}>KL University</h4>
                            <p style={styles.eduDegree}>Bachelor in Electronics and Communication Engineering</p>
                            <p style={styles.eduLocation}>Hyderabad, India</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Experience (Light) ── */}
            <section id="experience" style={styles.lightSectionAlt}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleDark}>Professional Experience</h2>
                    <p style={styles.sectionSubDark}>Building scalable solutions in the cloud</p>

                    <div style={styles.expCard}>
                        <div style={styles.expHeader}>
                            <div style={styles.expIconWrap}>
                                <Briefcase size={22} color="#1a1a1a" />
                            </div>
                            <div>
                                <h3 style={styles.expCompany}>{experience.company}</h3>
                                <p style={styles.expRole}>{experience.role}</p>
                                <div style={styles.expMeta}>
                                    <span>{experience.period}</span>
                                    <span>📍 {experience.location}</span>
                                </div>
                            </div>
                        </div>
                        <div style={styles.expHighlights}>
                            {experience.highlights.map((h, i) => (
                                <div key={i} style={styles.expHighlight}>
                                    <div style={styles.expDot}></div>
                                    <span>{h}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Featured Project (Dark) ── */}
            <section style={styles.darkSection}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleLight}>Featured Project</h2>
                    <p style={styles.sectionSubLight}>TaskFlow — Cloud-Native CI/CD & Microservices Platform</p>

                    <div style={styles.featuredCard}>
                        <div style={styles.featuredGrid}>
                            <div>
                                <div style={styles.featuredHeader}>
                                    <Terminal size={28} color="#ffffff" />
                                    <h3 style={styles.featuredTitle}>TaskFlow</h3>
                                </div>
                                <p style={styles.featuredDesc}>
                                    A cloud-native CI/CD and microservices platform scaled from 3 to 50+ services. Features GitOps deployment
                                    with ApplicationSets, zero-trust security, and comprehensive observability with distributed tracing.
                                    Reduced CI pipeline runtime by ~80% and MTTD by ~70%.
                                </p>

                                <div style={styles.featuredFeatures}>
                                    <div style={styles.featuredFeature}>
                                        <span style={styles.featureBullet}>—</span>
                                        <span>50+ services via GitHub Actions dynamic matrix builds</span>
                                    </div>
                                    <div style={styles.featuredFeature}>
                                        <span style={styles.featureBullet}>—</span>
                                        <span>ArgoCD ApplicationSets with Git directory generators</span>
                                    </div>
                                    <div style={styles.featuredFeature}>
                                        <span style={styles.featureBullet}>—</span>
                                        <span>Zero-trust: Istio mTLS + OPA Gatekeeper + Vault</span>
                                    </div>
                                    <div style={styles.featuredFeature}>
                                        <span style={styles.featureBullet}>—</span>
                                        <span>Observability: Prometheus + Grafana + Loki + Tempo</span>
                                    </div>
                                </div>

                                <div style={styles.featuredButtons}>
                                    <a href="https://github.com/Sai9700128/gitops_app_Taskflow" target="_blank" rel="noopener noreferrer" style={styles.btnLight}>
                                        <Github size={18} />
                                        Repo 1
                                    </a>
                                    <a href="https://github.com/Sai9700128/gitops-config" target="_blank" rel="noopener noreferrer" style={styles.btnOutlineLight}>
                                        <Github size={18} />
                                        Repo 2
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
                                    <span style={styles.terminalDemoTitle}>TaskFlow Deployment</span>
                                </div>
                                <div style={styles.terminalDemoBody}>
                                    <div style={styles.cmdLine}>$ kubectl get deployments -n taskflow | head -6</div>
                                    <div style={styles.cmdOutput}>NAME              READY   STATUS</div>
                                    <div style={styles.cmdResult}>api-gateway       3/3     Running</div>
                                    <div style={styles.cmdResult}>task-service      3/3     Running</div>
                                    <div style={styles.cmdResult}>user-service      3/3     Running</div>
                                    <div style={styles.cmdResult}>... 47 more services</div>
                                    <div style={styles.cmdLine}>$ argocd app sync taskflow</div>
                                    <div style={styles.cmdResult}>✓ Synced (Healthy) — 50+ apps</div>
                                    <div style={styles.cmdLine}>$ █</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Blog (Light) ── */}
            <section id="blog" style={styles.lightSection}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleDark}>Latest from My Blog</h2>
                    <p style={styles.sectionSubDark}>Insights on cloud engineering, DevOps, and modern infrastructure</p>

                    <div style={styles.blogGrid}>
                        <div style={styles.featuredBlogCard}>
                            <div style={styles.blogBadge}>Featured</div>
                            <h3 style={styles.blogCardTitle}>{blogPosts[0].title}</h3>
                            <p style={styles.blogCardExcerpt}>{blogPosts[0].excerpt}</p>
                            <div style={styles.blogCardMeta}>
                                <span>{blogPosts[0].date}</span>
                                <span>{blogPosts[0].readTime}</span>
                                <span style={styles.blogTag}>{blogPosts[0].category}</span>
                            </div>
                            <a
                                href="https://medium.com/@saikalyan.burra/deploying-my-first-application-on-kubernetes-a-2048-game-journey-bc8e182055f2"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.blogReadBtn}
                            >
                                Read on Medium <ArrowRight size={16} />
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
                                >
                                    <div style={styles.blogPostTop}>
                                        <h4 style={styles.blogPostTitle}>{post.title}</h4>
                                        <span style={styles.blogPostTag}>{post.category}</span>
                                    </div>
                                    <p style={styles.blogPostExcerpt}>{post.excerpt}</p>
                                    <div style={styles.blogPostBottom}>
                                        <span style={styles.blogPostDate}>{post.date} · {post.readTime}</span>
                                        <span style={styles.blogPostArrow}>Read → </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div style={styles.blogCTA}>
                        <p style={styles.blogCTAText}>
                            Follow me on Medium for in-depth technical articles about cloud engineering, DevOps best practices, and infrastructure automation.
                        </p>
                        <a
                            href="https://medium.com/@saikalyan.burra"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.btnDark}
                        >
                            <BookOpen size={18} />
                            Follow on Medium
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Projects (Light Alt) ── */}
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

                                        <div style={styles.projectHighlights}>
                                            {project.highlights.map((highlight, i) => (
                                                <div key={i} style={styles.projectHighlight}>{highlight}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={styles.projectActions}>
                                        {!project.noGithub && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={styles.btnDark}
                                            >
                                                <Github size={16} />
                                                {project.hasTwoLinks ? project.githubLabel1 : 'Source Code'}
                                            </a>
                                        )}
                                        {project.hasTwoLinks && (
                                            <a
                                                href={project.githubUrl2}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={styles.btnOutlineDark}
                                            >
                                                <Github size={16} />
                                                {project.githubLabel2}
                                            </a>
                                        )}
                                        {project.noGithub && (
                                            <div style={styles.privateLabel}>
                                                📁 Private Work
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Skills (Light) ── */}
            <section id="skills" style={styles.lightSection}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitleDark}>Technical Expertise</h2>

                    <div style={styles.skillsGrid}>
                        {Object.entries(skills).map(([category, items], index) => (
                            <div key={index} style={styles.skillCard}>
                                <h3 style={styles.skillCategory}>{category}</h3>
                                <div style={styles.skillsList}>
                                    {items.map((skill, i) => (
                                        <div key={i} style={styles.skillPill}>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={styles.certSection}>
                        <h3 style={styles.certTitle}>Certifications</h3>
                        <div style={styles.certGrid}>
                            <div style={styles.certCard}>
                                <div style={styles.certLogo}>☁️ GCP</div>
                                <div style={styles.certName}>Google Cloud Certified</div>
                                <div style={styles.certDetail}>Cloud Digital Leader</div>
                                <div style={styles.certDate}>Valid: Jan 2023 — Jan 2026</div>
                            </div>
                            <div style={styles.certCard}>
                                <div style={styles.certLogo}>☁️ AWS</div>
                                <div style={styles.certName}>AWS Certified</div>
                                <div style={styles.certDetail}>Solutions Architect — Associate</div>
                                <div style={styles.certInProgress}>🎯 In Progress</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Terminal Section (Dark) ── */}
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

            {/* ── Contact (Light) ── */}
            <section id="contact" style={styles.lightSectionAlt}>
                <div style={styles.contactContent}>
                    <h2 style={styles.contactTitle}>Let's Build Something Amazing</h2>
                    <p style={styles.contactDesc}>
                        Ready to discuss new opportunities, collaborations, or just chat about tech? I'm all ears!
                    </p>

                    <div style={styles.contactGrid}>
                        <a href="mailto:burra.sa@northeastern.edu" style={styles.contactCard}>
                            <Mail size={28} color="#1a1a1a" />
                            <div style={styles.contactCardLabel}>Email</div>
                            <div style={styles.contactCardValue}>burra.sa@northeastern.edu</div>
                        </a>
                        <a href="https://www.linkedin.com/in/sai-kalyan-burra/" target='_blank' rel="noopener noreferrer" style={styles.contactCard}>
                            <Linkedin size={28} color="#1a1a1a" />
                            <div style={styles.contactCardLabel}>LinkedIn</div>
                            <div style={styles.contactCardValue}>Connect with me</div>
                        </a>
                        <a href="https://github.com/Sai9700128" target='_blank' rel="noopener noreferrer" style={styles.contactCard}>
                            <Github size={28} color="#1a1a1a" />
                            <div style={styles.contactCardLabel}>GitHub</div>
                            <div style={styles.contactCardValue}>View my code</div>
                        </a>
                    </div>

                    <p style={styles.locationText}>📍 Brookline, MA · (857) 339-8482</p>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer style={styles.footer}>
                <div style={styles.footerContent}>
                    <p>© 2026 Sai Kalyan Burra. Building the future with cloud technology.</p>
                </div>
            </footer>
        </div>
    );
};

/* ─────────────────────────────────────────────
   STYLES — Sanjeev Sriram-inspired color grading
   Dark charcoal hero + dot grid, clean white sections,
   monochrome palette with minimal accent
   ───────────────────────────────────────────── */

const styles = {
    // ── Container ──
    container: {
        minHeight: '100vh',
        background: '#1a1a1a',
        color: '#1a1a1a',
        fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        position: 'relative',
        overflow: 'hidden',
    },

    // ── Dot Grid Background (hero area) ──
    dotGridBg: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
        zIndex: 0,
    },

    // ── Navigation ──
    nav: {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        background: 'rgba(26, 26, 26, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
    },
    navContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1.1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.15rem',
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: '-0.01em',
    },
    navLinks: {
        display: 'flex',
        gap: '2rem',
    },
    navLink: {
        color: 'rgba(255,255,255,0.7)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'color 0.2s',
        letterSpacing: '0.01em',
    },

    // ── Hero ──
    hero: {
        paddingTop: '8rem',
        paddingBottom: '5rem',
        padding: '8rem 2rem 5rem',
        position: 'relative',
        zIndex: 1,
        background: 'transparent',
    },
    heroGrid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '4rem',
        alignItems: 'center',
    },
    heroLeft: {
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    heroRight: {
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        justifyContent: 'center',
    },
    visible: {
        transform: 'translateY(0)',
        opacity: 1,
    },
    visibleDelayed: {
        transform: 'translateY(0)',
        opacity: 1,
        transitionDelay: '0.2s',
    },
    hidden: {
        transform: 'translateY(30px)',
        opacity: 0,
    },
    heroGreeting: {
        fontSize: '1.5rem',
        color: 'rgba(255,255,255,0.5)',
        fontWeight: '400',
        marginBottom: '0.25rem',
        letterSpacing: '-0.01em',
    },
    heroTitle: {
        fontSize: '4.5rem',
        fontWeight: '700',
        lineHeight: '1.05',
        marginBottom: '0.75rem',
        letterSpacing: '-0.03em',
    },
    heroName: {
        color: '#ffffff',
    },
    heroNameBold: {
        color: '#ffffff',
    },
    heroWave: {
        fontSize: '3.5rem',
    },
    roleContainer: {
        height: '2rem',
        marginBottom: '1.75rem',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
    },
    heroSubtitle: {
        fontSize: '1.15rem',
        color: 'rgba(255,255,255,0.6)',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
    },
    dynamicRole: {
        color: 'rgba(255,255,255,0.85)',
        fontWeight: '500',
        minHeight: '1.5rem',
    },
    typingCursor: {
        color: '#ffffff',
        fontWeight: '300',
        fontSize: '1.25rem',
        marginLeft: '1px',
        transition: 'opacity 0.1s',
    },
    heroDescription: {
        fontSize: '1.05rem',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: '1.8',
        marginBottom: '2.5rem',
        maxWidth: '560px',
    },
    heroStrong: {
        color: '#ffffff',
        fontWeight: '600',
    },

    // Social icons row
    socialRow: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
    },
    socialIcon: {
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textDecoration: 'none',
        transition: 'all 0.2s',
        background: 'transparent',
    },

    // Profile card
    profileCard: {
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        maxWidth: '380px',
        width: '100%',
        aspectRatio: '3/4',
    },
    profileImageWrapper: {
        width: '100%',
        height: '100%',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px',
        display: 'block',
    },

    // ── Metrics Strip ──
    metricsStrip: {
        background: '#1a1a1a',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '3rem 2rem',
        position: 'relative',
        zIndex: 1,
    },
    metricsContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        textAlign: 'center',
    },
    metricItem: {},
    metricValue: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: '-0.03em',
    },
    metricLabel: {
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.45)',
        fontWeight: '500',
        marginTop: '0.25rem',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
    },

    // ── Light Sections ──
    lightSection: {
        background: '#f7f7f7',
        padding: '5rem 2rem',
        position: 'relative',
        zIndex: 2,
    },
    lightSectionAlt: {
        background: '#ffffff',
        padding: '5rem 2rem',
        position: 'relative',
        zIndex: 2,
    },

    // ── Dark Sections ──
    darkSection: {
        background: '#1a1a1a',
        padding: '5rem 2rem',
        position: 'relative',
        zIndex: 2,
    },

    // ── Section Shared ──
    sectionContent: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    sectionTitleDark: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '1rem',
        textAlign: 'center',
        letterSpacing: '-0.03em',
    },
    sectionTitleLight: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '1rem',
        textAlign: 'center',
        letterSpacing: '-0.03em',
    },
    sectionSubDark: {
        fontSize: '1.1rem',
        color: '#888',
        textAlign: 'center',
        marginBottom: '3rem',
    },
    sectionSubLight: {
        fontSize: '1.1rem',
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
        marginBottom: '3rem',
    },

    // ── Education ──
    educationGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginTop: '3rem',
    },
    eduCard: {
        background: '#ffffff',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid #e8e8e8',
        transition: 'box-shadow 0.2s',
    },
    eduPeriod: {
        fontSize: '0.8rem',
        color: '#999',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        marginBottom: '0.75rem',
    },
    eduInstitution: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '0.5rem',
    },
    eduDegree: {
        fontSize: '0.95rem',
        color: '#555',
        lineHeight: '1.5',
        marginBottom: '0.5rem',
    },
    eduLocation: {
        fontSize: '0.85rem',
        color: '#999',
        margin: 0,
    },
    eduCoursework: {
        fontSize: '0.8rem',
        color: '#888',
        marginTop: '0.75rem',
        fontStyle: 'italic',
        lineHeight: '1.5',
    },

    // ── Experience ──
    expCard: {
        background: '#f7f7f7',
        borderRadius: '20px',
        padding: '2.5rem',
        border: '1px solid #e8e8e8',
    },
    expHeader: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.25rem',
        marginBottom: '2rem',
    },
    expIconWrap: {
        background: '#e8e8e8',
        borderRadius: '12px',
        padding: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    expCompany: {
        fontSize: '1.4rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '0.3rem',
    },
    expRole: {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '0.5rem',
    },
    expMeta: {
        display: 'flex',
        gap: '1.5rem',
        fontSize: '0.85rem',
        color: '#999',
    },
    expHighlights: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    expHighlight: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        color: '#444',
        lineHeight: '1.65',
        fontSize: '0.95rem',
    },
    expDot: {
        width: '6px',
        height: '6px',
        backgroundColor: '#1a1a1a',
        borderRadius: '50%',
        marginTop: '0.55rem',
        flexShrink: 0,
    },

    // ── Featured Project (Dark) ──
    featuredCard: {
        background: 'rgba(255,255,255,0.04)',
        borderRadius: '20px',
        padding: '3rem',
        border: '1px solid rgba(255,255,255,0.08)',
    },
    featuredGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
    },
    featuredHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1rem',
    },
    featuredTitle: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#ffffff',
        margin: 0,
        letterSpacing: '-0.02em',
    },
    featuredDesc: {
        fontSize: '1rem',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: '1.75',
        marginBottom: '1.5rem',
    },
    featuredFeatures: {
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
    },
    featuredFeature: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '0.95rem',
    },
    featureBullet: {
        color: 'rgba(255,255,255,0.3)',
        fontWeight: '300',
    },
    featuredButtons: {
        display: 'flex',
        gap: '0.75rem',
    },

    // Terminal demo
    terminalDemo: {
        background: '#111111',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
    },
    terminalDemoHeader: {
        background: '#1a1a1a',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
    },
    terminalDots: {
        display: 'flex',
        gap: '6px',
    },
    dot: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
    },
    terminalDemoTitle: {
        fontSize: '0.75rem',
        color: 'rgba(255,255,255,0.4)',
    },
    terminalDemoBody: {
        padding: '1.25rem',
        fontFamily: '"JetBrains Mono", Monaco, "Cascadia Code", monospace',
        fontSize: '0.8rem',
        lineHeight: '1.7',
    },
    cmdLine: {
        color: '#28c840',
        marginBottom: '0.25rem',
    },
    cmdOutput: {
        color: 'rgba(255,255,255,0.5)',
        marginBottom: '0.25rem',
    },
    cmdResult: {
        color: 'rgba(255,255,255,0.7)',
        paddingLeft: '1rem',
        marginBottom: '0.15rem',
    },

    // ── Blog (Light) ──
    blogGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginTop: '3rem',
    },
    featuredBlogCard: {
        background: '#ffffff',
        borderRadius: '20px',
        padding: '2.5rem',
        border: '1px solid #e8e8e8',
        display: 'flex',
        flexDirection: 'column',
    },
    blogBadge: {
        display: 'inline-block',
        background: '#1a1a1a',
        color: '#ffffff',
        fontSize: '0.7rem',
        fontWeight: '600',
        padding: '0.35rem 0.75rem',
        borderRadius: '100px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '1.25rem',
        alignSelf: 'flex-start',
    },
    blogCardTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1a1a1a',
        lineHeight: '1.3',
        marginBottom: '0.75rem',
    },
    blogCardExcerpt: {
        color: '#666',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        flex: 1,
    },
    blogCardMeta: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '0.8rem',
        color: '#999',
        marginBottom: '1.5rem',
    },
    blogTag: {
        background: '#f0f0f0',
        color: '#555',
        padding: '0.2rem 0.6rem',
        borderRadius: '100px',
        fontSize: '0.7rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    blogReadBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: '#1a1a1a',
        color: '#ffffff',
        padding: '0.85rem 1.5rem',
        borderRadius: '10px',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '600',
        transition: 'opacity 0.2s',
        alignSelf: 'flex-start',
    },
    blogPostsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    blogPostCard: {
        background: '#ffffff',
        borderRadius: '16px',
        padding: '1.75rem',
        border: '1px solid #e8e8e8',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        transition: 'box-shadow 0.2s',
    },
    blogPostTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '1rem',
        marginBottom: '0.5rem',
    },
    blogPostTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#1a1a1a',
        lineHeight: '1.4',
        margin: 0,
        flex: 1,
    },
    blogPostTag: {
        background: '#f0f0f0',
        color: '#555',
        padding: '0.2rem 0.5rem',
        borderRadius: '100px',
        fontSize: '0.65rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        flexShrink: 0,
    },
    blogPostExcerpt: {
        color: '#888',
        lineHeight: '1.5',
        marginBottom: '1rem',
        fontSize: '0.9rem',
    },
    blogPostBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    blogPostDate: {
        fontSize: '0.8rem',
        color: '#aaa',
    },
    blogPostArrow: {
        fontSize: '0.85rem',
        color: '#1a1a1a',
        fontWeight: '600',
    },
    blogCTA: {
        textAlign: 'center',
        marginTop: '3.5rem',
        padding: '2.5rem',
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #e8e8e8',
    },
    blogCTAText: {
        fontSize: '1rem',
        color: '#888',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        maxWidth: '550px',
        margin: '0 auto 1.5rem',
    },

    // ── Projects (Light) ──
    projectsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginTop: '3rem',
    },
    projectItem: {
        background: '#f7f7f7',
        borderRadius: '20px',
        padding: '2.5rem',
        border: '1px solid #e8e8e8',
        transition: 'box-shadow 0.2s',
    },
    projectItemGrid: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2rem',
    },
    projectItemTitle: {
        fontSize: '1.35rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '0.5rem',
        letterSpacing: '-0.01em',
    },
    projectSubtitle: {
        color: '#666',
        marginBottom: '0.5rem',
        fontSize: '0.95rem',
    },
    projectPeriod: {
        fontSize: '0.8rem',
        color: '#aaa',
        marginBottom: '0.75rem',
    },
    projectTech: {
        color: '#1a1a1a',
        fontSize: '0.8rem',
        marginBottom: '1.25rem',
        fontFamily: '"JetBrains Mono", Monaco, monospace',
        fontWeight: '500',
    },
    projectHighlights: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
    },
    projectHighlight: {
        color: '#555',
        fontSize: '0.9rem',
        lineHeight: '1.6',
    },
    projectActions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        justifyContent: 'center',
    },
    privateLabel: {
        background: '#f0f0f0',
        padding: '0.75rem 1.25rem',
        borderRadius: '10px',
        color: '#999',
        textAlign: 'center',
        fontSize: '0.9rem',
        fontWeight: '500',
    },

    // ── Skills (Light) ──
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        marginTop: '3rem',
        marginBottom: '3rem',
    },
    skillCard: {
        background: '#ffffff',
        borderRadius: '16px',
        padding: '1.75rem',
        border: '1px solid #e8e8e8',
    },
    skillCategory: {
        fontSize: '1.1rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '1rem',
    },
    skillsList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },
    skillPill: {
        background: '#f0f0f0',
        border: '1px solid #e0e0e0',
        borderRadius: '100px',
        padding: '0.4rem 0.85rem',
        fontSize: '0.8rem',
        color: '#444',
        fontWeight: '500',
    },

    // Certifications
    certSection: {
        textAlign: 'center',
    },
    certTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '1.5rem',
    },
    certGrid: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
    },
    certCard: {
        background: '#ffffff',
        borderRadius: '16px',
        padding: '2rem 2.5rem',
        border: '1px solid #e8e8e8',
        textAlign: 'center',
        minWidth: '240px',
    },
    certLogo: {
        fontSize: '1.5rem',
        marginBottom: '0.75rem',
        fontWeight: '700',
        color: '#1a1a1a',
    },
    certName: {
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: '0.25rem',
    },
    certDetail: {
        fontSize: '0.85rem',
        color: '#888',
        marginBottom: '0.5rem',
    },
    certDate: {
        fontSize: '0.75rem',
        color: '#aaa',
        fontStyle: 'italic',
    },
    certInProgress: {
        fontSize: '0.8rem',
        color: '#1a1a1a',
        fontWeight: '600',
    },

    // ── Full Terminal (Dark section) ──
    terminalFull: {
        background: '#111111',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        maxWidth: '800px',
        margin: '0 auto',
    },
    terminalHeader: {
        background: '#1a1a1a',
        padding: '0.85rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
    },
    terminalHeaderTitle: {
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.4)',
        marginLeft: '0.5rem',
    },
    terminalFullBody: {
        padding: '1.5rem',
        fontFamily: '"JetBrains Mono", Monaco, "Cascadia Code", monospace',
        fontSize: '0.8rem',
        minHeight: '300px',
    },
    terminalText: {
        color: '#28c840',
        whiteSpace: 'pre-wrap',
        margin: 0,
        lineHeight: '1.6',
    },
    terminalCursor: {
        color: '#28c840',
        animation: 'terminalBlink 1s infinite',
    },

    // ── Contact ──
    contactContent: {
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
    },
    contactTitle: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '1rem',
        letterSpacing: '-0.03em',
    },
    contactDesc: {
        fontSize: '1.1rem',
        color: '#888',
        marginBottom: '3rem',
    },
    contactGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.25rem',
        marginBottom: '2rem',
    },
    contactCard: {
        background: '#f7f7f7',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid #e8e8e8',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'box-shadow 0.2s',
        textAlign: 'center',
    },
    contactCardLabel: {
        fontWeight: '600',
        color: '#1a1a1a',
        marginTop: '0.75rem',
        marginBottom: '0.25rem',
    },
    contactCardValue: {
        fontSize: '0.85rem',
        color: '#999',
    },
    locationText: {
        fontSize: '0.9rem',
        color: '#aaa',
    },

    // ── Buttons ──
    btnDark: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: '#1a1a1a',
        color: '#ffffff',
        padding: '0.75rem 1.5rem',
        borderRadius: '10px',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '600',
        transition: 'opacity 0.2s',
    },
    btnOutlineDark: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'transparent',
        color: '#1a1a1a',
        padding: '0.75rem 1.5rem',
        borderRadius: '10px',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '600',
        border: '1.5px solid #d0d0d0',
        transition: 'all 0.2s',
    },
    btnLight: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: '#ffffff',
        color: '#1a1a1a',
        padding: '0.85rem 1.75rem',
        borderRadius: '10px',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '600',
        transition: 'opacity 0.2s',
    },
    btnOutlineLight: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'transparent',
        color: '#ffffff',
        padding: '0.85rem 1.75rem',
        borderRadius: '10px',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '600',
        border: '1.5px solid rgba(255,255,255,0.2)',
        transition: 'all 0.2s',
    },

    // ── Footer ──
    footer: {
        borderTop: '1px solid #e8e8e8',
        padding: '2rem',
        background: '#ffffff',
        textAlign: 'center',
    },
    footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#aaa',
        fontSize: '0.85rem',
    },
};

export default Portfolio;