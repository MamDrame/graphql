export function Loader() {
  <>
    <main className="grid grid-cols-12 gap-2 bg-white p-1 animate-pulse">
      <header className="header col-span-12 rounded-lg bg-gray-300"></header>
      <section className="col-span-full rounded-lg sm:col-span-full"></section>
      <section className="col-span-12 rounded-lg bg-gray-300 p-32 sm:col-span-8"></section>
      <section className="col-span-12 rounded-lg bg-gray-300 p-16 sm:col-span-4"></section>
      <section className="col-span-full rounded-lg bg-gray-300 sm:col-span-full"></section>
      <footer className="footer col-span-12 rounded-lg bg-gray-300"></footer>
    </main>
  </>;
}
