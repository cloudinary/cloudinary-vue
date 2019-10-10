import { Cloudinary } from 'cloudinary-core';

export const generateUrl = ({
  publicId,
  configuration,
  transformation
}) => Cloudinary.new(configuration).url(publicId, transformation)