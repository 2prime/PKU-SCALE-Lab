# Publishing a blog post

Every Markdown file added to `_posts` is published automatically by GitHub Pages. It will appear on the Blog page and, if it is among the three newest posts, on the homepage.

## Publish directly on GitHub

1. Open the repository and select **Add file**, then **Create new file**.
2. Name the file `_posts/YYYY-MM-DD-short-english-title.md`.
3. Copy the template below, replace its metadata, and write the article in Markdown.
4. Select **Commit changes** and commit to `main`.
5. Wait briefly for the GitHub Pages deployment to finish.

## Post template

```markdown
---
title: "Your Article Title"
date: 2026-09-02 16:00:00 +0800
author: "Author Name"
description: "One concise sentence shown on the homepage and Blog page."
tags:
  - machine-learning-theory
---

Write the article here using normal Markdown.

## Section title

Equations, lists, links, code blocks, tables, and images are supported.
```

The filename must begin with a valid date and the post must start with the two `---` front matter lines. Put quotation marks around titles or descriptions that contain a colon.

## Images

Upload images to `assets/images/blog`, then reference them from a post with:

```liquid
![Description]({{ '/assets/images/blog/example.png' | relative_url }})
```

Use a date and time that are not in the future. Keep `+0800` when writing dates in Beijing time.
