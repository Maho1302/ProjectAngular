import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss',]
})
export class MainLayoutComponent implements OnInit {
  storedTheme: string | null = localStorage.getItem('theme-color');

  constructor() {
  }
  ngOnInit() {
  }

  setTheme() {
    if(this.storedTheme === 'theme-dark') {
      localStorage.setItem('theme-color', 'theme-light');
      this.storedTheme = localStorage.getItem('theme-color');
    } else {
      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = localStorage.getItem('theme-color');
    }
  }

}
