console.log(data);

var x = data[1].Q219;
console.log(x);

var y = [];

for (var key in x){
  y.push(key);
  console.log(y);
}
window.onload = function() {
var chart = new CanvasJS.Chart("bar",{
  animationEnabled: true,

  title:{
    text: "Passholder Type"
  },

  axisX:{
    interval: 1
  },

  axisY2:{
    interlacedColor: "rgba(1,77,101,.2)",
      gridColor: "rgba(1,77,101,.1)",
      title: "Number of Passes"
  },

  data:[{
    type: "bar",
    name: "companies",
    axisYType:"secondary",
    color: "#014D65",
    dataPoints:[
      {y:data[0].Q219, label: 'Q219'},
      {y:data[0].Q319, label:'Q319'},
      {y:data[0].Q220, label:'Q220'},
      {y:data[0].Q320, label: 'Q320'}
    ]
  }]
});

chart.render();

}