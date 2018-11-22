/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name :  Duval Raphaël   
Date :  14/11/18
Contact information : duvalraphael1995@gmail.com

What does this script do ? 
The script search the data in the table and return them in the graphic.

*/

// Your scripting goes here...

// creation des div des deux graph 

let graph1 = document.createElement("div");
 graph1.setAttribute("id","graphique1");
let graph2 = document.createElement("div");
graph2.setAttribute("id","graphique2");

// Recuperation de contenu 

 let allcontent = document.getElementById("mw-content-text");
 let table1 = document.getElementById("table1");
 let table2 = document.getElementById("table2");

//Insertion 

allcontent.insertBefore(graph1,table1);
allcontent.insertBefore(graph2,table2);

//Récupération des données du tableau1

let tbody1 = table1.getElementsByTagName("tbody");
let tr1 = tbody1[0].getElementsByTagName("tr");

//Remise des données du tableau1 dans un autre tableau 

let dataTable1 = [];
let FillTable1 = () => {
  for(i=1;i<tr1.length;i++){
    let country1 = [];
    let th1 = tr1[i].getElementsByTagName("th");
    let div1 = th1[0].getElementsByTagName("div");
    let number = div1[0].innerHTML;
    country1.push(number);
    let td1 = tr1[i].getElementsByTagName("td");
            for (y=0;y<td1.length;y++){
                let contenu1 = td1[y].innerHTML;
                country1.push(contenu1);
            }
        dataTable1.push(country1);

  }
}
FillTable1();

// Dimple du graph1
let svg = dimple.newSvg("#graphique1", 640, 600);

let data = [];
for (i=0;i<dataTable1.length;i++){
    for (let y=2002;y<2013;y++){
      	let dataContent = {"Année":y, "Infractions":dataTable1[i][y-2000], "Pays":dataTable1[i][1]};
      	if(dataContent.Infractions != ':'){
      		data.push(dataContent);
      	}
    }
}

let chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Année");
chart.addMeasureAxis("y", "Infractions");
chart.addSeries("Pays", dimple.plot.line);
chart.addLegend(60, 10, 500, 120, "right");
chart.setBounds('50px', "150px", "80%", "70%"); 
chart.draw();
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Récupération des données du tableau2

let tbody2 = table2.getElementsByTagName("tbody");
let tr2 = tbody2[0].getElementsByTagName("tr");

//Remise des données du tableau1 dans un autre tableau 

let dataTable2 = [];

let FillTable2 = () => {
  for(i=1;i<tr2.length;i++){
    let country2 = [];
    let th2 = tr2[i].getElementsByTagName("th");
    let div2 = th2[0].getElementsByTagName("div");
    let number = div2[0].innerHTML;
    country2.push(number);
    let td2 = tr2[i].getElementsByTagName("td");
            for (y=0;y<td2.length;y++){
                let contenu2 = td2[y].innerHTML;
                country2.push(contenu2);
            }
        dataTable2.push(country2);
  }
}
FillTable2();

// Dimple du graph2

  let svg2 = dimple.newSvg('#graphique2', 700, 650);
  
  let data2 = [];
  for (i=0;i<dataTable2.length;i++){
    for (let y=2;y<4;y++){
      let dataContent2 = {"Année":y, "Population":dataTable2[i][y], "Pays":dataTable2[i][1]};
      if(dataContent2.Année == 2){
        dataContent2.Année = "2007-09";
      }else if (dataContent2.Année == 3){
        dataContent2.Année = "2010-12";
      }
      data2.push(dataContent2);
    }
  }

let chart2 = new dimple.chart(svg2, data2);
chart2.addCategoryAxis("x", "Année");
chart2.addMeasureAxis("y", "Population");
chart2.addSeries("Pays", dimple.plot.line);
chart2.addLegend(80, 10, 500, 120, "right");
chart2.setBounds('50px', "150px", "80%", "70%"); 
chart2.draw();

// Créer la div et la placer corectement 
let graph3 = document.createElement("div");
let content = document.getElementById("content");
let bodyContent =document.getElementById("bodyContent");
content.insertBefore(graph3,bodyContent);
graph3.setAttribute("id","graphique3");
//AJAX 

 //Create the XHR Object
 let xhr = new XMLHttpRequest;
 //Call the open function, GET-type of request, url, true-asynchronous
 xhr.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true)
 //call the onload 
 xhr.onload = function() 
     {
         //check if the status is 200(means everything is okay)
         if (this.status === 200) 
             {
                 //return server response as an object with JSON.parse
                 object = JSON.parse(this.responseText);
                  let svg3 = dimple.newSvg("#graphique3", 400, 200);
                  let data3 = [];
                  for (i=0;i<object.length;i++){
                      let dataContent3 = {"x":object[i][0], "y":object[i][1], "Données": "données"};
                    data3.push(dataContent3);
                  }

                  let chart3 = new dimple.chart(svg3, data3);
                  chart3.addCategoryAxis("x", "x");
                  chart3.addMeasureAxis("y", "y");
                  chart3.addSeries("Données", dimple.plot.line); 
                  chart3.draw();
     }
             }
 //call send
 xhr.send();

 //Refresh 
/*
 let updateChart= () => {
  $.getJSON("https://inside.becode.org/api/v1/data/random.json?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
      $.each(data3, function(key, value) {
          dataPoints.push({
              x: parseInt(value[0]),
              y: parseInt(value[1])
          });
     });
     chart.render();
     setTimeout(function(){updateChart()}, 1000);
  });
 }*/

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 