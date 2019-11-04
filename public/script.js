let canvas = document.getElementById('myChart');
let ctx = canvas.getContext('2d');

let fillLabels = [];
let fillData = [];

for (let i = 0; i < cData.length; i++) {
  fillLabels.push(cData[i]["category"]);
  fillData.push(cData[i]["percent"]);
};

let myChart = new Chart(ctx, {
  type: 'doughnut',
    data: {
      labels: fillLabels,
        datasets: [{
          label: 'Expense Summary',
          data: fillData,
          backgroundColor: [
            'rgb(0, 0, 0))',
            'rgb(145, 160, 47)',
            'rgb(219, 204, 84)',
            'rgb(75, 143, 108)',
            'rgb(51, 125, 63 )',
            'rgb(99, 33, 70 )',
            'rgb(154, 157, 138 )'
          ],
          borderColor: [
            'rgb(0, 0, 0)',
            'rgb(145, 160, 47)',
            'rgb(219, 204, 84)',
            'rgb(75, 143, 108)',
            'rgb(51, 125, 63 )',
            'rgb(99, 33, 70, 1 )',
            'rgb(154, 157, 138 )'
          ],
          borderWidth: 1
      }]
    }
});