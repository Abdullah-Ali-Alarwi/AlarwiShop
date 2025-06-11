import productImage from '../../images/productImage.png';

export default function ProductimageDetial({item}) {
  return (
    <div className='lg:w-2/3'>
     <div className="image  flex flex-col justify-center items-center gap-2 my-10">
      <img src={item.thumbnail} alt="Product" className="w-[342px] h-[342px] object-cover shadow- bg-[#F4F4F4] rounded-2xl" />

      <div className="subimage flex  w-100 text-center gap-1.5 justify-center items-center" >
{item.images.map((image)=>(
        <img src={image} alt="Product" className="w-1/5 h-auto object-cover shadow " />

))

}      
      </div>

     </div>
    
    </div>
  )
}
