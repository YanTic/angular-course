import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'ng-store';

  items = ['nicolas', 'julian', 'sara'];

  objeto = {};

  power = 10;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addItem() {
    this.items.push('new item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
