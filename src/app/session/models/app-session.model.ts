import { Settings } from './settings.model';

export interface AppSession {
  bonuses: number[];
  currentPace: number;
  currentStart: number;
  deaths: number[];
  levelScores: number[];
  settings: Settings;
  shorthandMultiplier: number;
  subtractionCache: number;
}
