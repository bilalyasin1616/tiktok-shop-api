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

export class Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsRefunds {
    /**
    * Refunds in the corresponding currency.
    */
    'amount'?: string;
    /**
    * GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP).
    */
    'currency'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsRefunds.attributeTypeMap;
    }
}

