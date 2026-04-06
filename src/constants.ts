import { PortfolioItem } from "./types";

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: "1",
    title: "2024 K-POP 월드 페스티벌",
    location: "서울 올림픽주경기장",
    date: "2024.05",
    description: "메인 무대 대형 커브드 LED 설치 및 실시간 영상 운영",
    equipment: "Novastar H9, Disguise vx4",
    imageUrl: "https://picsum.photos/seed/concert1/1200/800",
    category: "concert"
  },
  {
    id: "2",
    title: "글로벌 테크 컨퍼런스 2023",
    location: "코엑스 D홀",
    date: "2023.11",
    description: "기업 브랜드 런칭쇼 영상 시스템 구축",
    equipment: "Barco E2, Watchout",
    imageUrl: "https://picsum.photos/seed/tech1/1200/800",
    category: "corporate"
  },
  {
    id: "3",
    title: "국가대표 A매치 중계 전광판",
    location: "상암 월드컵경기장",
    date: "2024.03",
    description: "경기장 내 대형 전광판 실시간 중계 시스템 연동",
    equipment: "Ross Video Carbonite, LED Processor",
    imageUrl: "https://picsum.photos/seed/sports1/1200/800",
    category: "broadcast"
  }
];
