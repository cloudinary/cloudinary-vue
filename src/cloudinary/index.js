
import { Cloudinary, Util, Configuration } from 'cloudinary-core';
import { pick } from "../utils";

export const computeCldConfigs = (configs = {}) => pick(Util.withSnakeCaseKeys(configs), Configuration.CONFIG_PARAMS)

class CloudinaryAPI {
  constructor(configs = {}) {
    const _sdk = new Cloudinary(computeCldConfigs(configs))

    this.config = (newConfigs = {}) => _sdk.config(computeCldConfigs(newConfigs))

    this.image = {
      url: (publicId, options) => _sdk.url(publicId, options)
    }

    this.video = {
      url: (publicId, options) => _sdk.video_url(publicId, options)
    }
  }
}

export default CloudinaryAPI