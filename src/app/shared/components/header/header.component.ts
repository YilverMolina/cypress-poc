import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        url: 'home'
      },
      {
        label: 'Characters',
        icon: 'pi pi-discord',
        url: 'characters'
      },
      {
        label: 'SVG Editor',
        icon: 'pi pi-chart-pie',
        url: 'svg'
      }
    ];
  }

}
