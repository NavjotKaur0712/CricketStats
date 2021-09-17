import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '../../models/tableColumn';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns!: any;
  @Input() testRankings: any;
  @Input() odiRankings: any;
  @Input() t20Rankings: any;
  // @Input() dataSource!: any[];
  @Input() tableColumns!: TableColumn[];

  @Input() testMatchRankings!: boolean;
  @Input() odiMatchRankings!: boolean;
  @Input() t20MatchRankings!: boolean;

  @Input() set tableData(data: any[]){
    this.setTableDataSource(data);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor() { }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

  }

  setTableDataSource(data: any){
    this.tableDataSource = new MatTableDataSource(data);
    console.log("222",this.tableDataSource.filteredData);
  }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn)=> tableColumn.dataKey);
    this.displayedColumns = columnNames;
    console.log('testranking', this.testRankings)
    console.log('colnames',columnNames)
    console.log('tablecols', this.tableColumns);
    
    
  }
}
