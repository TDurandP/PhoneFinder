import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-cyan-700">
      <Header/>
      <img className='svg-color animate-bounce w-[125px] h-[125px]' src="/assets/icons/smartphone.svg" alt="phoneFinder logo"/>

    </main>
  );
}
