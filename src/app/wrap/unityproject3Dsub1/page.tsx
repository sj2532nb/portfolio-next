import "../unityproject2Dsub1/subpage.scss";

export default function UnityProject3DSub1(){
    return(
        <div className="unity-sub">
            <div className="title">
                <h1>Essential Project</h1>
                <h2>3D Game Project</h2>
            </div>
            <div className="content">
                <div className="description">
                    - Unity 3D 환경에서 다양한 게임 플레이 요소를 구현하고 WebGL로 빌드한 통합 프로젝트<br />
                    <br />
                    Essential Project는 Unity 3D를 기반으로 여러 게임 플레이 요소와 시스템을 하나의 프로젝트 안에서 구현한 3D 게임 프로젝트입니다.<br />
                    각기 다른 플레이 방식과 기능을 실험하며, 3D 공간에서의 조작, 물리 처리, 카메라 제어, UI 구성을 종합적으로 다루었습니다.
                    <div className="play-link">
                        <span>Play Link: </span><a href="https://play.unity.com/api/v1/games/game/b54e5d00-781e-47e6-bd44-45e05f3e9d17/build/latest/frame" target="_blank">https://play.unity.com/api/v1/games/game/b54e5d00-781e-47e6-bd44-45e05f3e9d17/build/latest/frame</a>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/ZW0TcxOuD8A" allowFullScreen />
                <iframe src="https://www.youtube.com/embed/WCbjw_xXHUw" allowFullScreen />
                <iframe src="https://www.youtube.com/embed/pvYQY5YugAI" allowFullScreen />
            </div>
        </div>
    );
}