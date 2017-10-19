# Summary

A data visualization of survivability of passenger's in the Titanic dataset based on their class of travel, gender and age is visualized in this project. The html files used for this visualization is [index.html](https://github.com/tonybastin/Project-P6---Make_Effective_Data_Visualization/blob/master/index.html) and the data file is [MyData.csv](https://github.com/tonybastin/Project-P6---Make_Effective_Data_Visualization/blob/master/data/MyData.csv)

## Design

Initial design choice was used to show a normally bar chart with counts of passengers survived/deceased. This plot can be seen in [index1.html](https://github.com/tonybastin/Project-P6---Make_Effective_Data_Visualization/blob/master/index1.html). After getting Feedback 1 , it was replaced with a stacked bar chart showing percentages of passengers survived in each group rather than the counts as it makes it easier to identify the survival rate in each group.

Color was removed from the bar chart after getting Feedback 2, as color was not conveying any extra information and tried converting the bar to pure black/white. This was not working out as white bars become invisible in the white background and finally a hue of black to represent the stacked bars was implemented. The plot before removing the color can be seen in [index2.html](https://github.com/tonybastin/Project-P6---Make_Effective_Data_Visualization/blob/master/index2.html)

The X and Y axis for each bar chart were clearly marked and legends were also given for each group to show the information they were conveying.

The actual percentage values of passenger survival in each group can be noted by hovering over the bars. This option was already there but the guy giving the feedback 3 was using a pdf version of the html.


## Feedback

* Feedback 1:
  * To show the effect of survivability of passengers based on their age group, passenger class and gender, it is best to use percentage values of passengers deceased versus survived rather than the counts.
* Feedback 2:
  * Color is not required since you need to show only the survived and deceased percentages and this can be well represented by shades of black and white.
* Feedback 3:
  * It will great to display the survival, percentage and category when you hover over the bars.

## Resources

* [DimpleJS Examples](http://dimplejs.org/examples_index.html)
* [Pretty Charts with Dimple](http://annapawlicka.com/pretty-charts-with-dimple-js/)
* [Advance Data Labels](https://stackoverflow.com/questions/18558045/dimple-js-add-data-labels-to-each-bar-of-the-bar-chart)
