import { Component, OnInit } from '@angular/core';

//https://stackblitz.com/edit/angular-ivy-sdmh7e?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fdialog%2Fdialog.service.ts
@Component({
  selector: 'app-loading-view',
  templateUrl: './loading-view.component.html',
  styleUrls: ['./loading-view.component.scss']
})
export class LoadingViewComponent implements OnInit {

  shown: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
