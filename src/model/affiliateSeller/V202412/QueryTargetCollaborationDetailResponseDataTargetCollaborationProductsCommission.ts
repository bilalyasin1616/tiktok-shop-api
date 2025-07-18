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

export class AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission {
    /**
    * The currency code.
    */
    'currency'?: string;
    /**
    * Commission effective time. It is a timestamp. 
    */
    'effectiveTime'?: string;
    /**
    * The maximum estimated commission amount for all SKUs of this product.
    */
    'maximumAmount'?: string;
    /**
    * The minimum estimated commission amount for all SKUs of this product.
    */
    'minimumAmount'?: string;
    /**
    * The commission rate in hundredths of a percent. For example, 3587 is a commission rate of 35.87%. This value must a minimum of 1000.  The range of this value is [100, 8000].
    */
    'rate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "effectiveTime",
            "baseName": "effective_time",
            "type": "string"
        },
        {
            "name": "maximumAmount",
            "baseName": "maximum_amount",
            "type": "string"
        },
        {
            "name": "minimumAmount",
            "baseName": "minimum_amount",
            "type": "string"
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission.attributeTypeMap;
    }
}

