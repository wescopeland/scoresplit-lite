import { WidgetInstance } from './widget-instance.model';

export interface Settings {
  layout: {
    widgets: WidgetInstance[];
  };
  goal?: number;
}
