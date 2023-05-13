import Meta from "@/components/Meta";
import Head from "next/head";

export default function About({ posts }) {
  return (
    <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
    <Meta title={About}/>
      <h1>About</h1>
    </div>
  );
}


