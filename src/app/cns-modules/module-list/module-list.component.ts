import { Component, OnInit } from '@angular/core';
import {Module} from '../module.model';


@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  
  
  modules: Module[] = [
    new Module(1,"Register User"),
    new Module(2,"Show Users")
  ];

  constructor() { 
  }

  ngOnInit() {
  }

}
