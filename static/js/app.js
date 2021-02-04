console.log(data);
//brake down the types of passes into traces that way colors are different
//include

//Indego 30 Passholder info
var trace1 = {
  x: ['Q2-19 Indego30','Q3-19 Indego30','Q2-20 Indego30','Q3-20 Indego30'],
  y: [data[0].Q219,data[0].Q319,data[0].Q220,data[0].Q320],
  name: 'Indego 30',
  type: 'bar'
};
//Indego 365 passholder info 
var trace2 = {
  x:['Q2-19 Indego365','Q3-19 Indego365','Q2-20 Indego365','Q3-20 Indego365'],
  y:[data[1].Q219,data[1].Q319,data[1].Q220,data[1].Q320],
  name: 'Indego365',
  type: 'bar'
};
//Day Pass passholder info
var trace3 ={
  x: ['Q2-19 Day Pass','Q3-19 Day Pass','Q2-20 Day Pass','Q3-20 Day Pass'],
  y: [data[2].Q219,data[2].Q319,data[2].Q220,data[2].Q320],
  name: 'Day Pass',
  type: 'bar'
};
//IndegoFlex Pass
var trace4 ={
  x: ['Q2-19 IndegoFlex','Q3-19 IndegoFlex','Q2-20 IndegoFlex','Q3-20 IndegoFlex'],
  y: [data[3].Q219,data[3].Q319,data[3].Q220,data[3].Q320],
  name: 'IndegoFlex',
  type: 'bar'
};
var info = [trace1, trace2, trace3, trace4];

var layout = {title:'Passholder Type Q2 and Q3 2019 v 2020',
barmode: 'group'
};

Plotly.newPlot('bar', layout, info);



// var json = JSON.parse(data);
//     console.log(json);

// var labels = json.map(function(data){
//   return data.Q219;
// });
// console.log(labels);

// var y = [];

// for (var key in x){
//   y.push(key);
//   console.log(y);
// }
// var horizontalBarChartData ={
//   labels:[],
//   datasets:[{
//     data: data[0].Q219,
//     data[1].Q219,
//     data[2].219,
//   }] 
// };

// window.onload = function() {
//   var ctx = document.getElementById('bar').getContext('2d');
//   window.myHorizontalBar = new Chart(ctx, {
//     type: 'bar',
//     data: horizontalBarChartData,
//     options: {
//       indexAxis: 'y',
//       // Elements options apply to all of the options unless overridden in a dataset
//       // In this case, we are setting the border of each horizontal bar to be 2px wide
//       elements: {
//         bar: {
//           borderWidth: 2,
//         }
//       },
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'right',
//         },
//         title: {
//           display: true,
//           text: 'Chart.js Horizontal Bar Chart'
//         }
//       }
//     }
//   });

// };

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