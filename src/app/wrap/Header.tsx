import "./header.scss";
import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
            <div className="top">
                <div className="left">
                    <Link href="./intro">Kim Dohui</Link><br />
                    <span>김도희</span>
                </div>
                <div className="right">
                    <Link href="./intro">Home</Link>
                    <Link href="./resume">Resume</Link>
                </div>
            </div>
            <nav>
                <Link href="./intro">ALL</Link>
                <Link href="./webproject">Web</Link>
                <Link href="./unityproject">Unity</Link>
            </nav>
        </div>
    );
}