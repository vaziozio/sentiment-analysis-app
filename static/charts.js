$(function() {
    negativeData = [0];
    neutralData = [0];
    positiveData = [0];

    // get data
    (function worker() {
         $.get('/count', function(data) {
            negativeData = [data[0]['Negativo'],data[1]['Negativo'],
                            data[2]['Negativo'],data[3]['Negativo'],
                            data[4]['Negativo'],data[5]['Negativo'],
                            data[6]['Negativo'],data[7]['Negativo'],
                            data[8]['Negativo'],data[9]['Negativo'],
                            data[10]['Negativo'],data[11]['Negativo'],
                            data[12]['Negativo'],data[13]['Negativo'],
                            data[14]['Negativo'],data[15]['Negativo'],
                            data[16]['Negativo'],data[17]['Negativo'],
                            data[18]['Negativo'],data[19]['Negativo'],
                            data[20]['Negativo'],data[21]['Negativo'],
                            data[22]['Negativo'],data[23]['Negativo']]

            neutralData = [data[0]['Neutro'],data[1]['Neutro'],
                            data[2]['Neutro'],data[3]['Neutro'],
                            data[4]['Neutro'],data[5]['Neutro'],
                            data[6]['Neutro'],data[7]['Neutro'],
                            data[8]['Neutro'],data[9]['Neutro'],
                            data[10]['Neutro'],data[11]['Neutro'],
                            data[12]['Neutro'],data[13]['Neutro'],
                            data[14]['Neutro'],data[15]['Neutro'],
                            data[16]['Neutro'],data[17]['Neutro'],
                            data[18]['Neutro'],data[19]['Neutro'],
                            data[20]['Neutro'],data[21]['Neutro'],
                            data[22]['Neutro'],data[23]['Neutro']]

            positiveData = [data[0]['Positivo'],data[1]['Positivo'],
                            data[2]['Positivo'],data[3]['Positivo'],
                            data[4]['Positivo'],data[5]['Positivo'],
                            data[6]['Positivo'],data[7]['Positivo'],
                            data[8]['Positivo'],data[9]['Positivo'],
                            data[10]['Positivo'],data[11]['Positivo'],
                            data[12]['Positivo'],data[13]['Positivo'],
                            data[14]['Positivo'],data[15]['Positivo'],
                            data[16]['Positivo'],data[17]['Positivo'],
                            data[18]['Positivo'],data[19]['Positivo'],
                            data[20]['Positivo'],data[21]['Positivo'],
                            data[22]['Positivo'],data[23]['Positivo']]

            negChart.data.datasets[0].data = negativeData;
            negChart.update();
            neutChart.data.datasets[0].data = neutralData;
            neutChart.update();
            posChart.data.datasets[0].data = positiveData;
            posChart.update();

         //running timeout to refresh get
         setTimeout(worker, 60000);
         });
    })();

    // hours range
    hoursOfDay = ['12:00 AM',
    '01:00 AM', '02:00 AM',
    '03:00 AM', '04:00 AM',
    '05:00 AM', '06:00 AM',
    '07:00 AM', '08:00 AM',
    '09:00 AM', '10:00 AM',
    '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM',
    '03:00 PM', '04:00 PM',
    '05:00 AM', '06:00 PM',
    '07:00 PM', '08:00 PM',
    '09:00 PM', '10:00 PM',
    '11:00 PM']
    //chart instances
    var ctxNegative = document.getElementById("negativeChart").getContext('2d');
    var ctxNeutral = document.getElementById("neutralChart").getContext('2d');
    var ctxPositive = document.getElementById("positiveChart").getContext('2d');

    // negativeChart
    var negChart = new Chart(ctxNegative, {
      type: 'bar',
      data: {
    labels: hoursOfDay,
    datasets: [{
      label: 'Negative Tweets',
      data: negativeData,
      backgroundColor: 'rgba(255, 99, 132, 1)',
    }]
      },
      options: {
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1.3,
        ticks: {
            max: 24,
        }
     }, {
        display: true,
        ticks: {
            autoSkip: false,
            max: 24,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
      }
    });

    // neutralChart
    var neutChart = new Chart(ctxNeutral, {
      type: 'bar',
      data: {
    labels: hoursOfDay,
    datasets: [{
      label: 'Neutral Tweets',
      data: neutralData,
      backgroundColor: 'rgba(250,250,210, 1)',
    }]
      },
      options: {
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1.3,
        ticks: {
            max: 24,
        }
     }, {
        display: true,
        ticks: {
            autoSkip: false,
            max: 24,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
      }
    });

    // positiveChart
    var posChart = new Chart(ctxPositive, {
      type: 'bar',
      data: {
    labels: hoursOfDay,
    datasets: [{
      label: 'Positive Tweets',
      data: positiveData,
      backgroundColor: 'rgba(144,238,144, 1)',
    }]
      },
      options: {
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1.3,
        ticks: {
            max: 24,
        }
     }, {
        display: true,
        ticks: {
            autoSkip: false,
            max: 24,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
      }
    });
});
