export const Label = ({ title, desc }: any) => {
  return (
    <div className="">
      <h3 className="text-blue-900 font-[600] text-[1.125rem]">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  )
}
