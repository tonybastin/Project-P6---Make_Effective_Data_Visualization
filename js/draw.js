function draw(data) {

  //D3.js setup code

    "use strict";
    var margin = 75,
        width = 1400 - margin,
        height = 400 - margin;

        d3.select('body')
          .append('h2')
          .text("Data Visualisation of Titanic Passenger Survival");

        d3.select("body")
          .append("div")
          .text("A data visualization of survavability of passenger's in the"
                + " Titanic dataset is given in the below sections. The "
                + "class of travel, gender and age has been identified "
                + "as important parameter affecting survivability of "
                + "passengers.");

        d3.select('body')
          .append('h3')
          .text("Titanic Passenger Survival by Class");

        d3.select("body")
          .append("div")
          .text("The survivability of a passenger depended heavily on the "
                + "class in which he travelled, the first class passenger "
                + "had higher chances of survival. The bar chart below show"
                + "s the percentage of passenger's deceased or survived bas"
                + "ed on the class in which they travelled.");

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
    myChart.setBounds(80, "50px", "40%", "70%");

    // Add centered title
   svg.append("text")
     .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
     .attr("y", myChart._yPixels() - 20)
     .style("text-anchor", "middle")
     .style("font-family", "sans-serif")
     .style("font-weight", "bold")
     .style("font-size", "14")
     .text("Titanic Passenger Survival by Class");

    // Define X & Y axis of myChart
    var x = myChart.addCategoryAxis("x", ["Class"]);
    x.addOrderRule(["First", "Second", "Third"]);
    x.title = "Cabin class ";
    var y = myChart.addPctAxis("y", "Pclass");
    y.title = "Percentage of Passenger's";

    // Add the bar plot to myChart
    myChart.addSeries("Survival", dimple.plot.bar);

    // Add legend to myChart
    var myLegend = myChart.addLegend(700, 100, 60, 300, "Right");

    // Manipulate color of bar chart
    myChart.assignColor("Survived", "black", "rgb(255, 255, 255)", 0.5);
    myChart.assignColor("Deceased", "black", "rgb(255, 255, 255)", 0.8);

    // Draw myChart
    myChart.draw();
  };
