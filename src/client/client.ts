import { API_OPERATION_TYPE_MAP } from "../api/apis";
import { ClientConfiguration } from "./config";
import { createApiInstance } from "./create-api-instance";

export class TikTokShopNodeApiClient {
  readonly config?: ClientConfiguration;
  readonly api: API_OPERATION_TYPE_MAP;

  constructor({ config }: { config?: ClientConfiguration }) {
    this.config = config;
    const { api } = createApiInstance(this);
    this.api = api;
  }
}
