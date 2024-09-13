import React from 'react'
import BubbleChart from './Bubble'

interface DataItemRaw {
  ticker: string
  price: string
  change_amount: string
  change_percentage: string
  volume: string
}

interface DataItem {
  ticker: string
  price: number
  changeAmount: number
  changePercentage: number
  volume: number
}

const rawData = {
  metadata: 'Top gainers, losers, and most actively traded US tickers',
  last_updated: '2024-09-12 16:16:00 US/Eastern',
  top_gainers: [
    {
      ticker: 'CURIW',
      price: '0.0379',
      change_amount: '0.0226',
      change_percentage: '147.7124%',
      volume: '4480'
    },
    {
      ticker: 'EGIO',
      price: '2.14',
      change_amount: '1.1615',
      change_percentage: '118.7021%',
      volume: '105467982'
    },
    {
      ticker: 'GV',
      price: '4.42',
      change_amount: '2.39',
      change_percentage: '117.734%',
      volume: '45597392'
    },
    {
      ticker: 'ZEOWW',
      price: '0.0594',
      change_amount: '0.0294',
      change_percentage: '98.0%',
      volume: '121'
    },
    {
      ticker: 'OBLG',
      price: '6.54',
      change_amount: '3.15',
      change_percentage: '92.9204%',
      volume: '33484238'
    },
    {
      ticker: 'LUCYW',
      price: '0.0579',
      change_amount: '0.0268',
      change_percentage: '86.1736%',
      volume: '400'
    },
    {
      ticker: 'CYTHW',
      price: '0.125',
      change_amount: '0.055',
      change_percentage: '78.5714%',
      volume: '100'
    },
    {
      ticker: 'COOTW',
      price: '0.0284',
      change_amount: '0.0123',
      change_percentage: '76.3975%',
      volume: '50'
    },
    {
      ticker: 'ISPOW',
      price: '0.0255',
      change_amount: '0.0106',
      change_percentage: '71.1409%',
      volume: '7023'
    },
    {
      ticker: 'SBEV+',
      price: '0.0371',
      change_amount: '0.0149',
      change_percentage: '67.1171%',
      volume: '710'
    },
    {
      ticker: 'MNPR',
      price: '3.95',
      change_amount: '1.55',
      change_percentage: '64.5833%',
      volume: '40814571'
    },
    {
      ticker: 'KACLR',
      price: '0.1468',
      change_amount: '0.0568',
      change_percentage: '63.1111%',
      volume: '55'
    },
    {
      ticker: 'HYAC+',
      price: '0.1742',
      change_amount: '0.0641',
      change_percentage: '58.2198%',
      volume: '715539'
    },
    {
      ticker: 'LEV+',
      price: '0.0199',
      change_amount: '0.0073',
      change_percentage: '57.9365%',
      volume: '10000'
    },
    {
      ticker: 'TIL',
      price: '46.46',
      change_amount: '16.81',
      change_percentage: '56.6948%',
      volume: '1857002'
    },
    {
      ticker: 'CLDI+',
      price: '0.03',
      change_amount: '0.0099',
      change_percentage: '49.2537%',
      volume: '2950'
    },
    {
      ticker: 'GRRRW',
      price: '0.0423',
      change_amount: '0.0137',
      change_percentage: '47.9021%',
      volume: '114928'
    },
    {
      ticker: 'MNTX',
      price: '5.63',
      change_amount: '1.82',
      change_percentage: '47.769%',
      volume: '5691426'
    },
    {
      ticker: 'TNON',
      price: '4.4',
      change_amount: '1.37',
      change_percentage: '45.2145%',
      volume: '37037154'
    },
    {
      ticker: 'DHAIW',
      price: '0.0505',
      change_amount: '0.0156',
      change_percentage: '44.6991%',
      volume: '1618'
    }
  ],
  top_losers: [
    {
      ticker: 'NNAGW',
      price: '0.0025',
      change_amount: '-0.0355',
      change_percentage: '-93.4211%',
      volume: '307230'
    },
    {
      ticker: 'NNAGR',
      price: '0.0036',
      change_amount: '-0.0466',
      change_percentage: '-92.8287%',
      volume: '430387'
    },
    {
      ticker: 'RYDE',
      price: '2.025',
      change_amount: '-11.085',
      change_percentage: '-84.5538%',
      volume: '25768328'
    },
    {
      ticker: 'HHGCW',
      price: '0.003',
      change_amount: '-0.0163',
      change_percentage: '-84.456%',
      volume: '177859'
    },
    {
      ticker: 'FULC',
      price: '3.44',
      change_amount: '-5.41',
      change_percentage: '-61.1299%',
      volume: '34181971'
    },
    {
      ticker: 'EHI^',
      price: '0.0216',
      change_amount: '-0.0334',
      change_percentage: '-60.7273%',
      volume: '1355365'
    },
    {
      ticker: 'MODV',
      price: '12.76',
      change_amount: '-18.43',
      change_percentage: '-59.0895%',
      volume: '3574933'
    },
    {
      ticker: 'ONCT',
      price: '1.7',
      change_amount: '-2.35',
      change_percentage: '-58.0247%',
      volume: '618253'
    },
    {
      ticker: 'CNEY',
      price: '0.69',
      change_amount: '-0.7',
      change_percentage: '-50.3597%',
      volume: '16696948'
    },
    {
      ticker: 'STRM',
      price: '0.2468',
      change_amount: '-0.2342',
      change_percentage: '-48.6902%',
      volume: '1794212'
    },
    {
      ticker: 'AEHL',
      price: '0.79',
      change_amount: '-0.72',
      change_percentage: '-47.6821%',
      volume: '1249842'
    },
    {
      ticker: 'BLEUR',
      price: '0.0252',
      change_amount: '-0.0224',
      change_percentage: '-47.0588%',
      volume: '5089'
    },
    {
      ticker: 'BTBDW',
      price: '0.0507',
      change_amount: '-0.0438',
      change_percentage: '-46.3492%',
      volume: '500'
    },
    {
      ticker: 'SYRA',
      price: '0.43',
      change_amount: '-0.3701',
      change_percentage: '-46.2567%',
      volume: '4009946'
    },
    {
      ticker: 'UPC',
      price: '1.67',
      change_amount: '-1.37',
      change_percentage: '-45.0658%',
      volume: '20749602'
    },
    {
      ticker: 'HHGCR',
      price: '0.062',
      change_amount: '-0.046',
      change_percentage: '-42.5926%',
      volume: '6269'
    },
    {
      ticker: 'TLGYW',
      price: '0.0301',
      change_amount: '-0.0219',
      change_percentage: '-42.1154%',
      volume: '3506'
    },
    {
      ticker: 'SABSW',
      price: '0.025',
      change_amount: '-0.0181',
      change_percentage: '-41.9954%',
      volume: '22836'
    },
    {
      ticker: 'LSBPW',
      price: '0.0464',
      change_amount: '-0.0316',
      change_percentage: '-40.5128%',
      volume: '107324'
    },
    {
      ticker: 'BLACW',
      price: '0.02',
      change_amount: '-0.0111',
      change_percentage: '-35.6913%',
      volume: '200000'
    }
  ]
}

// Function to process raw data and convert it to numeric values
const processData = (items: DataItemRaw[]): DataItem[] => {
  return items.map(item => {
    const price = parseFloat(item.price)
    const changeAmount = parseFloat(item.change_amount)
    const changePercentage = parseFloat(item.change_percentage.replace('%', ''))
    const volume = parseInt(item.volume.replace(/,/g, ''), 10)

    return {
      ticker: item.ticker,
      price: isNaN(price) ? 0 : price,
      changeAmount: isNaN(changeAmount) ? 0 : changeAmount,
      changePercentage: isNaN(changePercentage) ? 0 : changePercentage,
      volume: isNaN(volume) ? 0 : volume
    }
  })
}

const HomePage: React.FC = () => {
  const gainers = processData(rawData.top_gainers)
  const losers = processData(rawData.top_losers)

  const combinedData = [...gainers, ...losers]

  return (
    <div className='bg-black'>
      <BubbleChart data={combinedData} />
    </div>
  )
}

export default HomePage
