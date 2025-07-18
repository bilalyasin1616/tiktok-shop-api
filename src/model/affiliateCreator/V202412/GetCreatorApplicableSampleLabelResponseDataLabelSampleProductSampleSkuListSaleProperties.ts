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

export class AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListSaleProperties {
    /**
    * A SKU property identifier, short for \"Stock Keeping Unit Property ID\", is a specific identification code assigned to a particular property or characteristic of a SKU.(i.e: \"100000\" means \"color\")
    */
    'id'?: string;
    /**
    * The SKU property name.
    */
    'name'?: string;
    /**
    * The SKU property value identifier is an identification code related to the specific values of the properties of a Stock Keeping Unit (SKU). When a SKU has certain properties like color, size, etc., each possible value for those properties has its own unique SKU property value identifier. For instance, if the property is \"color\" and the possible values are \"red\", \"blue\", \"green\", then \"red\" would have its own SKU property vvalue identifier, \"blue\" would have another one, and so on.
    */
    'valueId'?: string;
    /**
    * The SKU property value name.
    */
    'valueName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "valueId",
            "baseName": "value_id",
            "type": "string"
        },
        {
            "name": "valueName",
            "baseName": "value_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListSaleProperties.attributeTypeMap;
    }
}

