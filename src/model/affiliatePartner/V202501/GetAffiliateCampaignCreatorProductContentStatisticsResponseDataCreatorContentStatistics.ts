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

export class AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponseDataCreatorContentStatistics {
    /**
    * The number of TikTok user comments associated with the live room or video.
    */
    'commentNum'?: string;
    /**
    * When content_type == VIDEO, this field is None; when content_type == LIVE_ROOM, this is the date when the live ended. The value is in YYYY_MM_DD format. 
    */
    'contentEndDate'?: string;
    /**
    * Content type.Identify content as video or live. - 1: VIDEO - 2: LIVE_ROOM
    */
    'contentType'?: string;
    /**
    * A URL for the live room cover image in the TikTok CDN.The video content doesn\'t have this value.
    */
    'coverImgUrl'?: string;
    /**
    * The number of TikTok user likes associated with the live room or video.
    */
    'likeCount'?: string;
    /**
    * The friendly URL for the video on the TikTok website.
    */
    'linkedTiktokVideo'?: string;
    /**
    * The aggregate value of product orders associated with the live room or video.
    */
    'paidAmount'?: string;
    /**
    * The total number of paid orders associated with the live room or video.
    */
    'paidOrderNum'?: string;
    /**
    * When content_type == VIDEO, this is the date when the video was published; when content_type == LIVE_ROOM, this is the date when the live started. The value is in YYYY_MM_DD format. 
    */
    'publishedDate'?: string;
    /**
    * The URL on the public TikTok website at which the live room video can be played back. When content_type == VIDEO, the value is the url of the source video; when content_type == LIVE_ROOM, the value is the url where you can play back the recording of the live. 
    */
    'sourceUrl'?: string;
    /**
    * The number of public views of the live room or video.
    */
    'viewCount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commentNum",
            "baseName": "comment_num",
            "type": "string"
        },
        {
            "name": "contentEndDate",
            "baseName": "content_end_date",
            "type": "string"
        },
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "string"
        },
        {
            "name": "coverImgUrl",
            "baseName": "cover_img_url",
            "type": "string"
        },
        {
            "name": "likeCount",
            "baseName": "like_count",
            "type": "string"
        },
        {
            "name": "linkedTiktokVideo",
            "baseName": "linked_tiktok_video",
            "type": "string"
        },
        {
            "name": "paidAmount",
            "baseName": "paid_amount",
            "type": "string"
        },
        {
            "name": "paidOrderNum",
            "baseName": "paid_order_num",
            "type": "string"
        },
        {
            "name": "publishedDate",
            "baseName": "published_date",
            "type": "string"
        },
        {
            "name": "sourceUrl",
            "baseName": "source_url",
            "type": "string"
        },
        {
            "name": "viewCount",
            "baseName": "view_count",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponseDataCreatorContentStatistics.attributeTypeMap;
    }
}

