import { useState } from 'react';

export const useGitHubReadme = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchReadme = async (repoPath) => {
    setLoading(true);
    setSelectedProject(repoPath);
    try {
      const response = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`);
      let text = response.ok ? await response.text() : null;
      
      if (!text) {
        const altResponse = await fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`);
        text = altResponse.ok ? await altResponse.text() : "README not found.";
      }
      setReadmeContent(text);
    } catch (err) {
      setReadmeContent("Error loading project details.");
    } finally {
      setLoading(false);
    }
  };

  return { selectedProject, readmeContent, loading, fetchReadme };
};