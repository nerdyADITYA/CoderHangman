import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Trophy, Medal, Award } from 'lucide-react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getLeaderboard, user } = useAuth();

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const result = await getLeaderboard();
      if (result.success) {
        setLeaderboard(result.leaderboard);
      }
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold">{rank}</span>;
    }
  };

  const calculateWinRate = (gamesWon, gamesPlayed) => {
    if (gamesPlayed === 0) return 0;
    return Math.round((gamesWon / gamesPlayed) * 100);
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="text-center">Loading leaderboard...</div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">🏆 Leaderboard</h2>
          <p className="text-gray-600">Top players by total score</p>
        </div>

        {leaderboard.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No players on the leaderboard yet.</p>
            <p className="text-sm text-gray-400">Be the first to play and set a score!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {leaderboard.map((player, index) => {
              const rank = index + 1;
              const isCurrentUser = user && player._id === user.id;
              
              return (
                <div
                  key={player._id}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    isCurrentUser 
                      ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' 
                      : 'bg-gray-50 dark:bg-gray-800'
                  } ${rank <= 3 ? 'ring-2 ring-yellow-200 dark:ring-yellow-800' : ''}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8">
                      {getRankIcon(rank)}
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className={`font-semibold ${isCurrentUser ? 'text-blue-700 dark:text-blue-300' : ''}`}>
                          {player.username}
                        </span>
                        {isCurrentUser && (
                          <Badge variant="secondary" className="text-xs">You</Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {player.gamesPlayed} games • {calculateWinRate(player.gamesWon, player.gamesPlayed)}% win rate
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-lg">
                      {player.totalScore.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Best: {player.bestScore}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {user && (
          <div className="pt-4 border-t">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              <p>Your current stats:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <span>Total Score: <strong>{user.totalScore.toLocaleString()}</strong></span>
                <span>Games Played: <strong>{user.gamesPlayed}</strong></span>
                <span>Win Rate: <strong>{calculateWinRate(user.gamesWon, user.gamesPlayed)}%</strong></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Leaderboard;
