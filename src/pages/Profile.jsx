import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Calendar, Trophy, Target, TrendingUp, Clock } from 'lucide-react';

const Profile = () => {
  const [gameHistory, setGameHistory] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { user, getGameHistory, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      return;
    }
    fetchGameHistory(1);
  }, [isAuthenticated]);

  const fetchGameHistory = async (page) => {
    setLoading(true);
    try {
      const result = await getGameHistory(page, 5);
      if (result.success) {
        setGameHistory(result.history);
        setPagination(result.pagination);
        setCurrentPage(page);
      }
    } catch (error) {
      console.error('Failed to fetch game history:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const calculateWinRate = () => {
    if (!user || user.gamesPlayed === 0) return 0;
    return Math.round((user.gamesWon / user.gamesPlayed) * 100);
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 flex items-center justify-center">
        <Card className="p-8 max-w-md text-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Access Denied</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Please login to view your profile.</p>
          <Button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Go to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Your Profile</h1>
          <div className="space-x-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
            >
              Back to Game
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleLogout}
              className="hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300"
            >
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{user.username}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Trophy className="w-5 h-5" />
                <span>Statistics</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span>Total Score</span>
                  </span>
                  <Badge variant="secondary" className="text-lg px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    {user.totalScore.toLocaleString()}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span>Best Score</span>
                  </span>
                  <Badge variant="outline" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                    {user.bestScore}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Games Played</span>
                  <Badge variant="outline" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                    {user.gamesPlayed}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Games Won</span>
                  <Badge variant="outline" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                    {user.gamesWon}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Win Rate</span>
                  <Badge 
                    variant="outline" 
                    className={`hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 ${calculateWinRate() >= 50 ? 'text-green-600' : ''}`}
                  >
                    {calculateWinRate()}%
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Clock className="w-5 h-5" />
                <span>Recent Games</span>
              </h3>

              {loading ? (
                <div className="text-center py-8 text-gray-600 dark:text-gray-400">Loading game history...</div>
              ) : gameHistory.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No games played yet.</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">Start playing to see your game history here!</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {gameHistory.map((game, index) => (
                      <div
                        key={game._id}
                        className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                          game.won 
                            ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                            : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <Badge 
                                variant={game.won ? 'default' : 'destructive'}
                                className={game.won 
                                  ? 'bg-gradient-to-r from-green-500 to-green-600' 
                                  : 'bg-gradient-to-r from-red-500 to-red-600'}
                              >
                                {game.won ? 'Won' : 'Lost'}
                              </Badge>
                              <Badge variant="outline" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                                {game.difficulty}
                              </Badge>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {game.language} - {game.topic}
                              </span>
                            </div>
                            
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Answer: <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                {game.answer}
                              </span>
                            </div>
                            
                            <div className="text-xs text-gray-500 dark:text-gray-500">
                              {formatDate(game.playedAt)} • {game.wrongGuesses} wrong guesses
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="font-bold text-lg text-gray-700 dark:text-gray-300">+{game.score}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {pagination.totalPages > 1 && (
                    <div className="flex justify-center space-x-2 mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => fetchGameHistory(currentPage - 1)}
                        disabled={!pagination.hasPrev}
                        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                      >
                        Previous
                      </Button>
                      
                      <span className="flex items-center px-4 text-sm text-gray-600 dark:text-gray-400">
                        Page {pagination.currentPage} of {pagination.totalPages}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => fetchGameHistory(currentPage + 1)}
                        disabled={!pagination.hasNext}
                        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;