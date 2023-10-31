/* eslint-disable react/prop-types */


const Navbar = ({setSearch,search,setEnter}) => {
    let time = new Date().toLocaleString("en-GB",{hour:"2-digit",minute:"2-digit"});
    let date = new Date().toLocaleDateString();
    return (
    <div className="flex justify-center p-4 px-10">
        <div className="flex justify-center rounded-xl bg-navbar text-white px-4 py-2.5 text-xl font-bold ml-[48%]">
            {date}, {time}
        </div>
        <div className="rounded xl bg-navbar ml-auto">
            <input
                className="bg-navbar text-white px-4 py-2.5 text-xl font-bold rounded-2xl outline-none border-none"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                onKeyDown={(e)=>{if(e.key === 'Enter')
                {
                    setEnter(true);
                    setSearch("");
                }

                }}
                type="text"
                placeholder="Search Date in mm/dd/yyyy"
            />
        </div>
    </div>

  )
}

export default Navbar