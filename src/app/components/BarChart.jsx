/* Imports */
"use client";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useEffect } from "react";
("/src/app/globals.css");

const BarChart = () => {
  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.XYChart3D);
    chart.paddingBottom = 30;
    chart.angle = 35;

    // Add data
    chart.data = [
      {
        country: "Январь",
        visits: 4025,
      },
      {
        country: "China",
        visits: 1882,
      },
      {
        country: "Japan",
        visits: 1809,
      },
      {
        country: "Germany",
        visits: 1322,
      },
      {
        country: "UK",
        visits: 1122,
      },
      {
        country: "France",
        visits: 1114,
      },
      {
        country: "India",
        visits: 984,
      },
      {
        country: "Spain",
        visits: 711,
      },
      {
        country: "Netherlands",
        visits: 665,
      },
      {
        country: "Russia",
        visits: 580,
      },
      {
        country: "South Korea",
        visits: 443,
      },
      {
        country: "Canada",
        visits: 441,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = "left";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    let series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";

    let columnTemplate = series.columns.template;
    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("fill", function (fill, target) {
      return am4core.color("#B8F82F");
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return am4core.color("#B8F82F");
    });

    categoryAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;

    categoryAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;

    let series2 = chart.series.push(new am4charts.ConeSeries());
    series2.dataFields.valueY = "visits";
    series2.dataFields.categoryX = "country";

    let columnTemplate2 = series2.columns.template;
    columnTemplate2.adapter.add("fill", function (fill, target) {
      return am4core.color("#19C20A");
    });

    columnTemplate2.adapter.add("stroke", function (stroke, target) {
      return am4core.color("#19C20A");
    });

    series2.columnsContainer.dx = -29;
    // Adjust the position of the second series
    series2.columnsContainer.zIndex = 1;

    series2.data = [
      {
        country: "Январь",
        visits: 402,
      },
      {
        country: "China",
        visits: 182,
      },
      {
        country: "Japan",
        visits: 109,
      },
      {
        country: "Germany",
        visits: 322,
      },
      {
        country: "UK",
        visits: 122,
      },
      {
        country: "France",
        visits: 114,
      },
      {
        country: "India",
        visits: 84,
      },
      {
        country: "Spain",
        visits: 11,
      },
      {
        country: "Netherlands",
        visits: 65,
      },
      {
        country: "Russia",
        visits: 80,
      },
      {
        country: "South Korea",
        visits: 43,
      },
      {
        country: "Canada",
        visits: 41,
      },
    ];

    columnTemplate2.width = am4core.percent(100);
    columnTemplate.width = am4core.percent(100);
  }, []);

  return <div id="chartdiv" className="h-[80%] ml-10"></div>;
};

export default BarChart;
