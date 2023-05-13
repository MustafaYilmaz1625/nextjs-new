import Head from "next/head";
import React from "react";

const Meta = ({ description, title, keywords }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "User List Website",
  keywords: "next js, react,js",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};
export default Meta;
