/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMessageRequest } from '../models/CreateMessageRequest';
import type { message } from '../models/message';
import type { MessageByConversationIdResponse } from '../models/MessageByConversationIdResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MessageService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param conversationId
     * @param page
     * @returns MessageByConversationIdResponse Ok
     * @throws ApiError
     */
    public getMessageByConversationId(
        conversationId: string,
        page: number,
    ): CancelablePromise<Array<MessageByConversationIdResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/message/history/{conversation_id}',
            query: {
                'conversation_id': conversationId,
                'page': page,
            },
        });
    }
    /**
     * @returns message Ok
     * @throws ApiError
     */
    public getAll(): CancelablePromise<Array<message>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/message/all',
        });
    }
    /**
     * @param requestBody
     * @returns message Ok
     * @throws ApiError
     */
    public create(
        requestBody: CreateMessageRequest,
    ): CancelablePromise<message> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/message/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
