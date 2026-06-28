# 케이스 스터디 쇼케이스 (case-study-showcase)

브라우저로 열어 보는 케이스 스터디 쇼케이스입니다. 단일 `index.html`(759라인 모놀리식)에서 **조립식(모듈러) 구조**로 재구성했습니다 — 케이스를 추가/교체하기 쉽고, 공유 스타일 한 곳만 고치면 전 페이지에 반영됩니다. 면접 화면공유와 인쇄용 `@media print`를 제공하며, 명시적 `@page size: A4`는 강제하지 않습니다.

**포트폴리오 승격 (2026-06-12)**: 사이트 타이틀을 "GenAI 케이스 스터디 포트폴리오"로 승격하고, `index.html`에 소개(About) 섹션(허브 §1 포지셔닝 압축 — 표기는 "GenAI Solutions Consultant (Saltware)"까지만, 실명·연락처 없음) + 전문 영역 칩 + 증거 원칙 스트립 + GitHub 프로필/벤치마크 레포 링크 버튼을 추가했습니다. 외부 링크는 기존 승인 4건 + `github.com/hwan96-ai` 프로필만 허용합니다.

> **공개 배포 상태 (2026-06-28 검토)**: 이 폴더 자체가 공개 remote를 가진 Git 작업 트리입니다. 별도 폴더로 복사하지 않습니다. 반영하려면 이 저장소에서 명시 경로를 stage·commit한 뒤 owner 승인하에 push하고, 설정된 Pages 배포 branch가 해당 commit을 가리키는지 확인합니다. 공개 게시 전에는 validator 명령·rule version·allowlist snapshot·count-only 결과를 기록합니다.

## 구조 (조립식)

```
case-study-showcase/
├── index.html                  ← 얇은 셸: 히어로/포지셔닝 + 케이스 요약 카드 그리드 + 지원 증거
├── assets/
│   ├── styles.css              ← 모든 페이지가 공유하는 단일 스타일시트 (테마 변수·차트·표·인쇄 포함)
│   └── theme.js                ← 다크/라이트 토글 (모든 페이지 공유, JS는 이것 하나뿐)
├── cases/
│   ├── a05-a06-aicc.html       ← A05/A06 대기업 AICC 챗봇→콜봇 PoC (타임라인·차트·캐시 플로 + 해당 한계)
│   ├── a02-tts.html            ← A02 한국어 TTS 평가 기준 설계 (6모델 비교 표 + 해당 한계)
│   ├── a03-braille.html        ← A03 Sapie-Braille 에이전트 확장
│   ├── a04-cardfollow.html     ← A04 CardFollow (SEND_MODE 사다리·7중 게이트 + 해당 한계)
│   ├── a07-sapie-reco.html     ← A07 Sapie Reco 배치 추천 엔진 (DAG 플로·모델 비용 계층화 차트·실패 복원력 + 해당 한계)
│   └── a08-yeonsung.html       ← A08 공개 교육기관 입학상담 챗봇 백엔드 (이중 RAG 트랙·문서 인입 스텝퍼·운영 디테일 + 해당 한계)
└── README.md
```

- `index.html`은 케이스별 심층 내용을 갖지 않습니다. 케이스마다 제목·한 줄 결과·핵심 수치 2~3개를 담은 요약 카드만 있고, 카드가 `cases/*.html` 상세 페이지로 연결됩니다.
- 기존 "정직한 한계" 항목은 각 케이스 상세 페이지로 분배했습니다 (A05/A06 5개 항목 → aicc 페이지, A02 1개 → tts 페이지, A04 1개 → cardfollow 페이지). A07·A08도 각 페이지에 자체 한계 스트립을 갖습니다 (정량 성과 미보유 등).
- A07 상세 페이지의 실제 역할 배지는 "델리버리 리드 · RAG 코어·PoC 직접 구현"입니다 (구현 다수는 동료 — 단독 수행 표현 금지). A08은 "단독 설계·구현·운영 배포"로 표기하되 공개 표시명은 승인 메타데이터가 갱신될 때까지 `공개 교육기관`으로 통일합니다.

## 열람 방법

