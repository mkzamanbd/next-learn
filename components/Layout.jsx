import React from 'react'
export default function Layout({children}) {
    return (
        <div id="master-layout" className="master-layout">
            { children }
        </div>
    )
}
