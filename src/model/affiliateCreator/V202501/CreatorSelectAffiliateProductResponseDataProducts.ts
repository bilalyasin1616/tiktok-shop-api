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
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsCommission } from './CreatorSelectAffiliateProductResponseDataProductsCommission';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsMarketPerformance } from './CreatorSelectAffiliateProductResponseDataProductsMarketPerformance';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsPrice } from './CreatorSelectAffiliateProductResponseDataProductsPrice';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsReview } from './CreatorSelectAffiliateProductResponseDataProductsReview';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsShop } from './CreatorSelectAffiliateProductResponseDataProductsShop';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsStock } from './CreatorSelectAffiliateProductResponseDataProductsStock';

export class AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts {
    /**
    * The product\'s brand name
    */
    'brandName'?: string;
    'commission'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsCommission;
    /**
    * The product\'s unique id
    */
    'id'?: string;
    /**
    * The product\'s cover image url
    */
    'mainImageUrl'?: string;
    'marketPerformance'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsMarketPerformance;
    'price'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsPrice;
    'review'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsReview;
    'shop'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsShop;
    'stock'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsStock;
    /**
    * The product\'s name
    */
    'title'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brandName",
            "baseName": "brand_name",
            "type": "string"
        },
        {
            "name": "commission",
            "baseName": "commission",
            "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsCommission"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "mainImageUrl",
            "baseName": "main_image_url",
            "type": "string"
        },
        {
            "name": "marketPerformance",
            "baseName": "market_performance",
            "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsMarketPerformance"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsPrice"
        },
        {
            "name": "review",
            "baseName": "review",
            "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsReview"
        },
        {
            "name": "shop",
            "baseName": "shop",
            "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsShop"
        },
        {
            "name": "stock",
            "baseName": "stock",
            "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsStock"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts.attributeTypeMap;
    }
}

