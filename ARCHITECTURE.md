# 🏗️ Architecture - Kiến Trúc Ứng Dụng

## 📐 Tổng Quan Kiến Trúc

```
┌─────────────────────────────────────────────────────┐
│         Browser (Client-Side Rendering)             │
├─────────────────────────────────────────────────────┤
│                   Vercel CDN                        │
├─────────────────────────────────────────────────────┤
│              Next.js Server (Vercel)                │
├─────────────────────────────────────────────────────┤
│    React Components (page.jsx, layout.jsx)          │
├─────────────────────────────────────────────────────┤
│     Tailwind CSS + globals.css Styling              │
└─────────────────────────────────────────────────────┘
```

---

## 🗂️ Project Structure Chi Tiết

```
widget-story-landing/
│
├── 📁 app/                                    # Next.js App Router
│   ├── page.jsx                              # 🎯 Main Landing Page Component
│   │   ├── Navbar Section                    # Sticky navigation bar
│   │   ├── Hero Section                      # Main call-to-action
│   │   ├── Features Section                  # 6 feature cards
│   │   ├── Stats Section                     # Impressive numbers
│   │   ├── CTA Section                       # Download call-to-action
│   │   └── Footer Section                    # Links + social media
│   │
│   ├── layout.jsx                            # Root Layout
│   │   ├── HTML/Head Setup                   # <html>, <head>, <body>
│   │   └── Metadata Export                   # SEO meta tags
│   │
│   └── globals.css                           # Global Styles
│       ├── @tailwind directives              # Tailwind utilities
│       └── Custom CSS Classes                # gradient-text, shadow-lg-custom
│
├── 📁 public/                                # Static Assets
│   ├── images/                               # (for custom images)
│   ├── icons/                                # (for custom icons)
│   └── fonts/                                # (optional: custom fonts)
│
├── 📋 Configuration Files
│   ├── package.json                          # Dependencies & Scripts
│   │   ├── dependencies                      # react, next, react-dom
│   │   └── devDependencies                   # tailwind, eslint, autoprefixer
│   │
│   ├── next.config.js                        # Next.js Settings
│   │   └── reactStrictMode: true             # Enable strict mode
│   │
│   ├── tailwind.config.js                    # Tailwind Configuration
│   │   ├── colors                            # primary (#7C3AED), secondary (#EC4899)
│   │   └── theme.extend                      # Custom theme values
│   │
│   ├── postcss.config.js                     # PostCSS Plugins
│   │   ├── tailwindcss                       # CSS utility generator
│   │   └── autoprefixer                      # Vendor prefixes
│   │
│   ├── .eslintrc.json                        # ESLint Rules
│   ├── .eslintignore                         # ESLint Ignore Patterns
│   ├── .gitignore                            # Git Ignore Patterns
│   └── vercel.json                           # Vercel Deployment Config
│
└── 📚 Documentation
    ├── INDEX.md                              # 📑 Chỉ mục tài liệu
    ├── README.md                             # 📖 Thông tin chung
    ├── QUICK_START.md                        # 🚀 Bắt đầu nhanh
    ├── PROJECT_SUMMARY.md                    # 📋 Tóm tắt dự án
    ├── CUSTOMIZATION.md                      # 🎨 Hướng dẫn tùy chỉnh
    ├── DEPLOYMENT.md                         # 🚀 Hướng dẫn deploy
    └── ARCHITECTURE.md                       # 🏗️ File này
```

---

## 🎯 Component Flow

### Page.jsx Hierarchy

```
Page Component (page.jsx)
│
├── 🧭 Navbar
│   ├── Logo
│   ├── Navigation Links (Desktop)
│   ├── Mobile Menu Button
│   └── Mobile Menu (Conditional)
│
├── 🎨 Hero Section
│   ├── Content Div
│   │   ├── H1 Title
│   │   ├── Description Paragraph
│   │   └── CTA Buttons (2)
│   └── Image Div
│       ├── Background Gradient
│       └── Next.js Image Component
│
├── ⭐ Features Section
│   ├── Section Title
│   ├── Feature Description
│   └── Features Grid (3 cols on desktop)
│       └── Feature Cards (6 items)
│           ├── Icon (emoji)
│           ├── Title
│           └── Description
│
├── 📊 Stats Section
│   ├── Stat Card 1 (Users)
│   ├── Stat Card 2 (Stories)
│   └── Stat Card 3 (Views)
│
├── 🎯 CTA Section
│   ├── Heading
│   ├── Paragraph
│   └── Download Button
│
└── 🔗 Footer
    ├── Footer Grid (4 cols)
    │   ├── Brand Info
    │   ├── Apps Links
    │   ├── Company Links
    │   └── Legal Links
    └── Footer Bottom
        ├── Copyright
        └── Social Media Icons
```

