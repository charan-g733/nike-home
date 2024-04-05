import star from '../assets/icons/star.svg'
const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
      <section className="flex justify-center items-center flex-col">
          <img
              src={imgURL}
              alt="customer"
              className="rounded-full object-coverw-[120px] h-[120px]"
          />
          <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
          <div className='mt-3 flex justify-center items-center gap-3'>
              <img
                  src={star}
                  width={24}
                  height={24}
                  className="object-contain m-0"

              />
              <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
          </div>
          <h3 className='mt-2 font-palanquin text-3xl font-bold'>{ customerName}</h3>
          </section>
  )
}

export default ReviewCard