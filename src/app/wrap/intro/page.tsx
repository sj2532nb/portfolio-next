import Image from "next/image";
import Link from "next/link";
import "./intropage.scss";

export default function IntroPage(){
    return(
        <div className="intro-page">
            <ul>
                <li><Link href="/wrap/webprojectsub1"><Image src="/MarketKurlyCover.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></Link></li>
                <li><Link href="/wrap/unityproject2Dsub1"><Image src="/Prototype5Cover.png" alt="" fill/><div className="img-txt">Protorype 5</div></Link></li>
                <li><Link href="/wrap/unityproject2Dsub2"><Image src="/Kimchi-RunCover.png" alt="" fill/><div className="img-txt">Kimchi Run</div></Link></li>
                <li><Link href="/wrap/unityproject2Dsub3"><Image src="/BrickOutCover2.png" alt="" fill/><div className="img-txt">Brick Out</div></Link></li>
                <li><Link href="/wrap/unityproject2Dsub4"><Image src="/FarmTycoonCover2.png" alt="" fill/><div className="img-txt">Farm Tycoon</div></Link></li>
                <li><Link href="/wrap/unityproject3Dsub1"><Image src="/EssentialProjectCover.png" alt="" fill/><div className="img-txt">Essential Project</div></Link></li>
                <li><Link href="/wrap/unityproject3Dsub2"><Image src="/Prototype4Cover.png" alt="" fill/><div className="img-txt">Protorype 4</div></Link></li>
            </ul>
        </div>
    );
}