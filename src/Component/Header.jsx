import React from "react"
import logoImage from "../Image/logo.png"
import notification from "../Image/bell.png"
import balance from "../Image/doller.png"
import profile from "../Image/profile.png"
import SideNavbar from "./SideNavbar"
import TableRaw from "./TableRaw"



function Header() {

  
    return (
      <>
       <header className="w-full h-[5rem] border-b-2 border-gray-400 p-4">
          <div className=" w-[75%] h-12 mx-auto flex justify-between ">
                <div className="w-[100px] l-[100px]">
                  <img src={logoImage} alt="" />
                </div>
                <div className="flex justify-between items-center w-[10rem] h-full">
                  <div className="w-7">
                    <img src={notification} alt="" />
                  </div>
                  <div className="w-7">
                    <img src={balance} alt="" />
                  </div>
                  <div className="w-11">
                    <img src={profile} alt="" />
                  </div>
                </div>
          </div>
          <SideNavbar/>
       </header>
       <TableRaw/>
       </>
    )
  }
  
  export default Header;