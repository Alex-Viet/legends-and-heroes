import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetPotterCharactersQuery } from '../../features/harry-potter/characters/charactersSlice';
import { Loader } from '../../features/harry-potter/loader/Loader';

export const CharactersDetails: React.FC = () => {
  const { data, isLoading, error } = useGetPotterCharactersQuery();
  const { id } = useParams<{ id: string }>();
  const character = data?.data.find((char) => char.attributes.name === id);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <div className="p-12 text-white text-center text-3xl">
        Error loading character. Please try later
      </div>
    );

  if (!character)
    return (
      <div className="p-8 text-white text-center">
        <h1 className="text-5xl my-4">Character not found</h1>
        <Link to="/" className="text-xl underline hover:no-underline">
          back to main page
        </Link>
      </div>
    );

  const {
    alias_names,
    born,
    blood_status,
    died,
    family_members,
    house,
    image,
    jobs,
    name,
    patronus,
    romances,
    titles,
    wands,
    wiki,
  } = character.attributes;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <Link to="/" className="text-white text-xl underline hover:no-underline">
        Back to Characters List
      </Link>
      <div className="my-8 text-white max-w-4xl">
        <div className="">
          <img
            src={image ? image : './img/no_image.jpg'}
            alt={name ? name : 'no-image'}
            className="h-auto max-w-56 object-cover rounded"
          />
          <h2 className="mt-2 text-2xl font-bold">{name}</h2>
        </div>

        <p>House: {house}</p>
        <p>Born: {born}</p>
        <p>Died: {died}</p>
        <p>Blood Status: {blood_status}</p>
        <p>Alias Names: {alias_names.join(', ')}</p>
        <p>Family Members: {family_members.join(', ')}</p>
        <p>Jobs: {jobs.join(', ')}</p>
        <p>Patronus: {patronus}</p>
        <p>Romances: {romances.join(', ')}</p>
        <p>Titles: {titles.join(', ')}</p>
        <p>Wands: {wands.join(', ')}</p>
        <a
          href={wiki}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          More Info on Wiki
        </a>
      </div>
    </div>
  );
};
