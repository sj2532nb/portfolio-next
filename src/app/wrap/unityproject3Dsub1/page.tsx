import "../unityproject2Dsub1/subpage.scss";

export default function UnityProject3DSub1(){
    return(
        <div className="unity-sub">
            <div className="title">
                <h1>Essential Project</h1>
                <h2>Clicky Game</h2>
            </div>
            <div className="content">
                <div className="description">
                    Prototype 5는 Unity 학습 과정에서 제작한 2D 게임 프로토타입으로,<br />
                    플레이어 조작과 즉각적인 반응성을 중심으로 기본적인 게임 메커니즘을 구현했습니다.<br />
                    간단하지만 게임 플레이 흐름을 명확히 전달하는 데 초점을 맞췄습니다.<br />
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