/**
 * tiktok shop openapi
 * sdk for apis
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../../models';

export class AffiliateSeller202505GetConversationListResponseDataConversations {
    /**
    * The URL for the TikTok creator\'s avatar image file.
    */
    'avatar'?: string;
    /**
    * Creators\' IM User ID. 
    */
    'creatorImId'?: string;
    /**
    * Conversation unique ID.
    */
    'id'?: string;
    /**
    * Number of unread messages.
    */
    'unreadCount'?: number;
    /**
    * The TikTok user name.
    */
    'username'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string"
        },
        {
            "name": "creatorImId",
            "baseName": "creator_im_id",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "unreadCount",
            "baseName": "unread_count",
            "type": "number"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202505GetConversationListResponseDataConversations.attributeTypeMap;
    }
}

