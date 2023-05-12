import { Injectable } from '@angular/core'
import { compact } from 'lodash'
import { MockApiHandler } from './mock-api.request-handler'
import { MockApiMethods } from './mock-api.types'

@Injectable({
    providedIn: 'root'
})
export class MockApiService
{
    private _handlers: { [key: string]: Map<string, MockApiHandler> } = {
        'delete': new Map<string, MockApiHandler>(),
        'get'   : new Map<string, MockApiHandler>(),
        'patch' : new Map<string, MockApiHandler>(),
        'post'  : new Map<string, MockApiHandler>(),
        'put'   : new Map<string, MockApiHandler>()
    }

    constructor(){ }

    findHandler(method: string, url: string): { handler: MockApiHandler | undefined; urlParams: { [key: string]: string } } {
        const matchingHandler: { handler: MockApiHandler | undefined; urlParams: { [key: string]: string } } = {
            handler  : undefined,
            urlParams: {}
        };

        const urlParts = url.split('/')

        const handlers = this._handlers[method.toLowerCase()];

        handlers.forEach((handler, handlerUrl) => {
            if ( matchingHandler.handler )
            {
                return;
            }
            const handlerUrlParts = handlerUrl.split('/');
            if ( urlParts.length !== handlerUrlParts.length ) {
                return;
            }
            const matches = handlerUrlParts.every((handlerUrlPart, index) => handlerUrlPart === urlParts[index] || handlerUrlPart.startsWith(':'));
            if ( matches ) {
                matchingHandler.handler = handler;
                matchingHandler.urlParams = Object.fromEntries(compact(handlerUrlParts.map((handlerUrlPart, index) =>
                    handlerUrlPart.startsWith(':') ? [handlerUrlPart.substring(1), urlParts[index]] : undefined
                )))
            }
        })

        return matchingHandler;
    }

    onDelete(url: string, delay?: number): MockApiHandler {
        return this._registerHandler('delete', url, delay)
    }

    onGet(url: string, delay?: number): MockApiHandler {
        return this._registerHandler('get', url, delay)
    }

    onPatch(url: string, delay?: number): MockApiHandler {
        return this._registerHandler('patch', url, delay)
    }

    onPost(url: string, delay?: number): MockApiHandler {
        return this._registerHandler('post', url, delay)
    }

    onPut(url: string, delay?: number): MockApiHandler {
        return this._registerHandler('put', url, delay)
    }

    private _registerHandler(method: MockApiMethods, url: string, delay?: number): MockApiHandler {
        const mockHttp = new MockApiHandler(url, delay)
        this._handlers[method].set(url, mockHttp)
        return mockHttp
    }
}
