import moment from 'moment';
// today chart
//var dayDetail = moment().format('MMMM, Do YYYY');
//var dayLen = 24;
var timeFlag = moment().format('a');
var currentHour;
// eslint-disable-next-line
if (timeFlag == 'pm') {
    // eslint-disable-next-line
    currentHour = parseInt(moment().format('h')) + 12;
} else { currentHour = moment().format('h'); }

var categoryArr = [];
for (var i = 1; i <= 23; i++) {
    // eslint-disable-next-line
    if (i != currentHour) {
        // eslint-disable-next-line
        if (i % 4 != 0) {
            categoryArr.push({ "label": i + " hrs", "showLabel": "0" });
        } else {
            categoryArr.push({ "label": i + " hrs" });
        }

    } else {
        categoryArr.push({ "label": currentHour + " hrs" });
        categoryArr.push({ "vline": "true", "color": "#707C92", "dashed": "1", "linePosition": "0", "labelPosition": "0" });
    }
}

var dayValueArr = [5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 6.5, 7.8, 9.1, 10.3, 10.3, 10.3, 10.3, 9.1, 9.1, 10.3, 10.3, 11.6, 13, 13, 10.3, 9.1, 6.5, 5.2];

var activeArr = [];
// eslint-disable-next-line
for (var i = 1; i <= 23; i++) {
    // eslint-disable-next-line
    if (i <= currentHour) {
        // eslint-disable-next-line
        if (i % 4 != 0) {
            activeArr.push({ "value": dayValueArr[i - 1], "anchorAlpha": "0" });
        } else {
            activeArr.push({ "value": dayValueArr[i - 1] });
        }
    } else {
        activeArr.push({ "value": null, "anchorAlpha": "0" });
    }
}

var inActiveArr = [];
// eslint-disable-next-line
for (var i = 1; i <= 23; i++) {

    if (i <= currentHour) {
        inActiveArr.push({ "value": dayValueArr[i - 1], "anchorAlpha": "0" });
    } else {
        // eslint-disable-next-line
        if (i % 4 != 0) {
            inActiveArr.push({ "value": dayValueArr[i - 1], "anchorAlpha": "0" });
        } else {
            inActiveArr.push({ "value": dayValueArr[i - 1] });
        }
    }
}

var third_chart_today = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "13",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    showValues: "0",
    showLegend: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    paletteColors: "#FA394E, #4B53FF",
    usePlotGradientColor: "0",
    yAxisMinValue: "0",
    yAxisMaxValue: "10",
    plotFillAlpha: "100",
    drawAnchors: "1",
    anchorBgColor: "#FA394E",
    anchorBorderColor: "#FDFDFD",
    anchorRadius: "5",
    anchorBorderThickness: "1.9",
    showPlotBorder: "0",
    showToolTip: "1",
    canvasTopMargin: "75",
    canvasBottomMargin: "75",
    canvasLeftMargin: "30",
    canvasRightMargin: "30",
    labelDisplay: "ROTATE",
    numberSuffix: " kWh",
    transposeAnimation: "1"
  },

  annotations: {
    groups: [
      {
        items: [
          //     {
          //     "id": "1",
          //     "type": "text",
          //     "text": dayDetail,
          //     "align": "left",
          //     "font": "Nunito Sans",
          //     "bold": "0",
          //     "fontSize": "14",
          //     "color": "#FDFDFD",
          //     "x": "$chartStartX + 15",
          //     "y": "$chartEndY - 18"
          // },
          {
            id: "2",
            type: "text",
            text: "Till Now:",
            align: "left",
            font: "Nunito Sans",
            bold: "0",
            fontSize: "12.5",
            color: "#FDFDFD",
            x: "$canvasStartX - 20",
            y: "$canvasStartY - 35"
          },
          {
            id: "3",
            type: "text",
            text: dayValueArr[currentHour - 1].toString() + " kWh",
            align: "left",
            font: "Nunito Sans",
            bold: "1",
            fontSize: "13",
            color: "#FDFDFD",
            x: "$canvasStartX + 30",
            y: "$canvasStartY - 35"
          },
          {
            id: "4",
            type: "text",
            text: "Predicted:",
            align: "left",
            font: "Nunito Sans",
            bold: "0",
            fontSize: "12.5",
            color: "#FDFDFD",
            x: "$canvasEndX - 116",
            y: "$canvasStartY - 35"
          },
          {
            id: "5",
            type: "text",
            text: dayValueArr[dayValueArr.length - 1].toString() + " kWh",
            align: "left",
            font: "Nunito Sans",
            bold: "1",
            fontSize: "13",
            color: "#FDFDFD",
            x: "$canvasEndX - 60",
            y: "$canvasStartY - 35"
          }
        ]
      }
    ]
  },

  categories: [
    {
      category: categoryArr
    }
  ],

  dataset: [
    {
      seriesname: null,
      data: activeArr
    },
    {
      seriesname: null,
      alpha: "20",
      data: inActiveArr
    }
  ]
};

