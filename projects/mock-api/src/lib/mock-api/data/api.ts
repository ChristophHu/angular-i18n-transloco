import { Injectable } from '@angular/core'
import { MockApiService } from 'projects/mock-api/src/public-api'
import { MockApiUtils } from '../../libs/mock-api/public-api'
import { translations } from './data'

@Injectable({
    providedIn: 'root' 
})
export class DataMockApi {
    private _translations: any[] = translations

    constructor(private _MockApiService: MockApiService) {
        this.registerHandlers()
    }

    registerHandlers(): void {
        // betankungen
        this._MockApiService
            .onGet('api/apps/translations')
            .reply(() => [ 200, this._translations ])

        // besatzung
        this._MockApiService
            .onPost('api/apps/translations')
            .reply((request: any) => {
                const id = MockApiUtils.guid()
                // const newElement = Object.assign({}, request.request.body.params.element, { id })
                // this._besatzung = [...this._besatzung, newElement]
                return [200, id]
            })
        this._MockApiService
            .onPatch('api/apps/translations')
            .reply((request: any) => {
                // const updateItem = request.request.body.params.element
                // this._besatzung = this._besatzung.filter(item => item.id != updateItem.id)
                // this._besatzung = [...this._besatzung, updateItem]
                // console.log(this._besatzung)
                return [200, true]
            })
        this._MockApiService
            .onDelete('api/apps/translations')
            .reply((request: any) => {
                // const id = request.request.params.get('id')
                // this._besatzung = this._besatzung.filter(item => item.id != id)
                return [ 200, true ]
            })   

    }
}
