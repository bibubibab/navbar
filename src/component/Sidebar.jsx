import React from "react";

const Sidebar = () => {
    return (
        <div className="w-64 bg-white fixed h-full px-4 py-2 shadow-lg  flex flex-col font-poppins">
            <div className="my-2 mu-4">
                    <img src="images/nautika1.png" className="p-4 hover:text-sky-950"></img>
            </div>
            <hr/>
            {/* bagian ats sidebar */}
            <ul className="mt-3  hover:bg- font-semibold">
                <li className="mt-3 mb-7 py-2">
                <img src="images/kalender.svg" alt="event" className="ml-6 group-hover:text-[#00609B] inline-block w-6 h-6 mr-2 -mt-2"></img>
                    <a href="" className="px-3 text-gray-400 hover:text-[#00609B]">
                        Event
                    </a>
                </li>
                <li className="mb-7 py-2">
                <img src="images/donasi.svg" alt="event" className="ml-6 group-hover:text-[#00609B] inline-block w-6 h-6 mr-2 -mt-2"></img>
                    <a href="" className="px-3 text-gray-400 hover:text-sky-950">
                        Donasi
                    </a>
                </li>
                <li className="mb-7 py-2">
                <img src="images/orang.svg" alt="event" className="ml-6 group-hover:text-[#00609B] inline-block w-6 h-6 mr-2 -mt-2"></img>
                    <a href="" className="px-3 text-gray-400 hover:text-sky-950">
                        Lapor isu
                    </a>
                </li>
                <li className="mb-7 py-2">
                <img src="images/pengaturan.svg" alt="event" className="ml-6 group-hover:text-[#00609B] inline-block w-6 h-6 mr-2 -mt-2"></img>
                    <a href="" className="px-3 text-gray-400 hover:text-sky-950">
                        Setting
                    </a>
                </li>
            </ul>
            {/* bagian bawah sidebar */}
            <hr/>
            <div className="mt-auto mb-4 flex">
            <ul className="mt-auto hover:bg- font-semibold">
                <li className="mt-3 mb-7 py-2">
                <img src="images/tanya.svg" alt="event" className="ml-6 group-hover:text-[#00609B] inline-block w-6 h-6 mr-2 -mt-2"></img>
                    <a href="" className="px-3 text-gray-400 hover:text-[#00609B]">
                        Bantuan
                    </a>
                </li>
                <li className="mb-7 py-2">
                <img src="images/tanya.svg" alt="event" className="ml-6 group-hover:text-[#00609B] inline-block w-6 h-6 mr-2 -mt-2"></img>
                    <a href="" className="px-3 text-gray-400 hover:text-[#00609B]">
                        Bantuan
                    </a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Sidebar