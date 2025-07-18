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
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualBonusCommission } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualBonusCommission';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCommission } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCommission';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCommissionBase } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCommissionBase';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCreatorCommissionRewardFee } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCreatorCommissionRewardFee';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualShopAdsCommission } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualShopAdsCommission';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedBonusCommission } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedBonusCommission';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCommission } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCommission';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCommissionBase } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCommissionBase';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommissionRewardFee } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommissionRewardFee';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedShopAdsCommission } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedShopAdsCommission';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusPrice } from './SearchCreatorAffiliateOrdersResponseDataOrdersSkusPrice';

export class AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkus {
    'actualBonusCommission'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualBonusCommission;
    'actualCommission'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCommission;
    'actualCommissionBase'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCommissionBase;
    'actualCreatorCommissionRewardFee'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCreatorCommissionRewardFee;
    'actualShopAdsCommission'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualShopAdsCommission;
    /**
    * The campaign identifier associated with the order.
    */
    'campaignId'?: string;
    /**
    * The commission bonus rate associated with the collaboration. Expressed in units of hundredths of a percent formatted as a string. The percent sign % is not included in the string. For example, 3000 represents a 30% commission.
    */
    'commissionBonusRate'?: number;
    /**
    * The commission rate associated with the collaboration. Expressed in units of hundredths of a percent formatted as a string. The percent sign % is not included in the string. For example, 3000 represents a 30% commission.
    */
    'commissionRate'?: number;
    /**
    * The content identifier for the creator content through which the order was created.
    */
    'contentId'?: string;
    /**
    * The content format of the creator content through which the order was created. Possible values: - SHOP - VIDEO - LIVE - PRE_LIVE - PROMOTION_PAGE - LINKSHARE
    */
    'contentType'?: string;
    /**
    * The commission reward rate affiliate partners allocate to creators
    */
    'creatorCommissionRewardRate'?: number;
    'estimatedBonusCommission'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedBonusCommission;
    'estimatedCommission'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCommission;
    'estimatedCommissionBase'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCommissionBase;
    'estimatedCreatorCommissionRewardFee'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommissionRewardFee;
    'estimatedShopAdsCommission'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedShopAdsCommission;
    /**
    * The SKU identifier.
    */
    'id'?: string;
    /**
    * The open collaboration identifier associated with the order.
    */
    'openCollaborationId'?: string;
    'price'?: AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusPrice;
    /**
    * The product identifier.
    */
    'productId'?: string;
    /**
    * The product name in the TikTok Shop.
    */
    'productName'?: string;
    /**
    * The total number of SKUs per order, calculated by aggregating the number of ordered product SKUs associated with the order.
    */
    'quantity'?: number;
    /**
    * The total number of refunded SKUs associated with the order.
    */
    'refundedQuantity'?: number;
    /**
    * The total number of returned SKUs associated with the order.
    */
    'returnedQuantity'?: number;
    /**
    * The commission rate received by a creator for a sale associated with a specific piece of content. Expressed in units of hundredths of a percent formatted as a string. The percent sign % is not included in the string. For example, 3000 represents a 30% commission.
    */
    'shopAdsCommissionRate'?: number;
    /**
    * The name of the TIkTok Shop in which the product is offered for sale.
    */
    'shopName'?: string;
    /**
    * A field for storing user-defined metadata for tracking purposes. 
    */
    'tag'?: string;
    /**
    * The target collaboration identifier associated with the order.
    */
    'targetCollaborationId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "actualBonusCommission",
            "baseName": "actual_bonus_commission",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualBonusCommission"
        },
        {
            "name": "actualCommission",
            "baseName": "actual_commission",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCommission"
        },
        {
            "name": "actualCommissionBase",
            "baseName": "actual_commission_base",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCommissionBase"
        },
        {
            "name": "actualCreatorCommissionRewardFee",
            "baseName": "actual_creator_commission_reward_fee",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualCreatorCommissionRewardFee"
        },
        {
            "name": "actualShopAdsCommission",
            "baseName": "actual_shop_ads_commission",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusActualShopAdsCommission"
        },
        {
            "name": "campaignId",
            "baseName": "campaign_id",
            "type": "string"
        },
        {
            "name": "commissionBonusRate",
            "baseName": "commission_bonus_rate",
            "type": "number"
        },
        {
            "name": "commissionRate",
            "baseName": "commission_rate",
            "type": "number"
        },
        {
            "name": "contentId",
            "baseName": "content_id",
            "type": "string"
        },
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "string"
        },
        {
            "name": "creatorCommissionRewardRate",
            "baseName": "creator_commission_reward_rate",
            "type": "number"
        },
        {
            "name": "estimatedBonusCommission",
            "baseName": "estimated_bonus_commission",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedBonusCommission"
        },
        {
            "name": "estimatedCommission",
            "baseName": "estimated_commission",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCommission"
        },
        {
            "name": "estimatedCommissionBase",
            "baseName": "estimated_commission_base",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCommissionBase"
        },
        {
            "name": "estimatedCreatorCommissionRewardFee",
            "baseName": "estimated_creator_commission_reward_fee",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommissionRewardFee"
        },
        {
            "name": "estimatedShopAdsCommission",
            "baseName": "estimated_shop_ads_commission",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusEstimatedShopAdsCommission"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "openCollaborationId",
            "baseName": "open_collaboration_id",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkusPrice"
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string"
        },
        {
            "name": "productName",
            "baseName": "product_name",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "refundedQuantity",
            "baseName": "refunded_quantity",
            "type": "number"
        },
        {
            "name": "returnedQuantity",
            "baseName": "returned_quantity",
            "type": "number"
        },
        {
            "name": "shopAdsCommissionRate",
            "baseName": "shop_ads_commission_rate",
            "type": "number"
        },
        {
            "name": "shopName",
            "baseName": "shop_name",
            "type": "string"
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        },
        {
            "name": "targetCollaborationId",
            "baseName": "target_collaboration_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkus.attributeTypeMap;
    }
}

