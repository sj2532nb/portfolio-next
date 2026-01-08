import "../unityproject2Dsub1/subpage.scss";

export default function UnityProject2DSub2(){
    return(
        <div className="unity-sub">
            <div className="title">
                <h1>Kimchi Run</h1>
                <h2>캐주얼 러닝 액션 게임</h2>
            </div>
            <div className="content">
                <div className="description">
                    - 장애물을 피하며 달리는 2D 캐주얼 러닝 게임<br />
                    <br />
                    Kimchi Run은 간단한 조작으로 즐길 수 있는 2D 러닝 게임입니다.<br />
                    플레이어는 캐릭터를 조작해 장애물을 피하고, 게임 진행에 따라 점수를 획득합니다.<br />
                    짧은 플레이 타임에도 성취감을 느낄 수 있도록 설계했습니다.
                    <div className="play-link">
                        <span>Play Link: </span><a href="https://play.unity.com/api/v1/games/game/e37b07a6-a03f-4b64-884a-4b13c9238639/build/latest/frame" target="_blank">https://play.unity.com/api/v1/games/game/e37b07a6-a03f-4b64-884a-4b13c9238639/build/latest/frame</a>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/KmMNY1vHYOU" allowFullScreen />
            </div>
        </div>
    );
}