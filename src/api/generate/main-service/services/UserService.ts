/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user } from '../models/user';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns user Ok
     * @throws ApiError
     */
    public getAll(): CancelablePromise<Array<user>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/all',
        });
    }
    /**
     * @param appId
     * @param userId
     * @returns any Ok
     * @throws ApiError
     */
    public getUserById(
        appId: string,
        userId: string,
    ): CancelablePromise<user | null> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
            query: {
                'app_id': appId,
                'user_id': userId,
            },
        });
    }
}
