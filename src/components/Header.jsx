import React, { useContext } from "react";

import { SidebarContext } from "../context/SidebarContext";
import {CartContext} from "../context/CartContext"
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  
  return (
    <header className="bg-blue-200">
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl"></BsBag>
        <div className="bg-red-500 absolute -right-2 -bottom-2" >item amount</div>
      </div>
    </header>
  );
};

export default Header;
