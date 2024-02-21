import React from "react"

type MainProps = {
    children: React.ReactNode;
  };

export function Main(props: MainProps) {
    return (
        <div className="flex bg-slate-700 h-[100vh] overflow-hidden">
            <div className="container mx-auto bg-white relative">
                {props.children}
            </div>
        </div>
    )
}