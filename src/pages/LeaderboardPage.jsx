import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Leaderboard from '@/components/Leaderboard';

const LeaderboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Leaderboard</h1>
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
          >
            Back to Game
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;