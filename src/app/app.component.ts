import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DateSum';

  daysSum;
  monthsSum;
  yearsSum ;

  constructor() {}

  datesFormGroup = new FormGroup ({
    datesFormArray: new FormArray ([
      new FormGroup({
        days: new FormControl(0),
        months: new FormControl(0),
        years: new FormControl(0),
      }),
      new FormGroup({
        days: new FormControl(0),
        months: new FormControl(0),
        years: new FormControl(0),
      })
    ])
  })

  onSubmit() {
    this.daysSum = 0;
    this.monthsSum = 0;
    this.yearsSum = 0;

    for (let date of this.datesFormGroup.value.datesFormArray) {
      this.daysSum += date.days;
      this.monthsSum += date.months;
      this.yearsSum += date.years;
    }

    this.roundDaysSum();
    this.roundMonthsSum();
  }

  roundDaysSum(){
    this.monthsSum += Math.floor(this.daysSum/30);
    this.daysSum = Math.floor(this.daysSum%30);
  }

  roundMonthsSum(){
    this.yearsSum += Math.floor(this.monthsSum/12);
    this.monthsSum = Math.floor(this.monthsSum%12);
  }

}