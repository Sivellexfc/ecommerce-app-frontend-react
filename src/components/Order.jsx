import { Container } from "postcss";
import React from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Order = ({item}) => {
    return (
        <div className="flex gap-x-4 py-8 lg:px-10 border border-gray-200 w-full font-light text-gray-500 ">
          <div className="w-full min-h-[50px] flex items-center gap-x-4">
            <Link>
              <img className="max-w-[80px] " alt="IMAGE"></img>
            </Link>
            <div className="w-full flex flex-col">
              <div className="flex justify-between mb-2">
                <Link
                  
                  className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
                >
                  ÜRÜN ADI
                </Link>
                <div className="text-xl cursor-pointer">
                  <IoMdClose className="text-gray-500 hover:text-red-500 transititon" />
                </div>
              </div>
              <div className="flex gap-x-2 h-[36px] text-sm">
                <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                  
                  <div  className=" flex-1 flex justify-center items-center cursor-pointer h-full">
                    
                  </div>
    
                  <div className=" h-full flex justify-center items-center px-2">Adet : 6</div>
    
                  <div  className="flex-1 h-full flex justify-center items-center cursor-pointer h-full">
                    
                  </div>
    
                </div>
    
    
                <div className="flex flex-1 items-center justify-around">₺ 23434</div>
    
                <div className="flex-1 flex justify-end items-center text-primary font-medium">₺ 123123123</div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Order;
