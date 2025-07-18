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
import { Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformance } from './GetShopVideoPerformanceOverviewResponseDataPerformance';

export class Analytics202409GetShopVideoPerformanceOverviewResponseData {
    /**
    * Latest date in local timezone where data is ready (ISO 8601 format).
    */
    'latestAvailableDate'?: string;
    'performance'?: Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformance;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "latestAvailableDate",
            "baseName": "latest_available_date",
            "type": "string"
        },
        {
            "name": "performance",
            "baseName": "performance",
            "type": "Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformance"
        }    ];

    static getAttributeTypeMap() {
        return Analytics202409GetShopVideoPerformanceOverviewResponseData.attributeTypeMap;
    }
}

