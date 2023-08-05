import Navbar from "../Navbar/Navbar";

import React from 'react'

type LayoutProps = {
    children:React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
 return (
   <>
     <Navbar />
     <main>{children}</main>
   </>
 );
}

export default Layout

