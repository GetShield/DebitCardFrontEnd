export interface Card {
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCVV: string;
}

export interface RampCard {
  cardholder_id: string;
  cardholder_name: string;
  display_name: string;
  expiration: string;
  id: string;
  last_four: string;
  state: string;
}
