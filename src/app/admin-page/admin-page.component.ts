import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.sass']
})
export class AdminPageComponent implements OnInit {

  constructor(private _translocoService: TranslocoService) { }

  ngOnInit(): void {
    this._translocoService
      .selectTranslate("title", {}, "admin-page")
      .subscribe(console.log)
  }
}
