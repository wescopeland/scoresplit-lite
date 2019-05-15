import { Settings } from '../settings.model';
import { LayoutWidget } from '../layout-widget.enum';

export const DonkeyKongRemix: Settings = {
  isShowingNumberDifferentials: true,
  layout: {
    widgets: [
      {
        widget: LayoutWidget.Pace,
        isVisible: true,
        labelOverride: 'Estimated Final Score (L22)'
      },
      {
        widget: LayoutWidget.PreviousLevel,
        isVisible: true,
        labelOverride: null
      },
      {
        widget: LayoutWidget.LevelAverage,
        isVisible: true,
        labelOverride: 'Level Average (L5 – L21)'
      },
      {
        widget: LayoutWidget.Start,
        isVisible: true,
        labelOverride: 'Start Score (L1 – L4)'
      },
      {
        widget: LayoutWidget.BonusPoints,
        isVisible: true,
        labelOverride: null
      },
      {
        widget: LayoutWidget.DeathPoints,
        isVisible: true,
        labelOverride: null
      }
    ]
  },
  repeatingLevelCount: 17
};
