import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-i18n-transloco';

  constructor(private _translocoService: TranslocoService) {}

  change(lang: string) {
    this._translocoService.setActiveLang(lang);
  }
}
