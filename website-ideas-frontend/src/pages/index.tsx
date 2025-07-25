import { useEffect, useState } from 'react';
import IdeaForm from '../components/IdeaForm';
import SectionsList from '../components/SectionsList';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchSections } from '../services/api';

const Home = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadSections = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchSections();
      setSections(data);
    } catch (err) {
      setError('Failed to fetch sections');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSections();
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Website Idea Generator</h1>

      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {!loading && !error && (
        <>
          <IdeaForm onSuccess={loadSections} />
          <SectionsList sections={sections} />
        </>
      )}
    </div>
  );
};

export default Home;
