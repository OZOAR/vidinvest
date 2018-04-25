$(document).ready(function() {
  var chartConservativeId = 'portfolioChartConservative',
      chartAggressiveId = 'portfolioChartAggressive',
      dataConservative = [{
          name: 'Bitcoin',
          ticket: 'BTC',
          balance: 9.7646,
          usd: '$80,656',
          y: 55.41
      }, {
          name: 'Ethereum',
          ticket: 'BTC',
          balance: 9.7646,
          usd: '$80,656',
          y: 17.84
      }, {
          name: 'Cindicator',
          ticket: 'BTC',
          balance: 9.7646,
          usd: '$80,656',
          y: 7.85
      }, {
          name: 'Tezos',
          ticket: 'BTC',
          balance: 9.7646,
          usd: '$80,656',
          y: 7.67
      }, {
          name: 'Bitcoin Cash',
          ticket: 'BTC',
          balance: 9.7646,
          usd: '$80,656',
          y: 3.18
      }, {
          name: 'EOS',
          ticket: 'BTC',
          balance: 9.7646,
          usd: '$80,656',
          y: 2.64
      }, {
          name: 'ICON',
          ticket: 'BTC',
          balance: 9.7646,
          usd: '$80,656',
          y: 1.3
      }, {
          name: 'QQ',
          ticket: 'BTC',
          balance: 9.7646,
          usd: '$80,656',
          y: 1.5
      }, {
          name: 'Other',
          ticket: 'BTC',
          balance: 9.7646,
          usd: '$80,656',
          y: 2.61
      }],
    dataAggressive = [{
        name: 'Bitcoin',
        ticket: 'BTC',
        balance: 9.7646,
        usd: '$80,656',
        y: 61.41
    }, {
        name: 'Ethereum',
        ticket: 'BTC',
        balance: 9.7646,
        usd: '$80,656',
        y: 11.84
    }, {
        name: 'Cindicator',
        ticket: 'BTC',
        balance: 9.7646,
        usd: '$80,656',
        y: 10.85
    }, {
        name: 'Tezos',
        ticket: 'BTC',
        balance: 9.7646,
        usd: '$80,656',
        y: 4.67
    }, {
        name: 'Bitcoin Cash',
        ticket: 'BTC',
        balance: 9.7646,
        usd: '$80,656',
        y: 4.18
    }, {
        name: 'EOS',
        ticket: 'BTC',
        balance: 9.7646,
        usd: '$80,656',
        y: 1.64
    }, {
        name: 'ICON',
        ticket: 'BTC',
        balance: 9.7646,
        usd: '$80,656',
        y: 1.6
    }, {
        name: 'QQ',
        ticket: 'BTC',
        balance: 9.7646,
        usd: '$80,656',
        y: 1.2
    }, {
        name: 'Other',
        ticket: 'BTC',
        balance: 9.7646,
        usd: '$80,656',
        y: 2.61
    }];

  initPortfolioChart(chartConservativeId, dataConservative);
  initPortfolioChart(chartAggressiveId, dataAggressive);
});

function initPortfolioChart(id, data) {
  Highcharts.chart(id, {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      tooltip: {
          pointFormat: '{point.ticket}: <b>{point.percentage:.1f}%</b> <br />Balance: <b>{point.balance}</b><br />USD: <b>{point.usd}</b>'
      },
      plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
          }
      },
      series: [{
          colorByPoint: true,
          data: data
      }]
  });
}
