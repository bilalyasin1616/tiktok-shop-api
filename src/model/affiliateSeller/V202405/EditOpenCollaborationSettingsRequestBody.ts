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
import { AffiliateSeller202405EditOpenCollaborationSettingsRequestBodyAutoAddProduct } from './EditOpenCollaborationSettingsRequestBodyAutoAddProduct';

export class AffiliateSeller202405EditOpenCollaborationSettingsRequestBody {
    'autoAddProduct'?: AffiliateSeller202405EditOpenCollaborationSettingsRequestBodyAutoAddProduct;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "autoAddProduct",
            "baseName": "auto_add_product",
            "type": "AffiliateSeller202405EditOpenCollaborationSettingsRequestBodyAutoAddProduct"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202405EditOpenCollaborationSettingsRequestBody.attributeTypeMap;
    }
}

