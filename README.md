<div align="center">
  <h1 align="center">Ayodhya Serenity</h1>
  <p align="center">
    <strong>A Comprehensive MERN-Stack Ecosystem & AI Travel Assistant</strong>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node" />
  </p>
</div>

---

## ✦  Project Highlights

### **Ayodhya Serenity Master Project & Ayodhya Sarthi AI**
*Full-Stack Ecosystem & Intelligent Tourist Agent | MERN Stack, TypeScript, OpenAI SDK*
**January 2026 - Present**

- **Architected a Comprehensive Digital Ecosystem:** Designed and developed a scalable master platform encompassing 7 interconnected web services (dedicated portals for 3 major Temples, 1 Landmark, 1 Ghat, Local Markets, and a Utility Tool) to serve locals and visitors.
- **Integrated "Ayodhya Sarthi" AI Agent:** Engineered a modular Node.js/Express backend leveraging the official OpenAI Agents SDK to power a responsive, robust AI assistant offering contextual, culturally sensitive guidance.
- **Achieved Production-Ready SEO Optimization:** Successfully deployed the ecosystem to production with complete Google Search Console indexing, utilizing advanced technical SEO practices like dynamic JSON-LD structured data, custom metadata, and PWA manifests.
- **Crafted Premium User Experiences:** Built the frontend using Vite, React.js, and TypeScript, employing Tailwind CSS, Shadcn UI, and Framer Motion for highly responsive, accessible, and sophisticated UI/UX designs.
- **Built Practical Utility Applications:** Developed and integrated reliable, high-utility sub-applications-including an interactive QR/Barcode scanner linked to external product APIs-enhancing the platform's everyday value.
- **Established Scalable Architecture:** Executed a clean, maintainable MVC-inspired MERN architecture featuring centralized Axios API handling, secure `.env` configurations, and modular component structures to support continuous long-term growth.

---

## ✦  About the Ecosystem

Ayodhya Serenity is an ambitious master project encompassing **7 fully integrated digital experiences** aimed at revolutionizing local and tourist access to the vibrant culture of Ayodhya. The heart of the platform is **Ayodhya Sarthi**, an intelligent, conversational AI assistant that provides contextual tourist guidance.

### The 7 Modules:
1. **Hanuman Garhi (Temple)**
2. **Siddh Peeth Hanuman Garhi (Temple)**
3. **Lata Mangeshkar Chowk (Landmark)**
4. **Ram Ki Paidi (Ghat)**
5. **Barun Bazar (Market)**
6. **Shravan Kumar Mandir (Temple)**
7. **ToolNagri (Utility Suite: QR/Barcode Cloud Scanner & Product Lookup)**

---

## ✦  Tech Stack & Architecture

### Frontend (Client Codebase)
- **Framework:** React 18 with TypeScript build on Vite.
- **Styling:** Tailwind CSS integrated with `shadcn/ui` components for an accessible, premium look.
- **Animations:** Framer Motion for smooth page transitions and micro-animations.
- **Routing:** React Router v6.
- **Form Handling:** Read Hook Form with Zod validation.
- **State/Requests:** React Query and Axios.

### Backend & API
- **Server:** Node.js paired with Express.js architecture (CommonJS modules).
- **Database:** MongoDB (via Mongoose orchestration).
- **AI Integration:** Official `@openai/agents` SDK integrated heavily into custom system prompt flows.
- **SEO & Search Engines:** Completely dynamic React Helmet implementations featuring JSON-LD structures to assist crawler bots like Google Search Console.

---

## ✦  Folder Structure

```text
/client
 ├── public/           # Static files (PWA manifests, robots.txt, icons)
 ├── src/
 │   ├── components/   # Reusable UI elements (Shadcn, Navbars, Cards)
 │   ├── pages/        # Main route views (12+ functional pages)
 │   ├── hooks/        # Custom React Hooks
 │   ├── lib/          # Utilities, Axios instances, formatting strings
 │   └── App.tsx       # Core Routing Layout
 ├── index.html        # App entrypoint
 └── package.json      # Dependencies and dev-scripts
```

---

## ✦  Getting Started

To get a local version of the Client application running on your machine:

### Prerequisites
- Node.js (v18+)
- npm or yarn or pnpm

### Installation

1. **Clone the repository and jump into the client dir**
   ```bash
   cd client
   ```

2. **Install all dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file referencing the `.env.example` mapping to your necessary backend endpoints and keys.

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will become active at `http://localhost:5173`.

---

## ✦  Performance & SEO Focus

Every module is rigorously tested for standard Web Core Vitals. The project inherently provides optimized semantic DOM configurations and implements PWA specs, creating offline fallbacks and allowing "Add to Home Screen" behaviors. With fully registered sitemaps and indexed pathways, this project guarantees organic SEO footprint growth on Google Searches.