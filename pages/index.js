import Meta from "@/components/Meta";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home({ posts }) {
  const router = useRouter();
  return (
    <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
     <Meta title={Home}/>
      {/* <div
        style={{
          position: "relative",
        }}
      >
        <Image
          src="/public/images/image1.jpg"
          width={500}
          height={500}
          alt=""
        />
      </div> */}
      <h1 className="title">Home</h1>
      <h2>User List</h2>
      {posts?.map((user) => (
        <div
          key={user.id}
          onClick={() => router.push(`user/${user.id}`)}
          style={{ color: "yellow", cursor: "pointer" }}
        >
          {user.id}-{user.name}
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
