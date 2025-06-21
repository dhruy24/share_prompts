import Image from "next/image";
import Feed from "./components/Feed";

export default function Home() {
  console.log("commit 1");
  console.log("commit 2");
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Search & Share
        <br className="mx-md:hidden"/>
        <span className="orange_gradient text-center" > Usefull AI Prompts</span>
      </h1>
      <p className=" desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
      </p>
      {/* feed component */}
      <Feed/>
    </section>
  );
}
