import React, { FC } from "react";
import { IUser } from "../types/user.type";
import Link from "next/link";
import { GetStaticProps } from "next";

interface UsersProps {
  usersList: IUser[];
}

export const getStaticProps: GetStaticProps<UsersProps> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersResponse: IUser[] = await response.json();

  return {
    props: { usersList: usersResponse }, // will be passed to the page component as props
  };
};

const Users: FC<UsersProps> = ({ usersList }) => {
  console.log("usersList", usersList);
  return (
    <main>
      <h1>Users</h1>
      <ul>
        {usersList?.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.id}. {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Users;