---

## 🎨 Styling Architecture

### CSS Cascade

```
1. Browser Default Styles
          ↓
2. globals.css (@tailwind directives)
          ↓
3. Tailwind Utility Classes (className)
          ↓
4. Custom CSS Classes (gradient-text, shadow-lg-custom)
          ↓
5. Inline Styles (if any)
```

### Tailwind Class Organization

```
Spacing Classes:
- p-8 → padding: 2rem
- px-4 → padding-left/right: 1rem
- py-20 → padding-top/bottom: 5rem
- mb-4 → margin-bottom: 1rem
- gap-8 → gap: 2rem

Color Classes:
- text-primary → color: #7C3AED
- bg-primary → background-color: #7C3AED
- border-gray-100 → border-color: #f3f4f6

Responsive Classes:
- hidden md:flex → display: none (mobile), flex (tablet+)
- md:grid-cols-2 → 1 column (mobile), 2 columns (tablet+)
- text-4xl sm:text-5xl → responsive font sizes
- px-4 sm:px-6 lg:px-8 → responsive padding
```

---

## 🔄 Data Flow

### State Management

```
Page Component (Stateful)
│
├── State: isMenuOpen (boolean)
│   └── Used for: Mobile menu toggle
│
└── State Updates:
    └── onClick={() => setIsMenuOpen(!isMenuOpen)}
```

### Props Flow

```
Parent: Page Component
│
├── Child: Navbar
│   ├── Props: isMenuOpen, setIsMenuOpen
│   └── Event: onClick handler
│
├── Child: Feature Cards
│   ├── Props: features (array)
│   └── Render: .map() loop
│
└── Child: Links
    └── Props: href, className, children
```

---

## 🌐 Routing Structure

```
Project URL: https://widget-story.vercel.app (example)

Route Structure:
├── / (root)
│   └── page.jsx (renders landing page)
│
├── /#features (anchor link)
│   └── Scrolls to Features Section
│
└── /#download (anchor link)
    └── Scrolls to CTA Section
```

### Navigation

```html
Navbar Links: - "Tính Năng" → href="#features" - "Tải Ứng Dụng" →
href="#download" External Links: - "Tải iOS" → href="https://apps.apple.com/..."
- Social Links → href="https://..."
```

---

## 🎯 Component Props & State

### Main Component (Page)

```javascript
// State
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Local Data
const features = [
  {
    icon: "✨",
    title: "Tạo Câu Chuyện Dễ Dàng",
    description: "...",
  },
  // ... more features
];

// No props (root component)
```

---

## 📦 Dependencies Breakdown

### Runtime Dependencies

```
react@18.3.1
├── Core React library
├── Used by: JSX syntax, hooks (useState)
└── Size: ~42KB

react-dom@18.3.1
├── React DOM rendering
├── Used by: Browser rendering
└── Size: ~39KB

next@14.2.3
├── Next.js framework
├── Used by: SSR, routing, image optimization
└── Size: ~50KB (gzipped)
```

### Development Dependencies

```
tailwindcss@3.4.3
├── Utility-first CSS framework
├── Used by: Styling via className
└── Size: ~26KB

postcss@8.4.38
├── CSS processor
├── Used by: PostCSS plugins
└── Size: ~28KB

autoprefixer@10.4.19
├── CSS vendor prefixes
├── Used by: Browser compatibility
└── Size: ~7KB
```

---

## 🎨 Styling System

### Color Palette

```
Primary Colors (from tailwind.config.js):
- primary: #7C3AED (Purple)
- secondary: #EC4899 (Pink)

Grayscale (Tailwind defaults):
- gray-50: #f9fafb (lightest)
- gray-900: #111827 (darkest)
- gray-100 to gray-800: gradient shades

Gradients (CSS):
- .gradient-primary: Linear gradient (purple → pink)
- .gradient-text: Text gradient (purple → pink)
```

### Typography

```
Font Family:
- System fonts (Apple System, Segoe UI, etc)
- Fallback to sans-serif

Font Sizes (Tailwind scale):
- text-lg: 1.125rem (18px)
- text-xl: 1.25rem (20px)
- text-4xl: 2.25rem (36px)
- text-5xl: 3rem (48px)
- text-6xl: 3.75rem (60px)

Font Weights:
- font-normal: 400
- font-semibold: 600
- font-bold: 700
```

---

## 🚀 Build & Deployment Pipeline

### Development Flow

```
1. npm install
   └── Install dependencies (node_modules/)

2. npm run dev
   └── Start Next.js dev server (localhost:3000)
   └── Hot reload on file changes

3. Edit files
   └── Changes reflected instantly

4. npm run build
   └── Compile to .next/ folder
   └── Optimize code & assets
   └── Check for errors

5. npm run lint
   └── Check code quality
   └── ESLint rules
```

