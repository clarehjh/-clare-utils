import { DownloadFile } from '../utils/download';

describe('download Utils', () => {
  test('下载文件', () => {
    const date = new Date('2025-03-25');
    expect(
      DownloadFile(
        'https://spt-pro.dev.xinshiyun.com/fayuan/public/file/user-operate-guide-v1.pdf?attname=云上法庭内网操作手册V1.pdf',
        '操作手册'
      )
    );
  });
});
