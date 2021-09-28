export interface Player {
  name: string;
  holes: Array<{ score: number}>;
  out: number;
  in: number;
  total: number;
  message: string;
  ticker: 0;
}