// month chart
//var monthDetail = moment().format('MMMM YYYY');
var monthLen = moment().daysInMonth();
// eslint-disable-next-line
var currentDay = moment().format('D');

var monthValueArr = [5.2*30, 5.2*30, 5.2*30, 5.2*30, 5.2*30, 5.2*30, 6.5*30, 7.8*30, 9.1*30, 10.3*30, 10.3*30, 10.3*30, 10.3*30, 9.1*30, 9.1*30, 10.3*30, 10.3*30, 11.6*30, 13*30, 13*30, 10.3*30, 9.1*30, 6.5*30, 5.2*30];

var monthCatArr = [];
// eslint-disable-next-line
for (var i = 0; i < monthLen; i++) {
    // eslint-disable-next-line
    if (i != currentDay) {
        // eslint-disable-next-line
        if (i % 7 != 0) {
            monthCatArr.push({ "label": moment().date(i + 1).format('MMM D'), "showLabel": "1" });
        } else {
            monthCatArr.push({ "label": moment().date(i + 1).format('MMM D'), "showLabel": "1" });
        }

    } else {
        monthCatArr.push({ "vline": "true", "color": "#707C92", "dashed": "1", "linePosition": "0", "labelPosition": "0" });
        monthCatArr.push({ "label": moment().date(i + 1).format('MMM D') });
    }
}

var dayActiveArr = [];
// eslint-disable-next-line
for (var i = 1; i <= monthLen; i++) {
    currentDay = moment().format('D');
    if (i <= currentDay) {
        // eslint-disable-next-line
        if (i % 7 != 0) {
            dayActiveArr.push({ "value": monthValueArr[i - 1], "anchorAlpha": "0" });
        } else {
            dayActiveArr.push({ "value": monthValueArr[i - 1] });
        }
    } else {
        dayActiveArr.push({ "value": null, "anchorAlpha": "0" });
    }
}

var dayInActiveArr = [];
// eslint-disable-next-line
for (var i = 1; i <= monthLen; i++) {
    if (i <= currentDay) {
        dayInActiveArr.push({ "value": monthValueArr[i - 1], "anchorAlpha": "0" });
    } else {
        // eslint-disable-next-line
        if (i % 7 != 0) {
            dayInActiveArr.push({ "value": monthValueArr[i - 1], "anchorAlpha": "0" });
        } else {
            dayInActiveArr.push({ "value": monthValueArr[i - 1] });
        }
    }
}




