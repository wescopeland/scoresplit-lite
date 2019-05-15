import { WidgetInstance } from './widget-instance.model';

export interface Settings {
  goal?: number;
  isShowingNumberDifferentials: boolean;
  layout: {
    widgets: WidgetInstance[];
  };
  repeatingLevelCount: number;
  scoreDivisor: number;
}
