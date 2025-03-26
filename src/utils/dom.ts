// src/utils/dom.ts
/**
 * DOM相关工具函数
 */

/**
 * 获取元素相对于文档的坐标
 * @param element DOM元素
 * @returns 坐标对象
 */
export function getElementPosition(element: HTMLElement): { x: number; y: number } {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
  };
}

/**
 * 平滑滚动到页面顶部
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
