import { WidgetInstance } from './widget-instance.model';

export interface Settings {
  layout: {
    widgets: WidgetInstance[];
  };
  repeatingLevelCount: number;
  goal?: number;
}
