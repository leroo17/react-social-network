import React from "react"

type ContentProps = {
    children: React.ReactNode;
  };

export function Content(props: ContentProps) {
    return (
        <div className="ml-[250px] p-8">{props.children}</div>
    )
}