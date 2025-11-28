import Image from "next/image";
import "../intro/intropage.scss";

export default function UnityProject(){
    return(
        <div className="unity-project">
            <ul>
                <li><a href="!#"><Image src="/vercel.svg" alt="" fill/></a></li>
                <li><a href="!#"><Image src="/window.svg" alt="" fill/></a></li>
            </ul>
        </div>
    );
}