import "../unityproject2Dsub1/subpage.scss";

export default function UnityProject2DSub4(){
    return(
        <div className="unity-sub">
            <div className="title">
                <h1>Farm Tycoon</h1>
                <h2>2D 농장 경영 시뮬레이션 게임</h2>
            </div>
            <div className="content">
                <div className="description">
                    - 플레이어의 선택과 관리에 따라 농장이 성장하는 2D 타이쿤 게임<br />
                    <br />
                    Farm Tycoon은 작물 재배와 자원 관리를 중심으로 한 2D 농장 경영 게임입니다.<br />
                    플레이어는 마을을 탐험하고 농장을 운영하며 작물을 심고 수확하고, 판매할 수 있습니다.<br />
                    <div className="play-link">
                        <span>Play Link: </span><a href="https://play.unity.com/api/v1/games/game/47016934-9140-44c7-bdf0-59521d9e75a9/build/latest/frame" target="_blank">https://play.unity.com/api/v1/games/game/47016934-9140-44c7-bdf0-59521d9e75a9/build/latest/frame</a>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/MD2mXAqCxKg" allowFullScreen />
            </div>
        </div>
    );
}