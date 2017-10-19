function draw2(data) {


  //D3.js setup code

    "use strict";
    var margin = 75,
        width = 1400 - margin,
        height = 400 - margin;

   d3.select('body')
      .append('h3')
      .text("Titanic Passenger Survival by Age group");

    d3.select("body")
      .append("div")
      .text("Infants and children under the age of 10 had higher chances"
            + " of survival when compared to other age groups. The bar "
            + "chart below shows the percentage of people survived base"
            + "d on their age groups.");

    // Define plotting space in SVG
    var svg = d3.select("body")
      .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
      .append('g')
          .attr('class','chart');

//Dimple.js Chart construction code

    // Define mychart and its boundaries
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(80, "50px", "30%", "70%");

    // Add centered title
    svg.append("text")
     .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
     .attr("y", myChart._yPixels() - 20)
     .style("text-anchor", "middle")
     .style("font-family", "sans-serif")
     .style("font-weight", "bold")
     .style("font-size", "14")
     .text("Titanic Passenger Survival by Age group");

    // Define X & Y axis of myChart
    var x = myChart.addCategoryAxis("x", ["Age_groups"]); //"Survived"
    x.title = "Age Group ";
    x.addOrderRule("Age_groups");
    var y = myChart.addPctAxis("y", "Pclass");
    y.title = "Percentage of Passenger's";

    // Add the bar plot to myChart
    myChart.addSeries("Survival", dimple.plot.bar);

    // Add legend to myChart
    var myLegend = myChart.addLegend(560, 100, 60, 300, "Right");

    // Manipulate color of bar chart
    myChart.assignColor("Survived", "black", "rgb(255, 255, 255)", 0.5);
    myChart.assignColor("Deceased", "black", "rgb(255, 255, 255)", 0.8);

    //Draw myChart
    myChart.draw();
  };
