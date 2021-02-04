import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css'],
})
export class Q1Component {
  title = 'section2';
  public inputValue = 0;
  modeObjects: mode[];
  selectedMode: mode | undefined;
  output: boolean | undefined;

  constructor() {
    this.modeObjects = [
      { id: 1, name: 'isPrime' },
      { id: 2, name: 'isFibonacci' },
    ];
  }

  handleInput(e: any) {
    const input = Math.round(e.target.value);
    if (input < 0) this.inputValue = 1;
    else {
      this.inputValue = input;
    }
    if (this.selectedMode) this.updateOutput();
  }

  handleSelect() {
    this.updateOutput();
  }
  isPrime(num: number) {
    for (var i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }
  isFibonacci(query: number, count = 1, last = 0): boolean {
    if (count < query) {
      return this.isFibonacci(query, count + last, count);
    }
    if (count === query) {
      return true;
    }
    return false;
  }

  updateOutput() {
    if (this.selectedMode?.id === 1)
      this.output = this.isPrime(this.inputValue);
    else this.output = this.isFibonacci(this.inputValue);
  }
}

interface mode {
  id: number;
  name: string;
}
