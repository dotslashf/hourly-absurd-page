/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { parseTwitterDate } from "../utils/helper";

interface CardProps {
  date: string;
  fav: number;
  imageSrc: string;
  retweet: number;
}

const Card: NextPage<CardProps> = (prop) => {
  return (
    <div className="shadow-lg rounded-lg md:max-w-sm w-full m-auto">
      <img
        alt="test"
        src={prop.imageSrc}
        className="rounded-t-lg object-cover h-56	md:h-48 w-full"
      />
      <div className="bg-white w-full p-4 relative rounded-b-lg flex justify-between items-center">
        <span className="text-gray-500 text-sm">
          {parseTwitterDate(prop.date)}
        </span>
        <div className="flex flex-wrap justify-end items-center space-x-3">
          <div className="flex items-center text-xs py-1 px-2 text-blue-200 bg-blue-800 rounded-xl">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            {prop.retweet}
          </div>
          <div className="flex items-center text-xs py-1 px-2 text-pink-200 bg-pink-800 rounded-xl">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            {prop.fav}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
