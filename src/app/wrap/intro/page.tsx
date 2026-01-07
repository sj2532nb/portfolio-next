import Image from "next/image";
import Link from "next/link";
import "./intropage.scss";

export default function IntroPage(){
    return(
        <div className="intro-page">
            <ul>
                <li><Link href="/wrap/webprojectsub1"><Image src="/shopping.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></Link></li>
                {/* <li><Link href="/wrap/webprojectsub2"><Image src="/globe.svg" alt="" fill/><div className="img-txt">webprojectsub2</div></Link></li> */}
                <li><Link href="/wrap/unityprojectsub1"><Image src="/Prototype5Cover.png" alt="" fill/><div className="img-txt">Protorype 5</div></Link></li>
                <li><Link href="/wrap/unityprojectsub2"><Image src="/Kimchi-RunCover.png" alt="" fill/><div className="img-txt">Kimchi Run</div></Link></li>
                <li><Link href="/wrap/unityprojectsub3"><Image src="/BrickOutCover.png" alt="" fill/><div className="img-txt">Brick Out</div></Link></li>
                <li><Link href="/wrap/unityprojectsub4"><Image src="/FarmTycoonCover2.png" alt="" fill/><div className="img-txt">Farm Tycoon</div></Link></li>
                <li><Link href="/wrap/unityprojectsub5"><Image src="/EssentialProjectCover.png" alt="" fill/><div className="img-txt">Essential Project</div></Link></li>
                <li><Link href="/wrap/unityprojectsub6"><Image src="/Prototype4Cover.png" alt="" fill/><div className="img-txt">Protorype 4</div></Link></li>
            </ul>
        </div>
    );
}