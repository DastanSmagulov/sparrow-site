import "../../globals.css";

const Button = ({ children }) => {
  return (
    <button className="rounded-3xl border-solid border-black border-1 bg-[#B8F82F] text-[#112D48] text-base font-semibold py-3 px-16">
      {children}
    </button>
  );
};
export { Button };
