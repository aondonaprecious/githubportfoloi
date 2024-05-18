import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(`https://api.github.com/aondonaprecious/repos`, {
        params: { per_page: 10, page }
      });
      setRepos(response.data);
    };
    fetchRepos();
  }, [page]);

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Repositories"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredRepos.map(repo => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page => page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page => page + 1)}>Next</button>
    </div>
  );
};

export default RepoList;
