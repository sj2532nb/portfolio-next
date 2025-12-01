import Image from "next/image";
import Link from "next/link";
import "../intro/intropage.scss";

export default function UnityProject(){
    return(
        <div className="unity-project">
            <ul>
                <li><Link href="/wrap/unityprojectsub1"><Image src="/next.svg" alt="" fill/><div className="img-txt">unityprojectsub1</div></Link></li>
                <li><Link href="/wrap/unityprojectsub2"><Image src="/vercel.svg" alt="" fill/><div className="img-txt">unityprojectsub2</div></Link></li>
                <li><Link href="/wrap/unityprojectsub3"><Image src="/window.svg" alt="" fill/><div className="img-txt">unityprojectsub3</div></Link></li>
            </ul>
        </div>
    );
}