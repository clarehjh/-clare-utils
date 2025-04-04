export type ValidationCallback = (error?: Error | string) => void;

export interface ValidationRule {
  message?: string; // 自定义错误提示信息
  regexp?: RegExp;  // 自定义正则表达式
}


export type CallbackFunction = (...args: any[]) => any;
export type ResultCallbackFunction = (result: any) => void;