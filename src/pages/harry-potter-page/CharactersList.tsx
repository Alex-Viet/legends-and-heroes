import React, { useState } from 'react';
import { useGetPotterCharactersQuery } from '../../features/harry-potter/characters/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectLikedCharacters,
  toggleLike,
} from '../../features/harry-potter/likes/likesSlice';

export const CharactersList: React.FC = () => {
  const [showLiked, setShowLiked] = useState<boolean>(true);

  const { data } = useGetPotterCharactersQuery();
  const characters = data?.data;

  const dispatch = useAppDispatch();
  const likedCharacters = useAppSelector(selectLikedCharacters);

  const toggleLikes = (
    evt: React.MouseEvent<HTMLImageElement, MouseEvent>,
    id: string,
  ) => {
    evt.preventDefault();
    evt.stopPropagation();

    dispatch(toggleLike(id));
  };

  const filteredCharacters = !showLiked
    ? characters?.filter((char) => likedCharacters.includes(char.id))
    : characters;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl text-white text-center py-6">
        Characters - Harry Potter
      </h1>
      <div className="flex justify-center">
        <button
          className="text-white p-3 rounded-full border-solid border-white border-2 hover:bg-white hover:text-black transition-all duration-200"
          onClick={() => setShowLiked((prev) => !prev)}
        >
          show liked only
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredCharacters?.length ? (
          filteredCharacters.map((character) => (
            <div
              key={character.id}
              className="p-3 max-w-sm bg-[#c9c9c9] rounded shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between">
                  <img
                    src={`/img/icons/${likedCharacters.includes(character.id) ? 'un' : ''}like.svg`}
                    alt="like"
                    className="w-7 h-7 cursor-pointer"
                    onClick={(e) => toggleLikes(e, character.id)}
                  />
                  <img
                    src={
                      character.attributes.image
                        ? character.attributes.image
                        : '/img/no_image.jpg'
                    }
                    alt={character.attributes.name}
                    className="h-36 w-36 object-cover rounded-full"
                  />
                  <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <g id="Icon">
                      <path
                        d="m12 1.25c5.933 0 10.75 4.817 10.75 10.75s-4.817 10.75-10.75 10.75-10.75-4.817-10.75-10.75 4.817-10.75 10.75-10.75zm0 1.5c-5.105 0-9.25 4.145-9.25 9.25s4.145 9.25 9.25 9.25 9.25-4.145 9.25-9.25-4.145-9.25-9.25-9.25z"
                        fill="#000000"
                      ></path>
                      <path
                        d="m9.03 16.03c-.292.293-.768.293-1.06 0-.293-.292-.293-.768 0-1.06l7-7c.292-.293.768-.293 1.06 0 .293.292.293.768 0 1.06z"
                        fill="#000000"
                      ></path>
                      <path
                        d="m16.03 14.97c.293.292.293.768 0 1.06-.292.293-.768.293-1.06 0l-7-7c-.293-.292-.293-.768 0-1.06.292-.293.768-.293 1.06 0z"
                        fill="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>

                <h2 className="my-2 text-2xl">{character.attributes.name}</h2>
                <p className="text-gray-600">
                  {character.attributes.house &&
                    `house: ${character.attributes.house}`}
                </p>
                <p className="text-gray-600">
                  {character.attributes.alias_names.length > 0 &&
                    `alias: ${character.attributes.alias_names}`}
                </p>
                <p className="text-gray-600">
                  {character.attributes.patronus &&
                    `patronus: ${character.attributes.patronus}`}
                </p>
              </div>

              <p className="text-xl underline mt-4 text-center cursor-pointer hover:no-underline hover:text-[#727272]">
                Details
              </p>
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-white my-2 text-2xl">No characters</h2>
          </div>
        )}
      </div>
    </div>
  );
};
