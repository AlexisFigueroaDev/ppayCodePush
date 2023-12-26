import CashRegisterColor from '../../assets/icons/color/cash-register.svg';
import TimeoutService from '../../assets/icons/timeout-service.svg';
import BadgeEmpty from '../../assets/illustrations/badge-empty.svg';
import BadgeReward from '../../assets/illustrations/badge-reward.svg';
import Calendar from '../../assets/illustrations/calendar-time.svg';
import CardShop from '../../assets/illustrations/card-shop.svg';
import CellphoneGB from '../../assets/illustrations/cellphone-GB.svg';
import CellphoneHandWithQR from '../../assets/illustrations/cellphone-hand-with-qr.svg';
import CellphoneHand from '../../assets/illustrations/cellphone-hand.svg';
import Dolar from '../../assets/illustrations/dolar.svg';
import EmptyBagHappy from '../../assets/illustrations/empty-bag-happy.svg';
import EmptyBag from '../../assets/illustrations/empty-bag.svg';
import FinishFlag from '../../assets/illustrations/Finish-flag.svg';
import FistBump from '../../assets/illustrations/Fist-Bump.svg';
import Lifeguard from '../../assets/illustrations/Lifeguard.svg';
import PaperEmpty from '../../assets/illustrations/paper-empty.svg';
import PaperSuccess from '../../assets/illustrations/paper-success.svg';
import PepaUp from '../../assets/illustrations/pepa-up.svg';
import SellQR from '../../assets/illustrations/sell-qr.svg';
import ShopMyBusiness from '../../assets/illustrations/shop-my-business.svg';
import ShopQR from '../../assets/illustrations/Shop-QR.svg';
import Unplugged from '../../assets/illustrations/Unplugged.svg';
import UserNext from '../../assets/illustrations/user-next.svg';
import User from '../../assets/illustrations/user.svg';

export const IllustrationsPaths = {
  // pay
  UserNext,
  Dolar,
  CardShop,
  EmptyBag,
  EmptyBagHappy,
  PepaUp,
  CellphoneHand,
  CellphoneHandWithQR,
  CellphoneGB,
  BadgeEmpty,
  BadgeReward,
  ShopQR,
  PaperEmpty,
  TimeoutService,
  Lifeguard,
  ShopMyBusiness,
  CashRegisterColor,
  FistBump,
  Unplugged,
  Calendar,
  FinishFlag,
  SellQR,
  PaperSuccess,
  User,
};

export type IllustrationKey = keyof typeof IllustrationsPaths;

export const MD = 'md';
export const LG = 'lg';
export const XL = 'xl';

export type IllustrationSize = typeof MD | typeof LG | typeof XL;

export const illustrationSizeBy = {
  [MD]: 80,
  [LG]: 96,
  [XL]: 152,
};

export interface IllustrationsProps {
  name: IllustrationKey;
  size?: IllustrationSize;
}
