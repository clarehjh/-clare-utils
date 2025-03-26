import { getFileExtension } from './file';

/**
 * 下载
 * @param filePath 文件路径
 * @param fileName 文件名
 */
export function DownloadFile(filePath: string, fileName: string) {
  if (!filePath || !fileName) {
    console.error('Invalid filePath or fileName');
    return;
  }

  try {
    const a = document.createElement('a');
    const fileExtension = getFileExtension(filePath) || 'unknown';
    const downloadUrl = createDownloadUrl(filePath, fileName, fileExtension);
    a.style.display = 'none';
    a.href = downloadUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error: unknown) {
    console.error('Download failed:', error instanceof Error ? error.message : error);
  }
}

/**
 * 创建下载链接
 * @param filePath 文件路径
 * @param fileName 文件名
 * @param fileExtension 文件扩展名
 * @returns 完整的下载链接
 */
function createDownloadUrl(filePath: string, fileName: string, fileExtension: string): string {
  return `${filePath}?download=true&filename=${encodeURIComponent(fileName)}.${fileExtension}`;
}
