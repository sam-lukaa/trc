import { Label } from '../label'
import { CountDown } from '../countdown'
import { Button, Input, InputWithIcon } from 'shared/components'

export const Form = ({ data, setData }: any) => {
  const { number, cvv, expiryMonth, expiryYear, password } = data

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target

    setData({ ...data, [name]: value })
  }

  return (
    <section className="lg:w-[60%]">
      <header className="w-full flex max-md:flex-col max-md:gap-[1rem] items-center justify-between mb-[6rem]">
        <div className="flex items-center gap-[.4rem]">
          <div className="w-[2.8rem] h-[2.8rem] bg-blue-600 rounded-full" />

          <h1 className="text-blue-900 font-[700] text-[28px]">
            AceCoin<span className="font-[400]">Pay</span>
          </h1>
        </div>

        <div className="flex items-center">
          <CountDown duration="0" />
          <CountDown duration="1" />
          <p className="font-[700] text-blue-900 text-[22px] mr-[.3rem]">:</p>
          <CountDown duration="1" />
          <CountDown duration="9" />
        </div>
      </header>

      <form className="flex flex-col gap-[2rem]">
        <fieldset className="w-full flex flex-col gap-[.3rem]">
          <div className="flex items-center justify-between mb-[2rem]">
            <div className="max-md:w-[70%]">
              <h3 className="text-blue-900 font-[600] text-[1.125rem]">
                Card Number
              </h3>
              <p className="text-gray-400">
                Enter the 16-digit card number on the card
              </p>
            </div>

            <button className="text-blue-600">
              <span className="font-[700]">&#9998; </span> Edit
            </button>
          </div>

          <div className="flex items-center justify-between shadow-sm bg-gray-100 rounded-[.5rem] p-[1.5rem]">
            <div className="flex items-center gap-[.8rem]">
              <div className="flex items-center">
                <div className="w-[1.8rem] h-[1.8rem] rounded-full bg-red-500" />
                <div className="w-[1.8rem] h-[1.8rem] rounded-full bg-orange-500 opacity-[.5] ml-[-.6rem]" />
              </div>

              <div className="flex items-center gap-[.3rem]">
                <p className="text-gray-400">2412</p>
                <p className="text-blue-900 font-[500]"> - </p>
                <p className="text-gray-400">7512</p>
                <p className="text-blue-900 font-[500]"> - </p>
                <p className="text-gray-400">3412</p>
                <p className="text-blue-900 font-[500]"> - </p>
                <p className="text-gray-400">3456</p>
              </div>
            </div>

            <p className="w-[2rem] h-[2rem] pt-[.2rem] text-center bg-blue-500 text-white font-[600] rounded-full">
              &#10003;
            </p>
          </div>
        </fieldset>

        {/* cvv */}
        <fieldset className="flex max-md:flex-col lg:items-center justify-between gap-[1rem]">
          <Label
            title="CVV Number"
            desc="Enter the 3 or 4 digit number on the card"
          />

          <InputWithIcon
            value={cvv}
            type="number"
            name="cvv"
            placeholder="CVV"
          />
        </fieldset>

        {/* expiry */}
        <fieldset className="flex max-md:flex-col lg:items-center justify-between gap-[1rem]">
          <Label
            title="Expiry Date"
            desc="Enter the expiration date of the card"
          />

          <div className="w-full lg:w-[50%] flex items-center justify-end gap-[1rem]">
            <Input
              type="number"
              // min={2}
              maxLength={2}
              placeholder="MM"
              name="expiryMonth"
              value={expiryMonth}
              onChange={handleChange}
            />

            <p className="font-[600] text-blue-900 text-[1.375rem]">/</p>

            <Input
              type="number"
              min={2}
              maxLength={1}
              placeholder="YY"
              name="expiryYear"
              value={expiryYear}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* password */}
        <fieldset className="flex max-md:flex-col lg:items-center justify-between gap-[1rem]">
          <Label title="Password" desc="Enter your Dynamic password" />

          <InputWithIcon
            value={password}
            type="password"
            name="password"
            placeholder="Password"
          />
        </fieldset>

        <Button>Pay Now</Button>
      </form>
    </section>
  )
}
