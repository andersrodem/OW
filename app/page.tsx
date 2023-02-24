import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid place-items-center px-5 pb-32">
      <div className="max-w-lg">
        <div className="">
          <img className="rounded-md pt-10" src="/logo.png" alt="Next.js" />
          <h1 className="text-3xl bold pt-10">Keen på litt Kielland?</h1>
          <img className="my-10 rounded-md"  src="/Kiellis.png" alt="Next.js" />
          <img className="my-10 rounded-md"  src="/mann.png" alt="Next.js" />
          <img className="my-10 rounded-md" src="/Pappa.png" alt="Next.js" />
          <img className="my-10 rounded-md" src="/bil.png" alt="Next.js" />
          <img className="my-10 rounded-md" src="/bilde.png" alt="Next.js" />
          <button className="bg-blue-500 text-white w-full rounded-md py-3">Subscribe for 1$</button>
          <p className="text-gray-300 text-sm text-center pt-5">Laget med kjærlighet av Erling og Anders</p>
        </div>
      </div>
    </main>
  );
}
