/**
 * 是否是图片文件
 * @param fileName 文件名
 * @returns boolean
 */

export const isImageFile = (fileName: string) => {
  const imageFilePattern = /\.(jpg|jpeg|png|gif|bmp|tiff|webp)(\?.*)?$/i;
  return imageFilePattern.test(fileName);
};

/**
 * 是否是文档文件
 * @param fileName 文件名
 * @returns boolean
 */
export const isDocumentFile = (fileName: string) => {
  const documentFilePattern = /\.(doc|docx|pdf|txt|xls|xlsx|ppt|pptx)(\?.*)?$/i;
  return documentFilePattern.test(fileName);
};
/**
 * 获取文件扩展名
 * @param fileName 文件名
 * @returns 文件扩展名字符串，如果没有则返回空字符串
 */
export const getFileExtension = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf('.');

  if (lastDotIndex > 0 && lastDotIndex < fileName.length - 1) {
    return fileName.substring(lastDotIndex + 1);
  }

  return '';
};

/**
 * 获取不带扩展名的文件名
 * @param fileName 文件名
 * @returns 不带扩展名的文件名
 */
export const getFileNameWithoutExtension = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf('.');

  if (lastDotIndex > 0) {
    return fileName.substring(0, lastDotIndex);
  }

  return fileName;
};
