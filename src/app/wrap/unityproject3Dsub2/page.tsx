import "../unityproject2Dsub1/subpage.scss";

export default function UnityProject3DSub2(){
    return(
        <div className="unity-sub">
            <div className="title">
                <h1>Prototype 4</h1>
                <h2>3D 물리 기반 프로토타입 게임</h2>
            </div>
            <div className="content">
                <div className="description">
                    - Unity 3D 물리 시스템을 활용해 제작한 플레이어 조작 중심의 프로토타입 게임<br />
                    <br />
                    Prototype 4는 Unity 3D 환경에서 물리 기반 움직임과 상호작용을 중심으로 제작한 프로토타입 게임입니다.<br />
                    플레이어는 오브젝트를 조작하며 목표를 달성해야 하며, 단순한 조작 속에서도 물리 반응과 충돌을 활용한 게임 플레이를 경험할 수 있도록 설계했습니다.<br />
                    <br />
                    3D 공간에서의 카메라 시점, 오브젝트 이동, 충돌 처리 등 Unity 3D의 핵심 요소를 이해하고 적용하는 데 초점을 맞춘 프로젝트입니다.
                    <div className="play-link">
                        <span>Play Link: </span><a href="https://play.unity.com/api/v1/games/game/e4686d55-08fd-41f6-b97c-6ed732d600d9/build/latest/frame" target="_blank">https://play.unity.com/api/v1/games/game/e4686d55-08fd-41f6-b97c-6ed732d600d9/build/latest/frame</a>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/GxV1aDkKmIg" allowFullScreen />
            </div>
        </div>
    );
}