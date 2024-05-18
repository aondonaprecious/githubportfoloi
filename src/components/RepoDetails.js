import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(`https://api.github.com/repos/aondonaprecious/${repoName}`);
      setRepo(response.data);
    };
    fetchRepo();
  }, [repoName]);

  if (!repo) return <div>Loading...</div>;

  return (
    <div>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Forks: {repo.forks_count}</p>
    </div>
  );
};

export default RepoDetails;
