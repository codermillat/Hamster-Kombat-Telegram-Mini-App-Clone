# Hamster Kombat Clone

A React-based clone of the popular Telegram mini-app Hamster Kombat, featuring modern web technologies and a sleek user interface.


## 🚀 Features

- Interactive clicking mechanism with visual feedback
- Progress tracking and level system
- Daily rewards system
- Real-time profit calculation
- Responsive design optimized for mobile
- Modern UI with smooth animations

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Modern JavaScript (ES6+)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v8 or higher)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/codermillat/Hamster-Kombat-Telegram-Mini-App-Clone.git
cd hamster-kombat-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build locally:
```bash
npm run preview
```

## 🚀 Deployment

### Deploying to Netlify

1. Create a Netlify account at [netlify.com](https://www.netlify.com)

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Login to Netlify:
```bash
netlify login
```

4. Deploy your site:
```bash
netlify deploy
```

5. Follow the prompts to complete the deployment

### Environment Variables

The following environment variables are required for deployment:

```env
VITE_APP_TITLE=Hamster Kombat Clone
```

Create a `.env` file in the root directory and add these variables.

## 🎮 Game Mechanics

### Level System
- Bronze: 0 to 4,999 coins
- Silver: 5,000 to 24,999 coins
- Gold: 25,000 to 99,999 coins
- Platinum: 100,000 to 999,999 coins
- Diamond: 1,000,000 to 2,000,000 coins
- Epic: 2,000,000 to 10,000,000 coins
- Legendary: 10,000,000 to 50,000,000 coins
- Master: 50,000,000 to 100,000,000 coins
- GrandMaster: 100,000,000 to 1,000,000,000 coins
- Lord: 1,000,000,000+ coins

### Daily Features
- Daily Reward: Resets at UTC 00:00
- Daily Cipher: Resets at UTC 19:00
- Daily Combo: Resets at UTC 12:00

## 📁 Project Structure

```
hamster-kombat-clone/
├── src/
│   ├── icons/           # SVG icon components
│   ├── images/          # Game assets and images
│   ├── utils/           # Utility functions and types
│   ├── App.tsx         # Main application component
│   ├── App.css         # Application styles
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── package.json        # Project dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Original Telegram mini-app creators for inspiration
- [SVG Repo](https://www.svgrepo.com/) for icons
- React and Vite communities for excellent documentation


## ⚠️ Disclaimer

This is a clone project created for educational purposes. It is not affiliated with the original Telegram mini-app or its creators.
