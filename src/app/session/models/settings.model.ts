import { LayoutWidget } from './layout-widget.enum';

export interface Settings {
  layout: {
    widgets: Array<{ widget: LayoutWidget; labelOverride?: string }>;
  };
  goal?: number;
}
