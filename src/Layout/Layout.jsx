// src/Layout.jsx
import { Outlet } from "react-router-dom"
import LimedtdNav from '../components/NavFollder/LimedtdNav'
import MainNav from '../components/NavFollder/MainNav'
import MainFooter from '../components/CommunComponents/MainFooter'


export default function Layout() {
  return (
    <>
     <LimedtdNav/>
<MainNav/>
      <main >
        <Outlet />
      </main>
      <MainFooter/>
    </>
  )
}

