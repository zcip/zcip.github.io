import { NextPage } from "next";
import Link from "next/link";

const TilPage: NextPage = () => {
  return (
    <div className="flex items-center w-max justify-center flex-col">
      <h1 className="text-3xl font-bold underline text-center">Hello World</h1>
      <Link href="/til/first-css">はじめてのcss</Link>
      <Link href="/til/first-mdx">はじめてのmdx</Link>
    </div>
  );
};

export default TilPage;
