// commonTypes.ts 파일
export interface Score {
  // Score에 포함되는 데이터에 대한 인터페이스를 정의합니다.
  // 예시로 필요한 데이터만 정의하고, 실제 데이터 구조에 따라 수정하세요.
  // 예: id, team, score 등
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  completed: boolean;
  home_team: string;
  away_team: string;
  scores: { name: string; score: string }[];
  last_update: string;
}