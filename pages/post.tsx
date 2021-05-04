import React from "react";
import { NextPageContext, NextPage } from "next";
import axios from "axios";

interface PostProps {
  body?: string;
  title?: string;
}

const Post: NextPage<PostProps> = ({ body, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <br />
      <p>{body}</p>
    </div>
  );
};

Post.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const { data }: any = response;
  console.log(data);
  // // res!.writeHead(301, { location: "/about" });
  // // res!.end();
  // // const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { body: data.body, title: data.title };
  // console.log(query);
  // return query;
};

export default Post;
