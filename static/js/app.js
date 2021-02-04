console.log(data);

var x = data[1].Q219;
console.log(x);

var y = [];

for (var key in x){
  y.push(key);
  console.log(y);
}

// function getPlots(index) {
//   d3.json(data).then((sampleData) => {

//   // collect data for bar and bubble plots
//   var sdata = sampleData.index.filter(d1 => d1.id.toString() === id)[0];
//     console.log(sdata);
//   // // collect sample values for bar chart with top 10 OTU values
//   // var sample_values = sdata.sample_values.slice(0,10).reverse();
//   var index = (sdata.index);
  // console.log(`OTU_top: ${OTU_top}`);
  // var OTU_id = OTU_top.map(data => "OTU " + data);
  // console.log(`OTU_id: ${OTU_id}`);
  // var labels = sdata.otu_labels.slice(0,10);

  // /// BAR CHART AREA
  // var trace1 = {
  //     x: sample_values,
  //     y: OTU_id,
  //     text: labels,
  //     marker: {
  //         color: 'rgb (142, 124, 195)'},
  //     type: "bar",
  //     orientation: "h"
  // };
  // // create data variable for bar plot
  // var chartBar = [trace1];
  // // apply the group bar mode to the layout
  // var layout1 = {
  //     title: "Values of Top 10 Samples",
  //     yaxis: {
  //         tickmode: "linear",
  //     },
  //     margin: {
  //         l: 100,
  //         r: 100,
  //         t: 100,
  //         b: 100
  //     }
  // //render the plot to the div tag with id "bar"
  // Plotly.newPlot("bar", chartBar, layout1);