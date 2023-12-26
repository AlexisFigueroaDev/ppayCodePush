import { TEXTS } from './strings';

export const TRANSACTION_PDF_FILENAME = 'ppay_operacion';
export const REFUND_PDF_FILENAME = 'cashback_operation';

export const APPROVED = 'approved';
export const REJECTED = 'rejected';
export const PENDING = 'pending';
export const PREPAID_CARD_BUY_REJECTED = 'canceled';
export const TOTAL_REFUNDED_APPROVED = 'totalRefundedApproved';
export const TOTAL_REFUNDED_REJECTED = 'totalRefundedRejected';
export const TOTAL_REFUNDED_PENDING = 'totalRefundedPending';
export const PARTIAL_REFUNDED_APPROVED = 'partialRefundedApproved';
export const PARTIAL_REFUNDED_REJECTED = 'partialRefundedRejected';
export const PARTIAL_REFUNDED_PENDING = 'partialRefundedPending';

// Transactions states mapped for the front
export const TRANSACTIONS_STATES = {
  [APPROVED]: 'Aprobada',
  [REJECTED]: 'Cancelada',
  [PENDING]: 'Pendiente',
};

export const TRANSACTIONS_QR_STATES = {
  [APPROVED]: 'Aprobada',
  [REJECTED]: 'Rechazada',
  [PENDING]: 'Pendiente',
  [TOTAL_REFUNDED_APPROVED]: 'Reversa total aprobada',
  [TOTAL_REFUNDED_REJECTED]: 'Reversa total cancelada',
  [TOTAL_REFUNDED_PENDING]: 'Reversa total pendiente',
  [PARTIAL_REFUNDED_APPROVED]: 'Reversa parcial aprobada',
  [PARTIAL_REFUNDED_REJECTED]: 'Reversa parcial cancelada',
  [PARTIAL_REFUNDED_PENDING]: 'Reversa parcial pendiente',
};

// Types of qr type available
export const QR_PAYMENT_TYPE_CLOSE = 'closed_amount';
export const QR_KIT_ACTIVATION_TYPE = 'qr_activation_pending';

// Unified transactions types
export const CASH_IN_TYPES = ['P2pInputTransfer', 'BankInputTransfer'];
export const CASH_OUT_TYPES = ['P2pOutputTransfer', 'BankOutputTransfer'];
export const TRANSFERENCES_TYPES = ['cashOut'];

export const PHYSICAL_CASHIN = 'PaymentClient';
export const CASH_IN = 'cashIn';
export const CASH_OUT = 'cashOut';
export const P2P_CASH_IN = 'P2pInputTransfer';
export const P2P_CASH_OUT = 'P2pOutputTransfer';
export const BANK_CASH_IN = 'BankInputTransfer';
export const BANK_CASH_OUT = 'BankOutputTransfer';
export const INMEDIATE_TRANSFERENCE = 'inmediateTransference';
export const DEBIN_CASHOUT = 'debinCashOut';
export const CASH_IN_SELF = 'cash_in_self';
export const PHONE_RECHARGE = 'Recargas Telefonicas';
export const PHONE_RECHARGE_MY_BUSINESS = 'Venta Recargas Telefonicas';
export const CASH_IN_FROM_PHYSICAL_POINT = 'cashInFromPhysicalPoint';
export const BILL_PAYMENT = 'billPayment';
export const DEBIT_BILL_PAYMENT = 'DebitBillPayment';
export const TRANSPORT_RECHARGE = 'Transporte';
export const BONIFICATION_BT = 'BonificationBT';
export const RECHARGE = 'Sale';
export const PREPAID_CARD_BUY = 'PrepaidCardBuy';
export const PREPAID_CARD_REFUND = 'PrepaidRefundCard';
export const PREPAID_CARD_CANCEL = 'PrepaidCancelCard';
export const CREDIT = 'Credit';
export const SAVING = 'InternalProductTransfer';
export const SAVING_INCOME = 'Income';
export const SAVING_OUTCOME = 'Outcome';
export const PAYMENT_PROVIDER = 'PaymentProvider';
export const PAYMENT_PROVIDER_REFUND = 'PaymentProviderRefund';
export const WITHDRAW = 'Withdraw';
export const CASHBACK = 'Cashback';
export const LOAN_INSTALLMENT_REVERSE = 'PaymentLoanInstallmentReverse';
export const GENERAL = 'general';
export const TRANSACTION_CHARGE_EXPENSE = 'TransactionChargeExpense';
export const QR_CREDIT = 'QRCredit';
export const QR_DEBIT = 'QRDebit';
export const MY_BUSINESS_QR_PAYMENT = 'MyBusinessQRPayment';
export const MY_BUSINESS_ATTENDED_QR_PAYMENT = 'MyBusinessAttendedQRPayment';
export const MY_BUSINESS_ATTENDED_QR_PAYMENT_V3 =
  'MyBusinessAttendedQRPaymentV3';
