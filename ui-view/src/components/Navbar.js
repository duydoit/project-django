import React from 'react'
import Nav from './Nav'
import NavItem from './NavItem'

const Navbar = () => {
    return (
        <nav className=" bg-indigo-400">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"></img>
                            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"></img>
                        </div>
                        <div class="hidden sm:block sm:ml-6">
                            <Nav>
                                <NavItem href="/" isActive>Home</NavItem>
                                <NavItem href="/employee">Employee</NavItem>
                                <NavItem href="/department">Department</NavItem>
                            </Nav>
                        </div>
                    </div>
                    <button className="hidden md:block sm:ml-6 font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-600 px-3 py-2">Login</button>
                </div>
                <div class="sm:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <ul>
                            <NavItem href="/" isActive>Home</NavItem>
                            <NavItem href="/employee">Employee</NavItem>
                            <NavItem href="/department">Department</NavItem>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
