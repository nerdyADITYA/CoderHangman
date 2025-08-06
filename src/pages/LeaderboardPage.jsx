import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Leaderboard from '@/components/Leaderboard';

const LeaderboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Game
          </Button>
        </div>

        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderboardPage;