export const SIRCUPA = 'sircupa';
export const REFUND = 'reintegro';
export const DEBIT = 'Debit';
export const DEBIN = 'debin';
export const IMMEDIATE_TRANSFER = 'immediate.transfer';
export const MY_BUSINESS_PAYMENT_LINK = 'MyBusinessPaymentLink';
export const CARD_REPRINT = 'cardReprint';
export const MY_BUSINESS_QR_SELLER_REVERSE = 'qrSellerReverse';
export const MY_BUSINESS_PAYMENT_LINK_REVERSE = 'MyBusinessPaymentLinkReverse';
export const ADDITIONAL_CARD_BUY = 'additionalCardBuy';
export const MY_BUSINESS_GENERATED_REPORTS = 'generatedReports';
export const SETTLEMENT_PAYMENT_CLIENT = 'SettlementPaymentClient';
export const B2B_PHONE_RECHARGE = 'B2BSale';
export const BNPL_INSTALLMENT = 'PaymentLoanInstallment';

// Transaction icons based on the transaction type
export const TRANSACTION_ICONS = {
  [PHONE_RECHARGE]: 'outline_cellphone',
  [CASH_IN]: 'outline_cash_in',
  [BANK_CASH_IN]: 'outline_cash_in',
  [CASH_IN_FROM_PHYSICAL_POINT]: 'outline_cash_in',
  [CASH_OUT]: 'outline_cash_out',
  [BANK_CASH_OUT]: 'outline_cash_out',
  [BILL_PAYMENT]: 'outline_invoice',
  [DEBIT_BILL_PAYMENT]: 'outline_invoice',
  [TRANSPORT_RECHARGE]: 'transport_bus',
  [BONIFICATION_BT]: 'outline_wallet',
  [RECHARGE]: 'recharge',
  [PREPAID_CARD_BUY]: 'iconly_light_outline_card',
  [PREPAID_CARD_REFUND]: 'iconly_light_outline_card',
  [PREPAID_CARD_CANCEL]: 'iconly_light_outline_card',
  [CREDIT]: 'iconly_light_accouting',
  [SAVING]: 'outline_piggy_bank',
  [PAYMENT_PROVIDER]: 'outline_qr_code',
  [PAYMENT_PROVIDER_REFUND]: 'iconly_light_accouting',
  [WITHDRAW]: 'withdraw_atm_code',
  [TRANSACTION_CHARGE_EXPENSE]: 'withdraw_atm_code',
  [QR_CREDIT]: 'outline_money',
  [DEBIT]: 'iconly_light_accouting',
  [DEBIN]: 'iconly_light_accouting',
  [CARD_REPRINT]: 'prepaid_reprintCard',
  [MY_BUSINESS_PAYMENT_LINK]: 'outline_money',
  [ADDITIONAL_CARD_BUY]: 'outline_card_adicional',
  [B2B_PHONE_RECHARGE]: 'outline_money',
};

export const TRANSACTIONS_COMPANY_LOGO = {
  [BILL_PAYMENT]: 'rapipago',
};

export const getTransactionListIcon = (transactionType, state) => {
  let icon = 'outline_info_circle';
  if (state === REJECTED) {
    icon = 'bold_error_circle';
  } else if (state === PENDING) {
    icon = 'outline_time_circle';
  } else {
    icon = TRANSACTION_ICONS[transactionType];
  }
  return icon;
};

export const iconColorFn = (theme, state) => {
  let color = theme.colors.halitaBlue;
  if (state === REJECTED) color = theme.colors.colorFillBeefeaterPink;
  if (state === PENDING) color = theme.colors.electricBlue;
  return color;
};

