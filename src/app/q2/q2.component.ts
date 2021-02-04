import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css'],
})
export class Q2Component implements OnInit {
  originalData: string[] = [];
  categories: string[] = [];
  status = 'Loading';
  constructor() {
    (async () => {
      try {
        const response = await fetch('https://api.publicapis.org/categories');
        const json = await response.json();
        this.categories = json;
        this.originalData = json;
        this.status = 'Successfully loaded';
      } catch (error) {
        this.status = 'Error';
      }
    })();
  }

  ngOnInit(): void {}

  filterData(e: any) {
    this.categories = this.originalData.filter((el) =>
      el.toLowerCase().includes(e.target.value.toLowerCase())
    );
  }
}
