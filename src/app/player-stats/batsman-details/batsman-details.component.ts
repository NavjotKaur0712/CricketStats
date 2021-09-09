import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerStatsService } from 'src/app/shared/services/player-stats.service';
import * as Highcharts from 'highcharts';
import jsPDF from'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-batsman-details',
  templateUrl: './batsman-details.component.html',
  styleUrls: ['./batsman-details.component.css']
})
export class BatsmanDetailsComponent implements OnInit {
  batsmanDetails!: any[];
  batsmanId!: number;
  Highcharts = Highcharts;
  barGraphChart: {} = {};
  pieGraphChart: {} = {};

  constructor(private _batsmanDetails: PlayerStatsService, private route: ActivatedRoute) { }

  @ViewChild ('htmlData') htmlData!:ElementRef;
 

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.batsmanId = id;
    this.getBatsmanDetails(id);
  }

  public openPdf() : void {
    let DATA: any = document.getElementById('htmlData');
 
    html2canvas(DATA).then(canvas => {
      let fileWidth = 250;
      let fileHeight = canvas.height* fileWidth / canvas.width;
 
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
 
      PDF.save('cricket-statistics.pdf');
    });
  }

  getBatsmanDetails(id: number){
    this._batsmanDetails.getBatsmanDetails()
     .subscribe(response => {
       this.batsmanDetails = response;
       console.log(this.batsmanDetails);
       for(let batsmanDetail of this.batsmanDetails){
         if(this.batsmanId == batsmanDetail.id){
           console.log(batsmanDetail);
           this.barGraphChart = {
            chart: {
              type: 'column'
            },
            title: {
              text: 'Runs year wise'
            },
            subtitle: {
              text: batsmanDetail.name
            },
            legend: {
              align: 'right',
              verticalAlign: 'middle',
              layout: 'vertical'
            },
            xAxis: {
              categories: [batsmanDetail.a2, batsmanDetail.b2, batsmanDetail.c2, batsmanDetail.d2],
              labels: {
                x: -10
              }
            },
            yAxis: {
              allowDecimals: false,
              title: {
                text: 'Runs'
              }
            },
            series: [{
              name: 'Runs',
              data: [batsmanDetail.a, batsmanDetail.b, batsmanDetail.c, batsmanDetail.d],
            }],
            responsive: {
              rules: [{
                condition: {
                  maxWidth: 400
                },
                chartOptions: {
                  legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                  },
                  yAxis: {
                    labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                    },
                    title: {
                      text: null
                    }
                  },
                  subtitle: {
                    text: null
                  },
                  credits: {
                    enabled: false
                  }
                }
              }]
            }
          }

       this.pieGraphChart = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Wickets against Top Distribution'
        },
        tooltip: {
          pointFormat: '{series.name} : <b> {point.percentage:.1f}% </b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b> {point.name}</b> : {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Australia',
            y: batsmanDetail.australia,
          }, {
            name: 'Bangladesh',
            y: batsmanDetail.bangladesh,
          }, {
            name: 'England',
            y: batsmanDetail.england,
          }, {
            name: 'Pakistan',
            y: batsmanDetail.pakistan,
          }, {
            name: 'South Africa',
            y: batsmanDetail.southAfrica,
          }, {
            name: 'Sri Lanka',
            y: batsmanDetail.sriLanka,
          }, {
            name: 'West Indies',
            y: batsmanDetail.westIndies,
          }, {
            name: 'India',
            y: batsmanDetail.india,
          },
          ]
        }]
      }
    }
  }
   })
  }
  }

