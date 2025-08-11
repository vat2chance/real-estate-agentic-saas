# 🏠 Real Estate Agentic SaaS

A modern, voice-driven real estate SaaS platform built with Next.js, featuring AI-powered property search, agent management, and client portals. Built with TypeScript, Tailwind CSS, and Docker.

## ✨ Features

- **AI-Powered Property Search** - Advanced filtering and search capabilities
- **Voice Integration** - Built-in voice commands and interactions
- **Agent Dashboard** - Comprehensive tools for real estate professionals
- **Client Portal** - User-friendly interface for property buyers and renters
- **Responsive Design** - Modern UI built with Tailwind CSS
- **TypeScript** - Full type safety and better developer experience
- **Docker Support** - Easy deployment and development setup

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vat2chance/real-estate-agentic-saas.git
   cd real-estate-agentic-saas
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   # Using pnpm
   pnpm dev
   
   # Or using Docker
   docker compose -f ops/docker-compose.yml up --build
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
real-estate-agentic-saas/
├── apps/
│   ├── web/                 # Next.js frontend application
│   │   ├── app/            # App router pages and components
│   │   ├── components/     # Reusable UI components
│   │   └── ...
│   └── app-server/         # Backend API server
├── packages/
│   └── shared/             # Shared types and utilities
├── docs/                   # Documentation and diagrams
├── ops/                    # Docker and deployment configs
└── scripts/                # Development and build scripts
```

## 🎯 Key Components

- **Property Search** - Advanced filtering with location, price, and property type
- **Property Grid** - Responsive property listings with sorting options
- **Agent Dashboard** - Tools for managing listings and client interactions
- **Client Portal** - User-friendly property browsing experience
- **Voice Integration** - Speech-to-text and voice command capabilities

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Heroicons
- **Backend**: Python FastAPI (app-server)
- **Database**: PostgreSQL (configurable)
- **Deployment**: Docker, Docker Compose
- **Package Manager**: pnpm (workspace support)

## 📱 Screenshots

*Screenshots will be added here*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation in the `docs/` folder
- Review the UAT (User Acceptance Testing) guide in `docs/uat.md`

## 🚀 Roadmap

- [ ] Enhanced AI property recommendations
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Integration with MLS systems
- [ ] Virtual tour capabilities
- [ ] Advanced reporting tools

---

Built with ❤️ for the real estate industry