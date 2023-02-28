import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../../Context/SidebarContext";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  return (
    <div className={`${isOpen ? 'right-0' :'-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <button onClick={() => setIsOpen(true)}>Open sidebar</button>
      <button onClick={() => handleClose()}>Close sidebar</button>
      Side bar
    </div>
  );
};

export default Sidebar;
