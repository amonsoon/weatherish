import Head from "next/head";
import Image from "next/image";
import { Eater, Inter, Yaldevi} from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";
import SearchBox from "@/components/SearchBox";
import WeatherGraph from "@/components/WeatherGraph";
import WeatherStats from "@/components/WeatherStats";

import { Calendar, PinAlt } from "iconoir-react";
import { useAppContext } from "@/context/context";
const roboto = Yaldevi({ subsets: ["latin"] });

export default function Home() {
  const {isWeatherLoading} = useAppContext();

  if(isWeatherLoading) {
     return <h1 className="font-3xl text-stone-500"> Loading data </h1>
  }

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

        <div className="w-[100%] flex flex-col gap-8 justify-between px-8 py-4 bg-slate-50">
          {/* header */}
          {/* <div className="flex justify-between items-center">
            <div className="">
              <div className="flex items-center gap-2 text-lg text-slate-700">
                <Icon>
                  {" "}
                  <Calendar />{" "}
                </Icon>
                <span> January 25, 2023 </span>
              </div>
            </div>
            <SearchBox />
          </div> */}

          <WeatherStats />
          <WeatherGraph />
        </div>

        <Sidebar />
      </main>
    </>
  );
}
