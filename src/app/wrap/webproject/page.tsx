import Image from "next/image";
import Link from "next/link";
import "../intro/intropage.scss";

export default function WebProject(){
    return(
        <div className="web-project">
            <ul>
                <li><Link href="/wrap/webprojectsub1"><Image src="/MarketKurlyCover.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></Link></li>
            </ul>
        </div>
    );
}