import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../Store/Slices/ProductSlice";
import Logo from "../../images/logo.png";
import SearchIcon from "../../images/search.png";
import YourCart from "../CartFolder/YourCart";
import { Link } from "react-router-dom";
import { TbLogin2 } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { TiUser } from "react-icons/ti";
import { clearUser } from "../../Store/Slices/authSlice"; 
import  ButtonSelectCategory from "../CommunComponents/ButtonSellectCatigory"

function SearchBox() {

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className=" lg:flex items-center">
      <input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="p-2 m-2 rounded-2xl w-70 lg:w-90 outline-none border-2  border-[#05422c78]"
      />
      <button
        onClick={() => {}}
        className="bg-[#05422C] text-white rounded-full ml-2 p-2"
      >
        <img src={SearchIcon} alt="Search" />
      </button>
    </div>
  );
}

export default function MainNav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-white shadow">
      <div className="p-2 my-5 mx-1 lg:mx-8 flex justify-between items-center gap-5 rounded-lg">
       
        <Link to="/">  <img src={Logo} className="w-[100px]" alt="Logo" /></Link>

        <div className="hidden lg:flex">
          <SearchBox />
        </div>

        <div className="flex gap-5 items-center divide-x divide-gray-300 m-3">

 
            <Link to="/MypastOrder" className="m-2 text-sm cursor-pointer">
            Your Order
          </Link>

          {user ? (
            <div className="flex items-center gap-4 m-2 text-gray-700">
              <div className="flex flex-row items-center text-3xl cursor-pointer">
                <TiUser className="text-2xl" />
                <span className="text-sm hidden lg:flex mt-1 ml-2">
                  {user?.name || user?.email || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="text-2xl text-red-400 hover:text-red-800 ml-3"
                title="Logout"
                aria-label="Logout"
              >
                <BiLogOut />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 m-2 cursor-pointer text-3xl text-green-600"
            >
              <TbLogin2 />
              <span className="text-base">Login</span>
            </Link>
          )}
  

          <YourCart />
        </div>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <SearchBox />
      </div>
   
  <ButtonSelectCategory/>
    </div>
  );
}
