export interface Deposit {
          id: number;
          name: string;
          rub?: number;
          usd?: number;
          eur?: number;
          refill: boolean;
          withdrawal: boolean;
          pensioner?: number;
          onlineopn?: number;
          capital: boolean;
          minTermSupport: number;
          maxTermSupport: number;
          description?: string;
}
