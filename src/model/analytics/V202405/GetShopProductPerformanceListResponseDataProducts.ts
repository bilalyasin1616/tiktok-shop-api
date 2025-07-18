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
import { Analytics202405GetShopProductPerformanceListResponseDataProductsGmv } from './GetShopProductPerformanceListResponseDataProductsGmv';

export class Analytics202405GetShopProductPerformanceListResponseDataProducts {
    /**
    * Ratio of the number of product clicks compared to number of product impressions in raw decimal format. To calculate the percentage, multiple it by 100%. Example: 0.0528 <=> 5.28%
    */
    'clickThroughRate'?: string;
    'gmv'?: Analytics202405GetShopProductPerformanceListResponseDataProductsGmv;
    /**
    * Product ID
    */
    'id'?: number;
    /**
    * Total (sum of all) orders for the product.
    */
    'orders'?: number;
    /**
    * Number of units sold for the product.
    */
    'unitsSold'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clickThroughRate",
            "baseName": "click_through_rate",
            "type": "string"
        },
        {
            "name": "gmv",
            "baseName": "gmv",
            "type": "Analytics202405GetShopProductPerformanceListResponseDataProductsGmv"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "orders",
            "baseName": "orders",
            "type": "number"
        },
        {
            "name": "unitsSold",
            "baseName": "units_sold",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Analytics202405GetShopProductPerformanceListResponseDataProducts.attributeTypeMap;
    }
}

