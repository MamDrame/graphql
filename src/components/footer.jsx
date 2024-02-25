/**
 * The above function is a React component that renders a footer with copyright information and logos
 * for React, Vite, and JavaScript.
 * @returns a JSX element representing a footer component.
 */
export function Footer() {
  return (
    <div className="py-4 text-center text-neutral-400">
      {" "}
      © 2024 Copyright :
      <a href="https://learn.zone01dakar.sn/git/mamdrame"> Mamdrame </a>
      with{" "}
      <img
        src="../src/assets/react.svg"
        alt="react image"
        className="inline-block ml-2 h-5 w-5 rounded-full"
      />
      <img
        src="../src/assets/vite.svg"
        alt="vite image"
        className="inline-block ml-2 h-5 w-5 rounded-full "
      />
      <img
        src="../src/assets/javascript.svg"
        alt=" js image"
        className="inline-block ml-2 h-5 w-5 rounded-full "
      />
    </div>
  );
}
