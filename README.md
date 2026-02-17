# 🚀 Weblytics

<div align="center">

![Weblytics Landing Page](./public/Weblytics.png)

**Unlock Your Website's Potential with Powerful Analytics**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.3.1-2D3748)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](LICENSE)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📖 About

**Weblytics** is a comprehensive, privacy-focused web analytics platform that helps you understand your website's performance. Track visitor behavior, monitor key metrics, and optimize performance effortlessly with real-time analytics insights.

### What Weblytics Does

- **📊 Real-Time Analytics**: Track page views, visitors, and user interactions in real-time
- **🌍 Geographic Insights**: See where your visitors are coming from with country-level analytics
- **📱 Device Analytics**: Understand your audience with device type (Desktop, Mobile, Tablet) and OS breakdown
- **🛣️ Route Tracking**: Monitor which pages are most popular and track user journeys
- **🔍 Traffic Sources**: Identify where your traffic comes from (direct, referrals, UTM campaigns)
- **📈 Visual Dashboards**: Beautiful, intuitive charts and graphs to visualize your data
- **🔐 Privacy-Focused**: Self-hosted solution giving you complete control over your data

---

## ✨ Features

### 🎯 Core Features

- **Traffic Overview** - Get a clear breakdown of your website visitors with total page visits and unique visitors
- **In-Depth Analytics** - Gain actionable insights with detailed reports and visualizations
- **SEO Insights** - View essential metadata, OG images, and indexing information
- **User Engagement** - Track visitor interactions and conversion rates

### 📊 Analytics Capabilities

- **Real-Time Tracking**: Monitor visitor activity as it happens
- **Historical Data**: View trends over time with date-based analytics
- **Route Analytics**: Track performance of individual pages/routes
- **Country Analytics**: Geographic distribution of your visitors
- **Device Analytics**: Desktop, Mobile, and Tablet breakdown
- **OS Analytics**: Operating system distribution
- **Source Analytics**: Traffic source analysis (direct, referrals, UTM)

### 🛠️ Developer Features

- **Easy Integration**: Simple script tag or Next.js component integration
- **RESTful API**: Track events programmatically
- **Custom Events**: Track custom events beyond page views
- **Session Management**: Automatic session tracking and visitor identification

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 15.1.7** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Radix UI** - Accessible component primitives
- **Shiki** - Syntax highlighting

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Database
- **NextAuth.js v5** - Authentication (Google OAuth)

### Infrastructure

- **Docker** - Containerization for local development
- **Husky** - Git hooks
- **ESLint** - Code linting
- **Prettier** - Code formatting

---


### Prerequisites

- Node.js 18+
- PostgreSQL database (or Docker for local development)
- Google OAuth credentials (for authentication)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/analytics.git
cd analytics
```

### Step 2: Install Dependencies

```bash
npm install
# or
pnpm install
```


Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5439/postgres
AUTH_SECRET=your_generated_secret_here
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

#### Generate AUTH_SECRET

**Windows (PowerShell):**

```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

**macOS/Linux:**

```bash
openssl rand -base64 32
```

**Or use online generator:** https://generate-secret.vercel.app/32

#### Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google Identity API
4. Configure OAuth consent screen
5. Create OAuth 2.0 credentials (Web application)
6. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

See [Environment Setup Guide](#-environment-setup-guide) for detailed instructions.

### Step 4: Database Setup

**Option A: Using Docker (Recommended for Local Development)**

```bash
docker-compose up -d
```

**Option B: External PostgreSQL**

Use your database provider's connection string in `.env`.

### Step 5: Run Migrations

```bash
npx prisma migrate dev
```

### Step 6: Start Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📖 Usage

### Adding Tracking to Your Website

#### For Next.js Applications

Add the tracking script to your `app/layout.tsx`:

```tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script
          defer
          data-domain="your-domain.com"
          src="https://your-analytics-domain.com/tracking-script.js"
        />
      </body>
    </html>
  );
}
```

#### For React/HTML Applications

Add the script tag before the closing `</body>` tag:

```html
<script
  defer
  data-domain="your-domain.com"
  src="https://your-analytics-domain.com/tracking-script.js"
></script>
```

### Creating a Project

1. Sign in with Google OAuth
2. Navigate to Projects
3. Click "Create New Project"
4. Enter your domain name
5. Copy the tracking script
6. Add it to your website

### Viewing Analytics

- **Dashboard**: Overview of total visits and visitors
- **Routes**: See which pages are most popular
- **Countries**: Geographic distribution of visitors
- **Devices**: Device type breakdown
- **Sources**: Traffic source analysis

---

## 🔧 Environment Setup Guide

### Detailed Environment Variable Setup

<details>
<summary>Click to expand detailed setup instructions</summary>

#### Step 1: Create `.env` File

Copy the `.env.example` file to `.env` (if not already created):

```bash
cp .env.example .env
```

#### Step 2: Generate AUTH_SECRET

`AUTH_SECRET` is used by NextAuth for JWT signing and encryption.

**Windows (PowerShell):**

```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

**macOS/Linux:**

```bash
openssl rand -base64 32
```

**Or use online generator:** https://generate-secret.vercel.app/32

#### Step 3: Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google Identity API
4. Configure OAuth consent screen (External)
5. Create OAuth 2.0 Client ID (Web application)
6. Add authorized redirect URIs:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://yourdomain.com/api/auth/callback/google`
7. Copy Client ID and Client Secret to `.env`

#### Step 4: Configure DATABASE_URL

**Docker (Local):**

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5439/postgres
```

**External Database:**

```env
DATABASE_URL=postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME
```

</details>

---

## 🏗️ Project Structure

```
analytics/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/
│   ├── tracking-script.js     # Client-side tracking script
│   └── Weblytics.png          # Landing page screenshot
├── src/
│   ├── app/
│   │   ├── (landing)/         # Landing page routes
│   │   ├── (root)/            # Authenticated routes
│   │   ├── api/
│   │   │   ├── auth/          # NextAuth routes
│   │   │   └── track/          # Analytics tracking endpoint
│   │   └── layout.tsx
│   ├── components/            # React components
│   ├── config/                # Configuration files
│   ├── lib/                   # Utility functions
│   └── middleware.ts          # Next.js middleware
├── docker-compose.yml         # Docker configuration
├── next.config.ts            # Next.js configuration
└── package.json
```

---

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
```

### Database Commands

```bash
npx prisma migrate dev     # Run migrations
npx prisma generate        # Generate Prisma Client
npx prisma studio          # Open Prisma Studio
```

---

## ⚠️ Build Warning

When building the project, you may see a warning about Prisma and Edge Runtime:

```
⚠ A Node.js API is used (setImmediate) which is not supported in the Edge Runtime.
```

**This warning is safe to ignore.** It occurs because:

- Middleware runs on Edge Runtime
- PrismaAdapter is imported but only used during OAuth callbacks (Node.js runtime)
- We use JWT strategy, so Prisma isn't executed in middleware
- The application functions correctly despite this warning

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

For commercial usage without AGPL-3.0 obligations, a commercial license is available. Contact [shiruvati07@gmail.com](mailto:shiruvati07@gmail.com) for pricing and terms.

See [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons from [Lucide](https://lucide.dev/)

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/analytics/issues)
- **Email**: shiruvati07@gmail.com

---

<div align="center">

**Made with ❤️ by the Weblytics Team**

[⭐ Star this repo](https://github.com/yourusername/analytics) • [🐛 Report Bug](https://github.com/yourusername/analytics/issues) • [💡 Request Feature](https://github.com/yourusername/analytics/issues)

</div>
