export interface Transaction {
  sk_category_id: number;
  card_id: string;
  merchant_category_code_description: any;
  amount: number;
  settlement_date: string;
  merchant_category_code: any;
  original_transaction_amount: OriginalTransactionAmount;
  state: string;
  synced_at?: string;
  merchant_name: string;
  accounting_categories: AccountingCategory[];
  line_items: LineItem[];
  user_transaction_time: string;
  merchant_descriptor: string;
  sk_category_name: string;
  memo?: string;
  id: string;
  accounting_field_selections: AccountingFieldSelection[];
  entity_id: string;
  policy_violations: any[];
  merchant_id: string;
  card_holder: CardHolder;
  currency_code: string;
  disputes: any[];
  receipts: string[];
}

export interface OriginalTransactionAmount {
  amount: number;
  currency_code: string;
}

export interface AccountingCategory {
  tracking_category_remote_id: string;
  category_id: any;
  category_name: string;
  tracking_category_remote_name: string;
  tracking_category_remote_type: string;
}

export interface LineItem {
  amount: Amount;
  accounting_field_selections: any[];
}

export interface Amount {
  amount: number;
  currency_code: string;
}

export interface AccountingFieldSelection {
  id: string;
  name: string;
  type: string;
  category_info: CategoryInfo;
  external_code: any;
  external_id: string;
}

export interface CategoryInfo {
  id: string;
  type: string;
  name: string;
  external_id: string;
}

export interface CardHolder {
  department_name: string;
  location_name: string;
  last_name: string;
  first_name: string;
  location_id: string;
  user_id: string;
  department_id: string;
}
