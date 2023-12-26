export interface DefaultStatus {
  variant?: 'default';
  title?: string;
  amount?: number;
}

export interface ErrorStatus {
  variant: 'error';
  title?: string;
}

export type StatusProps = DefaultStatus | ErrorStatus;

export interface AccionableProps {
  text: string;
  action: () => void;
}

export interface BalanceProps {
  status?: StatusProps;
  description?: string;
  actionable?: AccionableProps;
}
