import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";
import SearchBox from "@/components/SearchBox";
import WeatherGraph from "@/components/WeatherGraph";
import WeatherStats from "@/components/WeatherStats";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <Navbar />

        <div className="w-[100%] flex flex-col justify-between p-8 bg-slate-100">
          {/* header */}
          <div className="flex justify-between">
            {/* wish */}
            <div className="">
              <div className="text-2xl font-semibold"> Hello, Aman </div>
            </div>

            {/* search location */}
            <SearchBox />
          </div>

          <WeatherStats/>
          <WeatherGraph />
        </div>

        <Sidebar />
      </main>
    </>
  );
}
