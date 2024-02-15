export default function Footer() {
  return (
    <footer
      className="bg-neutral-200 text-center lg:text-left">
      <div className="p-4 text-center text-neutral-700">
        © 2024 Copyright:
        <a
          className="text-neutral-800"
          href="https://learn.zone01dakar.sn/git/mamdrame"
        >Mamdrame</a>
        with
        <img src="../src/assets/react.svg" alt="react image" className="inline-block h-24 w-24 cursor-pointer rounded-full object-cover object-center"/>
        <img src="../src/assets/vite.svg" alt="vite image" className="inline-block h-24 w-24 cursor-pointer rounded-full object-cover object-center"/>
        <img src="../src/assets/javascript.svg" alt=" js image" className="inline-block h-24 w-24 cursor-pointer rounded-full object-cover object-center"/>
      </div>
    </footer>
  );
}