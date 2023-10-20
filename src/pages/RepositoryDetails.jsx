import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleRepository = () => {
  const { repoName } = useParams();
  const [repoDet, setRepoDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/Rahmagogo/${repoName}`)
      .then((response) => {
        setRepoDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching repository details: ', error);
      });
  }, [repoName]);

  return (
    <div className="container mx-auto mt-4">
          <h1 className='text-center text-3xl font-bold uppercase'>Repository Details</h1>
      {repoDet ? (
        <div className="flex flex-col mt-[13rem] underline justify-center font-bold rounded items-center px-8 py-8 bg-yellow-300 text-center text-black">
          <h2 className="uppercase ">{repoDet.name}</h2>
          <p>Language: {repoDet.language}</p>
          <p>Size: {repoDet.size}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SingleRepository;