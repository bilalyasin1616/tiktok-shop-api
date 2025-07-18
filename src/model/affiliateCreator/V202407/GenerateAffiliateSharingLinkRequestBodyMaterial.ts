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

export class AffiliateCreator202407GenerateAffiliateSharingLinkRequestBodyMaterial {
    /**
    * The ID of product/campiagn/showcase that our partner wants to promote. We use this material id to generate the sharing link
    */
    'id'?: string;
    /**
    * For the mvp version, we only use product type, but we have 3 types in total: PRODUCT CAMPAIGN SHOWCASE
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCreator202407GenerateAffiliateSharingLinkRequestBodyMaterial.attributeTypeMap;
    }
}

