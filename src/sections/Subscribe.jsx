import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section className="maxa-container flex justify-center items-center max-lg:flex-col gap-8"  id="contact us">
     
      <h3 className="text-4xl leading-[68px] font-bold lg:max-w-md font-palanquin"> Sign  up from
    <span className="text-coral-red"> Updates</span> & Newsletter
      </h3> 
      <div className="lg:max-w-[40%] w-full  flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
        <Button label="Sign Up"  fullWidth/>
        </div> 
      </div>
    </section>
  )
}

export default Subscribe