import { Settings } from '../settings.model';
import { LayoutWidget } from '../layout-widget.enum';

export const DonkeyKongJr: Settings = {
  isShowingNumberDifferentials: true,
  layout: {
    widgets: [
      {
        widget: LayoutWidget.Pace,
        isVisible: true,
        labelOverride: 'Estimated Final Score (Level F)'
      },
      {
        widget: LayoutWidget.PreviousLevel,
        isVisible: true,
        labelOverride: null
      },
      {
        widget: LayoutWidget.LevelAverage,
        isVisible: true,
        labelOverride: 'Level Average (Level 1 – Level E)'
      },
      {
        widget: LayoutWidget.Start,
        isVisible: true,
        labelOverride: 'Start Score (Level 1 – Level 3)'
      },
      {
        widget: LayoutWidget.BonusPoints,
        isVisible: false,
        labelOverride: null
      },
      {
        widget: LayoutWidget.DeathPoints,
        isVisible: true,
        labelOverride: null
      }
    ]
  },
  repeatingLevelCount: 18
};
