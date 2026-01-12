import "../unityproject2Dsub1/subpage.scss";

export default function WebProjectSub1(){
    return(
        <div className="unity-sub">
            <div className="title">
                <h1>Shopping Mall Web Project</h1>
                <h2>React + Java 기반 웹 서비스 클론 프로젝트</h2>
            </div>
            <div className="content">
                <div className="description">
                        - React 프론트엔드와 Java(JSP) 백엔드를 연동하여 구현한 웹 서비스 클론 프로젝트<br />
                        <br />
                        본 프로젝트는 마켓컬리 웹 서비스를 참고하여 React 기반 프론트엔드와 Java(JSP) 백엔드 서버를 연동해 구현한 웹 개발 프로젝트입니다.<br />
                        회원 인증 흐름과 관리자 기능을 중심으로, 실제 서비스에서 사용되는 로그인·권한 분리·관리자 페이지 구조를 직접 설계하고 구현했습니다.<br />
                        Tomcat 서버 환경에서 API 통신을 통해 프론트엔드와 백엔드 간 데이터 흐름을 처리했습니다.<br />
                        <br />
                        <br />
                        - 주요 구현 기능<br />
                        <br />
                        O 회원 기능<br />
                        <br />
                        회원가입<br />
                        로그인 / 로그아웃<br />
                        아이디 / 비밀번호 찾기<br />
                        사용자 인증 및 세션 관리<br />
                        <br />
                        O 관리자 기능<br />
                        <br />
                        관리자 전용 로그인<br />
                        공지사항 작성 / 수정 / 삭제 (CRUD)<br />
                        일반 사용자와 관리자 권한 분리
                    <div className="play-link">
                        <span>URL: </span><a href="https://sj2532nb.github.io/kurly_frontend_deploy/" target="_blank">https://sj2532nb.github.io/kurly_frontend_deploy/</a>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/u5AuTWiWq_A" allowFullScreen />
            </div>
        </div>
    )
}