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
import { Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns } from './GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns';
import { Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns } from './GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns';
import { Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmv } from './GetShopProductPerformanceResponseDataPerformanceIntervalsGmv';
import { Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns } from './GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns';
import { Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns } from './GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns';
import { Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns } from './GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns';
import { Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns } from './GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns';

export class Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervals {
    /**
    * Average daily product page visitor breakdowns.
    */
    'avgPageVisitorBreakdowns'?: Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns>;
    /**
    * Average number of unique visitors per day for the product.
    */
    'avgPageVisitors'?: number;
    /**
    * Ratio of the number of product clicks compared to number of product impressions in raw decimal format. To calculate the percentage, multiple it by 100%. Example: 0.0528 <=> 5.28%
    */
    'clickThroughRate'?: string;
    /**
    * Click through rate breakdowns.
    */
    'clickThroughRateBreakdowns'?: Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns>;
    /**
    * End date of the interval (ISO 8601 YYYY-MM-DD format) in shop registered timezone, exclusive.
    */
    'endDate'?: string;
    'gmv'?: Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmv;
    /**
    * GMV breakdowns for the product.
    */
    'gmvBreakdowns'?: Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns>;
    /**
    * Impression breakdowns.
    */
    'impressionBreakdowns'?: Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns>;
    /**
    * Total impressions for the product.
    */
    'impressions'?: number;
    /**
    * Total (sum of all) orders for the product.
    */
    'orders'?: number;
    /**
    * Page view breakdowns.
    */
    'pageViewBreakdowns'?: Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns>;
    /**
    * Total page views for the product.
    */
    'pageViews'?: number;
    /**
    * Start date of the interval (ISO 8601 YYYY-MM-DD format) in shop registered timezone, inclusive.
    */
    'startDate'?: string;
    /**
    * Unit sold breakdowns.
    */
    'unitSoldBreakdowns'?: Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns>;
    /**
    * Number of units sold for the product.
    */
    'unitsSold'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "avgPageVisitorBreakdowns",
            "baseName": "avg_page_visitor_breakdowns",
            "type": "Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns>"
        },
        {
            "name": "avgPageVisitors",
            "baseName": "avg_page_visitors",
            "type": "number"
        },
        {
            "name": "clickThroughRate",
            "baseName": "click_through_rate",
            "type": "string"
        },
        {
            "name": "clickThroughRateBreakdowns",
            "baseName": "click_through_rate_breakdowns",
            "type": "Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns>"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "string"
        },
        {
            "name": "gmv",
            "baseName": "gmv",
            "type": "Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmv"
        },
        {
            "name": "gmvBreakdowns",
            "baseName": "gmv_breakdowns",
            "type": "Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns>"
        },
        {
            "name": "impressionBreakdowns",
            "baseName": "impression_breakdowns",
            "type": "Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns>"
        },
        {
            "name": "impressions",
            "baseName": "impressions",
            "type": "number"
        },
        {
            "name": "orders",
            "baseName": "orders",
            "type": "number"
        },
        {
            "name": "pageViewBreakdowns",
            "baseName": "page_view_breakdowns",
            "type": "Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns>"
        },
        {
            "name": "pageViews",
            "baseName": "page_views",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "string"
        },
        {
            "name": "unitSoldBreakdowns",
            "baseName": "unit_sold_breakdowns",
            "type": "Array<Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns>"
        },
        {
            "name": "unitsSold",
            "baseName": "units_sold",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervals.attributeTypeMap;
    }
}