var third_chart_month = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "13",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    showValues: "0",
    showLegend: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    paletteColors: "#FA394E, #4B53FF",
    usePlotGradientColor: "0",
    yAxisMinValue: "0",
    yAxisMaxValue: "500",
    plotFillAlpha: "100",
    drawAnchors: "1",
    anchorBgColor: "#FA394E",
    anchorBorderColor: "#FDFDFD",
    anchorRadius: "5",
    anchorBorderThickness: "1.9",
    showPlotBorder: "0",
    showToolTip: "1",
    canvasTopMargin: "75",
    canvasBottomMargin: "75",
    canvasLeftMargin: "30",
    canvasRightMargin: "30",
    labelDisplay: "ROTATE",
    yAxisName: "kWh",
    transposeAnimation: "1",
    labelStep: "7"
  },

  annotations: {
    groups: [
      {
        items: [
          //     {
          //     "id": "1",
          //     "type": "text",
          //     "text": monthDetail,
          //     "align": "left",
          //     "font": "Nunito Sans",
          //     "bold": "0",
          //     "fontSize": "14",
          //     "color": "#FDFDFD",
          //     "x": "$chartStartX + 15",
          //     "y": "$chartEndY - 18"
          // },
          {
            id: "2",
            type: "text",
            text: "Till Now:",
            align: "left",
            font: "Nunito Sans",
            bold: "0",
            fontSize: "12.5",
            color: "#FDFDFD",
            x: "$canvasStartX - 20",
            y: "$canvasStartY - 35"
          },
          {
            id: "3",
            type: "text",
            text: monthValueArr[currentDay - 1].toString() + " kWh",
            align: "left",
            font: "Nunito Sans",
            bold: "1",
            fontSize: "13",
            color: "#FDFDFD",
            x: "$canvasStartX + 30",
            y: "$canvasStartY - 35"
          },
          {
            id: "4",
            type: "text",
            text: "Predicted:",
            align: "left",
            font: "Nunito Sans",
            bold: "0",
            fontSize: "12.5",
            color: "#FDFDFD",
            x: "$canvasEndX - 116",
            y: "$canvasStartY - 35"
          },
          {
            id: "5",
            type: "text",
            text: monthValueArr[monthLen - 1].toString() + " kWh",
            align: "left",
            font: "Nunito Sans",
            bold: "1",
            fontSize: "13",
            color: "#FDFDFD",
            x: "$canvasEndX - 60",
            y: "$canvasStartY - 35"
          }
        ]
      }
    ]
  },

  categories: [
    {
      category: monthCatArr
    }
  ],

  dataset: [
    {
      seriesname: null,
      data: dayActiveArr
    },
    {
      seriesname: null,
      alpha: "20",
      data: dayInActiveArr
    }
  ]
};


// year chart
//var yearDetail = moment().format('YYYY');
var yearLen = 12;
// eslint-disable-next-line
var currentMonth = parseInt(moment().format('M')) - 1;

var yearValueArr = [5.2*30*12, 5.2*30, 5.2*30, 5.2*30, 5.2*30, 5.2*30, 6.5*30, 7.8*30, 9.1*30, 10.3*30, 10.3*30, 10.3*30, 10.3*30, 9.1*30, 9.1*30, 10.3*30, 10.3*30, 11.6*30, 13*30, 13*30, 10.3*30, 9.1*30, 6.5*30, 5.2*30];;

var yearCatArr = [];
// eslint-disable-next-line
for (var i = 0; i < yearLen; i++) {
    // eslint-disable-next-line
    if (i != currentMonth) {
        // eslint-disable-next-line
        if (i % 3 != 0) {
            yearCatArr.push({ "label": moment().month(i).format('MMM'), "showLabel": "0" });
        } else {
            yearCatArr.push({ "label": moment().month(i).format('MMM') });
        }

    } else {
        yearCatArr.push({ "label": moment().month(i).format('MMM') });
        yearCatArr.push({ "vline": "true", "color": "#707C92", "dashed": "1", "linePosition": "0", "labelPosition": "0" });
    }
}

