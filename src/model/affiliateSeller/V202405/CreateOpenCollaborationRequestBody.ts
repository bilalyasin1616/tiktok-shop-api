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

export class AffiliateSeller202405CreateOpenCollaborationRequestBody {
    /**
    * The desired commission rate for the open collaboration. The desired commission rate is expressed in hundredths of a pecent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `100`.
    */
    'commissionRate'?: number;
    /**
    * The product ID for adding to the affiliate open collaboration.
    */
    'productId'?: string;
    /**
    * Set to `true` if the open collaboration plan requires approval for additional creator product applications. Set to `false` if the open collaboration plan does not require additional creator product applications. Default: `false`. 
    */
    'requireSellerApproveCreator'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commissionRate",
            "baseName": "commission_rate",
            "type": "number"
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string"
        },
        {
            "name": "requireSellerApproveCreator",
            "baseName": "require_seller_approve_creator",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202405CreateOpenCollaborationRequestBody.attributeTypeMap;
    }
}

