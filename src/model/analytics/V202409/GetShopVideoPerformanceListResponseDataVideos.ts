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
import { Analytics202409GetShopVideoPerformanceListResponseDataVideosGmv } from './GetShopVideoPerformanceListResponseDataVideosGmv';
import { Analytics202409GetShopVideoPerformanceListResponseDataVideosProducts } from './GetShopVideoPerformanceListResponseDataVideosProducts';

export class Analytics202409GetShopVideoPerformanceListResponseDataVideos {
    /**
    * Ratio of the number of product clicks compared to number of video views in raw decimal format. To calculate the percentage, multiple it by 100%. Example: 0.0528 <=> 5.28%
    */
    'clickThroughRate'?: string;
    'gmv'?: Analytics202409GetShopVideoPerformanceListResponseDataVideosGmv;
    /**
    * Video ID
    */
    'id'?: string;
    /**
    * List of products promoted in the video.
    */
    'products'?: Array<Analytics202409GetShopVideoPerformanceListResponseDataVideosProducts>;
    /**
    * The total number of paid SKU orders placed directly from the current video.
    */
    'skuOrders'?: number;
    /**
    * Video Title
    */
    'title'?: string;
    /**
    * Number of units sold from the current video.
    */
    'unitsSold'?: number;
    /**
    * User name.
    */
    'username'?: string;
    /**
    * Date and time video was posted (ISO 8601 format)
    */
    'videoPostTime'?: string;
    /**
    * Number of video views during the selected time range.
    */
    'views'?: number;

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
            "type": "Analytics202409GetShopVideoPerformanceListResponseDataVideosGmv"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<Analytics202409GetShopVideoPerformanceListResponseDataVideosProducts>"
        },
        {
            "name": "skuOrders",
            "baseName": "sku_orders",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "unitsSold",
            "baseName": "units_sold",
            "type": "number"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "videoPostTime",
            "baseName": "video_post_time",
            "type": "string"
        },
        {
            "name": "views",
            "baseName": "views",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Analytics202409GetShopVideoPerformanceListResponseDataVideos.attributeTypeMap;
    }
}

