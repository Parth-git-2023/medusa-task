Medusa Backend Deployment to AWS using Terraform & GitHub Actions
This project automates the deployment of a Medusa.js backend to AWS ECS Fargate using:

Docker

Terraform

GitHub Actions CI/CD

AWS Application Load Balancer (ALB)

Auto-scaled ECS Fargate services

🌐 Live URL
http://medusa-task-alb-70140215.us-east-1.elb.amazonaws.com

🧱 Tech Stack

Backend: Node.js + Medusa.js

Docker: Containerized image

AWS Services:

ECS Fargate (Compute)

ALB (Load Balancer)

S3, ECR (optional)

Route 53 (optional)

GitHub Actions: CI/CD pipeline

Terraform: Infrastructure as Code (IaC)

📁 Project Structure

.
├── Dockerfile
├── package.json
├── index.js (or medusa app entry)
├── terraform/
│ ├── main.tf
│ ├── variables.tf
│ ├── output.tf
│ └── ...
└── .github/workflows/deploy.yml

🚀 How It Works

Dockerfile builds a production Medusa backend image.

Image is pushed to Docker Hub via GitHub Actions.

Terraform provisions infrastructure (VPC, ECS Cluster, ALB, Service).

ECS runs the Docker container and connects it to ALB.

Final app is accessible publicly via Load Balancer URL.

📦 Build & Deploy

This project uses GitHub Actions to automate deployment. On every push to main branch:

Builds the Docker image

Pushes it to DockerHub (parthdoc/medusa)

Runs Terraform to deploy ECS service and ALB

🔑 Secrets Required (GitHub Repo → Settings → Secrets and variables → Actions)

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

DOCKERHUB_USERNAME

DOCKERHUB_PASSWORD

📝 Setup Instructions

Clone the Repo

git clone https://github.com/Parth-git-2023/medusa-task.git
cd medusa-task

Setup Secrets in GitHub Actions

Push Code to Main Branch

git add .
git commit -m "Initial deployment"
git push origin main

GitHub Actions will deploy automatically.

✅ Verification

Go to your Load Balancer URL:

http://medusa-task-alb-70140215.us-east-1.elb.amazonaws.com

You should see a working Medusa backend!
