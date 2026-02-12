# Enterprise Cyber Intelligence Blog

This is a premium, high-end cybersecurity blog built with **Jekyll**, designed for **GitHub Pages**.

## Features
- 🌌 **Particle Background**: Interactive network constellation effect.
- 🔮 **Glassmorphism UI**: Modern frosted glass aesthetics.
- ⚡ **Mermaid.js Support**: Diagrams render automatically in Markdown.
- 📱 **Responsive**: Mobile-first design.
- 🌓 **Dark Mode Optimized**: Built for low-light environments (Cyber Navy theme).

## 🚀 Quick Start (Local Development)

1.  **Install Jekyll**:
    Make sure you have Ruby and Jekyll installed.
    ```bash
    gem install jekyll bundler
    ```

2.  **Install Dependencies**:
    ```bash
    bundle install
    ```

3.  **Run Server**:
    ```bash
    bundle exec jekyll serve
    ```
    Access at `http://localhost:4000`

## 📦 Deployment to GitHub Pages

1.  Push this repository to GitHub.
2.  Go to **Settings** > **Pages**.
3.  Source: Select `main` branch (or `master`).
4.  Folder: Select `/ (root)`.
5.  Save. GitHub will build and deploy your site automatically.

## 📝 Adding New Posts

Create a new file in `_posts/` usage the format `YYYY-MM-DD-title.md`.

**Front Matter Template:**
```markdown
---
layout: post
title:  "Your Intelligence Briefing Title"
date:   2026-02-12 10:00:00 +0700
categories: intelligence
author: "Unit 7"
---
```

## 📊 Using Diagrams

This blog supports Mermaid.js out of the box. Use the following structure in your Markdown:

```html
<div class="mermaid">
graph TD;
    A[Threat Detected] --> B{Analyze};
    B -->|Critical| C[Block IP];
    B -->|Low| D[Log Event];
</div>
```

---
*Built for Enterprise Intelligence.*
