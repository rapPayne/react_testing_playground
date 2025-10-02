import { useState } from 'react';

interface Joke {
  setup: string;
  punchline: string;
}

export default function JokePage() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      setJoke({
        setup: data.setup,
        punchline: data.punchline,
      });
    } catch {
      setError(true);
      setJoke(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1>Jokes</h1>

      <button
        onClick={fetchJoke}
        disabled={loading}
        className="btn btn-success"
      >
        Get Joke
      </button>

      <div className="joke-container">
        {loading && <p className="loading-text">Loading...</p>}

        {error && <p className="error-text">Failed to fetch joke</p>}

        {joke && !loading && !error && (
          <div className="joke-card">
            <p className="joke-text">{joke.setup}</p>
            <p className="joke-text joke-punchline">{joke.punchline}</p>
          </div>
        )}
      </div>
    </div>
  );
}
