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

export class AffiliateSeller202409SellerSearchSampleApplicationsRequestBody {
    /**
    * TikTok User ID of a creator
    */
    'creatorUserId'?: string;
    /**
    * Main order ID associated with a sample order when the sample application is approved by seller.
    */
    'orderId'?: string;
    /**
    * The unique identifier of a product. It is used to specify which product\'s sample application details are being queried. 
    */
    'productId'?: string;
    /**
    * The status of sample applications. The possible enumerated values are: - PENDING: The sample application is waiting for the seller\'s review. - AWAITING_SHIPMENT: The application is approved, and the seller needs to ship the sample. - SHIPPED: The sample has been shipped by the seller and is waiting for the creator to receive the package. - CONTENT_PENDING: The creator has received the sample package and is expected to create content. - REJECT_CANCELLED: The sample application has been rejected by the seller. - OVERDUE_CANCELLED: The sample application has expired due to being overdue. - UNFULFILL_CANCELLED: The creator did not fulfill the commitment to create content within the agreed timeframe. - DEL_OPEN_COLLAB: Open collaboration has been deleted. - SELLER_NOT_SHIP_CANCELLED: The seller did not ship the sample within the required timeframe. - WITHDRAW_CANCELLED: The creator withdrew the sample application before the seller approved it. - UNFULFILLABLE_CANCELLED: The application was cancelled due to reasons beyond the creator\'s control, making it impossible to create content. - OPS_CANCELLED: The application was manually cancelled by operations staff. - OPS_FAILED: The application was marked as failed by operations staff. - OPS_COMPLETED: The application was manually marked as completed by operations staff. - COMPLETED: The application is complete, and the creator has posted the content. This field allows for tracking the status of a sample application throughout its lifecycle, providing visibility into each stage of the process for sellers and creators.
    */
    'status'?: string;
    /**
    * The unique ID generated after creating a target collaboration.
    */
    'targetCollabrationId'?: string;
    /**
    * Product name, supports fuzzy search queries. It allows sellers to search for products by name when managing sample applications.
    */
    'title'?: string;
    /**
    * TikTok User Name of a creator, supports fuzzy search
    */
    'username'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "creatorUserId",
            "baseName": "creator_user_id",
            "type": "string"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "targetCollabrationId",
            "baseName": "target_collabration_id",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202409SellerSearchSampleApplicationsRequestBody.attributeTypeMap;
    }
}

