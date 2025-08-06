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
import { User, Trophy, LogOut, Sun, Moon } from 'lucide-react';
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
  const [isFalling, setIsFalling] = useState(false);
  const [theme, setTheme] = useState('light'); // Theme state

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

  // Theme toggle logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const startGame = () => {
    if (!selectedLanguage || !selectedTopic || !difficulty) {
      toast({
        title: "Missing Selection",
        description: "Please select language, topic, and difficulty level.",
        variant: "destructive"
      });
      return;
    }

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
    setIsFalling(false);
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
      const newRevealedChars = [...revealedChars];
      for (let i = 0; i < answer.length; i++) {
        if (answer[i] === letter) {
          newRevealedChars[i] = true;
        }
      }
      setRevealedChars(newRevealedChars);
      
      if (newRevealedChars.every(char => char)) {
        const gameScore = 10;
        setGameWon(true);
        setScore(score + gameScore);
        setGameState('gameOver');
        
        saveScore(gameScore, true);
        
        toast({
          title: "Congratulations!",
          description: "You won the game!",
          variant: "default"
        });
      }
    } else {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      
      if (newWrongGuesses >= maxWrongGuesses) {
        setIsFalling(true);
        setTimeout(() => {
          setGameState('gameOver');
          saveScore(0, false);
          
          toast({
            title: "Game Over",
            description: `The answer was: ${hiddenAnswer}`,
            variant: "destructive"
          });
        }, 1000);
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
    setIsFalling(false);
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
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="border-b bg-background/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
          <div className="max-w-6xl mx-auto px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Hangman</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/leaderboard')}
                  className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Leaderboard
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Button>

                {isAuthenticated ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{user.username}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate('/profile')}
                      className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleLogout}
                      className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleLogin}
                      className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      Login
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={handleRegister}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    >
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
            <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
              Programming Hangman Game
            </h1>
            {!isAuthenticated && (
              <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                Sign up to save your scores and compete on the leaderboard!
              </p>
            )}
          
            <Card className="p-8 max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Programming Language</label>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
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
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Topic</label>
                    <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                      <SelectTrigger className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
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
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Difficulty</label>
                  <Select value={difficulty} onValueChange={setDifficulty}>
                    <SelectTrigger className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={startGame} 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Start Game
                </Button>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Badge variant="secondary" className="text-lg p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
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
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-8">
        <style>
          {`
            .hangman-part {
              transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
              opacity: 0;
              transform: scale(0.8);
            }
            .hangman-part.visible {
              opacity: 1;
              transform: scale(1);
            }
            .hangman-figure.falling {
              animation: fall 1s ease-in-out forwards;
            }
            @keyframes fall {
              0% {
                transform: translateY(0);
                opacity: 1;
              }
              100% {
                transform: translateY(100px);
                opacity: 0.3;
              }
            }
          `}
        </style>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Programming Hangman</h1>
            <Badge variant="secondary" className="text-lg p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              Score: {score}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Code Snippet:</h3>
                  <div className="bg-muted p-4 rounded mb-3">
                    <p className="text-sm text-muted-foreground mb-2 italic">{snippetDescription}</p>
                    <pre className="text-sm overflow-x-auto">
                      {currentSnippet}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Word to Guess:</h3>
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
                    className="flex-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    onKeyPress={(e) => e.key === 'Enter' && makeGuess()}
                  />
                  <Button 
                    onClick={makeGuess}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Guess
                  </Button>
                </div>

                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Wrong guesses: {wrongGuesses}/{maxWrongGuesses}</span>
                  <span>Letters remaining: {revealedChars.filter(r => !r).length}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Hangman</h3>
              <div className="bg-muted p-4 rounded flex justify-center items-center">
                <svg width="200" height="250" viewBox="0 0 200 250" className={`w-full h-auto ${isFalling ? 'hangman-figure falling' : 'hangman-figure'}`}>
                  <line x1="20" y1="230" x2="100" y2="230" stroke="currentColor" strokeWidth="10" />
                  <line x1="60" y1="230" x2="60" y2="20" stroke="currentColor" strokeWidth="10" />
                  <line x1="60" y1="20" x2="120" y2="20" stroke="currentColor" strokeWidth="10" />
                  <line x1="120" y1="20" x2="120" y2="40" stroke="currentColor" strokeWidth="6" />
                  
                  <circle 
                    cx="120" cy="60" r="20" 
                    fill="none" stroke="currentColor" strokeWidth="6" 
                    className={`hangman-part ${wrongGuesses >= 1 ? 'visible' : ''}`} 
                  />
                  
                  <line 
                    x1="120" y1="80" x2="120" y2="140" 
                    stroke="currentColor" strokeWidth="6" 
                    className={`hangman-part ${wrongGuesses >= 2 ? 'visible' : ''}`} 
                  />
                  
                  <line 
                    x1="120" y1="90" x2="90" y2="110" 
                    stroke="currentColor" strokeWidth="6" 
                    className={`hangman-part ${wrongGuesses >= 3 ? 'visible' : ''}`} 
                  />
                  
                  <line 
                    x1="120" y1="90" x2="150" y2="110" 
                    stroke="currentColor" strokeWidth="6" 
                    className={`hangman-part ${wrongGuesses >= 4 ? 'visible' : ''}`} 
                  />
                  
                  <line 
                    x1="120" y1="140" x2="100" y2="180" 
                    stroke="currentColor" strokeWidth="6" 
                    className={`hangman-part ${wrongGuesses >= 5 ? 'visible' : ''}`} 
                  />
                  
                  <line 
                    x1="120" y1="140" x2="140" y2="180" 
                    stroke="currentColor" strokeWidth="6" 
                    className={`hangman-part ${wrongGuesses >= 6 ? 'visible' : ''}`} 
                  />
                </svg>
              </div>
              
              <div className="mt-4 space-y-2">
                <Badge variant="outline" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">Language: {selectedLanguage}</Badge>
                <Badge variant="outline" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">Topic: {selectedTopic}</Badge>
                <Badge variant="outline" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">Difficulty: {difficulty}</Badge>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={resetGame}
              className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
            >
              Back to Menu
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-8 flex items-center justify-center">
        <Card className="p-8 max-w-md mx-auto text-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            {gameWon ? '🎉 You Won!' : '💀 Game Over'}
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              The answer was: <span className="font-bold">{hiddenAnswer}</span>
            </p>
            
            <Badge variant="secondary" className="text-xl p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              Final Score: {score}
            </Badge>

            <div className="space-y-2">
              <Button 
                onClick={startGame} 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Play Again
              </Button>
              <Button 
                variant="outline" 
                onClick={resetGame} 
                className="w-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
              >
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