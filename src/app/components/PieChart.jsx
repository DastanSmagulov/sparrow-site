/* Imports */
"use client";
/* Imports */
import { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Person from "@/assets/person";
import Image from "next/image";
import PieChartLogo from "@/assets/PieChartLogo";

const dataString = localStorage.getItem("data");

const dataJson = JSON.parse(dataString);

const PieChart = () => {
  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    const chartData = dataJson?.map((data) => ({
      country: data.sector,
      litres: data.share,
    }));

    chart.data = chartData;

    chart.innerRadius = 80;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    // Hide data labels
    series.labels.template.disabled = true;
    // series.labels.template.disabled = false;
    // series.labels.template.margin = "20px";
    // series.labels.template.valign = "middle";
    // series.labels.template.fontSize = 10;

    // Hide legend
    chart.legend = new am4charts.Legend();
    chart.legend.disabled = true;

    series.slices.template.propertyFields.fill = "color";
    series.colors.list = [
      am4core.color("#19C20A"),
      am4core.color("#EB5AEA"),
      am4core.color("#116ED9"),
      am4core.color("#ECE6E1"),
      am4core.color("#7350F5"),
      // Add more custom colors here
    ];
  }, []);

  return (
    <div className="relative rounded-lg bg-white pt-4 px-5 w-1/4 h-[370px]">
      <div className="flex">
        <div className="bg-[#B8F82F] border-black border-solid border-1 w-7 h-4 rounded-sm flex items-center mb-2">
          <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
          <Image src={PieChartLogo} alt="person" width={12} height={12} />
        </div>
        <h3 className="text-xs font-semibold ml-2">Активные сектора</h3>
      </div>
      <div
        id="chartdiv"
        className="ml-4 mt-5"
        style={{ width: "300px", height: "300px" }}
      ></div>
      <div className="w-16 bottom-3 left-10 absolute h-5 bg-white z-10"></div>
    </div>
  );
};

export default PieChart;
