import React, { useState } from 'react';
import { submitWebsiteIdea } from '../services/api';

interface IdeaFormProps {
  onSuccess: () => void;
}

const IdeaForm: React.FC<IdeaFormProps> = ({ onSuccess }) => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitWebsiteIdea(idea);
      setIdea('');
      onSuccess(); // Refetch sections after successful submission
    } catch (err) {
      setError('Failed to submit the idea. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
      <div>
        <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-1">
          Website Idea:
        </label>
        <input
          type="text"
          id="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          required
          className="w-full p-2.5 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          placeholder="e.g., Landing page for bakery"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-3 rounded-md text-base font-semibold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors flex items-center justify-center"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          'Submit Idea'
        )}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};

export default IdeaForm;