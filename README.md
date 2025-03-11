# 🚀 CI/CD Pipelines (Continuous Integration & Continuous Deployment/Delivery)

## What is CI/CD?
CI/CD automates the development process by continuously integrating, testing, and deploying code. This ensures smooth and reliable software releases with minimal manual intervention.

### 🔄 CI/CD Cycle
```
Code -> Build -> Test -> Deploy -> Repeat
```

### ✨ CI vs. CD
| **Process**               | **Includes**                | **Purpose**  |
|--------------------------|----------------------------|--------------|
| **Continuous Integration** | Build + Test + Deploy       | Ensure changes integrate smoothly |
| **Continuous Delivery**    | Release + Build + Deploy   | Automate delivery (manual release) |
| **Continuous Deployment**  | Auto-deploy to production | No manual intervention |

---

## 🔧 Jenkins - The CI/CD Automation Server
[Jenkins](https://www.jenkins.io/) is an open-source automation server that helps build, test, and deploy applications efficiently.

---

## ☁️ AWS EC2 - Cloud-Based Virtual Servers
### What is AWS EC2?
AWS **Elastic Compute Cloud (EC2)** provides resizable virtual servers (instances) for hosting applications.

### 🔹 Think of it like this:
💡 Instead of buying and maintaining physical servers, AWS lets you **rent virtual machines** in the cloud, reducing costs and increasing scalability.

---

## ⚡ GitHub Actions - Automating Workflows
### What is a Workflow?
A **workflow** is an automated process containing one or more **jobs**, attached to a GitHub repository. It executes when triggered by an event (e.g., push, pull request, or schedule).

### 🔍 How it Works:
1️⃣ **Detects changes in the repository**  
2️⃣ **Runs automated steps (build, test, deploy)**  
3️⃣ **Ensures smooth software delivery** ✅  

---

## 🔁 How CI/CD Fits Into the Workflow?
### 🛠 **Continuous Integration (CI)**
CI ensures that every code change is **automatically built, tested, and validated** before merging into the main branch.

### 📌 CI Workflow Example
```yaml
name: CI Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm install

      - name: Run Tests
        run: npm test
```
✅ **What happens?**
- Any code pushed to the `main` branch **automatically runs tests** before merging.

---

### 🚀 **Continuous Deployment (CD)**
CD ensures that after successful CI, the new changes are **automatically deployed** to production.

### 📌 CD Workflow Example
```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main  # Deploy on push to main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm install

      - name: Build the project
        run: npm run build

      - name: Deploy to Netlify
        run: netlify deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```
✅ **What happens?**
- When a new change is pushed, it is **automatically built and deployed** to **Netlify**.

---

## 📊 CI/CD Steps Breakdown
| **CI/CD Step**  | **Where It Happens in Workflow?** |
|-----------------|----------------------------------|
| **Continuous Integration (CI)**  | Install dependencies, run tests (`npm install`, `npm test`) |
| **Continuous Delivery (CD)**  | Build the project (`npm run build`) |
| **Continuous Deployment (CD)**  | Deploy to production (Netlify, Vercel, AWS, etc.) |

### 💡 **GitHub Actions = CI/CD Pipeline!**

✅ **CI (Testing & Building)** ensures your code works.  
✅ **CD (Deploying)** delivers new updates **automatically!**  

---

### 🎯 **Why CI/CD?**
✔️ **Automates software delivery**  
✔️ **Reduces bugs & errors**  
✔️ **Faster and reliable deployments**  
✔️ **Less manual work, more productivity!** 🚀  

---

## 🔮 Artifacts in GitHub Actions

### 📌 What are Artifacts?

Artifacts in **GitHub Actions** are files or outputs generated during a workflow run that need to be **saved, shared, or used later** in the pipeline. Since workflows run in **isolated virtual environments**, files created in one job **won't persist** to the next unless stored as artifacts.

#### 🗂️ Examples of Artifacts:
- ✅ **Build files** (e.g., compiled code, executables)
- ✅ **Test reports** (e.g., coverage reports, screenshots)
- ✅ **Log files** (e.g., error logs, debugging data)
- ✅ **Configuration files** (e.g., `.env` files, JSON configs)

---

### 🚀 How to Use Artifacts

#### 📤 Uploading an Artifact
To **store files** for later use in another job:

```yaml
steps:
  - name: Build Project
    run: npm run build

  - name: Upload Build Artifacts
    uses: actions/upload-artifact@v3
    with:
      name: my-build
      path: dist/
```
🔹 **What this does:** Saves the `dist/` folder (where the build output is stored) as an artifact named `my-build`.

---

#### 📥 Downloading an Artifact
To **retrieve stored artifacts** for further use:

```yaml
steps:
  - name: Download Build Artifacts
    uses: actions/download-artifact@v3
    with:
      name: my-build
      path: dist/
```
🔹 **What this does:** Retrieves the `my-build` artifact and places it inside the `dist/` folder.

---

### 🔄 Artifacts vs. Caching
| Feature  | Artifacts  | Caching  |
|----------|-----------|----------|
| Purpose  | Store workflow-generated files for later use or sharing  | Speed up workflows by saving dependencies |
| Scope  | Available for download in different jobs or runs  | Used within the same workflow to avoid reinstalling dependencies |
| Expiry  | Can be downloaded anytime (configurable retention)  | Usually expires after a set period (default 7 days) |

📌 **Example:**
- **Artifacts**: Store test reports so they can be accessed later.
- **Cache**: Speed up `npm install` by caching `node_modules`.

---

### 🌟 GitHub Marketplace
The **GitHub Marketplace** is a hub for finding **Actions, Apps, and Integrations** that can enhance your workflows.

#### 🎯 Why Use GitHub Marketplace?
- 🚀 **Automate** repetitive tasks using prebuilt actions.
- 🔄 **Integrate** with third-party tools like Slack, AWS, and Docker.
- ⚡ **Improve productivity** with CI/CD, security checks, and testing tools.








