---
layout: default
title: Home
---

<section class="hero fade-in-section">
    <div class="hero-content">
        <p class="hero-subtitle"> // STRATEGIC INDEX // </p>
        <h1 class="hero-title">
            Enterprise Infrastructure<br>
            & Cyber Intelligence
        </h1>
        <p class="hero-desc">
            Advanced analysis on enterprise architecture, infrastructure resilience, and the evolving digital threat landscape. 
            <span class="hero-subtitle-text"></span>
        </p>
        <a href="#latest-intelligence" class="btn-cyber">ACCESS INTELLIGENCE</a>
    </div>
</section>

<section id="latest-intelligence" class="posts-section">
    <h2 class="section-title fade-in-section"><span class="cyber-bracket">[</span> LATEST INTELLIGENCE <span class="cyber-bracket">]</span></h2>
    
    <div class="post-list">
      {% for post in site.posts %}
        <article class="post-card glass-card fade-in-section">
            <div class="card-content">
                <div class="post-meta">
                    {{ post.date | date: "%B %d, %Y" }} • INTEL BRIEF
                </div>
                <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            </div>
            <div class="card-action">
                <a href="{{ post.url | relative_url }}" class="btn-cyber">READ ANALYSIS</a>
            </div>
        </article>
      {% endfor %}
    </div>
</section>
