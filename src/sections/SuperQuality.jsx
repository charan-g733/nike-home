import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-centermax:lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className=" font-palanquin text-4xl capitalize font-bold">
         <span
          className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes</h1>
        
        <Button label='View Details' />
      </div>
   </section>
  )
}

export default SuperQuality