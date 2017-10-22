import { Deposit } from './entities/deposit';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const deposits: Deposit[] = [
      { id: 0,
        name: 'Восхитительный',
        rub: 8,
        usd: 2,
        eur: 0.8,
        refill: true,
        withdrawal: true,
        capital: true,
        minTermSupport: 8,
        maxTermSupport: 24,
        description: 'Вы не останетесь равнодушным взяв этот кредит.' },
      { id: 1,
        name: 'Прямой',
        rub: 7.5,
        usd: 2,
        eur: 0.8,
        refill: true,
        withdrawal: true,
        capital: true,
        minTermSupport: 12,
        maxTermSupport: 24,
        description: 'Вы не останетесь равнодушным взяв этот кредит.' },
      { id: 2,
        name: 'Надежный',
        rub: 8.5,
        usd: 2,
        eur: 0.8,
        refill: true,
        withdrawal: true,
        capital: true,
        minTermSupport: 12,
        maxTermSupport: 36,
        description: 'Вы не останетесь равнодушным взяв этот кредит.' },
      {
        id: 3,
        name: 'Максимальный процент',
        rub: 8,
        usd: 1.8,
        eur: 1,
        refill: true,
        withdrawal: true,
        capital: true,
        minTermSupport: 6,
        maxTermSupport: 24,
        description: 'Вклад для получения максимального дохода – до 8,5% в рублях'
          + ' (при открытии вклада в Интернет-банке), до 1,65% в долларах США, до 0,8% в евро'
      },
      {
        id: 4,
        name: 'Ежемесячный доход',
        rub: 8,
        usd: 2.2,
        eur: 0.8,
        refill: true,
        withdrawal: false,
        capital: true,
        minTermSupport: 12,
        maxTermSupport: 12,
        description: 'Вклад для накопления и приумножения дохода с удобной выплатой процентов по вашему выбору '
      },
      {
        id: 5,
        name: 'Мультивалютный',
        rub: 8,
        usd: 2.1,
        eur: 0.8,
        refill: true,
        withdrawal: true,
        capital: true,
        minTermSupport: 6,
        maxTermSupport: 24,
        description: 'Вклад для управления тремя валютами в одном вкладе'
      },
      {
        id: 6,
        name: 'Копилка',
        rub: 8,
        usd: 2,
        eur: 0.9,
        refill: true,
        withdrawal: true,
        capital: true,
        minTermSupport: 1,
        maxTermSupport: 6,
        description: 'Выплата процентов в конце срока или ежемесячно, а также возможность пополения'
      },
      {
        id: 7,
        name: 'Великолепная семерка',
        rub: 8,
        usd: 2,
        eur: 1.2,
        refill: true,
        withdrawal: true,
        capital: false,
        minTermSupport: 6,
        maxTermSupport: 12,
        description: 'Вклад для гибкого управления денежными сбережениями и получения дохода'
      },
      {
        id: 8,
        name: 'Хит сезона',
        rub: 8,
        usd: 2,
        eur: 0.7,
        refill: false,
        withdrawal: false,
        capital: true,
        minTermSupport: 6,
        maxTermSupport: 36,
        description: 'Пополняемый сезонный вклад с одной из самых высоких ставок среди депозитов банка'
      }
    ];
    return { deposits };
  }
}
