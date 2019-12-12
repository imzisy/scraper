$( document ).ready(function() {
	//toggle sidebar navigation
	$('.btn-sidebar').click(function(){
    	$(this).toggleClass('active');
    });

	//toggle line graph
    $('.highlights').click(function(){
    	$(this).toggleClass('active');
    });
});

//CHART - PETROL
var chartPetrol = document.getElementById('chartPetrol').getContext('2d');
var myPetrol = new Chart(chartPetrol, {
  type: 'scatter',
  data: {
    datasets: [
    	{
        label: 'Diesel',
        data: [
        	{y: 2.3, x: 1},
        	{y: 2.2, x: 2},
        	{y: 2.18, x: 3},
        	{y: 2.18, x: 4},
        	{y: 2.18, x: 5},
        	{y: 2.18, x: 6},
        	{y: 2.05, x: 7},
        	{y: 3, x: 8},
        	{y: 2.5, x: 9},
        	{y: 2.5, x: 10},
        ],
        showLine: true,
        fill: false,
        borderColor: 'rgba(59, 66, 76, 1)'
    	},
      {
        label: 'RON95',
        data: [
        	{y: 2.8, x: 1},
        	{y: 2.7, x: 2},
        	{y: 2.7, x: 3},
        	{y: 2.7, x: 4},
        	{y: 2.8, x: 5},
        	{y: 2.9, x: 6},
        	{y: 2.65, x: 7},
        	{y: 2.55, x: 8},
        	{y: 2.4, x: 9},
        	{y: 2.4, x: 10},
        ],
        showLine: true,
        fill: false,
        borderColor: 'rgba(66, 168, 179, 1)'
    	},
    	{
        label: 'RON97',
        data: [
        	{y: 2.1, x: 1},
        	{y: 2.2, x: 2},
        	{y: 2.2, x: 3},
        	{y: 2.3, x: 4},
        	{y: 2.2, x: 5},
        	{y: 2.1, x: 6},
        	{y: 2.23, x: 7},
        	{y: 2.22, x: 8},
        	{y: 2.6, x: 9},
        	{y: 2.5, x: 10},
        ],
        showLine: true,
        fill: false,
        borderColor: 'rgba(229, 83, 62, 1)'
    	}
    ]
  },
  options: {
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:false
        }
      }]
    },
  }
});

//CHART - PETROL
var chartGold = document.getElementById('chartGold').getContext('2d');
var myGold = new Chart(chartGold, {
    type: 'line',
    responsive: true,
    maintainAspectRatio: false,
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

// //CHART - PETROL
var chartCurrency = document.getElementById('chartCurrency').getContext('2d');
var myCurrency = new Chart(chartCurrency, {
    type: 'line',
    responsive: true,
    maintainAspectRatio: false,
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});