import "./subpage.scss";

export default function UnityProject2DSub1(){
    return(
        <div className="unity-sub">
            <div className="title">
                <h1>Prototype 5</h1>
                <h2>Clicky Game</h2>
            </div>
            <div className="content">
                <div className="description">
                    - Unity 핵심 기능을 활용해 제작한 액션 중심 프로토타입 게임<br />
                    <br />
                    Prototype 5는 Unity 학습 과정에서 제작한 2D 게임 프로토타입으로, 플레이어 조작과 즉각적인 반응성을 중심으로 기본적인 게임 메커니즘을 구현했습니다.<br />
                    간단하지만 게임 플레이 흐름을 명확히 전달하는 데 초점을 맞췄습니다.
                    <div className="play-link">
                        <span>Play Link: </span><a href="https://play.unity.com/api/v1/games/game/e3c3fbb9-1e9b-4985-a618-813600766c2e/build/latest/frame" target="_blank">https://play.unity.com/api/v1/games/game/e3c3fbb9-1e9b-4985-a618-813600766c2e/build/latest/frame</a>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/g8RAhts9jHY" allowFullScreen />
            </div>
        </div>
    );
}