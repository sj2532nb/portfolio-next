import Image from "next/image";
import Link from "next/link";
import "./intropage.scss";

export default function IntroPage(){
    return(
        <div className="intro-page">
            <ul>
                <li><Link href="/wrap/webprojectsub1"><Image src="/shopping.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></Link></li>
                <li><Link href="/wrap/webprojectsub2"><Image src="/globe.svg" alt="" fill/><div className="img-txt">webprojectsub2</div></Link></li>
                <li><Link href="/wrap/unityprojectsub1"><Image src="/next.svg" alt="" fill/><div className="img-txt">unityprojectsub1</div></Link></li>
                <li><Link href="/wrap/unityprojectsub2"><Image src="/vercel.svg" alt="" fill/><div className="img-txt">unityprojectsub2</div></Link></li>
                <li><Link href="/wrap/unityprojectsub3"><Image src="/window.svg" alt="" fill/><div className="img-txt">unityprojectsub3</div></Link></li>
            </ul>
        </div>
    );
}