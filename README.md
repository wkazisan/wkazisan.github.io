# Waiz Kuruni Ahmed Zisan — Portfolio

Astro + Tailwind CSS দিয়ে বানানো একটি পার্সোনাল পোর্টফোলিও ওয়েবসাইট।

## দ্রুত আপডেট করার নিয়ম (সব ডাটা এক জায়গায়)

সব কনটেন্ট `src/config.ts` ফাইল থেকে নিয়ন্ত্রিত হয়। এখানে নিচের তথ্যগুলো পাবেন:

- **Name / Title / Description**
- **Social links**
- **About Me**
- **Skills (এখানে soft skills রাখুন)**
- **Projects**
- **Experience**
- **Education**
- **Extra-Curricular Activities**

## Next Time কিভাবে তথ্য edit করবেন (ধাপে ধাপে)

1. `src/config.ts` ওপেন করুন।
2. প্রয়োজনমতো টেক্সট পরিবর্তন করুন।
3. লোকাল রান দেখতে চাইলে:
   ```bash
   npm install
   npm run dev
   ```
4. আপডেট পুশ করুন:
   ```bash
   git status
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

## GitHub Pages এ Host করার নির্দেশনা

১) GitHub এ repo তৈরি করে কোড push করুন।  
২) repo এর **Settings → Pages** এ যান।  
৩) **Build and deployment** এ গিয়ে **Source** হিসেবে **GitHub Actions** সিলেক্ট করুন।  
৪) কাস্টম ডোমেইন থাকলে `CNAME` ফাইলে আপনার ডোমেইন রাখুন (এখানে already আছে)।  

এই রিপোতে GitHub Actions workflow যুক্ত আছে, তাই push হলেই অটো-build হবে। অফিসিয়াল গাইড:  
https://docs.astro.build/en/guides/deploy/github/

## Codex কে কীভাবে নির্দেশনা দেবেন (উদাহরণ)

নিচের মত করে বললেই Codex আপডেট করবে:

```
আমার পোর্টফোলিওতে নিচের তথ্যগুলো আপডেট করো।
- About Me ৩ লাইন করে লেখো
- Skills section এ নতুন soft skills যোগ করো
- Experience এ নতুন কোম্পানি/বুলেট যুক্ত করো
- Projects এ নতুন প্রজেক্ট যোগ করো
- README.md তে আপডেট করার নির্দেশনা দিন
```

## Project Structure

```
src/
├── components/
├── pages/
└── config.ts
```

## Local Development

```bash
npm install
npm run dev
```

Thanks to https://github.com/RyanFitzgerald/devportfolio.git
