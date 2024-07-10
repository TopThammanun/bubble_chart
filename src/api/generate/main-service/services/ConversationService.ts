/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { conversation } from '../models/conversation';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConversationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param appId
     * @param senderId
     * @param receiverId
     * @returns conversation Ok
     * @throws ApiError
     */
    public getSinger(
        appId: string,
        senderId: string,
        receiverId: string,
    ): CancelablePromise<conversation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/conversation/getConversationSinger',
            query: {
                'app_id': appId,
                'sender_id': senderId,
                'receiver_id': receiverId,
            },
        });
    }
}
