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

export class AffiliateSeller202405EditOpenCollaborationSettingsRequestBodyAutoAddProduct {
    /**
    * The commission rate in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `100` and a maximum of `8000`. Not that setting the `enable` property to `false` overrides this property. 
    */
    'commissionRate'?: number;
    /**
    * Set to `true` if products are automatically added to affiliate open collaboration plans. The seller can add existing non-affiliate products to open collaboration at one time, and future products are added automatically. Set to `false` if otherwise.
    */
    'enable'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commissionRate",
            "baseName": "commission_rate",
            "type": "number"
        },
        {
            "name": "enable",
            "baseName": "enable",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202405EditOpenCollaborationSettingsRequestBodyAutoAddProduct.attributeTypeMap;
    }
}

