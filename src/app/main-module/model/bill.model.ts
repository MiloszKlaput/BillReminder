export interface Bill {
  companyName: string;
  amount: number;
  deadlineDate: Date;
  isPaid: boolean;
  isExpired?: boolean;
}