### Deployment Flow

```
1. Push code to GitHub
   └── git push origin main

2. Vercel detects push
   └── Triggered by webhook

3. Vercel builds project
   └── npm install
   └── npm run build
   └── Generate .next/ folder

4. Vercel deploys to CDN
   └── Global edge locations
   └── Automatic HTTPS

5. Domain routes to Vercel
   └── DNS CNAME record
   └── Custom domain (optional)

6. Users access site
   └── Fast delivery via CDN
   └── Automatic caching
```

---

## 📊 Performance Architecture

### Code Splitting

```
Next.js automatically splits code:
├── Main bundle
│   ├── Layout
│   ├── Common components
│   └── Shared utilities
│
└── Page bundles
    └── page.jsx bundle
        ├── Hero section
        ├── Features section
        └── Footer section
```

### Image Optimization

```
<Image /> Component Benefits:
├── Automatic format selection (WebP for modern browsers)
├── Responsive image loading
├── Built-in lazy loading
├── Automatic sizing
└── Bandwidth optimization
```

### Caching Strategy

```
Vercel CDN:
├── Static assets: 1 year cache
├── HTML pages: 60 seconds cache
├── API responses: Per configuration
└── Browser cache: Per headers
```

---

## 🔐 Security Architecture

### Security Features

```
Built-in (Next.js):
├── XSS protection
├── CSRF protection
├── Secure headers
└── Content Security Policy

Configured (vercel.json):
├── X-Content-Type-Options: nosniff
├── X-Frame-Options: DENY
├── X-XSS-Protection: 1; mode=block
└── Strict-Transport-Security

Best Practices:
├── No hardcoded secrets
├── Environment variables for sensitive data
├── HTTPS enforced
└── Regular security updates
```

---

## 🎯 File Responsibilities

| File                 | Responsibility              | Size       |
| -------------------- | --------------------------- | ---------- |
| `page.jsx`           | Main landing page component | ~400 lines |
| `layout.jsx`         | Root layout + metadata      | ~30 lines  |
| `globals.css`        | Global styles               | ~40 lines  |
| `tailwind.config.js` | Tailwind theme              | ~20 lines  |
| `package.json`       | Dependencies                | ~30 lines  |
| `vercel.json`        | Deployment config           | ~25 lines  |

---

## 🔄 Request Response Cycle

```
User Request
    ↓
Vercel Edge Network (CDN)
    ↓
Cache Check (valid?)
    ├── Yes → Return cached page (fast! ⚡)
    └── No → Continue
    ↓
Next.js Server (if needed)
    ↓
React Component Render
    ↓
CSS Processing (Tailwind)
    ↓
HTML Generation
    ↓
Send to Browser
    ↓
Browser Rendering
    ├── Parse HTML
    ├── Load CSS
    ├── Load JS (minimal)
    ├── Render Components
    └── Show Page
    ↓
User sees landing page
```

---

## 📈 Scalability Considerations

### Current Setup

- Suitable for: Small to medium projects
- Estimated traffic: 10,000+ users/month
- Cost: Free (Vercel hobby tier)

### Upgrade Path

```
Phase 1 (Current): Static landing page
├── Vercel Hobby (free)
└── GitHub repository

Phase 2 (Growth): Add analytics
├── Vercel Analytics
├── Google Analytics
└── Tracking pixel

Phase 3 (Scale): Database integration
├── Upgrade to Vercel Pro
├── Add database (Firebase, MongoDB)
└── User authentication

Phase 4 (Maturity): Microservices
├── Separate backend services
├── API layer
└── Distributed caching
```

---

## 📚 References & Resources

### Documentation

- [Next.js Architecture Patterns](https://nextjs.org/docs/app/building-your-application)
- [React Component Patterns](https://react.dev)
- [Tailwind CSS Architecture](https://tailwindcss.com/docs)

### Performance Tools

- [Next.js Performance Monitoring](https://nextjs.org/docs/pages/building-your-application/optimizing/analytics)
- [Vercel Analytics](https://vercel.com/analytics)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 🎯 Design Principles

### Followed Principles

✅ **DRY (Don't Repeat Yourself)**

- Reusable components
- Tailwind utility classes

✅ **Separation of Concerns**

- Layout, styles, content separated
- Configuration files organized

✅ **Performance First**

- Image optimization
- Code splitting
- Caching strategies

✅ **Mobile First**

- Mobile designs first
- Progressive enhancement
- Responsive breakpoints

✅ **Accessibility**

- Semantic HTML
- Link colors for visibility
- Touch-friendly buttons

---

**Architecture designed for scalability and performance! 🚀**
