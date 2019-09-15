export interface Bill {
  id: number;
  companyName: string;
  deadlineDate: Date;
  amount: number;
  isPaid: boolean;
  isExpired: boolean;
}