export const TRANSACTION_PENDING_MSG =
  'Esta operación puede llevar unos minutos.\nTe vamos a avisar cuando esté lista.';

export const TRANSACTION_REJECTED_MSG =
  'No pudimos realizar la operación.\nSe hizo el reembolso en tu cuenta.';

// TRANSACTIONS SUCCESS
export const TRANSACTION_LTV_SUCCESS_MESSAGE = (amount) =>
  `Sumaste ${amount} en Niveles Personal Pay`;

// Transaction title based on the type and state of the transaction
const defaultTransferMoneyTitle = 'Transferencia de dinero';
const defaultTransferInnerMoneyTitle = 'Te enviaron dinero';
const defaultPhoneRechargeTitle = 'Recarga de celular';
const defaultTransportRechargeTitle = 'Recarga de transporte';
const defaultPaymentTitle = 'Pago de servicio';
const defaultPrepaidCardBuyTitle = 'Realizaste una compra';
const defaultPrepaidCardRefundTitle = 'Devolución de compra';
const defaultPrepaidCardWithdraw = 'Sacaste efectivo';
const defaultRefundTitle = 'Reintegro Personal Pay';
const defaultSavingIncomeTitle = 'Rompiste tu alcancía';
const defaultSavingOutcomeTitle = 'Agregaste a tu alcancía';
const defaultQrPaymentRefundTitle = 'Te devolvimos dinero';
const defaultchargeExpense = 'Comisión por sacar efectivo';
const defaultQrCredit = 'Cobraste con QR';
const defaultDebit = 'Compensamos el saldo pendiente';
const defaultReprintCard = 'Comisión por reposición de tarjeta';
const defaultPaymentLink = 'Cobraste con Link';
//refund detail titles
export const WE_PAID_YOU = 'Ya acreditamos el dinero en tu cuenta.';
export const BUY = 'Compra';
export const VIEW_MORE_INFO = 'Ver más información';
export const TOTAL = 'Total';

