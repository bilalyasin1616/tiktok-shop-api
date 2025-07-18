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

export class AffiliateSeller202405CreateTargetCollaborationRequestBodyProducts {
    /**
    * The product identifier.
    */
    'id'?: string;
    /**
    * The desired commission rate for the target collaboration. The desired commission rate is expressed in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `1000`. 
    */
    'targetCommissionRate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "targetCommissionRate",
            "baseName": "target_commission_rate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202405CreateTargetCollaborationRequestBodyProducts.attributeTypeMap;
    }
}

