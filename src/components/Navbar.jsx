import React from "react";
import { useState,useEffect} from "react";
import { MdLightMode,MdNightlight } from 'react-icons/md'
import {BsFillBasket2Fill} from 'react-icons/bs'
import {useDispatch,useSelector} from "react-redux"
import { searchAction } from "../redux/actions/search";
import { Outlet ,Link } from 'react-router-dom';
import { Fragment } from "react";
import Logo from"../assets/img/logo.png"

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false)
  const dispatch = useDispatch()
  const { cardItems } = useSelector(state => state.card)
  const {search,setSearch} = useState("")
  
    useEffect(() => {
        const root = document.getElementById("root")
        if (bgColor) {
            root.style.background = "#181818"
            root.style.color ="#ffffff"
            
        } else {
            root.style.background = "#ffffff"
            root.style.color ="#181818"
        }
    }, [bgColor])
  const searchPost = (e) => {
    if (e.key === "Enter") {
        dispatch(searchAction(search))
      }
    }
  return (
    <Fragment>
    <div className="flex items-center justify-between px-3 h-28">
      <div className="text-2xl font-bold tracking-wider w-20"><a href="/"><img src={Logo} alt="site-logo" /></a></div>
        <div className="flex items-center space-x-4 text-lg ">
       <Link className="" to="/">
            Home
          </Link>
          <Link to="/about-us">
            About Us
          </Link>
          <Link to="/contact">
            Contact
          </Link>

        </div>
      <div className="flex items-center space-x-4">
              <input value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchPost}  className="border p-3 outline-none rounded-lg" type="text" placeholder="Search" />
              <div onClick={() => setBgColor(!bgColor)}>
                  {bgColor ? <MdLightMode size={25} className="cursor-pointer" /> :<MdNightlight size={25} className="cursor-pointer" />  }
                  </div>
              <div onClick={()=> dispatch({type:'DRAWER',payload:true})} className="relative">
                 <BsFillBasket2Fill size={25} className="cursor-pointer"/>
          <span className="absolute -top-2 -right-3 px-2 bg-icons-color text-white rounded-full text-sm">{cardItems?.length}</span>
              </div>
      </div>
      </div>
      </Fragment>
  );
};

export default Navbar;
