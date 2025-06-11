import React from 'react'

import BackgroundNav from "../components/NavFollder/BackgroundNav"
import GreenFeatureCart from "../components/FeaturHighlights/GreenFeatureCart"
import TilteComponent from '../components/CommunComponents/TitleComponet'
import ButtonSellectCatigory from '../components/CommunComponents/ButtonSellectCatigory'
import BestProductList from '../components/ProductFolder/BestProductList'
import CustomerTransformationList from '../components/CUSTOMER/CustomerTransformationList'
import AllProductList from '../components/ProductFolder/AllProductList'
import Addbox from "../components/CommunComponents/AddBox"



export default function LandingPage() {
  return (
    <div>

      
      <BackgroundNav/>
      
      <TilteComponent title="BEST PLACE TO SHOP"/>
      
      <BestProductList/>
     
            <TilteComponent title="ALL PRODUCTS"/>
              
                  <AllProductList/>
                   <CustomerTransformationList/>
                  <Addbox/>
                  <GreenFeatureCart/>
                


      

    </div>
  )
}
