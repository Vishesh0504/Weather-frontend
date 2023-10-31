
const card = ({title,data,src}) => {
  return (
    <div className="bg-navbar p-6 rounded-xl h-45 flex flex-col gap-2">
        <div className="flex justify-center">
          <img className='object-center' src={src} width='60px' height='60px'/>
        </div>

        <p className=" p-3 pb-0 text-center text-white font-bolder text-3xl font-poppins ">
            {data}
        </p>
        <p className="text-white font-poppins text-lg text-center -mt-2">
            {title}
        </p>
    </div>
  )
}

export default card