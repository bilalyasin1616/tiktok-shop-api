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
import { AffiliateSeller202505GetMarketplaceCreatorPerformanceResponseDataCreator } from './GetMarketplaceCreatorPerformanceResponseDataCreator';

export class AffiliateSeller202505GetMarketplaceCreatorPerformanceResponseData {
    'creator'?: AffiliateSeller202505GetMarketplaceCreatorPerformanceResponseDataCreator;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "creator",
            "baseName": "creator",
            "type": "AffiliateSeller202505GetMarketplaceCreatorPerformanceResponseDataCreator"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202505GetMarketplaceCreatorPerformanceResponseData.attributeTypeMap;
    }
}