export const TRANSACTION_TITLES = {
  [`${CASH_IN}_${APPROVED}`]: defaultTransferInnerMoneyTitle,
  [`${CASH_IN}_${PENDING}`]: defaultTransferInnerMoneyTitle,
  [`${CASH_IN}_${REJECTED}`]: defaultTransferInnerMoneyTitle,
  [`${CASH_OUT}_${APPROVED}`]: 'Transferiste dinero',
  [`${CASH_OUT}_${PENDING}`]: defaultTransferMoneyTitle,
  [`${CASH_OUT}_${REJECTED}`]: defaultTransferMoneyTitle,
  [`${PHONE_RECHARGE}_${APPROVED}`]: 'Hiciste una recarga',
  [`${PHONE_RECHARGE}_${PENDING}`]: defaultPhoneRechargeTitle,
  [`${PHONE_RECHARGE}_${REJECTED}`]: defaultPhoneRechargeTitle,
  [`${TRANSPORT_RECHARGE}_${APPROVED}`]: 'Hiciste una recarga',
  [`${TRANSPORT_RECHARGE}_${PENDING}`]: defaultTransportRechargeTitle,
  [`${TRANSPORT_RECHARGE}_${REJECTED}`]: defaultTransportRechargeTitle,
  [`${CASH_IN_FROM_PHYSICAL_POINT}_${APPROVED}`]: 'Agregaste dinero',
  [`${CASH_IN_FROM_PHYSICAL_POINT}_${PENDING}`]: defaultTransferMoneyTitle,
  [`${CASH_IN_FROM_PHYSICAL_POINT}_${REJECTED}`]: defaultTransferMoneyTitle,
  [`${BILL_PAYMENT}_${APPROVED}`]: 'Pagaste un servicio',
  [`${BILL_PAYMENT}_${PENDING}`]: defaultPaymentTitle,
  [`${DEBIT_BILL_PAYMENT}_${APPROVED}`]: 'Pagaste un servicio',
  [`${DEBIT_BILL_PAYMENT}_${PENDING}`]: defaultPaymentTitle,
  [`${DEBIT_BILL_PAYMENT}_${REJECTED}`]: defaultPaymentTitle,
  [`${BILL_PAYMENT}_${REJECTED}`]: defaultPaymentTitle,
  [`${CASH_IN_SELF}_${APPROVED}`]: 'Agregaste dinero',
  [`${CASH_IN_SELF}_${PENDING}`]: defaultTransferMoneyTitle,
  [`${CASH_IN_SELF}_${REJECTED}`]: defaultTransferMoneyTitle,
  [`${BONIFICATION_BT}_${APPROVED}`]: 'Bienvenido a Personal Pay',
  [`${PREPAID_CARD_BUY}_${REJECTED}`]: 'Compra anulada',
  [`${PREPAID_CARD_BUY}_${APPROVED}`]: defaultPrepaidCardBuyTitle,
  [`${PREPAID_CARD_BUY}_${PENDING}`]: defaultPrepaidCardBuyTitle,
  [`${PREPAID_CARD_REFUND}_${REJECTED}`]: 'Compra anulada',
  [`${PREPAID_CARD_REFUND}_${APPROVED}`]: defaultPrepaidCardRefundTitle,
  [`${PREPAID_CARD_REFUND}_${PENDING}`]: defaultPrepaidCardRefundTitle,
  [`${PREPAID_CARD_CANCEL}_${APPROVED}`]: defaultPrepaidCardRefundTitle,
  [`${WITHDRAW}_${APPROVED}`]: defaultPrepaidCardWithdraw,
  [`${CREDIT}_${APPROVED}`]: defaultQrPaymentRefundTitle,
  [`${SAVING}_${APPROVED}`]: defaultSavingIncomeTitle,
  [`${SAVING}_${APPROVED}`]: defaultSavingOutcomeTitle,
  [`${PAYMENT_PROVIDER_REFUND}_${APPROVED}`]: defaultQrPaymentRefundTitle,
  [`${TRANSACTION_CHARGE_EXPENSE}_${APPROVED}`]: defaultchargeExpense,
  [`${QR_CREDIT}_${APPROVED}`]: defaultQrCredit,
  [`${QR_CREDIT}_${PENDING}`]: defaultQrCredit,
  [`${QR_CREDIT}_${REJECTED}`]: defaultQrCredit,
  [`${DEBIT}_${APPROVED}`]: defaultDebit,
  [`${CARD_REPRINT}_${APPROVED}`]: defaultReprintCard,
  [`${MY_BUSINESS_PAYMENT_LINK}_${APPROVED}`]: defaultPaymentLink,
  [`${BANK_CASH_IN}_${APPROVED}`]: defaultTransferInnerMoneyTitle,
  [`${BANK_CASH_IN}_${PENDING}`]: defaultTransferInnerMoneyTitle,
  [`${BANK_CASH_IN}_${REJECTED}`]: defaultTransferInnerMoneyTitle,
};

export const bonificationBTRgx = /Bonificacion.(BT|Beta\sTester)/gm;
const productTypesUsedForDescoveryTransacationType = [
  'Recharge',
  'BillPayment',
];

const getTransactionTypeBaseOnProduct = ({
  productType,
  productGroup,
} = {}) => {
  switch (productType) {
    case 'Recharge': {
      if (productGroup?.name === TRANSPORT_RECHARGE) return TRANSPORT_RECHARGE;
      if (productGroup?.name === PHONE_RECHARGE) return PHONE_RECHARGE;
      return RECHARGE;
    }
    case 'BillPayment':
      return BILL_PAYMENT;
    case DEBIT_BILL_PAYMENT:
      return DEBIT_BILL_PAYMENT;
    case PHYSICAL_CASHIN:
      return PHYSICAL_CASHIN;
    default:
      return 'unknown';
  }
};

