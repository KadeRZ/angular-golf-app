import { Player } from './player';

export interface GameData {
  course: {};
  difficultyNum: number;
  players: Array<{
    name: string;
    holes: Array<{ score: number }>;
    out: number;
    in: number;
    total: number;
    message: string;
    ticker: 0;
  }>;
}