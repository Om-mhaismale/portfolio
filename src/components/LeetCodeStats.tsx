import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate?: number;
  ranking?: number;
}

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAcceptance, setShowAcceptance] = useState(false);

  useEffect(() => {
    // Try multiple API endpoints
    const fetchStats = async () => {
      const apis = [
        'https://leetcode-stats-api.herokuapp.com/user2376Jt',
        'https://alfa-leetcode-api.onrender.com/user2376Jt',
        // Fallback to static data if APIs fail
        null
      ];

      for (const api of apis) {
        if (!api) {
          // Fallback static data
          setStats({
            totalSolved: 94,
            easySolved: 84,
            mediumSolved: 10,
            hardSolved: 0,
            acceptanceRate: 79.56,
            ranking: 245673 // Add your actual rank here
          });
          setLoading(false);
          return;
        }

        try {
          const response = await fetch(api);
          if (response.ok) {
            const data = await response.json();
            setStats(data);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error(`API ${api} failed:`, error);
          continue;
        }
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 animate-pulse">
        <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-600 rounded"></div>
          <div className="h-3 bg-gray-600 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="bg-gray-800 rounded-lg p-6">
        <p className="text-gray-400">Unable to load LeetCode stats</p>
      </div>
    );
  }

  // Problem totals
  const easyTotal = 888;
  const mediumTotal = 1894;
  const hardTotal = 859;
  const totalProblems = easyTotal + mediumTotal + hardTotal;
  
  // Calculate percentages for each difficulty
  const easyPercentage = (stats.easySolved / easyTotal) * 100;
  const mediumPercentage = (stats.mediumSolved / mediumTotal) * 100;
  const hardPercentage = (stats.hardSolved / hardTotal) * 100;
  
  // Calculate circle segments with gaps
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  
  // Define segments with gaps (leaving space between each segment)
  const gapSize = 15; // Gap between segments
  const totalGaps = 3 * gapSize;
  const availableCircumference = circumference - totalGaps;
  
  // Calculate proportions based on total problems
  const easyProportion = easyTotal / totalProblems;
  const mediumProportion = mediumTotal / totalProblems;
  const hardProportion = hardTotal / totalProblems;
  
  // Calculate actual arc lengths
  const easyArcLength = availableCircumference * easyProportion;
  const mediumArcLength = availableCircumference * mediumProportion;
  const hardArcLength = availableCircumference * hardProportion;
  
  // Calculate progress for each segment
  const easyProgress = (easyArcLength * easyPercentage) / 100;
  const mediumProgress = (mediumArcLength * mediumPercentage) / 100;
  const hardProgress = (hardArcLength * hardPercentage) / 100;
  
  // Calculate starting positions (offsets) - start from top and go clockwise
  const easyStartOffset = circumference * 0.25; // Start from top (12 o'clock)
  const mediumStartOffset = easyStartOffset - easyArcLength - gapSize;
  const hardStartOffset = mediumStartOffset - mediumArcLength - gapSize;

  return (
    <section className="w-full mt-4 bg-gradient-to-r via-red-950 px-2 sm:px-4">
      {/* Title as a link */}
      <a
        href="https://leetcode.com/user2376Jt/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-fit mx-auto mb-2"
        aria-label="Visit my LeetCode profile"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-tight underline decoration-amber-400 underline-offset-4 hover:text-amber-400 transition-colors">
          My Leets!
        </h2>
      </a>
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Circular Progress */}
        <div className="relative flex items-center justify-center mb-8 md:mb-0 md:min-w-[220px]">
          <svg className="w-44 h-44 sm:w-48 sm:h-48 transform -rotate-90" viewBox="0 0 200 200">
            {/* Background segments with light colored highlights */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#06b6d4"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={`${easyArcLength} ${circumference - easyArcLength}`}
              strokeDashoffset={easyStartOffset}
              opacity="0.2"
            />
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#f59e0b"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={`${mediumArcLength} ${circumference - mediumArcLength}`}
              strokeDashoffset={mediumStartOffset}
              opacity="0.2"
            />
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#dc2626"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={`${hardArcLength} ${circumference - hardArcLength}`}
              strokeDashoffset={hardStartOffset}
              opacity="0.2"
            />
            {/* Progress segments */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#06b6d4"
              strokeWidth="12"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={`${easyProgress} ${circumference - easyProgress}`}
              strokeDashoffset={easyStartOffset}
              className="transition-all duration-1000 ease-out"
            />
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#f59e0b"
              strokeWidth="12"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={`${mediumProgress} ${circumference - mediumProgress}`}
              strokeDashoffset={mediumStartOffset}
              className="transition-all duration-1000 ease-out"
            />
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#dc2626"
              strokeWidth="12"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={`${hardProgress} ${circumference - hardProgress}`}
              strokeDashoffset={hardStartOffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          {/* Center content */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
            onMouseEnter={() => setShowAcceptance(true)}
            onMouseLeave={() => setShowAcceptance(false)}
          >
            <motion.div
              className="text-center"
              animate={{ scale: showAcceptance ? 0.9 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {showAcceptance ? (
                <>
                  <div className="text-4xl font-bold text-white">
                    {stats.acceptanceRate}
                    <span className="text-2xl">%</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">Acceptance</div>
                </>
              ) : (
                <>
                  <div className="text-4xl font-bold text-white">
                    {stats.totalSolved}
                    <span className="text-2xl text-gray-400">/{totalProblems}</span>
                  </div>
                  <div className="text-green-400 text-sm mt-1">✓ Solved</div>
                </>
              )}
            </motion.div>
            <div className="text-gray-500 text-xs mt-2">
              {showAcceptance ? '137 submission' : '1 Attempting'}
            </div>
          </div>
        </div>
        {/* Stats cards in a row, responsive */}
        <div className="flex flex-col xs:flex-row sm:flex-row md:flex-col lg:flex-row gap-3 sm:gap-4 w-full md:w-auto justify-center">
          <div className="bg-orange-300/5 rounded-lg p-4 flex-1 min-w-[120px] flex flex-col items-center">
            <div className="text-cyan-400 text-sm font-medium">Easy</div>
            <div className="text-white font-bold">{stats.easySolved}/{easyTotal}</div>
          </div>
          <div className="bg-orange-300/5 rounded-lg p-4 flex-1 min-w-[120px] flex flex-col items-center">
            <div className="text-yellow-400 text-sm font-medium">Med.</div>
            <div className="text-white font-bold">{stats.mediumSolved}/{mediumTotal}</div>
          </div>
          <div className="bg-orange-300/5 rounded-lg p-4 flex-1 min-w-[120px] flex flex-col items-center">
            <div className="text-red-400 text-sm font-medium">Hard</div>
            <div className="text-white font-bold">{stats.hardSolved}/{hardTotal}</div>
          </div>
          <div className="bg-orange-300/5 rounded-lg p-4 flex-1 min-w-[120px] flex flex-col items-center">
            <div className="text-purple-400 text-sm font-medium">Rank</div>
            <div className="text-white font-bold">#{stats.ranking?.toLocaleString()}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LeetCodeStats;