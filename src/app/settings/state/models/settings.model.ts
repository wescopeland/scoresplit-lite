import { WidgetInstance } from './widget-instance.model';

export interface Settings {
  isShowingNumberDifferentials: boolean;
  layout: {
    widgets: WidgetInstance[];
  };
  repeatingLevelCount: number;
  goal?: number;
}
