import { useEffect } from "react";
import { DonutChart } from "../components/circlecard.jsx";
import BarChart from "../components/diagramcard.jsx";
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
    return (
      <div className="items-center text-white">Error: {error.message}</div>
    );
  }
  if (loading) {
    return <Loader />;
  }

  if (!data) {
    localStorage.removeItem("token");
    location.href = "/";
  }
  console.log(data);

  return (
    <>
      <main className="grid grid-cols-2 gap-2 p-1 md:grid-cols-1">
        <header className="header rounded-lg shadow-md col-span-2 md:grid-cols-1">
          {/* Header content */}
          <Navbar user={data?.user} />
        </header>
        <section className="col-span-2 rounded-lg md:grid-cols-1">
          {/* stats Content */}
          <StatCard
            downRatio={data?.downRatio.aggregate.sum.amount}
            upRatio={data?.upRatio.aggregate.sum.amount}
            xp={data?.transaction_aggregate.aggregate.sum.amount}
            level={data?.user[0]?.level[0]?.level}
          />
        </section>
        <section className="col-span-1 flex flex-col items-center p-1 rounded-lg shadow-md bg-gray-900">
          {/* Graph Content */}
          <BarChart data={data?.transaction_aggregate.nodes} />
        </section>
        <section className="col-span-1 flex flex-col gap-6 items-center p-1 rounded-lg shadow-md bg-gray-900">
          <h6 className="text-center text-2xl font-bold text-white">Skills</h6>
          <DonutChart data={data?.skills} />
        </section>
        <section className="col-span-2 rounded-lg shadow-md bg-gray-900 md:grid-cols-1">
          {/* Table Content */}
          <ListCard
            auditsTable={data?.user[0].audits}
            invalidAudits={data?.user[0].invalidAudits.aggregate.count}
            validAudits={data?.user[0].validAudits.aggregate.count}
          />
        </section>
        <footer className="footer col-span-2 rounded-lg text-center shadow-md md:grid-cols-1">
          <Footer />
        </footer>
      </main>
    </>
  );
}
