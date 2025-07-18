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
import { AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsCountRange } from './SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsCountRange';
import { AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsGenderDistribution } from './SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsGenderDistribution';

export class AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics {
    /**
    * Follower age filtering options, which are range intervals, include:  AGE_RANGE_18_24: \"18-24\",  AGE_RANGE_25_34: \"25-34\",  AGE_RANGE_35_44: \"35-44\",  AGE_RANGE_45_54: \"45-54\",  AGE_RANGE_55_AND_ABOVE: \"55+\"
    */
    'ageRanges'?: Array<string>;
    'countRange'?: AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsCountRange;
    'genderDistribution'?: AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsGenderDistribution;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ageRanges",
            "baseName": "age_ranges",
            "type": "Array<string>"
        },
        {
            "name": "countRange",
            "baseName": "count_range",
            "type": "AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsCountRange"
        },
        {
            "name": "genderDistribution",
            "baseName": "gender_distribution",
            "type": "AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsGenderDistribution"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics.attributeTypeMap;
    }
}

