# Sai Kalyan Burra — Cloud & DevOps Engineer

![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)
![Available](https://img.shields.io/badge/Available-For%20Hire-success?style=for-the-badge&logo=handshake)
![Location](https://img.shields.io/badge/Location-Boston%2C%20MA-blue?style=for-the-badge&logo=googlemaps)

![AWS](https://img.shields.io/badge/AWS-FF9900?style=flat-square&logo=amazon-aws&logoColor=white)
![GCP Certified](https://img.shields.io/badge/GCP-Certified-4285F4?style=flat-square&logo=google-cloud&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

---

Cloud and DevOps engineer specializing in AWS infrastructure, CI/CD automation, Kubernetes orchestration, and observability. Experienced with Terraform-based IaC, GitOps pipelines (GitHub Actions + ArgoCD), and monitoring stacks (Prometheus, Grafana, Loki). Open source contributor with production-level exposure to cost optimization, security hardening, incident response, and technical documentation.

**[Live Portfolio](https://saikalyanbportfolio.vercel.app)** · **[LinkedIn](https://www.linkedin.com/in/sai-kalyan-burra/)** · **[Medium](https://medium.com/@saikalyan.burra)** · <burra.sa@northeastern.edu>

---

## Education

**Northeastern University** — MS in Software Engineering Systems (Sep 2024 – Apr 2026)
Coursework: Network Structures & Cloud Computing, Linux for Networking, Operating Systems

**KL University** — B.Tech in Electronics and Communication Engineering (Jun 2021 – Apr 2024)

---

## Experience

**Builtin Tech (Start-up)** — Software Engineer Intern, Cloud Infrastructure & Application Development
*Feb 2023 – Jul 2023 · Hyderabad, India*

- Coordinated a 5-person team building a cross-platform property management app — sprint planning, code reviews, Git workflow standards, Firebase backend with JavaScript; shipped on schedule with a 99.5% crash-free rate
- Migrated static site hosting to S3 + CloudFront, wrote Bash scripts for cache invalidation and build release orchestration — ~60% faster page loads, ~40% lower hosting costs
- Built FinOps dashboards using AWS Organizations, CloudWatch billing alarms, and cost anomaly detection — surfaced ~20% in previously untracked cloud spend
- Hardened S3 storage with SSE-S3 encryption, versioning, lifecycle rules, and VPC endpoints for full data retention compliance

---

## Featured Projects

### TaskFlow — Cloud-Native CI/CD & Microservices Platform

`GitHub Actions` `ArgoCD` `Terraform` `Helm` `Docker` `Kubernetes (EKS)` `Prometheus` `Grafana` `Istio` `Vault` `OPA Gatekeeper` `Go`

Scaled from 3 to 50+ microservices (Go, Python, Node.js, Java, Rust) on AWS EKS.

- Designed reusable Terraform modules with `for_each` patterns — per-service infra config reduced to variable declarations, environments provisioned in ~15 min
- Built CI/CD handling 50+ services via GitHub Actions dynamic matrix builds with change detection — ~80% pipeline runtime reduction vs full rebuilds
- Implemented ArgoCD ApplicationSets with Git directory generators — adding a service requires zero CD pipeline changes
- Deployed Prometheus alerting, Grafana dashboards, Loki log aggregation, and Tempo distributed tracing — added Kubecost for cost monitoring, ~70% MTTD reduction
- Enforced zero-trust security: Kubernetes Network Policies, Istio mTLS, OPA Gatekeeper policy-as-code, HashiCorp Vault secrets management

**Repos:** [App](https://github.com/Sai9700128/gitops_app_Taskflow) · [GitOps Config](https://github.com/Sai9700128/gitops-config)

---

### Open Source Contributor — OpsiMate

`Terraform` `Helm` `Kubernetes` `AWS EKS` `EC2` `GitHub Actions`

- Contributed Terraform modules and Helm charts with all PRs merged upstream — cut contributor onboarding from 4+ hours to under 10 minutes
- Introduced CI quality gates (Helm linting, Terraform plan validation, automated unit tests) — shifted misconfiguration detection from post-deploy to code review
- Authored architecture decision records, contributor guides, and operational runbooks; defined reusable Helm packaging conventions adopted as project standard

**Repo:** [OpsiMate](https://github.com/OpsiMate/OpsiMate)

---

### Multi-Region Disaster Recovery on AWS

`Terraform` `AWS (EC2, RDS, S3, Route 53, Lambda, CloudWatch)` `GitHub Actions` `Bash`

- Designed active-passive DR across two AWS regions with warm standby — targeting 5-min RPO and 15-min RTO
- Automated failover via Route 53 health checks, DNS failover routing, and cross-region replication — zero human involvement during simulated regional outages

**Repo:** [Multi-Region-DR](https://github.com/Sai9700128/Multi-Region-DR)

---

## Technical Skills

| Category | Technologies |
|---|---|
| **Languages** | Python, Go, Bash/Shell, Java, JavaScript, TypeScript, Node.js, HTML |
| **Cloud** | AWS (EC2, VPC, S3, RDS, IAM, EKS, ECR, ECS/Fargate, Lambda, CloudWatch, Route 53, Secrets Manager), GCP (GKE, Cloud SQL) |
| **Containers** | Kubernetes (EKS/GKE), Docker, docker-compose, Helm, Istio Service Mesh |
| **IaC** | Terraform (multi-region modules), AWS CloudFormation |
| **CI/CD** | Git, GitLab, GitHub Actions, ArgoCD, Build & Release Automation |
| **Observability** | Prometheus, Grafana, Loki, CloudWatch, Alerting Rules, On-Call Triage, Runbooks |
| **Security** | HashiCorp Vault, OPA Gatekeeper, Trivy, IAM Policies, SSE-S3 Encryption |
| **Networking** | Linux (Ubuntu, CentOS), TCP/IP, DNS, VPC/Subnet Design, Network Policies, mTLS, Nginx, Bastion Host, SSH Tunneling |

---

## Certifications

- **Google Cloud Certified** — Cloud Digital Leader (Jan 2023 – Jan 2026)
- **AWS Solutions Architect — Associate** — In Progress

---

## Key Metrics

| Metric | Result |
|---|---|
| Microservices scaled | 3 → 50+ |
| CI pipeline runtime reduction | ~80% |
| Mean time to detection improvement | ~70% |
| DR failover | Zero human involvement |
| Contributor onboarding time | 4+ hrs → <10 min |

---

## Blog

I write about cloud engineering, DevOps, and infrastructure on [Medium](https://medium.com/@saikalyan.burra).

---

## Contact

📧 <burra.sa@northeastern.edu> · 📍 Brookline, MA · 📞 (857) 339-8482

**Available for immediate start · STEM OPT authorized · Open to relocation**
