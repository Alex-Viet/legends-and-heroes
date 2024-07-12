import React from 'react';

type DeleteCharacterHandler = (
  event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  id: string,
) => void;

interface DeleteSvgIconProps {
  deleteCharacter: DeleteCharacterHandler;
  id: string;
}

export const DeleteSvgIcon: React.FC<DeleteSvgIconProps> = ({
  deleteCharacter,
  id,
}) => {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 cursor-pointer"
      onClick={(e) => deleteCharacter(e, id)}
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
  );
};
