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
import { AffiliateSeller202409SearchTargetCollaborationsResponseDataTargetCollaborations } from './SearchTargetCollaborationsResponseDataTargetCollaborations';

export class AffiliateSeller202409SearchTargetCollaborationsResponseData {
    /**
    * Cursor for the next page request.
    */
    'nextPageToken'?: string;
    /**
    * The basic information of target collaboration which creators can view in Targeted Invitation on TikTok EC Center.
    */
    'targetCollaborations'?: Array<AffiliateSeller202409SearchTargetCollaborationsResponseDataTargetCollaborations>;
    /**
    * The total count of target collaboration returned by this query.
    */
    'totalCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string"
        },
        {
            "name": "targetCollaborations",
            "baseName": "target_collaborations",
            "type": "Array<AffiliateSeller202409SearchTargetCollaborationsResponseDataTargetCollaborations>"
        },
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202409SearchTargetCollaborationsResponseData.attributeTypeMap;
    }
}

