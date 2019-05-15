import { LayoutWidget } from './layout-widget.enum';

export interface WidgetInstance {
  widget: LayoutWidget;
  isVisible: boolean;
  labelOverride?: string;
}
