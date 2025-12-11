// backend/utils/cloudinaryUpload.js
import cloudinary from "../config/cloudinary.js";

/**
 * Upload buffer to Cloudinary via upload_stream
 * returns { secure_url }
 */
export const uploadBufferToCloudinary = (buffer, folder = "ecommerce") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) return reject(error);
        resolve(result); // contains secure_url, public_id, etc.
      }
    );
    stream.end(buffer);
  });
};
