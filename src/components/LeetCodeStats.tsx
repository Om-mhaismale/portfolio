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
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  
  // Define segments with gaps (leaving space between each segment)
  const gapSize = 20; // Gap between segments
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
    <motion.div
      className="bg-gradient-to-br from-gray-800/40 to-gray-900 rounded-lg p-6 border border-gray-700 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
          <span className="text-black font-bold text-sm">LC</span>
        </div>
        <h3 className="text-lg font-semibold text-white">LeetCode Stats</h3>
      </div>
      
      <div className="flex items-center justify-between">
        {/* Circular Progress */}
        <div className="relative flex items-center justify-center">
          <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 200 200">
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
            {/* Easy progress - Green/Cyan */}
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
            
            {/* Medium progress - Yellow/Orange */}
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
            
            {/* Hard progress - Red */}
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
        
        {/* Stats sidebar */}
        <div className="flex flex-col gap-3 ml-6">
          <div className="bg-gray-700 rounded-lg p-3 min-w-[100px]">
            <div className="text-cyan-400 text-sm font-medium">Easy</div>
            <div className="text-white font-bold">{stats.easySolved}/{easyTotal}</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3 min-w-[100px]">
            <div className="text-yellow-400 text-sm font-medium">Med.</div>
            <div className="text-white font-bold">{stats.mediumSolved}/{mediumTotal}</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3 min-w-[100px]">
            <div className="text-red-400 text-sm font-medium">Hard</div>
            <div className="text-white font-bold">{stats.hardSolved}/{hardTotal}</div>
          </div>
          {/* Add Rank card */}
          <div className="bg-gray-700 rounded-lg p-3 min-w-[100px]">
            <div className="text-purple-400 text-sm font-medium">Rank</div>
            <div className="text-white font-bold">#{stats.ranking?.toLocaleString()}</div>
          </div>
        </div>
      </div>
      
      {/* Add rank section at the bottom */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Global Ranking</span>
          <span className="text-purple-400 font-semibold">#{stats.ranking?.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LeetCodeStats;