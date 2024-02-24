import { useEffect } from "react";
import CircleCard from "../components/circlecard.jsx";
import DiagramCard from "../components/diagramcard.jsx";
import { Footer } from "../components/footer.jsx";
import ListCard from "../components/listcard.jsx";
import { Loader } from "../components/loader.jsx";
import { Navbar } from "../components/navbar.jsx";
import { StatCard } from "../components/statcard.jsx";
import { useFetch } from "../lib/hooks.js";
// import { useEffect, useState } from 'react';

export default function Profile() {
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      location.href = "/";
    }
  }, [token]);

  const { data, loading, error } = useFetch(token);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <Loader />;
  }
  console.log(data);

  return (
    <>
      <main className="grid grid-cols-12 gap-2 bg-zinc-50 p-1 text-black">
        <header className="header col-span-12 rounded-lg border border-gray-300">
          {/* Header content */}
          <Navbar user={data?.user} />
        </header>
        <section className="col-span-full rounded-lg sm:col-span-full">
          {/* stats Content */}
          <StatCard
            downRatio={data?.downRatio}
            upRatio={data?.upRatio}
            xp={data?.transaction_aggregate.aggregate.sum}
          />
        </section>
        <section className="col-span-12 rounded-lg border border-gray-500 p-32 sm:col-span-8">
          {/* Graph Content */}
          <DiagramCard />
        </section>
        <section className="col-span-12 rounded-lg border border-gray-400 p-16 sm:col-span-4">
          {/* Diagram Content */}
          <CircleCard />
        </section>
        <section className="col-span-full rounded-lg border border-gray-500 sm:col-span-full">
          {/* Table Content */}
          <ListCard />
        </section>
        <footer className="footer col-span-12 rounded-lg border border-gray-800 text-center lg:text-left">
          <Footer />
        </footer>
      </main>
    </>
  );
}
