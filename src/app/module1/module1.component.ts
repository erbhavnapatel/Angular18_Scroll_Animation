import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrl: './module1.component.css'
})
export class Module1Component implements OnInit {
  ngOnInit(): void {
    console.log('xyz')
  }
}
