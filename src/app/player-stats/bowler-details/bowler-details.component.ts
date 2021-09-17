import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerStatsService } from 'src/app/shared/services/player-stats.service';
import * as Highcharts from 'highcharts';
import jsPDF from'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-bowler-details',
  templateUrl: './bowler-details.component.html',
  styleUrls: ['./bowler-details.component.css']
})
export class BowlerDetailsComponent implements OnInit {
  bowlerDetails!: any[];
  bowlerId!: number;
  Highcharts = Highcharts;
  barGraphChart: {} = {};
  pieGraphChart: {} = {};

  constructor(private _bowlerDetails: PlayerStatsService, private route: ActivatedRoute) { }

  @ViewChild ('htmlData') htmlData!:ElementRef;

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.bowlerId = id;
    this.getBowlerDetails(id);
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

  getBowlerDetails(id: number){
    this._bowlerDetails.getBowlerDetails()
     .subscribe(response => {
       this.bowlerDetails = response;
       console.log(this.bowlerDetails);
       for(let bowlerDetail of this.bowlerDetails){
        if(this.bowlerId == bowlerDetail.id){
          console.log(bowlerDetail);
          this.barGraphChart = {
            chart: {
              type: 'column'
            },
            title: {
              text: 'Runs year wise'
            },
            subtitle: {
              text: bowlerDetail.name
            },
            legend: {
              align: 'right',
              verticalAlign: 'middle',
              layout: 'vertical'
            },
            xAxis: {
              categories: [bowlerDetail.a2, bowlerDetail.b2, bowlerDetail.c2, bowlerDetail.d2],
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
              data: [bowlerDetail.a, bowlerDetail.b, bowlerDetail.c, bowlerDetail.d],
            }],
            responsive: {
              rules: [{
                condition: {
                  maxWidth: 500
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
                y: bowlerDetail.australia,
              }, {
                name: 'Bangladesh',
                y: bowlerDetail.bangladesh,
              }, {
                name: 'England',
                y: bowlerDetail.england,
              }, {
                name: 'Pakistan',
                y: bowlerDetail.pakistan,
              }, {
                name: 'South Africa',
                y: bowlerDetail.southAfrica,
              }, {
                name: 'Sri Lanka',
                y: bowlerDetail.sriLanka,
              }, {
                name: 'West Indies',
                y: bowlerDetail.westIndies,
              }, {
                name: 'India',
                y: bowlerDetail.india,
              },
              ]
            }]
          }
        }
      }
     })
  }

}
