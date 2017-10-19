import { Deposit } from './entities/deposit';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const deposits: Deposit[] = [
      { id: 0, name: 'Восхитительный',  perRur: 8, perUsd: 2, perEuro: 0.8, minTermSupport: 8,  maxTermSupport: 24 },
      { id: 1, name: 'Прямой',  perRur: 7.5, perUsd: 2, perEuro: 0.8, minTermSupport: 12,  maxTermSupport: 24 },
      { id: 2, name: 'Надежный',  perRur: 8.5, perUsd: 2, perEuro: 0.8, minTermSupport: 12,  maxTermSupport: 36 },
      { id: 3, name: 'Максимальный процент',  perRur: 8, perUsd: 1.8, perEuro: 1, minTermSupport: 6,  maxTermSupport: 24 },
      { id: 4, name: 'Ежемесячный доход',  perRur: 8, perUsd: 2.2, perEuro: 0.8, minTermSupport: 12,  maxTermSupport: 12 },
      { id: 5, name: 'Мультивалютный',  perRur: 8, perUsd: 2.1, perEuro: 0.8, minTermSupport: 6,  maxTermSupport: 24 },
      { id: 6, name: 'Копилка',  perRur: 8, perUsd: 2, perEuro: 0.9, minTermSupport: 1,  maxTermSupport: 6 },
      { id: 7, name: 'Великолепная семерка»',  perRur: 8, perUsd: 2, perEuro: 1.2, minTermSupport: 6,  maxTermSupport: 12 },
      { id: 8, name: 'Хит сезона',  perRur: 8, perUsd: 2, perEuro: 0.7, minTermSupport: 6,  maxTermSupport: 36 }
    ];
    return { deposits };
  }
}
