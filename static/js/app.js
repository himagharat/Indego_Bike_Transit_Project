console.log(data);

var x = data[1].Q219;
console.log(x);

var y = [];

for (var key in x){
  y.push(key);
  console.log(y);
}
var horizontalBarChartData ={
  labels:[],
  datasets:[{
    data: data[0].Q219
    // data[1].Q219,
    // data[2].Q219,
  }] 
};

window.onload = function() {
  var ctx = document.getElementById('bar').getContext('2d');
  window.myHorizontalBar = new Chart(ctx, {
    type: 'bar',
    data: horizontalBarChartData,
    options: {
      indexAxis: 'y',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Chart.js Horizontal Bar Chart'
        }
      }
    }
  });

};

// window.onload = function() {
// var chart = new CanvasJS.Chart("bar",{
//   animationEnabled: true,

//   title:{
//     text: "Passholder Type"
//   },

//   axisX:{
//     interval: 1
//   },

//   axisY2:{
//     interlacedColor: "rgba(1,77,101,.2)",
//       gridColor: "rgba(1,77,101,.1)",
//       title: "Number of Passes"
//   },

//   data:[{
//     type: "bar",
//     name: "companies",
//     axisYType:"secondary",
//     color: "#014D65",
//     dataPoints:[
//       {y:data[0].Q219, label: 'Quarter 2 2019 Indego 30'},
//       {y:data[1].Q219, label: 'Quarter 2 2019 Indego 365'},
//       {y:data[2].Q219, label: 'Quarter 2 2019 Daily Pass'},
//       {y:data[3].Q219, label: 'Quarter 2 2019 IndegoFlex'},
//       {y:data[4].Q219, label: 'Quarter 2 2019 Walk-Up'},
//       {y:data[0].Q319, label:'Q319'},
//       {y:data[0].Q220, label:'Q220'},
//       {y:data[0].Q320, label: 'Q320'}
//     ]
//   }]
// });

// chart.render();

// }