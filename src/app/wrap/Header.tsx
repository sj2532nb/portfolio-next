"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./header.scss";

export default function Header(){

    const pathname = usePathname();
    const [isIntro, setIntro] = useState(true);

    return(
        <div className="header">
            <div className="top">
                <div className="left">
                    <Link href="/wrap/intro" onClick={()=>setIntro(true)}>Kim Dohui</Link><br />
                    <span>김도희</span>
                </div>
                <div className="right">
                    <Link href="/wrap/intro" className={pathname === "/wrap/intro" ? "on" : ""} onClick={()=>setIntro(true)}>Home</Link>
                    <Link href="/wrap/resume" className={pathname === "/wrap/resume" ? "on" : ""} onClick={()=>setIntro(false)}>Resume</Link>
                </div>
            </div>
            {isIntro &&
            (<nav>
                <Link href="/wrap/intro" className={pathname === "/wrap/intro" ? "on" : ""}>ALL</Link>
                <Link href="/wrap/webproject" className={pathname.startsWith("/wrap/webproject") ? "on" : ""}>Web</Link>
                <Link href="/wrap/unityproject" className={pathname.startsWith("/wrap/unityproject") ? "on" : ""}>Unity</Link>
            </nav>)}
            {pathname.startsWith("/wrap/unityproject") &&
            (<nav className="nav2">
                <Link href="/wrap/unityproject" className={pathname === "/wrap/unityproject" ? "on" : ""}>ALL</Link>
                <Link href="/wrap/unityproject2D" className={pathname.startsWith("/wrap/unityproject2D") ? "on" : ""}>2D</Link>
                <Link href="/wrap/unityproject3D" className={pathname.startsWith("/wrap/unityproject3D") ? "on" : ""}>3D</Link>
            </nav>)}
        </div>
    );
}