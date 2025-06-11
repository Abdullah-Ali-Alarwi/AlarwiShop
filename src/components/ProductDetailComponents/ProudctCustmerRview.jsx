import { FaStar } from "react-icons/fa"
import man from "../../images/man.png"

export default function ProudctCustmerRview() {
  return (
    <div className="m-5 p-4 w-full shadow-lg ">
     <div className="flex  justify-around items-center border-amber-50 border-b-2 pb-2 ">
            <img src={man} alt="" />
            <p>Vikki Starr</p>
            <p>January 15, 2023</p>
     </div>

     <div>
        <div className="flex text-amber-300 m-3">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
    <p>
        Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.
    </p>
     </div>
    </div>
  )
}
