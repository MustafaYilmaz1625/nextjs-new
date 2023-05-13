import Meta from "@/components/Meta";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const UserItem = ({ userData }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await res.json();
  //       setUser(data && data.find((u) => u.id === Number(id)));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, [id]);

  return (
    <div>
      <Meta title={userData.title}/>
      <h1>User Item</h1>
      <p>
        <b>Full Name:</b> {userData?.name}
      </p>
      <p>
        <b>Email:</b> {userData?.email}
      </p>
      <p>
        <b>Adress:</b> {userData?.address.street}
      </p>
    </div>
  );
};

export default UserItem;

export const getStaticProps= async (context)=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const userData = await res.json();

  return{
    props:{
      userData,
    }
  }
}

export const getStaticPaths= async (context)=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users= await res.json();
  const ids = users.map((user)=>user.id)
  const paths = ids.map((id)=>({params:{id:id.toString()}}))

  return {
    paths,
    fallback:false
  };
}
