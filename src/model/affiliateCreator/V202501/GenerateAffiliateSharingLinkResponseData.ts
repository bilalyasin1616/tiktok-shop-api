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
import { AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks } from './GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks';
import { AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors } from './GenerateAffiliateSharingLinkResponseDataErrors';

export class AffiliateCreator202501GenerateAffiliateSharingLinkResponseData {
    /**
    * Generated affiliate links for each Tag
    */
    'affiliateSharingLinks'?: Array<AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks>;
    /**
    * Specific error(if have) for each tagString(if have)
    */
    'errors'?: Array<AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "affiliateSharingLinks",
            "baseName": "affiliate_sharing_links",
            "type": "Array<AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks>"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors>"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCreator202501GenerateAffiliateSharingLinkResponseData.attributeTypeMap;
    }
}

