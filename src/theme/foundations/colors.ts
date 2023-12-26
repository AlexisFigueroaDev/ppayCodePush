import { palette } from './palette';

export const colors = {
  primary: {
    20: palette.cyberLavender,
    40: palette.winterspringLilac,
    60: palette.baingani,
    80: palette.shadyNeonBlue,
    100: palette.blurple,
    400: palette.coldLips,
  },
  secondaryOne: {
    20: palette.placeboSky,
    40: palette.freshAir,
    60: palette.libraBlueMorpho,
    80: palette.cyanite,
    100: palette.germanderSpeedwell,
  },
  secondaryTwo: {
    20: palette.distantHorizon,
    40: palette.tadornaTeal,
    60: palette.greenishTeal,
    80: palette.greedoGreen,
    100: palette.pictureBookGreen,
  },
  secondaryThree: {
    20: palette.granulatedSugar,
    40: palette.brightHalo,
    60: palette.mySin,
    80: palette.princetonOrange,
    100: palette.vividOrange,
    120: palette.danger,
  },
  secondaryFour: {
    20: palette.seaSaltSherbet,
    40: palette.peachBurst,
    60: palette.glowingBrakeDisc,
    80: palette.hawthornBerry,
    100: palette.scabRed,
  },
  secondaryFive: {
    20: palette.palePhthaloBlue,
    40: palette.coldLips,
    60: palette.blueOysterCult,
    80: palette.veteransDayBlue,
    100: palette.internationalBlue,
  },
  primaryDark: {
    0: palette.white,
    10: palette.whiteSolid,
    20: palette.lavenderMist,
    30: palette.cheerfulWhisper,
    40: palette.periwinklePowder,
    50: palette.lovelyLilac,
    60: palette.velvetCurtain,
    70: palette.deepLavender,
    80: palette.mangosteen,
    90: palette.midnightExpress,
    100: palette.mysteriousDepths,
  },
  backgrounds: {
    0: palette.white,
    20: palette.coolBlooded,
    40: palette.everest,
    60: palette.neonBoneyard,
    80: palette.icyPlains,
    90: palette.meltingGlacier,
  },
  loyaltyTwo: {
    20: palette.meltingGlacier,
    40: palette.lightOpale,
    100: palette.northWind,
  },
  loyaltySix: {
    20: palette.sugarCrystal,
  },
};

export type ColorsType = typeof colors;
export type KeyColors = keyof ColorsType;
