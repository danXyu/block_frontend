$(document).ready(function() {

    var data = [{
        "sale": "825",
        "year": "0"
    }, {
        "sale": "826",
        "year": "1"
    }, {
        "sale": "823",
        "year": "2"
    }, {
        "sale": "820",
        "year": "3"
    }, {
        "sale": "825",
        "year": "4"
    }, {
        "sale": "842",
        "year": "5"
    }, {
        "sale": "865",
        "year": "6"
    }, {
        "sale": "895",
        "year": "7"
    }, {
        "sale": "750",
        "year": "8"
    }, {
        "sale": "800",
        "year": "9"
    }, {
        "sale": "820",
        "year": "10"
    }, {
        "sale": "815",
        "year": "11"
    }, {
        "sale": "813",
        "year": "12"
    }, {
        "sale": "823",
        "year": "13"
    }, {
        "sale": "817",
        "year": "14"
    }, {
        "sale": "819",
        "year": "15"
    }, {
        "sale": "823",
        "year": "16"
    }, {
        "sale": "880",
        "year": "17"
    }, {
        "sale": "900",
        "year": "18"
    }, {
        "sale": "830",
        "year": "19"
    }, {
        "sale": "740",
        "year": "20"
    }, {
        "sale": "790",
        "year": "21"
    }, {
        "sale": "820",
        "year": "22"
    }, {
        "sale": "830",
        "year": "23"
    }];

    var data2 = [{
        "sale": "815",
        "year": "0"
    }, {
        "sale": "816",
        "year": "1"
    }, {
        "sale": "833",
        "year": "2"
    }, {
        "sale": "810",
        "year": "3"
    }, {
        "sale": "826",
        "year": "4"
    }, {
        "sale": "833",
        "year": "5"
    }, {
        "sale": "830",
        "year": "6"
    }, {
        "sale": "823",
        "year": "7"
    }, {
        "sale": "810",
        "year": "8"
    }, {
        "sale": "815",
        "year": "9"
    }, {
        "sale": "835",
        "year": "10"
    }, {
        "sale": "818",
        "year": "11"
    }, {
        "sale": "819",
        "year": "12"
    }, {
        "sale": "823",
        "year": "13"
    }, {
        "sale": "817",
        "year": "14"
    }, {
        "sale": "823",
        "year": "15"
    }, {
        "sale": "828",
        "year": "16"
    }, {
        "sale": "810",
        "year": "17"
    }, {
        "sale": "820",
        "year": "18"
    }, {
        "sale": "810",
        "year": "19"
    }, {
        "sale": "815",
        "year": "20"
    }, {
        "sale": "810",
        "year": "21"
    }, {
        "sale": "800",
        "year": "22"
    }, {
        "sale": "815",
        "year": "23"
    }];


    var data3 = [{
        "sale": "816",
        "year": "0"
    }, {
        "sale": "824",
        "year": "1"
    }, {
        "sale": "816",
        "year": "2"
    }, {
        "sale": "816",
        "year": "3"
    }, {
        "sale": "819",
        "year": "4"
    }, {
        "sale": "835",
        "year": "5"
    }, {
        "sale": "845",
        "year": "6"
    }, {
        "sale": "821",
        "year": "7"
    }, {
        "sale": "816",
        "year": "8"
    }, {
        "sale": "811",
        "year": "9"
    }, {
        "sale": "830",
        "year": "10"
    }, {
        "sale": "813",
        "year": "11"
    }, {
        "sale": "814",
        "year": "12"
    }, {
        "sale": "811",
        "year": "13"
    }, {
        "sale": "805",
        "year": "14"
    }, {
        "sale": "803",
        "year": "15"
    }, {
        "sale": "832",
        "year": "16"
    }, {
        "sale": "819",
        "year": "17"
    }, {
        "sale": "815",
        "year": "18"
    }, {
        "sale": "819",
        "year": "19"
    }, {
        "sale": "825",
        "year": "20"
    }, {
        "sale": "800",
        "year": "21"
    }, {
        "sale": "819",
        "year": "22"
    }, {
        "sale": "825",
        "year": "23"
    }];


    var data4 = [{
        "sale": "834",
        "year": "0"
    }, {
        "sale": "844",
        "year": "1"
    }, {
        "sale": "831",
        "year": "2"
    }, {
        "sale": "829",
        "year": "3"
    }, {
        "sale": "820",
        "year": "4"
    }, {
        "sale": "813",
        "year": "5"
    }, {
        "sale": "803",
        "year": "6"
    }, {
        "sale": "822",
        "year": "7"
    }, {
        "sale": "821",
        "year": "8"
    }, {
        "sale": "825",
        "year": "9"
    }, {
        "sale": "833",
        "year": "10"
    }, {
        "sale": "828",
        "year": "11"
    }, {
        "sale": "839",
        "year": "12"
    }, {
        "sale": "833",
        "year": "13"
    }, {
        "sale": "827",
        "year": "14"
    }, {
        "sale": "822",
        "year": "15"
    }, {
        "sale": "821",
        "year": "16"
    }, {
        "sale": "811",
        "year": "17"
    }, {
        "sale": "824",
        "year": "18"
    }, {
        "sale": "812",
        "year": "19"
    }, {
        "sale": "818",
        "year": "20"
    }, {
        "sale": "811",
        "year": "21"
    }, {
        "sale": "825",
        "year": "22"
    }, {
        "sale": "818",
        "year": "23"
    }];

  var vis = d3.select("#visualisation"),
      WIDTH = 2000,
      HEIGHT = 500,
      MARGINS = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 50
      },
      xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([0,50]),
      yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([750,950]),

        xAxis = d3.svg.axis().scale(xScale),
        yAxis = d3.svg.axis().scale(yScale).orient("left");

        vis.append("svg:g")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
        vis.append("svg:g")
            .call(yAxis);


    vis.append("svg:g")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis);

    var lineGen = d3.svg.line()
      .x(function(d) {
        return xScale(d.year);
      })
      .y(function(d) {
        return yScale(d.sale);
      });

      vis.append('svg:path')
        .attr('d', lineGen(data))
        .attr('stroke', 'green')
        .attr('stroke-width', 2)
        .attr('fill', 'none');
    vis.append('svg:path')
      .attr('d', lineGen(data2))
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
    vis.append('svg:path')
      .attr('d', lineGen(data3))
      .attr('stroke', 'red')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
    vis.append('svg:path')
      .attr('d', lineGen(data4))
      .attr('stroke', 'orange')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
});