import man from "../../images/man.png";
import { FaStar } from 'react-icons/fa';

function Review({ name, date, review, stars }) {
  return (
    <div className='w-[320px] shadow p-5'>
      <h2 className='text-xl font-bold mb-4'>Customer Review</h2>

      <div className='flex items-center gap-3 mb-4 border-b border-gray-300 pb-2'>
        <img src={man} alt="Customer" className="w-12 h-12 rounded-full" />
        <p className="text-base font-medium">{name}</p>
      </div>

      <div className="mb-2">
        <div className="flex text-yellow-500 text-lg mb-1 align-bottom">
          {Array.from({ length: stars }).map((_, i) => <FaStar key={i} />)}
        </div>
        <p className="text-sm text-gray-900 leading-7 mb-10">{review}</p>
        <p className="text-sm text-[#9D9EA2]">{date}</p>
      </div>
    </div>
  );
}

export default function CustomersList() {
  const customers = [
    {
      name: "James Carter",
      date: "May 28, 2025",
      stars: 5,
      review: "Alarwi is hands down the best online store I've used in Yemen! Amazing service, great prices, and super fast shipping."
    },
    {
      name: "Emily Johnson",
      date: "April 12, 2025",
      stars: 4,
      review: "Great experience with ALaRWI. Fast delivery and quality products. Will definitely shop again."
    },
    {
      name: "Mohamed Ali",
      date: "March 8, 2025",
      stars: 5,
      review: "The best customer service I’ve had in a long time. ALaRWI really cares about their customers. Highly recommended!"
    },
   
  ];

  return (
    <div className="flex flex-wrap justify-around gap-1">
      {customers.map((customer, index) => (
        <Review
          key={index}
          name={customer.name}
          date={customer.date}
          stars={customer.stars}
          review={customer.review}
        />
      ))}
    </div>
  );
}
