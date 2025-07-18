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

export class AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCategoryChains {
    /**
    * The category identifier.
    */
    'id'?: string;
    /**
    * Set to `true` if this category is a leaf node. Set to `false` if not.
    */
    'isLeaf'?: boolean;
    /**
    * The name of the product in the category.
    */
    'localName'?: string;
    /**
    * The category identifier of the parent category for the category.
    */
    'parentId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isLeaf",
            "baseName": "is_leaf",
            "type": "boolean"
        },
        {
            "name": "localName",
            "baseName": "local_name",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parent_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCategoryChains.attributeTypeMap;
    }
}

