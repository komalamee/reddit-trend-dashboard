        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Data sourced from Reddit subreddits • Based on real trending discussions • Last updated: {new Date().toLocaleString()}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs">
            <span>Tracked subreddits:</span>
            <span className="font-medium">r/ArtificialIntelligence</span>
            <span className="font-medium">r/CryptoCurrency</span>
            <span className="font-medium">r/Bitcoin</span>
            <span className="font-medium">r/memes</span>
            <span className="font-medium">r/dankmemes</span>
            <span className="font-medium">r/technology</span>
            <span className="font-medium">r/wallstreetbets</span>
            <span className="font-medium">r/investing</span>
            <span className="font-medium">r/MachineLearning</span>
            <span className="font-medium">r/OpenAI</span>
            <span>and more...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedditTrendDashboard;