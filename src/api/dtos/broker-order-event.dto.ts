export class BrokerOrderEvent {
  eventType: {
    action: 'opened' | 'closed';
    source: string;
  };
  eventNumber: {
    name: string;
    id: string;
    frontend: string;
  };
  time: string;
  direction: 'sell' | 'buy';
  quantity: number;
  price: string;
  avgQuantity: number;
  avgPrice: string;
  modifiedDirection: 'sell' | 'buy';
}
