import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public config: any = {
    type: 'bar',

    data: {
      labels:['Station Name Dummy1','Station Name Dummy1','Station Name Dummy1','Station Name Dummy1','Station Name Dummy1'],
      datasets: [
        {
          Label: 'Sales',
          data: ['260','140','190','230','180'],
          backgroundColor:'#FF7F5C',
          barThickness: 20,
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };
  chart: any;

  ngOnInit(): void {
      this.chart = new Chart('MyChart', this.config);
  }

}