var monthActiveArr = [];
// eslint-disable-next-line
for (var i = 0; i < yearLen; i++) {
    if (i <= currentMonth) {
        // eslint-disable-next-line
        if (i % 3 != 0) {
            monthActiveArr.push({ "value": yearValueArr[i], "anchorAlpha": "0" });
        } else {
            monthActiveArr.push({ "value": yearValueArr[i] });
        }
    } else {
        monthActiveArr.push({ "value": null, "anchorAlpha": "0" });
    }
}

var monthInactiveArr = [];
// eslint-disable-next-line
for (var i = 0; i < yearLen; i++) {
    // eslint-disable-next-line
    if (i <= currentMonth) {
        monthInactiveArr.push({ "value":yearValueArr[i], "anchorAlpha": "0" });
    } else {
        // eslint-disable-next-line
        if (i % 3 != 0) {
            monthInactiveArr.push({ "value": yearValueArr[i], "anchorAlpha": "0" });
        } else {
            monthInactiveArr.push({ "value": yearValueArr[i] });
        }
    }
}


var third_chart_year = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "13",
    baseFont: "Nunito Sans",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    showValues: "0",
    showLegend: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    paletteColors: "#FA394E, #4B53FF",
    usePlotGradientColor: "0",
    yAxisMinValue: "0",
    yAxisMaxValue: "500",
    plotFillAlpha: "100",
    drawAnchors: "1",
    anchorBgColor: "#FA394E",
    anchorBorderColor: "#FDFDFD",
    anchorRadius: "5",
    anchorBorderThickness: "1.9",
    showPlotBorder: "0",
    showToolTip: "1",
    canvasTopMargin: "75",
    canvasBottomMargin: "75",
    canvasLeftMargin: "30",
    canvasRightMargin: "30",
    labelDisplay: "ROTATE",
    yAxisName: "kWh",
    transposeAnimation: "1"
  },

  annotations: {
    groups: [
      {
        items: [
          //     {
          //     "id": "1",
          //     "type": "text",
          //     "text": yearDetail,
          //     "align": "left",
          //     "font": "Nunito Sans",
          //     "bold": "0",
          //     "fontSize": "14",
          //     "color": "#FDFDFD",
          //     "x": "$chartStartX + 15",
          //     "y": "$chartEndY - 18"
          // },
          {
            id: "2",
            type: "text",
            text: "Till Now:",
            align: "left",
            font: "Nunito Sans",
            bold: "0",
            fontSize: "12.5",
            color: "#FDFDFD",
            x: "$canvasStartX - 20",
            y: "$canvasStartY - 35"
          },
          {
            id: "3",
            type: "text",
            text: yearValueArr[currentMonth].toString() + " kWh",
            align: "left",
            font: "Nunito Sans",
            bold: "1",
            fontSize: "13",
            color: "#FDFDFD",
            x: "$canvasStartX + 30",
            y: "$canvasStartY - 35"
          },
          {
            id: "4",
            type: "text",
            text: "Predicted:",
            align: "left",
            font: "Nunito Sans",
            bold: "0",
            fontSize: "12.5",
            color: "#FDFDFD",
            x: "$canvasEndX - 116",
            y: "$canvasStartY - 35"
          },
          {
            id: "5",
            type: "text",
            text: yearValueArr[yearLen - 1].toString() + " kWh",
            align: "left",
            font: "Nunito Sans",
            bold: "1",
            fontSize: "13",
            color: "#FDFDFD",
            x: "$canvasEndX - 60",
            y: "$canvasStartY - 35"
          }
        ]
      }
    ]
  },

  categories: [
    {
      category: yearCatArr
    }
  ],

  dataset: [
    {
      seriesname: null,
      data: monthActiveArr
    },
    {
      seriesname: null,
      alpha: "20",
      data: monthInactiveArr
    }
  ]
};



var chartConfigs3 = {
    type: "msarea",
    className: "fc-mssplinearea",
    id: "mychart3",
    dataFormat: "JSON",
    width: "100%",
    height: "300",
    dataSource: third_chart_month
};

export default chartConfigs3;
export { third_chart_today };
export { third_chart_month };
export { third_chart_year };