import { NextPage } from "next";
import { Card } from "../components/card";
import Link from "next/link";
import { Pagination } from "antd";
import { H1 } from "features/profile/example";
//import axios from "axios";

interface HomeProps {
  data?: any;
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <div>
      <H1>This is an example</H1>
      <Link href="/about">
        <button> About page</button>
      </Link>
      {/* {data.map((post: any) => (
        <div>
          <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
            <h1>{post.title}</h1>
          </Link>
          <br />
          <p>{post.body}</p>
        </div>
      ))} */}
      <Pagination defaultCurrent={1} total={50} />
      <Card />
    </div>
  );
};

// Home.getInitialProps = async ({ req, res }: NextPageContext) => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   const { data }: any = response;
//   console.log(data);
//   // res!.writeHead(301, { location: "/about" });
//   // res!.end();
//   // const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
//   return { data };
// };

export default Home;
