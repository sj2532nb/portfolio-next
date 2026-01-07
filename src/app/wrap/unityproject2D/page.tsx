import Image from "next/image";
import Link from "next/link";
import "../intro/intropage.scss";

export default function UnityProject2D() {

    return(
        <div className="unity-project">
            <ul>
                <li><Link href="/wrap/unityprojectsub1"><Image src="/Prototype5Cover.png" alt="" fill/><div className="img-txt">Protorype 5</div></Link></li>
                <li><Link href="/wrap/unityprojectsub2"><Image src="/Kimchi-RunCover.png" alt="" fill/><div className="img-txt">Kimchi Run</div></Link></li>
                <li><Link href="/wrap/unityprojectsub3"><Image src="/BrickOutCover.png" alt="" fill/><div className="img-txt">Brick Out</div></Link></li>
                <li><Link href="/wrap/unityprojectsub4"><Image src="/FarmTycoonCover2.png" alt="" fill/><div className="img-txt">Farm Tycoon</div></Link></li>
            </ul>
        </div>
    )
}