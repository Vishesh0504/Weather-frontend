/* eslint-disable react/prop-types */
import { useEffect } from "react";
import {back,find} from "../Assets"

const Navbar = ({setInput,input,search,setSearch}) => {
    let time = new Date().toLocaleString("en-GB",{hour:"2-digit",minute:"2-digit"});
    let date = new Date().toLocaleDateString();
    useEffect(()=>{
        console.log(search);
    },[search]);
    return (
    <div className="flex justify-center p-4 px-10">
        <div className="mr-auto">
            {search?<img className="h-10 w-10" src={back} alt="logo" onClick={()=>setSearch("false")}/>:""}
        </div>
        <div className="flex justify-center rounded-xl bg-navbar text-white px-4 py-2.5 text-xl font-bold ">
            {time}, {date}
        </div>
        <div className="rounded xl bg-navbar absolute ml-auto flex items-center px-4">
        <img src={find} alt="search" className="h-6 w-9 border-r-2 border-slate-400 pr-2" />
            <input
                className="bg-navbar text-white px-4 py-2.5 text-xl font-bold rounded-2xl outline-none border-none"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                onKeyDown={(e)=>{if(e.key === 'Enter')
                {
                    setSearch(true);
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