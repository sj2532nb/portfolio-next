import Image from "next/image";
import "./intropage.scss";

export default function IntroPage(){
    return(
        <div className="intro-page">
            <ul>
                <li><a href="!#"><Image src="/shopping.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></a></li>
                <li><a href="!#"><Image src="/shopping.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></a></li>
                <li><a href="!#"><Image src="/shopping.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></a></li>
                <li><a href="!#"><Image src="/shopping.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></a></li>
                <li><a href="!#"><Image src="/shopping.png" alt="" fill/><div className="img-txt">Shopping Mall Web Project</div></a></li>
            </ul>
        </div>
    );
}