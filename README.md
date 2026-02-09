<img width="1943" height="1093" alt="image" src="https://github.com/user-attachments/assets/cc2ff955-17c2-48c7-81c8-479a0f061850" />

# DevPortfolio Template

A modern, minimalist portfolio template built with Astro and Tailwind CSS. Perfect for developers looking to showcase their skills, experience, and projects in a clean, professional way.

This was completely rebuilt from the ground up from V1. This template was built to be entirely ready to go with a quick config edit (see below) but also provides the ability to easily extend in whatever way you want.

This template also comes with `CLAUDE.md` and `.cursor/rules` files for easy integration with your existing AI workflows.

> **📬 Connect & Share!**  
> For questions and updates, feel free to reach out on [**X (Twitter)**](https://x.com/rfitzio).  
> If you've built and published your personal site with this template, I'd love to see it! Send me a DM 🚀

## Preview

To view a live preview of the site, [click here](https://ryanfitzgerald.github.io/devportfolio/).

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons
- **TypeScript** - For type-safe configuration

## Updating the Template

### Configuration

The template is designed to be easily customizable through the `src/config.ts` file. This single file controls:

- **Personal Information**: Name, title, description
- **Accent Color**: Primary color theme (changing this will change the accent color site wide)
- **Social Links**: Email, LinkedIn, Twitter, GitHub (all optional)
- **About Section**: Personal bio/description
- **Skills**: Technical, IT, and Soft skills lists
- **Projects**: Project showcase with descriptions and links
- **Experience**: Work history with bullet points
- **Education**: Educational background and achievements
- **Training & Certificates**: Certificate list for professional training

If skills, projects, experience, or education are removed from the config, those sections will be hidden entirely.

### Example structures

Here's what the config data structure looks like for each section:

#### Basic Information
```typescript
name: "Your Name",
title: "Your Job Title",
description: "Brief site description",
accentColor: "#1d4ed8", // Hex color for theme
```

#### Social Links (all optional)
```typescript
social: {
  email: "your-email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourprofile", 
  github: "https://github.com/yourusername",
}
```

#### About Section
```typescript
aboutMe: "A paragraph describing yourself, your background, interests, and what you're passionate about. This appears in the About section of your portfolio."
```

#### Skills
```typescript
skills: {
  technical: ["Industrial wiring and inspection", "Control panel wiring"],
  it: ["MS Word (job reports & maintenance logs)", "HTML5, CSS3 (basic)"],
  soft: ["Prompt engineering", "Canva Pro", "Git & GitHub"],
}
```

#### Projects
```typescript
projects: [
  {
    name: "Project Name",
    description: "Brief description of what the project does and its impact",
    link: "https://github.com/yourusername/project",
    skills: ["React", "Node.js", "AWS"], // Technologies used
  }
]
```

#### Experience
```typescript
experience: [
  {
    company: "Company Name",
    title: "Your Job Title",
    dateRange: "Jan 2022 - Present",
    bullets: [
      "Led development of microservices architecture serving 1M+ users",
      "Reduced API response times by 40% through optimization",
      "Mentored team of 5 junior developers",
    ],
  }
]
```

#### Education
```typescript
education: [
  {
    school: "University Name",
    degree: "Bachelor of Science in Computer Science",
    dateRange: "2014 - 2018",
    achievements: [
      "Graduated Magna Cum Laude with 3.8 GPA",
      "Dean's List all semesters",
      "President of Computer Science Club"
    ]
  }
]
```

#### Training & Certificates
```typescript
training: [
  {
    name: "Certificate Title",
    organization: "Issuing Organization",
    date: "Month YYYY",
  }
]
```

## বাংলা নির্দেশনা (কনটেন্ট এডিট, হোস্টিং, এবং Codex নির্দেশ)

### ১) কনটেন্ট এডিট করা (পরেরবার এডিট করতে চাইলে)
সব কনটেন্ট এক জায়গায় আছে `src/config.ts` ফাইলে। এখানে নিচের অংশগুলো আপডেট করুন:

- **Overview (aboutMe)**: নিজের ২-৩ লাইনের সংক্ষিপ্ত পরিচিতি লিখুন।
- **Experience**: কাজ/ইন্টার্নশিপের তথ্য লিখুন।
- **Projects**: প্রোজেক্টের নাম, বিবরণ, এবং লিংক দিন।
- **Education**: ডিপ্লোমা/ডিগ্রি তথ্য দিন।
- **Skills**: `technical`, `it`, `soft` এই তিন অংশে স্কিল আপডেট করুন।
- **Training & Certificates**: ট্রেনিং বা সার্টিফিকেটের নাম, সংস্থা, তারিখ দিন।

### ২) GitHub Pages এ হোস্ট করার ধাপ
1. রিপোতে কাজ শেষ হলে কমিট/পুশ করুন।
2. প্রজেক্ট রুটে রান করুন:
   ```bash
   npm install
   npm run build
   ```
3. GitHub Pages-এর জন্য `astro.config.mjs` এ নিচের মতো `site` এবং `base` যোগ করুন:
   ```js
   export default defineConfig({
     site: "https://YOUR_GITHUB_USERNAME.github.io",
     base: "/YOUR_REPO_NAME",
   });
   ```
   যদি রিপোর নাম `YOUR_GITHUB_USERNAME.github.io` হয়, তাহলে `base` দরকার নেই।
4. তারপর GitHub রিপোতে **Settings → Pages** এ গিয়ে build output সেট করুন, অথবা
   GitHub Actions ব্যবহার করে ডিপ্লয় করুন (Astro ডকুমেন্টেশনে বিস্তারিত আছে)।

### ৩) Codex কে নির্দেশ দেওয়ার জন্য উদাহরণ
Codex-কে ছোট এবং স্পষ্ট নির্দেশনা দিন। যেমন:
```
src/config.ts ফাইলটা আপডেট করো।
- Overview (aboutMe) ২-৩ লাইনের সংক্ষিপ্ত বায়ো দিয়ে বদলাও
- Experience/Projects/Education আপডেট করো
- Skills এ technical/it/soft তিনটা লিস্ট রাখো
- Training & Certificates টেবিলে নতুন সার্টিফিকেট যোগ করো
```

### Icons

The template uses [Tabler Icons](https://tabler.io/icons) for all icons. If you wish to add more icons and have it look consistent with what's already there, you can browse through their extensive icon library.

## Project Structure

```
devportfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Local Development

If you'd like to run it locally:

```
git clone https://github.com/RyanFitzgerald/devportfolio.git
cd devportfolio
npm install
```

After that, start up the Astro dev server with:

```
npm run dev
```

## Deployment

The template can be deployed to any static hosting service easily (and in most cases, completely free). Here are some options:

- To deploy with Netlify, [click here](https://docs.astro.build/en/guides/deploy/netlify/).
- To deploy with Vercel, [click here](https://docs.astro.build/en/guides/deploy/vercel/).
- To deploy with GitHub Pages, [click here](https://docs.astro.build/en/guides/deploy/github/).
- To deploy with Cloudflare Pages, [click here](https://docs.astro.build/en/guides/deploy/cloudflare/).
- To deploy with Render, [click here](https://docs.astro.build/en/guides/deploy/render/).

Want to deploy somewhere else? Find more guides [here](https://docs.astro.build/en/guides/deploy/).

## Changelog

To view the changelog, see CHANGELOG.md.

## License

This project is fully and completely MIT. See LICENSE.md.

## Questions?

Feel free to reach out on [X (Twitter)](https://x.com/rfitzio) if you have any questions or need help.
