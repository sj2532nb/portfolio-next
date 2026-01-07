import Image from "next/image";
import Link from "next/link";
import "../intro/intropage.scss";

export default function UnityProject3D() {
    return(
        <div className="unity-project">
            <ul>
                <li><Link href="/wrap/unityprojectsub5"><Image src="/EssentialProjectCover.png" alt="" fill/><div className="img-txt">Essential Project</div></Link></li>
                <li><Link href="/wrap/unityprojectsub6"><Image src="/Prototype4Cover.png" alt="" fill/><div className="img-txt">Protorype 4</div></Link></li>            </ul>
        </div>
    )
}