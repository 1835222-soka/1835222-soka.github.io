var labels = ["January","Feburuary","March","April","May","June"];

var data = {
    labels: labels,
    datasets: [{
        label: "初めてのグラフ用データセット",
        borderColor:"rgb(255, 100, 130)",
        backgroundColor: "rgb(150, 50, 60)",
        data: [0, 10, 15, 3, 20, 60, 10],

    }]
};

var config = {
    type: "line",
    data,
    options: {},
};

var lineChart = new Chart(
    document.getElementById("lineChart"),
    config,
);

// 円グラフ
const piedata = {
    labels: [
      'Apple',
      'Watermelon',
      'Orange'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

const pieconfig = {
    type: 'pie',
    data: piedata,
  };

var piechart = new Chart(
    document.getElementById("PieChart"),
    pieconfig
)
