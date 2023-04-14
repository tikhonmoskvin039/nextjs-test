import { IUser } from "@/types/user.type";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface UserPageInfoProps {
  user: IUser;
}

export const getServerSideProps: GetServerSideProps<UserPageInfoProps> = async ({params}) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params?.id?.toString()
  );
  const userResponse: IUser = await response.json();

  return {
    props: { user: userResponse }, // will be passed to the page component as props
  };
};

const UserPageInfo: FC<UserPageInfoProps> = ({user}) => {
  const { query } = useRouter();
  return (
    <main>
      <h1>User {user.name}</h1>
      <ul>
        <li>{user.phone}</li>
        <li>{user.username}</li>
        <li>{user.website}</li>
      </ul>
    </main>
  );
};

export default UserPageInfo;
