/**
 * The above function is a React component that renders a footer with copyright information and logos
 * for React, Vite, and JavaScript.
 * @returns a JSX element representing a footer component.
 */
export function Footer() {
  return (
    <div className="p-4 text-center text-neutral-700">
      © 2024 Copyright :
      <a
        className="text-neutral-800"
        href="https://learn.zone01dakar.sn/git/mamdrame"
      >
        {" "}
        Mamdrame{" "}
      </a>
      with
      <img
        src="../src/assets/react.svg"
        alt="react image"
        className="inline-block mr-2px h-8 w-8 cursor-pointer rounded-full object-cover object-center"
      />
      <img
        src="../src/assets/vite.svg"
        alt="vite image"
        className="inline-block mr-2px h-8 w-8 cursor-pointer rounded-full object-cover object-center"
      />
      <img
        src="../src/assets/javascript.svg"
        alt=" js image"
        className="inline-block mr-2px h-8 w-8 cursor-pointer rounded-full object-cover object-center"
      />
    </div>
  );
}