const getTransactionTypeBaseOnOpTxnType = (transactionType) => {
  switch (true) {
    case transactionType === 'AuthorizationCard':
      return PREPAID_CARD_BUY;
    case transactionType === 'RefundCard':
      return PREPAID_CARD_REFUND;
    case transactionType === 'CancelAuthorizationCard':
      return PREPAID_CARD_CANCEL;
    case transactionType === 'Payment':
      return CASH_IN_FROM_PHYSICAL_POINT;
    case transactionType === 'AtmAuthorizationCard':
      return WITHDRAW;
    case transactionType === 'TransactionChargeExpense':
      return TRANSACTION_CHARGE_EXPENSE;
    case transactionType === P2P_CASH_IN:
      return CASH_IN;
    case transactionType === P2P_CASH_OUT:
      return CASH_OUT;
    case transactionType === BANK_CASH_IN:
      return BANK_CASH_IN;
    case transactionType === BANK_CASH_OUT:
      return BANK_CASH_OUT;
    case transactionType === CREDIT:
      return CREDIT;
    case transactionType === SAVING:
      return SAVING;
    case transactionType === PAYMENT_PROVIDER:
      return PAYMENT_PROVIDER;
    case transactionType === PAYMENT_PROVIDER_REFUND:
      return PAYMENT_PROVIDER_REFUND;
    case transactionType === CASHBACK:
      return CASHBACK;
    case transactionType === DEBIT:
      return DEBIT;
    case transactionType === 'SettlementPaymentClient':
    case transactionType === MY_BUSINESS_PAYMENT_LINK:
      return MY_BUSINESS_PAYMENT_LINK;
    case transactionType === 'QRDebit':
      return QR_DEBIT;
    case transactionType === BNPL_INSTALLMENT:
      return BNPL_INSTALLMENT;
    case transactionType === PHYSICAL_CASHIN:
      return PHYSICAL_CASHIN;
    case transactionType === LOAN_INSTALLMENT_REVERSE:
      return LOAN_INSTALLMENT_REVERSE;
    default:
      return 'unknown';
  }
};

export const getTransactionType = (data) => {
  const {
    product: { productType } = {},
    product,
    description,
    transactionType: transactionTypeFromOP,
    isSelfTransaction,
  } = data;

  if (description === 'Recarga rechazada') return B2B_PHONE_RECHARGE;

  if (description === 'Vendiste una recarga') return B2B_PHONE_RECHARGE;

  if (transactionTypeFromOP === DEBIT_BILL_PAYMENT) return DEBIT_BILL_PAYMENT;

  if (description === 'Cobraste con QR') return QR_CREDIT;

  if (description === 'Devolviste un cobro') return QR_DEBIT;

  if (isSelfTransaction) return CASH_IN_SELF;

  if (bonificationBTRgx.test(description)) return BONIFICATION_BT;

  if (productTypesUsedForDescoveryTransacationType.includes(productType))
    return getTransactionTypeBaseOnProduct(product);

  return getTransactionTypeBaseOnOpTxnType(transactionTypeFromOP);
};

export const INNER_TRANSFER = 'inner';
export const OUTER_TRANFER = 'outer';
export const PULL_TRANSFER = 'pull';

export const PDF_TEMPLATES = {
  transaction: 'transaction',
  paymentRapipago: 'paymentRapipago',
  paymentTeco: 'paymentTeco',
  discountCoupon: 'discountCode',
  unattendedQr: 'unattendedQr',
  refund: 'refund',
  operationDetail: 'operationDetail',
};

const getTransactionItemLongDescription = {
  [PREPAID_CARD_REFUND]: {
    title: 'Devolución de compra',
    subtitle: 'Con tu tarjeta Personal Pay',
  },
  [PREPAID_CARD_BUY]: {
    title: 'Realizaste una compra',
    subtitle: 'Con tu tarjeta Personal Pay',
  },
  [BONIFICATION_BT]: {
    title: 'Bienvenido a Personal Pay',
    subtitle: 'Recibiste tu saldo de bienvenida',
  },
  [PREPAID_CARD_CANCEL]: {
    title: 'Devolución de compra',
    subtitle: 'Con tu tarjeta Personal Pay',
  },
};

const transactionTypesWithLongDescription = [
  PREPAID_CARD_REFUND,
  PREPAID_CARD_BUY,
  BONIFICATION_BT,
  PREPAID_CARD_CANCEL,
];

const defaultRechargeTitle = 'Recarga';
const getTransactionItemSimpleDescription = {
  ...TRANSACTION_TITLES,
  [`${RECHARGE}_${PENDING}`]: defaultRechargeTitle,
  [`${RECHARGE}_${APPROVED}`]: defaultRechargeTitle,
  [`${RECHARGE}_${REJECTED}`]: defaultRechargeTitle,
};

