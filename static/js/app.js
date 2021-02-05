console.log(data);
//brake down the types of passes into traces that way colors are different
//include
function buildPlot(){
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
  barmode: 'group',
  width: 800,
  height: 600
  };

  Plotly.newPlot('bar', info, layout);
}

buildPlot();

//create Pie charts for Standard v Electric bike

//labels Standard (quarters)
var info2 = [{
labels: ['Quarter 2 2019','Quarter 3 2019','Quarter 2 2020',
'Quarter 3 2020'],
//values (trips taken standard v electic)
values: [data[5].Q219, data[5].Q319,data[5].Q220,data[5].Q320],
hoverinfo: 'label + value',
type: 'pie'
}];
//create layout
var layout = {
  title: 'Standard bike used 2019 v 2020',
  height: 300,
  width: 400
};
//create graph
Plotly.newPlot('standardPie',info2, layout);

var info3 = [{
labels: ['Quarter 2 2019','Quarter 3 2019','Quarter 2 2020',
'Quarter 3 2020'],
values: [data[6].Q219, data[6].Q319,data[6].Q220,data[6].Q320],
hoverinfo: 'label + value',
type: 'pie'
}];
//create layout
var layout = {
  title: 'Electric bike used 2019 v 2020',
  height: 300,
  width: 400
};
//create graph
Plotly.newPlot('electricPie',info2, layout);

//comparison bar chat between standard & electric
function buildBar(){
  //standard bike trace
  var trace1 = {
    x: ['Q2-19 Standard Bike','Q3-19 Standard Bike','Q2-20 Standard Bike','Q3-20 Standard Bike'],
    y: [data[5].Q219, data[5].Q319,data[5].Q220,data[5].Q320],
    name: 'Standard Bike',
    type: 'bar'
  };
  //electrci bike trace 
  var trace2 = {
    x: ['Q2-19 Electric Bike','Q3-19 Electric Bike','Q2-20 Electric Bike','Q3-20 Electric Bike'],
    y: [data[6].Q219, data[6].Q319,data[6].Q220,data[6].Q320],
    name: 'Electric Bike',
    type: 'bar'
  };

  var info = [trace1, trace2];

  var layout = {title:'Bike used Q2 and Q3 2019 v 2020',
  barmode: 'group',
  width: 600,
  height: 500
  };

  Plotly.newPlot('Bike Comp Bar', info, layout);


}
buildBar();
