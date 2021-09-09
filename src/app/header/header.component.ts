import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 onIconCLick!: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openSidenav(){
    this.onIconCLick = true;
    this.router.navigate(['/rankings']);
    
  }

}
