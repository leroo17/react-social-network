import React from "react"

export function Navigation() {
    return (
        <header className="h-[80px] bg-slate-700">
            <div className="container mx-auto h-full">
                <nav className="flex justify-between items-center h-full">
                    <a href="/" className="h-14 w-14 text-white flex gap-3 items-center text-xl">
                        <img className="h-14 w-14" src="./images/logo.svg" alt="logo" />
                        Cookies
                    </a>
                    <ul>
                        <li><a className="h-14 w-14 rounded-full flex items-center justify-center bg-[#E09B2D] border-2 border-black" href="/login"><img className="h-8 w-8" src="./images/user-zero.svg" alt="user" /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}