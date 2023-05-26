import { Info } from '../info'

export const Details = ({ data: { number, expiryMonth, expiryYear } }: any) => {
  return (
    <aside className="lg:w-[28%] bg-[#EFF4F8] flex flex-col justify-end text-gray-400 rounded-[10px] mt-[4rem] pb-[2rem] lg:py-[2rem]">
      {/* card details */}
      <section className="w-full lg:w-[65%] m-auto max-md:mb-[2rem] shadow-sm lg:shadow-md lg:relative lg:top-[-18%] bg-white opacity-[.9] px-[1.5rem] py-[4rem] text-blue-900 lg:rounded-[2rem]">
        <p className="capitalize font-[500]">Jonathan Michael</p>

        {/* card number */}
        <p className="font-[700] text-[22px] mb-[2rem]">
          &#183; &#183; &#183; {number.slice(-3)}
        </p>

        {/* expiry */}
        <div className="flex items-center justify-between font-[700]">
          <p>
            {expiryMonth}/{expiryYear}
          </p>

          {/* mastercard icon */}
          <div className="">
            <div className="flex items-center">
              <div className="w-[1.8rem] h-[1.8rem] rounded-full bg-red-500" />
              <div className="w-[1.8rem] h-[1.8rem] rounded-full bg-orange-500 opacity-[.5] ml-[-.6rem]" />
            </div>

            <small className="text-[8px]">mastercard</small>
          </div>
        </div>
      </section>

      {/* purchase details */}
      <article className="flex flex-col gap-[1rem] px-[1rem] lg:px-[3rem]">
        <Info title="Company" name="Apple" />
        <Info title="Order Number" name="1266201" />
        <Info title="Product" name="macbook air" />
        <Info title="VAT(20%)" name="$100.00" />
      </article>

      {/* divider */}
      <section className="w-full flex gap-[2rem] items-center my-[2rem]">
        <div className="w-[3rem] h-[3rem] rounded-full bg-white ml-[-1rem]" />
        <div className="w-[80%] h-[1px] border-b-[2px] border-dashed border-gray-400 rounded-full bg-white ml-[-1rem]" />
        <div className="w-[3rem] h-[3rem] rounded-full bg-white mr-[-1rem]" />
      </section>

      {/* price */}
      <section className="flex items-center justify-between px-[3rem]">
        <div className="">
          <h3>You have to pay</h3>
          <p className="text-blue-900 text-[1.375rem] font-[900]">
            549<span className="text-[1rem] font-[700]">.99 </span>{' '}
            <span className="text-[1rem] text-gray-400 font-normal">USD</span>{' '}
          </p>
        </div>

        <div className="w-[2.5rem] h-[3rem] rounded-[.5rem] bg-gray-600" />
      </section>
    </aside>
  )
}
