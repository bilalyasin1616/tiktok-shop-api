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

export class AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplicationsCreatorFulfillment {
    /**
    * Represents the marketing status of a product associated with a fulfillment order. It indicates whether the product is available for marketing and fulfillment. The possible values are: - UNKNOWN: The marketing status of the product is unknown. - LIVE: The product is available and can be used for fulfillment. - OUT_OF_STOCK: The product is out of stock and cannot be fulfilled. - SELLER_DEACTIVATE: The product has been deactivated by the seller. - PLATFORM_DEACTIVATE: The product has been deactivated by the platform. - NO_PLAN: There is no valid plan available for the creator to market the product. - PERMANENT_DELETED: The product has been permanently deleted and is no longer available. This field helps sellers and creators understand the current status of products associated with fulfillment orders, ensuring that all parties are aware of the availability and marketing status of the products involved in sample applications and collaborations.
    */
    'boundProductStatus'?: string;
    /**
    * Fulfillment deadline timestamp, in seconds.
    */
    'expirationTime'?: number;
    /**
    * Fulfillment ID.
    */
    'id'?: string;
    /**
    * Fulfillment status, It indicates the current status of the fulfillment process. The possible values are: - PENDING: The creator is yet to fulfill the content creation obligation. - ONGOING: Fulfillment is in progress; content has been created and is being evaluated against criteria. - SUCCEED: Fulfillment has been successfully completed; the content meets the required standards. - FAILED: Fulfillment failed; the content did not meet the required standards. - OVERDUE: Fulfillment is overdue; the creator did not meet the deadline. - SUSPEND: Fulfillment has been suspended. - CANCELLED: Fulfillment has been cancelled, either by the creator or due to operational reasons. - EXEMPTED: The creator has been exempted from the fulfillment obligation.
    */
    'status'?: string;
    /**
    * Total suspension duration for fulfillment, in seconds.
    */
    'totalSuspendDuration'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "boundProductStatus",
            "baseName": "bound_product_status",
            "type": "string"
        },
        {
            "name": "expirationTime",
            "baseName": "expiration_time",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "totalSuspendDuration",
            "baseName": "total_suspend_duration",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplicationsCreatorFulfillment.attributeTypeMap;
    }
}

