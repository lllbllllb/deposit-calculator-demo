import { Deposit } from './entities/deposit';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const currentExchangeRate: any[] = [
      {
        id: 0,
        code: 'usd',
        rateBuy: '57,25',
        rateSal: '59,00'
      },
      {
        id: 1,
        code: 'eur',
        rateBuy: '67,00',
        rateSal: '67,75'
      },
      {
        id: 2,
        code: 'gbr',
        rateBuy: '75,00',
        rateSal: '79,00'
      },
      {
        id: 3,
        code: 'chf',
        rateBuy: '57,25',
        rateSal: '60,00'
      }
    ];

    const currDateRate: any[] = [
      {
        id: 0,
        code: 'usd',
        dates: this.generateDates(),
        data: this.generateVal('usd')
      },
      {
        id: 1,
        code: 'eur',
        dates: this.generateDates(),
        data: this.generateVal('eur')
      },
      {
        id: 2,
        code: 'gbr',
        dates: this.generateDates(),
        data: this.generateVal('gbr')
      },
      {
        id: 3,
        code: 'chf',
        dates: this.generateDates(),
        data: this.generateVal('chf')
      }
    ];

    const deposits: Deposit[] = [
      {
        id: 0,
        name: 'Вклад «Пополняемый доход»',
        rub: 7,
        usd: 0.6,
        eur: 0.11,
        refill: true,
        withdrawal: false,
        pensioner: 0.25,
        onlineopn: 0.25,
        capital: true,
        minTermSupport: 3,
        maxTermSupport: 36,
        description: 'Увеличиваете сумму вклада – увеличиваете свой доход!'
      },
      {
        id: 1,
        name: 'Вклад «Большие возможности»',
        rub: 6,
        usd: 0.75,
        eur: 0.1,
        refill: true,
        withdrawal: true,
        pensioner: 0.25,
        onlineopn: 0.25,
        capital: false,
        minTermSupport: 3,
        maxTermSupport: 72,
        description: 'Это вклад, предоставляющий большие возможности по управлению ' +
          'средствами, и, при этом, предлагающий привлекательную ставку.'
      },
      {
        id: 2,
        name: 'Вклад «Высокий доход»',
        rub: 7.75,
        usd: 0.75,
        eur: 0.12,
        refill: false,
        withdrawal: false,
        pensioner: 0.25,
        onlineopn: 0.25,
        capital: true,
        minTermSupport: 1,
        maxTermSupport: 72,
        description: 'Классический срочный вклад с максимальной доходностью среди вкладов, предлагаемых Банком.'
      },
      {
        id: 3,
        name: 'Вклад «Стратегия лидерства»',
        rub: 8,
        usd: 0,
        eur: 0,
        refill: false,
        withdrawal: false,
        capital: false,
        minTermSupport: 7,
        maxTermSupport: 7,
        description: 'Для эффективного безрискового вложения средств и получения высокого дохода.'
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
        rub: 8.7,
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

    return { deposits, currentExchangeRate, currDateRate };
  }

  generateDates(): any[] {
    const buff = [];
    for (let i = 1; i < 31; i++) {
      ('' + i).length === 1 ? buff.push('0' + i + ' октября') : buff.push(i + ' октября');
    }

    return buff;
  }

  generateVal(code: string): number[] {
    const buff = [];

    for (let i = 1; i < 31; i++) {
      switch (code) {
        case 'usd': {
          buff.push(Math.round((Math.random() * 11 + 55) * 100) / 100);
          break;
        }
        case 'eur': {
          buff.push(Math.round((Math.random() * 11 + 65) * 100) / 100);
          break;
        }
        case 'gbr': {
          buff.push(Math.round((Math.random() * 11 + 73) * 100) / 100);
          break;
        }
        case 'chf': {
          buff.push(Math.round((Math.random() * 11 + 56) * 100) / 100);
          break;
        }
      }
    }

    return buff;
  }
}
