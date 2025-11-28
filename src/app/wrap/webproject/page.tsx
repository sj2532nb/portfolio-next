import Image from "next/image";
import "../intro/intropage.scss";

export default function WebProject(){
    return(
        <div className="web-project">
            <ul>
                <li><a href="!#"><Image src="/file.svg" alt="" fill/></a></li>
                <li><a href="!#"><Image src="/globe.svg" alt="" fill/></a></li>
                <li><a href="!#"><Image src="/next.svg" alt="" fill/></a></li>
            </ul>
        </div>
    );
}