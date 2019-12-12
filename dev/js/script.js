$( document ).ready(function() {
	//toggle sidebar navigation
	$('.btn-sidebar').click(function(){
    	$(this).toggleClass('active');
    });

	//toggle line graph
    // $('.highlights').click(function(){
    // 	$(this).toggleClass('active');
    // });

    //SLICK
	$('.graph').slick({
		dots: false,
  		infinite: false,
  		arrows: false,
	});

	$('.highlights__petrol').click(function(e) {
       e.preventDefault();
       $('.graph').slick('slickGoTo', 0);
       $('.highlights').removeClass('active');
       $(this).addClass('active');
     });
	$('.highlights__gold').click(function(e) {
       e.preventDefault();
       $('.graph').slick('slickGoTo', 1);
       $('.highlights').removeClass('active');
       $(this).addClass('active');
     });
	$('.highlights__currency').click(function(e) {
       e.preventDefault();
       $('.graph').slick('slickGoTo', 2);
       $('.highlights').removeClass('active');
       $(this).addClass('active');
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

//CHART - GOLD
var chartGold = document.getElementById('chartGold').getContext('2d');
var myGold = new Chart(chartGold, {
  type: 'scatter',
  data: {
    datasets: [
    	{
        label: 'Buy',
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
        label: 'Sell',
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

//CHART - CURRENCY
var chartCurrency = document.getElementById('chartCurrency').getContext('2d');
var myCurrency = new Chart(chartCurrency, {
  type: 'scatter',
  data: {
    datasets: [
    	{
        label: 'USD',
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
        label: 'SGD',
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
        label: 'Euro',
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

