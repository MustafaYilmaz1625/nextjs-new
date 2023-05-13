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

export const getServerSideProps= async (context)=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const userData = await res.json();

  return{
    props:{
      userData,
    }
  }
}
