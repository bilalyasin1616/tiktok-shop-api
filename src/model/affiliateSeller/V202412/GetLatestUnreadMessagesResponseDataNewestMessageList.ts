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

export class AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList {
    /**
    * Message content, in JSON serialized string. - TEXT:   {\"content\": \"simple text\"} - PRODUCT_CARD:   {\"product_id\": \"12345\"} - TARGET_INVITATION_CARD   {\"invitation_group_id\": \"1234\"} - FREE_SAMPLE_CARD   {\"apply_id\": \"1234\"} - IMAGE: { \"height\": \"290\", \"url\": \"https://tosv.boei18n.byted.org/obj/temai-im/FszkJ53nSapYG6KDaJQmqR3jjoZGwww304-290\", \"width\": \"304\" } - CRM_TEXT_WITH_IMAGE_CARD {   \"title\":\"abc\",   \"content\":\"efg\",   \"url\":\"https://tosv.boei18n.byted.org/obj/temai-im/FszkJ53nSapYG6KDaJQmqR3jjoZGwww304-290\" } - CRM_TEXT_WITH_PRODUCTS_CARD {   \"title\":\"abc\",   \"content\":\"efg\",   \"productIds\":[123,456,789,222] } - NOTIFICATION,SYSTEM   {\"content\": \"notification/system message\"} - EMOTICONS { \"height\": \"110\", \"url\": \"https://tosv.boei18n.byted.org/obj/temai-im/FszkJ53nSapYG6KDaJQmqR3jjoZGwww304-290\", \"width\": \"110\" }
    */
    'content'?: string;
    /**
    * The converastion id to which the message belongs
    */
    'conversationId'?: string;
    /**
    * sender\'s IM id
    */
    'senderId'?: string;
    /**
    * Message type, with possible values: - TEXT - PRODUCT_CARD - TARGET_COLLABORATION_CARD - FREE_SAMPLE_CARD - IMAGE - CRM_TEXT_WITH_IMAGE_CARD - CRM_TEXT_WITH_PRODUCTS_CARD - NOTIFICATION - EMOTICONS - SYSTEM The response\'s message type support more type.Especially image, crm card,notification,emoticons and system.
    */
    'type'?: string;
    /**
    * The number of unread messages of the sender in the conversation.
    */
    'unreadMessageCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "conversationId",
            "baseName": "conversation_id",
            "type": "string"
        },
        {
            "name": "senderId",
            "baseName": "sender_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "unreadMessageCount",
            "baseName": "unread_message_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList.attributeTypeMap;
    }
}

