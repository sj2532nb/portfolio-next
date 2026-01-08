import "../unityproject2Dsub1/subpage.scss";

export default function UnityProject2DSub3(){
    return(
        <div className="unity-sub">
            <div className="title">
                <h1>Brick Out</h1>
                <h2>벽돌 깨기 아케이드 게임</h2>
            </div>
            <div className="content">
                <div className="description">
                    - 고전 벽돌 깨기 게임을 Unity로 구현한 아케이드 게임<br />
                    <br />
                    Brick Out은 공의 물리 움직임과 충돌을 기반으로 한 아케이드 게임입니다.<br />
                    플레이어는 패들을 조작해 공을 반사시키며 벽돌을 제거하고 스테이지를 클리어합니다.<br />
                    물리 연산과 충돌 처리의 이해를 목표로 제작했습니다.
                    <div className="play-link">
                        <span>Play Link: </span><a href="https://play.unity.com/api/v1/games/game/69f6492b-3ad2-4557-b8d1-4cadc9011492/build/latest/frame" target="_blank">https://play.unity.com/api/v1/games/game/69f6492b-3ad2-4557-b8d1-4cadc9011492/build/latest/frame</a>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/V1ZTq_nP-pE" allowFullScreen />
            </div>
        </div>
    );
}