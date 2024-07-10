/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PingResponse } from '../models/PingResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns PingResponse Ok
     * @throws ApiError
     */
    public getMessage(): CancelablePromise<PingResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ping',
        });
    }
}
