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
import { Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssetsCategory } from './GetAuthorizedCategoryAssetsResponseDataCategoryAssetsCategory';

export class Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssets {
    'category'?: Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssetsCategory;
    /**
    * An encrypted token used to securely identify a partner in API requests. There is no need for decryption on the receiving end.
    */
    'cipher'?: string;
    /**
    * The target market of the business category.
    */
    'targetMarket'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "category",
            "baseName": "category",
            "type": "Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssetsCategory"
        },
        {
            "name": "cipher",
            "baseName": "cipher",
            "type": "string"
        },
        {
            "name": "targetMarket",
            "baseName": "target_market",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssets.attributeTypeMap;
    }
}

