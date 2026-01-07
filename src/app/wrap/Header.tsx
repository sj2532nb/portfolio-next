"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./header.scss";

export default function Header(){

    const pathname = usePathname();
    const [isIntro, setIntro] = useState(true);
    const [isUnity, setUnity] = useState(false);

    const onClickIntro=()=>{
        setIntro(true);
        setUnity(false);
    }

    const onClickResume=()=>{
        setIntro(false);
        setUnity(false);
    }

    return(
        <div className="header">
            <div className="top">
                <div className="left">
                    <Link href="/wrap/intro" onClick={onClickIntro}>Kim Dohui</Link><br />
                    <span>김도희</span>
                </div>
                <div className="right">
                    <Link href="/wrap/intro" className={pathname === "/wrap/intro" ? "on" : ""} onClick={onClickIntro}>Home</Link>
                    <Link href="/wrap/resume" className={pathname === "/wrap/resume" ? "on" : ""} onClick={onClickResume}>Resume</Link>
                </div>
            </div>
            {isIntro &&
            (<nav>
                <Link href="/wrap/intro" className={pathname === "/wrap/intro" ? "on" : ""} onClick={()=>setUnity(false)}>ALL</Link>
                <Link href="/wrap/webproject" className={pathname === "/wrap/webproject" ? "on" : ""} onClick={()=>setUnity(false)}>Web</Link>
                <Link href="/wrap/unityproject" className={pathname === "/wrap/unityproject" ? "on" : ""} onClick={()=>setUnity(true)}>Unity</Link>
            </nav>)}
            {isIntro && isUnity &&
            (<nav className="nav2">
                <Link href="/wrap/unityproject" className={pathname === "/wrap/unityproject" ? "on" : ""} onClick={()=>setUnity(true)}>ALL</Link>
                <Link href="/wrap/unityproject2D" className={pathname === "/wrap/unityproject2D" ? "on" : ""} onClick={()=>setUnity(true)}>2D</Link>
                <Link href="/wrap/unityproject3D" className={pathname === "/wrap/unityproject3D" ? "on" : ""} onClick={()=>setUnity(true)}>3D</Link>
            </nav>)}
        </div>
    );
}