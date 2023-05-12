import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-i18n-transloco';

  constructor(private _translocoService: TranslocoService, private _httpClient: HttpClient) {}

  change(lang: string) {
    this._translocoService.setActiveLang(lang);
  }

  getTranslation() {
    this._httpClient.get('api/apps/translations').subscribe((res: any) => {
     console.log(res)
    })
  }
}
