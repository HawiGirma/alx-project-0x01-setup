import Head from "next/head";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces/UserProps";

interface UsersPageProps {
  users: UserProps[];
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default function Users({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">User List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
}
