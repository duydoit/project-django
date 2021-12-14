import React from 'react'

function Navbar() {
    return (
        <div className="bg-slate-50 border-b shadow-sm">
            <div className="sm:container sm:mx-auto">
                <div className="flex justify-between w-full h-14 px-10 items-center text-slate-500">
                    <div className=" flex justify-start items-center">
                        <div className="flex items-center w-40 h-14">
                            <div className="w-8 h-8 rounded-full bg-cyan-500"></div>
                            <a className=" text-lg font-medium mx-2">MyApp</a>
                        </div>
                        <div className=" hidden md:block">
                            <div className="flex justify-start w-48 font-medium">
                                <div className="mx-2">Employee</div>
                                <div className="mx-2">Department</div>
                                <div className="mx-2">Satatistic</div>
                                <div className="mx-2">Timesheet</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-32 justify-between items-center">
                        <div className="hover:text-sky-400 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                        <div className="hover:text-sky-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <img className="w-8  h-8 rounded-full hover:ring hover:ring-sky-400 ring ring-slate-300" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBd1H8uHoB-7g-o7U57zdPNWr0lICIKDsnA&usqp=CAU/" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
