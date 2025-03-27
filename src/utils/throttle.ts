// src/utils/throttle.ts

// 定义选项接口
interface ThrottleOptions {
  leading?: boolean; // 是否立即执行第一次调用
  trailing?: boolean; // 是否在最后一次延迟后执行
}

// 定义节流函数的类型
type ThrottledFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): Promise<ReturnType<T>>;
  cancel: () => void;
};

/**
 * 创建一个节流函数，限制函数在指定时间间隔内的执行频率
 * @template T 函数类型
 * @param fn 需要节流的函数
 * @param interval 节流时间间隔（毫秒）
 * @param options 配置选项
 * @returns 返回节流后的函数，带 cancel 方法
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  interval: number,
  options: ThrottleOptions = { leading: true, trailing: false }
): ThrottledFunction<T> {
  const { leading, trailing } = options;
  let lastTime = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;

  const _throttle = function (this: unknown, ...args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise((resolve, reject) => {
      const nowTime = Date.now();

      // 如果是第一次调用且 leading 为 false，则初始化 lastTime
      if (!lastTime && !leading) {
        lastTime = nowTime;
      }

      // 计算剩余等待时间
      const remainTime = interval - (nowTime - lastTime);

      if (remainTime <= 0) {
        // 如果可以立即执行
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }

        try {
          const result = fn.apply(this, args);
          resolve(result);
          lastTime = nowTime;
        } catch (error) {
          reject(error);
        }
        return;
      }

      // 如果启用 trailing 且没有定时器，设置延迟执行
      if (trailing && !timer) {
        timer = setTimeout(() => {
          timer = null;
          lastTime = !leading ? 0 : Date.now();
          try {
            const result = fn.apply(this, args);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, remainTime);
      }
    });
  };

  // 添加取消方法
  _throttle.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    lastTime = 0;
  };

  return _throttle;
}
