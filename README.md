# Node.js SDK

### Prerequisites

Before integrating TikTok Shop API SDK into your project and making your first API call with the SDK, you must [create a test seller account](https://partner.tiktokshop.com/docv2/page/6789f75a38b3f103167690dc) and [generate a test access token](https://partner.tiktokshop.com/docv2/page/6789f75d2dccb8030e8dece5).

### Integrate Node.js SDK

Online version of this document: [https://partner.tiktokshop.com/docv2/page/67c83e0799a75104986ae498](Tiktok Shop API SDK)

#### Initialize API request instance

```javascript
import { ClientConfiguration, TikTokShopNodeApiClient,AccessTokenTool } from ".";

ClientConfiguration.globalConfig.app_key = "XXXXXXXXX";
ClientConfiguration.globalConfig.app_secret =
  "XXXXXXXXX";
 
const access_token = "XXXXXXXXX"

const client = new TikTokShopNodeApiClient({
  config: {
    sandbox: false,
  },
}); 
```

#### Make API Requests and Access API Response

```javascript
const main = async () => {
    const result = await client.api.ProductV202502Api.ProductsSearchPost(1,access_token,'application/json',undefined,undefined);
    console.log('resp data := ',JSON.stringify(result.body, null, 2));
};

main();  
```