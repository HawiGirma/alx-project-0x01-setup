import { GetStaticProps } from "next";
import Head from "next/head";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UsersPageProps {
  users: User[];
}

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">User List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">@{user.username}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