const getTransactionItemByCreditTitle = (title) => {
  switch (title) {
    case (title.match(/TP/) || {}).input: {
      return {
        title: defaultRefundTitle,
        subtitle: TEXTS.CREDIT_CARD_PAYMENT,
      };
    }
    case (title.match(/PDS/) || {}).input: {
      return {
        title: defaultRefundTitle,
        subtitle: TEXTS.CREDIT_SERVICE_PAYMENT,
      };
    }
    case (title.match(/PRS/) || {}).input: {
      return {
        title: defaultRefundTitle,
        subtitle: TEXTS.CREDIT_PHONE_RECHARGE,
      };
    }
    default:
      return {
        title: defaultRefundTitle,
        subtitle: title,
      };
  }
};

export const getTransactionItemInfo = (
  transactionType,
  transactionSubtType,
  title,
  state,
) => {
  if (transactionTypesWithLongDescription.includes(transactionType))
    return getTransactionItemLongDescription[transactionType];
  if (transactionType === CREDIT && title) {
    return getTransactionItemByCreditTitle(title);
  }

  if (transactionType === SAVING) {
    return getTransactionInfoBySubType(transactionSubtType);
  }

  return getTransactionItemSimpleDescription[`${transactionType}_${state}`];
};

const getTransactionInfoBySubType = (transactionSubType) => {
  if (transactionSubType === SAVING_INCOME) {
    return defaultSavingIncomeTitle;
  } else {
    return defaultSavingOutcomeTitle;
  }
};

// Teco companies
export const CABLEVISION = 'Cablevisión | Fibertel';
export const TELECOM = 'Telecom';
export const TELECOM4P = 'Telecom 4P';
export const PERSONAL = 'Personal';

export const TECO_COMPANIES = [CABLEVISION, TELECOM, TELECOM4P, PERSONAL];

// Teco companies for payment
export const PAY_CABLEVISION = 'Cablevisión | Fibertel';
export const PAY_TELECOM = 'Telecom';
export const PAY_PERSONAL = 'Personal';
export const PAY_FLOW = 'Personal - Flow';

// Teco categories
// TODO remove after backend updates
export const CATEGORY_TV = 'Televisión e internet';
export const CATEGORY_MOBILE = 'Telefonía móvil';
export const CATEGORY_PHONE = 'Telefonía fija';
export const CATEGORY_COMBO = 'Combos';

//My Business transactions
export const MY_BUSINESS_PHONE_RECHARGE_COMMISSION = 0.03;

//BANNER_TYPES
export const BANNER_TITLE_CODE = 'banner-title-code';
export const BANNER_ICON_TITLE_AMOUNT = 'banner-icon-title-amount';
export const BANNER_ICON_TITLE_DESCRIPTION_BUTTON_AMOUNT =
  'banner-icon-title-description-button-amount';
export const BANNER_TRANSPORT = 'banner-transport';
export const BANNER_PERSONAL_EXTRA = 'banner-personal-recharge';
export const BANNER_ICON_TEXT = 'banner-icon-text';
export const BANNER_SHARE_LINK = 'banner-share-link';
export const BANNER_REVERSE_QR_SELLER = 'banner-reverse-qr-seller';
// myBusiness UserStatus
export const USER_STATUS_BLOCKED = 'BLOCKED';
export const USER_STATUS_BLOCKED_DAILY = 'DAILY_BLOCKED';
export const USER_STATUS_BLOCKED_MONTHLY = 'MONTHLY_BLOCKED';
//ORIGINAL_TRANSACTION_OF_CASHBACK
export const PAYMENT_OF_SERVICES = 'PAGO';
export const RECHARGES = 'RECARGA';
export const PURCHASE = 'COMPRA';

export const YOU_PAID = 'Pagaste';
export const YOU_RECHARGED = 'Recargaste';
export const YOU_BOUGHT_AT = 'Compraste en';

//LTV success messages
export const LTV_SUCCESS_MESSAGE = [
  PHONE_RECHARGE,
  BILL_PAYMENT,
  TRANSPORT_RECHARGE,
  PAYMENT_PROVIDER,
];

// Spiners
export const BASE_LOADING = 'base-loading';
export const API_CHECKOUT = 'api-checkout';
