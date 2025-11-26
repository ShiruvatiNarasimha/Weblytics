This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Current state

<img width="497" alt="project" src="https://github.com/user-attachments/assets/d45acb97-f1d0-4778-b86b-35ba8de1246b" />

## Environment Setup Guide

Before running the application, you need to configure environment variables. Follow these steps:

### Step 1: Create `.env` File

Copy the `.env.example` file to `.env` (if not already created):

```bash
cp .env.example .env
```

Or create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL=
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

### Step 2: Generate AUTH_SECRET

`AUTH_SECRET` is used by NextAuth for JWT signing and encryption. You need to generate a secure random string.

#### Option A: Using OpenSSL (Recommended)

**Windows (PowerShell):**

```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

**Windows (Command Prompt):**

```cmd
powershell -Command "[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))"
```

**macOS/Linux:**

```bash
openssl rand -base64 32
```

#### Option B: Using Online Generator

1. Visit: https://generate-secret.vercel.app/32
2. Copy the generated secret
3. Paste it into your `.env` file as `AUTH_SECRET`

**Example output:**

```
AUTH_SECRET=your_generated_secret_here_at_least_32_characters_long
```

### Step 3: Get Google OAuth Credentials (AUTH_GOOGLE_ID & AUTH_GOOGLE_SECRET)

Follow these steps to get your Google OAuth credentials:

#### 3.1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click **"New Project"**
4. Enter a project name (e.g., "Analytics App")
5. Click **"Create"**
6. Wait for the project to be created, then select it from the dropdown

#### 3.2: Enable Google+ API

1. In the Google Cloud Console, go to **"APIs & Services"** > **"Library"**
2. Search for **"Google+ API"** or **"Google Identity"**
3. Click on **"Google Identity"** or **"Google+ API"**
4. Click **"Enable"**

#### 3.3: Configure OAuth Consent Screen

1. Go to **"APIs & Services"** > **"OAuth consent screen"**
2. Select **"External"** (unless you have a Google Workspace account)
3. Click **"Create"**
4. Fill in the required information:
   - **App name**: Your app name (e.g., "Analytics Dashboard")
   - **User support email**: Your email address
   - **Developer contact information**: Your email address
5. Click **"Save and Continue"**
6. On the **"Scopes"** page, click **"Save and Continue"** (default scopes are fine)
7. On the **"Test users"** page, add your email if needed, then click **"Save and Continue"**
8. Review and click **"Back to Dashboard"**

#### 3.4: Create OAuth 2.0 Credentials

1. Go to **"APIs & Services"** > **"Credentials"**
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"OAuth client ID"**
4. Choose **"Web application"** as the application type
5. Fill in the details:
   - **Name**: Analytics App (or any name you prefer)
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (for development)
     - `https://yourdomain.com` (for production - add your actual domain)
   - **Authorized redirect URIs**:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://yourdomain.com/api/auth/callback/google` (for production)
6. Click **"Create"**
7. A popup will appear with your credentials:
   - **Your Client ID** → This is your `AUTH_GOOGLE_ID`
   - **Your Client Secret** → This is your `AUTH_GOOGLE_SECRET`
8. **Copy both values immediately** (you won't be able to see the secret again)

#### 3.5: Add Credentials to `.env` File

Add the values to your `.env` file:

```env
AUTH_GOOGLE_ID=your_client_id_here.apps.googleusercontent.com
AUTH_GOOGLE_SECRET=your_client_secret_here
```

### Step 4: Configure DATABASE_URL

#### Option A: Using Docker (Local Development)

1. Start PostgreSQL using Docker Compose:

   ```bash
   docker-compose up -d
   ```

2. Use this connection string in your `.env`:
   ```env
   DATABASE_URL=postgresql://postgres:postgres@localhost:5439/postgres
   ```

#### Option B: Using External PostgreSQL Database

Use your database provider's connection string format:

```env
DATABASE_URL=postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME
```

**Example (Supabase, Neon, Railway, etc.):**

```env
DATABASE_URL=postgresql://user:password@db.example.com:5432/mydb
```

### Step 5: Run Database Migrations

After setting up your database, run Prisma migrations:

```bash
npx prisma migrate dev
```

This will create all the necessary database tables.

### Step 6: Verify Your `.env` File

Your `.env` file should now look like this:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5439/postgres
AUTH_SECRET=your_generated_secret_here
AUTH_GOOGLE_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
AUTH_GOOGLE_SECRET=GOCSPX-abcdefghijklmnopqrstuvwxyz
```

## Getting Started

After completing the environment setup:

1. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build Warning Note

When building the project (`npm run build`), you may see a warning about Prisma and Edge Runtime:

```
⚠ A Node.js API is used (setImmediate) which is not supported in the Edge Runtime.
```

**This warning is safe to ignore.** It occurs because:

- Middleware runs on Edge Runtime
- PrismaAdapter is imported in `auth.ts`
- However, we use **JWT strategy**, so PrismaAdapter is only used during OAuth callbacks (Node.js runtime), not in middleware
- The application functions correctly despite this warning

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
