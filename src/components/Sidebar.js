import { Link } from "react-router-dom";

export const Wrapper = ({ children }) => {
  return <ul className="flex flex-col">{children}</ul>;
};

export const List = ({ children, active, icon, ...props }) => {
  const Icon = icon;
  return (
    <li
      className={
        "pl-5 mb-2 " +
        (active
          ? "border-l-4 border-primary-500"
          : "border-l-4 border-white-100")
      }
    >
      <Link
        className={
          "rounded-l-md pr-5 py-3 monda pl-3 flex items-center " +
          (active
            ? "bg-primary-500 text-white-100"
            : "text-black-400 hover:bg-primary-100")
        }
        {...props}
      >
        <span className="w-8 text-center">
          <Icon />
        </span>
        {children}
      </Link>
    </li>
  );
};
