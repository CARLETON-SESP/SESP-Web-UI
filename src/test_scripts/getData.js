const fetch = require('node-fetch');

var counter = 0

function getData(){
    fetch('http://localhost:8081/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        //get object ready with data
        var weatherObject = JSON.parse(myJson.json);

        //test examples of references to object/////////////////////

        console.log(weatherObject);
        // console.log(weatherObject.weather[0].id);
        // console.log(weatherObject.main.temp);
        // console.log(weatherObject.wind.gust);
        
        // SHELL STUFF////////////////////

        // var shellVal = "sh test.sh " + weatherObject.main.temp
        // const exec = require('child_process').exec;
        // const myShellScript = exec(shellVal);
        // myShellScript.stdout.on('data', (data)=>{
        //     console.log(data); 
        //     // do whatever you want here with data
        // });
        // myShellScript.stderr.on('data', (data)=>{
        //     console.error(data);
        // });
        // counter = counter+1
        // console.log("count: " + counter)

        // FILE WRITE ////////////////
        const fs = require('fs') 
  
        // Data which will write in a file. 
        let data = 
        `
var fourth_chart_month = {
    chart: {
        showBorder: "0",
        showCanvasBorder: "0",
        placeValuesInside: "0",
        showAlternateVGridColor: "0",
        canvasBgAlpha: "0",
        bgColor: "#1D1B41",
        bgAlpha: "0",
        baseFont: "Nunito Sans Light",
        baseFontColor: "#FDFDFD",
        baseFontSize: "14",
        showDivLineValues: "0",
        divLineAlpha: "0",
        showLimits: "0",
        baseFontBold: "0",
        usePlotGradientColor: "0",
        numberSuffix: " kWh",
        yAxisMaxValue: "3",
        paletteColors: "#AB26C2, #9326BF, #7625B9, #5E24B6, #4424B1, #3123AE",
        labelFontColor: "#C6C4C4",
        labelFontBold: "0",
        labelFontSize: "16",
        plotBorderAlpha: "0",
        plotFillAlpha: "100",
        valueFontBold: "1",
        valueFontColor: "#FDFDFD",
        valueFontSize: "13",
        toolTipBgcolor: "#484E69",
        toolTipPadding: "7",
        toolTipBorderRadius: "3",
        toolTipBorderAlpha: "30",
        tooltipBorderThickness: "0.7",
        toolTipColor: "#FDFDFD",
        canvasLeftMargin: "0",
        canvasRightMargin: "40",
        canvasBottomMargin: "20",
        canvasTopMargin: "20",
        showHoverEffect: "1"
    },
    
    annotations: {
        groups: [
        {
            items: [
            {
                id: "info",
                type: "text",
                text: "",
                align: "right",
                color: "#FDFDFD",
                font: "Nunito Sans Light",
                fontSize: "15",
                bold: "0",
                x: "$canvasEndX + 30",
                y: "$canvasEndY - 25"
            }
            ]
        }
        ]
    },
    
    data: [
        {
        label: "Nuclear",
        value: "6",
        toolText: "Energy: 54.5%"
        },
        {
        label: "Diseal",
        value: `+`"`+weatherObject.wind.gust+`"`+`,
        toolText: "Energy: 27.3%"
        },
        {
        label: "Solar",
        value: "1",
        toolText: "$Label: 9.1%"
        },
        {
        label: "Wind",
        value: "1",
        toolText: "$Label: 9.1%"
        }
    ]
    };
    var fourth_chart_today = fourth_chart_month;
    var fourth_chart_year = fourth_chart_month;
    
    
    
    var chartConfigs4 = {
        type: "bar2d",
        className: "fc-bar2d",
        id: "mychart4",
        dataFormat: "JSON",
        width: "100%",
        height: "300",
        dataSource: fourth_chart_month
    };
    
    export default chartConfigs4;
    export { fourth_chart_today };
    export { fourth_chart_month };
    export { fourth_chart_year };
        `
        
        // Write data in 'Output.txt' . 
        fs.writeFile('../chart-configs/testComp.js', data, (err) => { 
            
            // In case of a error throw err. 
            if (err) throw err; 
        }) 


    });

    // if (counter <= 3){
    //   setTimeout(getData, 5000);  
    // }
    
}

getData();
 
 




