import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthModal from '@/components/auth/AuthModal';
import { User, Trophy, LogOut } from 'lucide-react';
import { getRandomSnippet } from '../data/codeSnippets';

const Index = () => {
  const [gameState, setGameState] = useState('menu'); // menu, playing, gameOver
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [currentSnippet, setCurrentSnippet] = useState('');
  const [snippetDescription, setSnippetDescription] = useState('');
  const [hiddenAnswer, setHiddenAnswer] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [revealedChars, setRevealedChars] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState(0);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');
  
  const { toast } = useToast();
  const { user, isAuthenticated, logout, saveGameResult } = useAuth();
  const navigate = useNavigate();

  const maxWrongGuesses = 6;

  // Mock data - this would come from your backend API
  const languages = ['JavaScript', 'Python', 'Java', 'C++', 'React'];
  
  const topics = {
    'JavaScript': ['Functions', 'Arrays', 'Objects', 'Loops', 'Conditionals'],
    'Python': ['Lists', 'Dictionaries', 'Functions', 'Classes', 'Loops'],
    'Java': ['Classes', 'Methods', 'Arrays', 'Inheritance', 'Interfaces'],
    'C++': ['Pointers', 'Classes', 'Arrays', 'Functions', 'Templates'],
    'React': ['Components', 'Hooks', 'Props', 'State', 'JSX']
  };



  const hangmanStages = [
    '  +---+\n      |\n      |\n      |\n      |\n      |\n=========',
    '  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========',
    '  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========',
    '  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========',
    '  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========',
    '  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========',
    '  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========',
    '  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n========='
  ];

  const startGame = () => {
    if (!selectedLanguage || !selectedTopic || !difficulty) {
      toast({
        title: "Missing Selection",
        description: "Please select language, topic, and difficulty level.",
        variant: "destructive"
      });
      return;
    }

    // Get random snippet based on selections using the new system
    const snippet = getRandomSnippet(selectedLanguage, selectedTopic, difficulty);
    
    console.log(`Selected: ${selectedLanguage} - ${selectedTopic} - ${difficulty}`);
    console.log('Snippet:', snippet);
    
    setCurrentSnippet(snippet.code);
    setSnippetDescription(snippet.description);
    setHiddenAnswer(snippet.answer);
    setRevealedChars(new Array(snippet.answer.length).fill(false));
    setGameState('playing');
    setWrongGuesses(0);
    setGameWon(false);
    setUserGuess('');
  };

  const makeGuess = () => {
    if (!userGuess || userGuess.length !== 1) {
      toast({
        title: "Invalid Guess",
        description: "Please enter a single letter.",
        variant: "destructive"
      });
      return;
    }

    const letter = userGuess.toLowerCase();
    const answer = hiddenAnswer.toLowerCase();
    
    if (answer.includes(letter)) {
      // Correct guess
      const newRevealedChars = [...revealedChars];
      for (let i = 0; i < answer.length; i++) {
        if (answer[i] === letter) {
          newRevealedChars[i] = true;
        }
      }
      setRevealedChars(newRevealedChars);
      
      // Check if word is complete
      if (newRevealedChars.every(char => char)) {
        const gameScore = 10;
        setGameWon(true);
        setScore(score + gameScore);
        setGameState('gameOver');
        
        // Save score if user is authenticated
        saveScore(gameScore, true);
        
        toast({
          title: "Congratulations!",
          description: "You won the game!",
          variant: "default"
        });
      }
    } else {
      // Wrong guess
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      
      if (newWrongGuesses >= maxWrongGuesses) {
        setGameState('gameOver');
        
        // Save score even for lost games (score = 0)
        saveScore(0, false);
        
        toast({
          title: "Game Over",
          description: `The answer was: ${hiddenAnswer}`,
          variant: "destructive"
        });
      }
    }
    
    setUserGuess('');
  };

  const resetGame = () => {
    setGameState('menu');
    setSelectedLanguage('');
    setSelectedTopic('');
    setDifficulty('');
    setCurrentSnippet('');
    setSnippetDescription('');
    setHiddenAnswer('');
    setUserGuess('');
    setWrongGuesses(0);
    setRevealedChars([]);
    setGameWon(false);
  };

  const displayWord = () => {
    return hiddenAnswer.split('').map((char, index) => 
      revealedChars[index] ? char : '_'
    ).join(' ');
  };

  const handleLogin = () => {
    setAuthModalMode('login');
    setAuthModalOpen(true);
  };

  const handleRegister = () => {
    setAuthModalMode('register');
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
      variant: "default"
    });
  };

  const saveScore = async (gameScore, won) => {
    if (!isAuthenticated) {
      return;
    }

    try {
      const gameData = {
        language: selectedLanguage,
        topic: selectedTopic,
        difficulty,
        score: gameScore,
        won,
        answer: hiddenAnswer,
        wrongGuesses
      };

      const result = await saveGameResult(gameData);
      
      if (result.success) {
        toast({
          title: "Score Saved!",
          description: "Your game result has been saved to your profile.",
          variant: "default"
        });
      } else {
        toast({
          title: "Save Failed",
          description: result.message || "Failed to save your score.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Score save error:', error);
    }
  };

  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation Header */}
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-6xl mx-auto px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold">Hangman</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/leaderboard')}
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Leaderboard
                </Button>
                
                {isAuthenticated ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium">{user.username}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate('/profile')}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleLogout}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={handleLogin}>
                      Login
                    </Button>
                    <Button size="sm" onClick={handleRegister}>
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-2 text-foreground">
              Programming Hangman Game
            </h1>
            {!isAuthenticated && (
              <p className="text-center text-gray-600 mb-8">
                Sign up to save your scores and compete on the leaderboard!
              </p>
            )}
          
          <Card className="p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Programming Language</label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map(lang => (
                      <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedLanguage && (
                <div>
                  <label className="block text-sm font-medium mb-2">Topic</label>
                  <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {topics[selectedLanguage]?.map(topic => (
                        <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Difficulty</label>
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={startGame} className="w-full" size="lg">
                Start Game
              </Button>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Badge variant="secondary" className="text-lg p-2">
              Score: {score}
            </Badge>
          </div>
          </div>
        </div>
        
        <AuthModal 
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          initialMode={authModalMode}
        />
      </div>
    );
  }

  if (gameState === 'playing') {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Programming Hangman</h1>
            <Badge variant="secondary" className="text-lg p-2">
              Score: {score}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Game Area */}
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Code Snippet:</h3>
                  <div className="bg-muted p-4 rounded mb-3">
                    <p className="text-sm text-muted-foreground mb-2 italic">{snippetDescription}</p>
                    <pre className="text-sm overflow-x-auto">
                      {currentSnippet}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Word to Guess:</h3>
                  <div className="text-2xl font-mono bg-muted p-4 rounded text-center">
                    {displayWord()}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Input
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    placeholder="Enter a letter"
                    maxLength={1}
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && makeGuess()}
                  />
                  <Button onClick={makeGuess}>Guess</Button>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Wrong guesses: {wrongGuesses}/{maxWrongGuesses}</span>
                  <span>Letters remaining: {revealedChars.filter(r => !r).length}</span>
                </div>
              </div>
            </Card>

            {/* Hangman Drawing */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Hangman</h3>
              <pre className="text-sm font-mono bg-muted p-4 rounded">
                {hangmanStages[wrongGuesses]}
              </pre>
              
              <div className="mt-4 space-y-2">
                <Badge variant="outline">Language: {selectedLanguage}</Badge>
                <Badge variant="outline">Topic: {selectedTopic}</Badge>
                <Badge variant="outline">Difficulty: {difficulty}</Badge>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" onClick={resetGame}>
              Back to Menu
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="p-8 max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {gameWon ? '🎉 You Won!' : '💀 Game Over'}
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg">
              The answer was: <span className="font-bold">{hiddenAnswer}</span>
            </p>
            
            <Badge variant="secondary" className="text-xl p-3">
              Final Score: {score}
            </Badge>

            <div className="space-y-2">
              <Button onClick={startGame} className="w-full">
                Play Again
              </Button>
              <Button variant="outline" onClick={resetGame} className="w-full">
                Back to Menu
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
};

export default Index;