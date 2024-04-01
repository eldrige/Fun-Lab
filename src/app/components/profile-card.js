import React from 'react';

export const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-black dark:text-white">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="size-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold mt-4">{user.login}</h2>
      <p className="text-gray-500 dark:text-gray-400">@{user.login}</p>
      <a
        href={user.html_url}
        target="_blank"
        className="text-blue-500 hover:underline block mt-2"
      >
        View Profile
      </a>
    </div>
  );
};
