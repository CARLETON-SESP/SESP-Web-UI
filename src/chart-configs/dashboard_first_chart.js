import moment from 'moment';
 // eslint-disable-next-line
var dayVal = moment().format('MMMM, Do YYYY');

var first_chart_today = {
    "chart": {
      "showBorder": "0",
      "showShadow": "0",
      "use3DLighting": "0",
      "showLabels": "0",
      "showValues": "0",
      "paletteColors": "#58E2C2, #F7E53B, #FF5733, #FF33DA, #42FF33 ",
      "bgColor": "#1D1B41",
      "bgAlpha": "0",
      "canvasBgAlpha": "0",
      "doughnutRadius": "75",
      "pieRadius": "95",
     // "pieRadius": "100",
      "numberPrefix": "$",
      "plotBorderAlpha": "0",
      "toolTipBgcolor": "#484E69",
      "toolTipPadding": "7",
      "toolTipBorderRadius": "3",
      "toolTipBorderAlpha": "30",
      "tooltipBorderThickness": "0.7",
      "toolTipColor": "#FDFDFD",
      "baseFont": "Nunito Sans",
      "baseFontSize": "14",
      "baseFontColor": "#FDFDFD",
      "showLegend": "1",
      "legendShadow": "0",
      "legendBorderAlpha": "0",
      "drawCustomLegendIcon": "1",
      "legendBgAlpha": "0",
      "chartTopMargin": "-10",
      "canvasTopMargin": "-10",
      "chartBottomMargin": "20",
      "canvasBottomMargin": "20",
      "legendNumColumns": "1",
      "legendPosition": "RIGHT",
      "defaultCenterLabel": "Total <br> 264",
      "centerLabel": "$label<br>$value",
      "centerLabelBold": "1",
      "centerLabelFontSize": "20",
      "enableRotation": "0",
      "transposeAnimation":"1",
      "plotToolText": "<div>$label<br>$dataValue ($percentValue)<div>"
    },

    // "annotations": {
    //   "groups": [{
    //     "autoscale":"1",
    //     "items": [{
    //       "id": "1",
    //       "type": "text",
    //       "text": dayVal,
    //       "align": "left",
    //       "font": "Nunito Sans",
    //       "bold": "0",
    //       "fontSize": "14",
    //       "color": "#FDFDFD",
    //       "x": "$chartStartX + 15",
    //       "y": "$chartEndY - 20"
    //     }]
    //   }]
    // },

    "data": [{
      "label": "Nuclear",
      "value": "144"
    }, {
      "label": "Solar",
      "value": "24"
    }, {
      "label": "Wind",
      "value": "24"
    }, {
      "label": "Diseal",
      "value": "72"
    }]
  };

 // var monthVal = moment().format('MMMM YYYY');

var first_chart_month = {
  chart: {
    showBorder: "0",
    showShadow: "0",
    use3DLighting: "0",
    showLabels: "0",
    showValues: "0",
    paletteColors: "#58E2C2, #F7E53B, #FF5733, #FF33DA, #42FF33 ",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    doughnutRadius: "75",
    pieRadius: "95",
    // "pieRadius": "100",
    numberPrefix: "$",
    plotBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    baseFont: "Nunito Sans",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showLegend: "1",
    legendShadow: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendBgAlpha: "0",
    chartTopMargin: "-10",
    canvasTopMargin: "-10",
    chartBottomMargin: "20",
    canvasBottomMargin: "20",
    legendNumColumns: "1",
    legendPosition: "RIGHT",
    defaultCenterLabel: "Total <br> 8460",
    centerLabel: "$label<br>$value",
    centerLabelBold: "1",
    centerLabelFontSize: "20",
    enableRotation: "0",
    transposeAnimation: "1",
    plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>"
  },

  // "annotations": {
  //   "groups": [{
  //     "autoscale":"1",
  //     "items": [{
  //       "id": "1",
  //       "type": "text",
  //       "text": monthVal,
  //       "align": "left",
  //       "font": "Nunito Sans",
  //       "bold": "0",
  //       "fontSize": "14",
  //       "color": "#FDFDFD",
  //       "x": "$chartStartX + 15",
  //       "y": "$chartEndY - 20"
  //     }]
  //   }]
  // },

  "data": [{
    "label": "Nuclear",
    "value": "4320"
  }, {
    "label": "Solar",
    "value": "720"
  }, {
    "label": "Wind",
    "value": "720"
  }, {
    "label": "Diseal",
    "value": "2700"
  }]
};

  //var yearVal = moment().format('YYYY');

var first_chart_year = {
  chart: {
    showBorder: "0",
    showShadow: "0",
    use3DLighting: "0",
    showLabels: "0",
    showValues: "0",
    paletteColors: "#58E2C2, #F7E53B, #FF5733, #FF33DA, #42FF33 ",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    doughnutRadius: "75",
    pieRadius: "95",
    // "pieRadius": "100",
    numberPrefix: "$",
    plotBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    baseFont: "Nunito Sans",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showLegend: "1",
    legendShadow: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendBgAlpha: "0",
    chartTopMargin: "-10",
    canvasTopMargin: "-10",
    chartBottomMargin: "20",
    canvasBottomMargin: "20",
    legendNumColumns: "1",
    legendPosition: "RIGHT",
    defaultCenterLabel: "Total <br> $1450",
    centerLabel: "$label<br>$value",
    centerLabelBold: "1",
    centerLabelFontSize: "20",
    enableRotation: "0",
    transposeAnimation: "1",
    plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>"
  },

  // "annotations": {
  //   "groups": [{
  //     "autoscale":"1",
  //     "items": [{
  //       "id": "1",
  //       "type": "text",
  //       "text": yearVal,
  //       "align": "left",
  //       "font": "Nunito Sans",
  //       "bold": "0",
  //       "fontSize": "14",
  //       "color": "#FDFDFD",
  //       "x": "$chartStartX + 15",
  //       "y": "$chartEndY - 20"
  //     }]
  //   }]
  // },

  "data": [{
    "label": "Nuclear",
    "value": "51840"
  }, {
    "label": "Solar",
    "value": "8640"
  }, {
    "label": "Wind",
    "value": "8640"
  }, {
    "label": "Diseal",
    "value": "32400"
  }]
};



var chartConfigs1 = {
    type: "doughnut2d",
    className: "fc-doughnut2d", 
    dataFormat: "JSON",
    width: "100%",
    height:"300",
    id: "mychart1",
    dataSource: first_chart_month
};

export default chartConfigs1;
export { first_chart_month };
export { first_chart_today };
export { first_chart_year };