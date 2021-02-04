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
  barmode: 'group'
  };

  Plotly.newPlot('bar', info, layout);
}

buildPlot();

//create Pie chart for Standard v Electric bike

//labels (quarters)
var labels = ['Standard','Electrc']

//values (trips taken standard v electic)

