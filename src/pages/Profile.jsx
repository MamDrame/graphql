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
      <main className="grid grid-cols-12 gap-2 p-1">
        <header className="header col-span-12 rounded-lg shadow-md">
          {/* Header content */}
          <Navbar user={data?.user} />
        </header>
        <section className="col-span-full rounded-lg sm:col-span-full">
          {/* stats Content */}
          <StatCard
            downRatio={data?.downRatio.aggregate.sum.amount}
            upRatio={data?.upRatio.aggregate.sum.amount}
            xp={data?.transaction_aggregate.aggregate.sum.amount}
            level={data?.user[0]?.level[0]?.level}
          />
        </section>
        <section className="col-span-12 rounded-lg p-32 shadow-md bg-gray-900 sm:col-span-8">
          {/* Graph Content */}
          <DiagramCard />
        </section>
        <section className="col-span-12 rounded-lg p-16 shadow-md bg-gray-900 sm:col-span-4">
          {/* Diagram Content */}
          <CircleCard />
        </section>
        <section className="col-span-full rounded-lg shadow-md bg-gray-900 sm:col-span-full">
          {/* Table Content */}
          <ListCard
            auditsTable={data?.user[0].audits}
            invalidAudits={data?.user[0].invalidAudits.aggregate.count}
            validAudits={data?.user[0].validAudits.aggregate.count}
          />
        </section>
        <footer className="footer col-span-12 rounded-lg text-center shadow-md lg:text-left">
          <Footer />
        </footer>
      </main>
    </>
  );
}
