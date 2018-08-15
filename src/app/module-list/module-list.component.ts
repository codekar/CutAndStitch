import { Component, OnInit } from '@angular/core';
import { Module } from './module.model';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  searchText: string = '';
  
  moduleList: Module[] = [
    new Module(1,"Add User"),
    new Module(2,"User List"),
    new Module(3,"CCC"),
    new Module(4,"DDD"),
    new Module(5,"EEE"),
    new Module(6,"FFF"),
    new Module(7,"GGG"),
    new Module(8,"HHH"),
    new Module(9,"III"),
    new Module(6,"FFF"),
    new Module(7,"GGG"),
    new Module(8,"HHH"),
    new Module(9,"III"),
    new Module(6,"FFF"),
    new Module(7,"GGG"),
    new Module(8,"HHH"),
    new Module(9,"III"),
    new Module(6,"FFF"),
    new Module(7,"GGG"),
    new Module(8,"HHH"),
    new Module(9,"III"),
    new Module(6,"FFF"),
    new Module(7,"GGG"),
    new Module(8,"HHH"),
    new Module(9,"III"),
    new Module(6,"FFF"),
    new Module(7,"GGG"),
    new Module(8,"HHH"),
    new Module(9,"III"),
    new Module(6,"FFF"),
    new Module(7,"GGG"),
    new Module(8,"HHH"),
    new Module(9,"III"),
    new Module(6,"FFF"),
    new Module(7,"GGG"),
    new Module(8,"HHH"),
    new Module(9,"III"),
    new Module(6,"FFF"),
    new Module(7,"GGG"),
    new Module(8,"HHH"),
    new Module(9,"III")
];


  constructor() { }

  ngOnInit() {
  }

}
