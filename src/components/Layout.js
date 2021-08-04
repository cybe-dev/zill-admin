import * as Sidebar from "./Sidebar";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Layout({ children }) {
  const [menuShown, setMenuShown] = useState(false);
  return (
    <div className="h-screen flex bg-background">
      {menuShown && (
        <div
          className="bg-black-100 opacity-50 position fixed top-0 left-0 w-full h-screen block lg:hidden"
          onClick={() => {
            setMenuShown(false);
          }}
        ></div>
      )}
      <div
        className={
          "w-11/12 md:w-64 bg-white-100 h-full overflow-auto flex flex-col border-r border-white-300 fixed lg:static top-0 left-0 z-20 transform transition-all duration-300 " +
          (menuShown
            ? "-translate-x-0"
            : "-translate-x-full" + " lg:translate-x-0")
        }
      >
        <div className="mb-5 h-16 border-b border-white-200 flex items-center">
          <h1 className="text-xl oswald p-5 font-bold flex-1">Admin Panel</h1>
          <button
            className="w-8 h-8 mr-3 flex lg:hidden justify-center items-center text-black-400"
            type="button"
            onClick={() => {
              setMenuShown(false);
            }}
          >
            <FiX />
          </button>
        </div>
        <Sidebar.Wrapper>
          <Sidebar.List to="/" icon={FiHome} active={true}>
            Dashboard
          </Sidebar.List>
          <Sidebar.List to="/" icon={FiHome}>
            Content
          </Sidebar.List>
          <Sidebar.List to="/" icon={FiHome}>
            Buku
          </Sidebar.List>
        </Sidebar.Wrapper>
      </div>
      <div className="h-screen overflow-auto flex-1">
        <div className="h-16 bg-white-100 border-b border-white-200 flex items-center p-5">
          <button
            className="w-8 h-8 mr-3 flex lg:hidden justify-center items-center"
            type="button"
            onClick={() => {
              setMenuShown(true);
            }}
          >
            <FiMenu />
          </button>
          <h1 className="font-bold text-lg">Dashboard</h1>
        </div>
        {children}
      </div>
    </div>
  );
}