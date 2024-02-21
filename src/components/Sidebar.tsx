import React from "react"
import { Link } from "react-router-dom"


export function Sidebar() {
    return (
        <div className="w-[250px] h-[100vh] bg-slate-700 text-white p-8 absolute top-0 left-0">
            <ul className="flex flex-col gap-4 ml-5">
                <li><Link to="/">Feed</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/communities">Сommunities</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </div>
    )
}