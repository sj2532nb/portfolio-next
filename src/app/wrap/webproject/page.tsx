import Image from "next/image";
import Link from "next/link";
import "../intro/intropage.scss";

export default function WebProject(){
    return(
        <div className="web-project">
            <ul>
                <li><Link href="/wrap/webprojectsub1"><Image src="/shopping.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></Link></li>
                <li><Link href="/wrap/webprojectsub2"><Image src="/globe.svg" alt="" fill/><div className="img-txt">webprojectsub2</div></Link></li>
            </ul>
        </div>
    );
}