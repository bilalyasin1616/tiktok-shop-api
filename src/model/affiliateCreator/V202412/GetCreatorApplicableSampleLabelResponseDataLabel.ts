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
import { AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProduct } from './GetCreatorApplicableSampleLabelResponseDataLabelSampleProduct';

export class AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabel {
    /**
    * Sample Application ID. only appear when the creator has already applied this product.
    */
    'applicationId'?: string;
    /**
    * Creator can apply this application or not.
    */
    'canApply'?: boolean;
    /**
    * If the creator has reached the sample application upper limit.
    */
    'reachLimit'?: boolean;
    'sampleProduct'?: AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProduct;
    /**
    * Status to describe if the creator has already applied this product as a free sample. - TO_APPLY: creator has not applied this product as a free sample. - ONGOING: creator applied this product as a free sample while he/she has not finished sample fulfillment. - COMPLETE: creator applied this product as a free sample and finished sample fulfillment.
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applicationId",
            "baseName": "application_id",
            "type": "string"
        },
        {
            "name": "canApply",
            "baseName": "can_apply",
            "type": "boolean"
        },
        {
            "name": "reachLimit",
            "baseName": "reach_limit",
            "type": "boolean"
        },
        {
            "name": "sampleProduct",
            "baseName": "sample_product",
            "type": "AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProduct"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabel.attributeTypeMap;
    }
}

