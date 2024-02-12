
const PopularProduct = ({imgURL,name,price}) => {
  return (
    <section>
    <div className='flex justify-start flex-col w-80'>
    <div className="flex flex-row justify-center items-start bg-card bg-center bg-cover rounded-xl max-sm:p-40">
        <img
          src={imgURL}
          alt="Popular Product"
          width={150}
          height={75}
          className="object-contain "
      />
      
    </div>
    <p className="text-xl font-palanquin font-bold">{name}</p>
      <p className="leading-7 font-montserrat text-slate-gray">{price}</p>
    </div>
    </section>
  )
}

export default PopularProduct