- `index.html`을 브라우저에서 직접 열면 됩니다 (더블클릭, 로컬 서버 불필요 — 모든 경로가 상대 경로라 `file://`에서 동작).
- 카드 클릭 → `cases/` 상세 페이지, 상세 페이지 상단 "← 쇼케이스 홈"으로 복귀.
- 상단 토글로 라이트/다크 모드 전환 (기본값은 OS `prefers-color-scheme`, 선택은 localStorage에 저장되어 페이지 간 공유).
- 인쇄(Ctrl+P) 시 네비게이션·토글이 숨겨지고 라이트 테마로 정리되어 A4로 출력됩니다. 외부 링크는 인쇄 시 URL이 함께 표기됩니다.

## 새 케이스 페이지 추가 방법

1. `cases/` 아래에서 구조가 비슷한 기존 페이지 하나를 복사합니다 (예: 표 중심이면 `a02-tts.html`, 카드 한 장이면 `a03-braille.html`).
2. 복사본에서 `<title>`, 본문 섹션 내용, (있다면) 해당 케이스의 "정직한 한계" 항목을 교체합니다. 스타일시트 링크(`../assets/styles.css`)와 테마 스크립트(`../assets/theme.js`)는 그대로 둡니다.
3. `index.html`의 `#cases` 그리드에 요약 카드(`<a class="case-card" href="cases/새파일.html">`)를 추가합니다 — 제목 + 한 줄 결과 + 핵심 수치 2~3개. 준비가 덜 됐으면 `class="case-card placeholder"` + `badge-pending`으로 "준비 중" 카드만 먼저 둡니다.
4. 모든 사실·수치는 승인된 공개 범위와 repo-grounded 초안에서만 가져오고, 미승인 실명·내부 엔드포인트·원시 로그는 넣지 않습니다.

## 데이터 출처

- 모든 사실·수치는 승인된 공개 범위와 public-safe 초안·증거 패키지에서 가져오는 것이 원칙입니다. 승인·scan 기록을 재현할 수 없는 항목은 다음 publish 전에 미검증으로 처리합니다.
- 공개 README에는 내부 작업 경로나 비공개 SSOT 파일명을 기록하지 않습니다. 출처 추적이 필요하면 private SSOT에서 승인된 metadata export나 handoff 문서를 확인합니다.
- 성능 수치는 전부 자체 벤치마크 산출물 기준이며, 지표 정의가 바뀌는 구간(Hit@1 vs 응답 관련성)은 차트 각주로 병기했습니다.
- A05/A06의 비즈니스 결과는 "최종 선정 탈락"이 사실이며 그대로 표기했습니다. 수주/도입 성공 표현은 사용하지 않습니다.
- A07·A08은 정량 성과 지표를 보유하지 않으므로 어떤 성과 수치도 적지 않았습니다 (수치 칩은 전부 설계 파라미터: 배치 사이즈, 타임아웃, 청킹 등).

## 기술 노트 (외부 호출 없음)

- 외부 CDN·웹폰트·이미지·자동 네트워크 호출이 전혀 없습니다 (시스템 폰트 스택). CSS는 `assets/styles.css` 하나, JS는 `assets/theme.js`(다크모드 토글) 하나뿐입니다.
- 차트(막대)·스텝퍼·캐시 플로·사다리·게이트는 순수 CSS/HTML로 그렸습니다 — 차트 라이브러리 없음.
- 외부 링크는 아래 4건 + `index.html`의 GitHub 프로필(<https://github.com/hwan96-ai>)·벤치마크 레포 버튼뿐이며, 사용자가 직접 클릭할 때만 새 탭(`rel="noopener noreferrer"`)으로 열립니다:
  - A04 운영 배포: <https://cardfollow-preview-hwan.fly.dev/> (SEND_MODE=test 환경 핀 — 발송 불가 · 로그인 계정 필요, 외부 체험 불가 — 운영 배포 증거로만 제시)
  - A02 공개 벤치마크 레포: <https://github.com/hwan96-ai/korean-tts-benchmark>
  - A07 공개 보도자료: <https://www.newswire.co.kr/newsRead.php?no=1003424> (공개 출시 사실의 공개 근거)
  - A08 실서비스: <https://yeonsung.sapie.ai/> (실제 운영 중인 공개 endpoint. 조직 표시명은 익명화 유지)
- 라이브 API·LLM·RAG 연결, 원격 저장 기능이 없습니다.

## 경계

고객사·콜봇 플랫폼·월패드 제조사 등 미승인 실명은 포함하지 않습니다. 승인 목록은 PRIVATE SSOT에 두며 PUBLIC 저장소에서 상대경로로 직접 참조하지 않습니다. validator가 현재 승인 metadata를 count/boolean으로 확인하지 못하면 익명 표기를 유지합니다.
