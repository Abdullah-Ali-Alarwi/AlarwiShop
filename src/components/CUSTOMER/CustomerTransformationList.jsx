import TilteComponent from "../CommunComponents/TitleComponet";


import CustmerAdd from "./CustmerAdd";
import CustomerList from "./CustomerList";




export default function CustomerTransformationList() {
  return (
    <div className="my-20">
      <TilteComponent title="CUSTOMER TESTIMONIALS" />
     <div className="flex flex-col lg:flex-row items-center m-auto">
       <CustmerAdd/>
     
<CustomerList/>
     </div>
    </div>
  )
}
