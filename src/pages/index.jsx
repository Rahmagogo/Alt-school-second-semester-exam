import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);



  useEffect(() => {
    const username = 'Rahmagogo';

    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching repositories: ', error);
      });
  }, []);

  return (
    <div className="flex font-serif flex-col justify-center items-center text-black bg-cyan-300">
      <h1 className="mb-5 mt-8 text-2xl uppercase font-bold underline">My Repositories</h1>
      <ul className="bg-gray-100 rounded px-6 py-4 mb-8 mt-5 mx-auto">
        {repositories.map((repository ) => (
          <li key={repository.id} className="bg-slate-400 text-center text-black px-6 py-4 my-3 rounded-[1.5rem] text-2xl font-bold uppercase">
            <Link to={`/repo/${repository.name}`}>
              {repository.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;