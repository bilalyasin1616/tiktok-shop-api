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
import { AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList } from './GetLatestUnreadMessagesResponseDataNewestMessageList';

export class AffiliateSeller202412GetLatestUnreadMessagesResponseData {
    /**
    * The list of unread messages from the last minute.
    */
    'newestMessageList'?: Array<AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "newestMessageList",
            "baseName": "newest_message_list",
            "type": "Array<AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList>"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202412GetLatestUnreadMessagesResponseData.attributeTypeMap;
    }
}

