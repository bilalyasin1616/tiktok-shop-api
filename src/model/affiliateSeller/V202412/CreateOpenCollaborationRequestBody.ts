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

export class AffiliateSeller202412CreateOpenCollaborationRequestBody {
    /**
    * The desired commission rate for the open collaboration. The desired commission rate is expressed in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `100`.
    */
    'commissionRate'?: number;
    /**
    * The product ID for adding to the affiliate open collaboration.
    */
    'productId'?: string;

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
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202412CreateOpenCollaborationRequestBody.attributeTypeMap;
    }
}

