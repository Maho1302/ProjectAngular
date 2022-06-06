import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  storedTheme: string | null = localStorage.getItem('theme-color');
  constructor() {
  }
  ngOnInit() {
  }
  setTheme() {
    if(this.storedTheme === 'theme-dark') {

    } else {
      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = localStorage.getItem('theme-color');
    }
  }

}
