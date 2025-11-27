import Header from "./Header";
import Footer from "./Footer";

import { ReactNode } from "react";

export default function WrapLayout({children}:{ children: ReactNode }){
    return(
        <div className="wrap-container bg-gray-900 text-gray-50 min-h-screen">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}