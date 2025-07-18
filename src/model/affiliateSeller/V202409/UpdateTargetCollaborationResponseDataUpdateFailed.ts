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
import { AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedAddProducts } from './UpdateTargetCollaborationResponseDataUpdateFailedAddProducts';
import { AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedChangeCommissions } from './UpdateTargetCollaborationResponseDataUpdateFailedChangeCommissions';
import { AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedSellerContactInfo } from './UpdateTargetCollaborationResponseDataUpdateFailedSellerContactInfo';

export class AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed {
    /**
    * The list of creators\' TikTok User IDs that have not been successfully added.
    */
    'addCreatorIds'?: Array<string>;
    'addProducts'?: AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedAddProducts;
    'changeCommissions'?: AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedChangeCommissions;
    /**
    * The end time of the target collaboration, which has not been successfully updated.
    */
    'endTime'?: number;
    /**
    * The name of the target collaboration.
    */
    'name'?: string;
    /**
    * The list of creators\' TikTok User IDs that have not been successfully removed.
    */
    'removeCreatorIds'?: Array<string>;
    /**
    * The list of product ids that have not been successfully removed.
    */
    'removeProductIds'?: Array<string>;
    'sellerContactInfo'?: AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedSellerContactInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addCreatorIds",
            "baseName": "add_creator_ids",
            "type": "Array<string>"
        },
        {
            "name": "addProducts",
            "baseName": "add_products",
            "type": "AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedAddProducts"
        },
        {
            "name": "changeCommissions",
            "baseName": "change_commissions",
            "type": "AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedChangeCommissions"
        },
        {
            "name": "endTime",
            "baseName": "end_time",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "removeCreatorIds",
            "baseName": "remove_creator_ids",
            "type": "Array<string>"
        },
        {
            "name": "removeProductIds",
            "baseName": "remove_product_ids",
            "type": "Array<string>"
        },
        {
            "name": "sellerContactInfo",
            "baseName": "seller_contact_info",
            "type": "AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedSellerContactInfo"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed.attributeTypeMap;
    }
}

