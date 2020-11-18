export class UpdateOrderDto {
  tp_sl: {
    takeProfit?: number;
    stopLoss?: number;
  };
  notify: string;
}
