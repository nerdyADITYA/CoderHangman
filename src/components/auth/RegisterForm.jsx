import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const RegisterForm = ({ onSwitchToLogin, onSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return false;
    }

    if (formData.username.length < 3) {
      toast({
        title: "Validation Error",
        description: "Username must be at least 3 characters long.",
        variant: "destructive"
      });
      return false;
    }

    if (formData.username.length > 20) {
      toast({
        title: "Validation Error",
        description: "Username must be less than 20 characters.",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive"
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      const result = await register(formData.username, formData.email, formData.password);
      
      if (result.success) {
        toast({
          title: "Welcome!",
          description: result.message,
          variant: "default"
        });
        if (onSuccess) onSuccess();
      } else {
        toast({
          title: "Registration Failed",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Create Account</h2>
          <p className="text-gray-600 dark:text-gray-400">Join the Programming Hangman community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Username
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username (3-20 characters)"
              required
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password (6+ characters)"
              required
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300" 
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        <div className="text-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">Already have an account? </span>
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            Sign in here
          </button>
        </div>
      </div>
    </Card>
  );
};

export default RegisterForm;