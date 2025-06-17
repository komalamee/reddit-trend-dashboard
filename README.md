# Reddit Trend Dashboard 🚀

A beautiful, interactive dashboard that analyzes trending posts across multiple Reddit subreddits with real-time data visualization and filtering capabilities.

![Reddit Trend Dashboard](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## ✨ Features

### 📊 **Real-time Analytics**
- Live tracking of trending posts from 20+ subreddits
- Interactive word cloud with dynamic sizing
- Engagement metrics (upvotes, comments, timestamps)
- Time-based filtering (24h, 48h, 72h, 1w, 1m)

### 🎯 **Category Filtering**
- **🤖 AI & Tech**: r/ArtificialIntelligence, r/MachineLearning, r/OpenAI
- **💰 Cryptocurrency**: r/CryptoCurrency, r/Bitcoin, r/ethereum
- **😂 Memes**: r/memes, r/dankmemes, r/wholesomememes
- **📈 Stocks**: r/wallstreetbets, r/investing, r/stocks
- **🎭 Culture**: r/PopCultureChat, r/culture
- **💻 Technology**: r/technology, r/technews

### 🎨 **Beautiful UI/UX**
- Modern gradient design with smooth animations
- Mobile-responsive layout
- Color-coded categories
- Interactive hover effects
- Professional data visualization

## 🚀 Current Trending Topics

Based on real Reddit data from June 2025:

1. **OpenAI using r/ChangeMyView** to test AI persuasion abilities
2. **Reddit suing Anthropic** for unauthorized data scraping
3. **Bitcoin hitting $107K** with predictions to $122K
4. **Intel mentions surging 700%** on WallStreetBets
5. **LA ICE protests** generating viral memes
6. **"Define aura" meme trend** spreading across platforms

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/komalamee/reddit-trend-dashboard.git

# Navigate to project directory
cd reddit-trend-dashboard

# Install dependencies
npm install

# Start development server
npm start
```

## 🎯 Usage

1. **Time Range Selection**: Choose from 24h, 48h, 72h, 1 week, or 1 month
2. **Category Filtering**: Filter by AI, Crypto, Memes, Stocks, Culture, or view all
3. **Interactive Elements**: 
   - Click word cloud terms to see frequency
   - Hover over posts for enhanced details
   - Click external links to view original Reddit posts

## 📊 Data Structure

The dashboard uses the following JSON format for each time range:

```json
{
  "word_frequencies": {
    "ai": 67,
    "bitcoin": 54,
    "openai": 42
  },
  "trending_posts": {
    "AI": [
      {
        "title": "OpenAI used Reddit's r/ChangeMyView to test AI persuasion",
        "permalink": "https://reddit.com/r/ArtificialIntelligence/...",
        "subreddit": "ArtificialIntelligence",
        "upvotes": 3847,
        "comments": 892,
        "timestamp": "2025-06-16T09:30:00Z",
        "summary": "TechCrunch reveals OpenAI secretly used ChangeMyView..."
      }
    ]
  }
}
```

## 📈 Tracked Subreddits

### **AI & Technology**
- r/ArtificialIntelligence (2.1M members)
- r/MachineLearning (2.8M members)
- r/OpenAI (185K members)
- r/ChatGPT (156K members)
- r/technology (14.2M members)

### **Cryptocurrency**
- r/CryptoCurrency (8.7M members)
- r/Bitcoin (7.8M members)
- r/ethereum (1.5M members)
- r/Web3 (89K members)
- r/defi (445K members)

### **Memes & Culture**
- r/memes (16M+ members)
- r/dankmemes (7.2M members)
- r/wholesomememes (18.5M members)
- r/PopCultureChat (125K members)

### **Stocks & Trading**
- r/wallstreetbets (15.7M members)
- r/investing (2.1M members)
- r/stocks (5.2M members)

## 🎨 Screenshots

*Dashboard showing trending AI discussions and crypto market movements*

## 🚀 Deployment

### Deploy to GitHub Pages
```bash
npm run build
# Deploy to your preferred hosting platform
```

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Reddit API for providing access to subreddit data
- Lucide React for beautiful icons
- Tailwind CSS for rapid UI development
- The open-source community for inspiration

## 📞 Contact

- GitHub: [@komalamee](https://github.com/komalamee)
- Project Link: [https://github.com/komalamee/reddit-trend-dashboard](https://github.com/komalamee/reddit-trend-dashboard)

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ using React and real Reddit data*