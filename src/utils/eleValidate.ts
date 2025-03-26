// ? 常用表单校验规则

import { ValidationCallback, ValidationRule } from '../types';

/**
 * @rule 手机号
 */
export function checkPhoneNumber(
  value: string,
  callback: ValidationCallback,
  rule?: ValidationRule
) {
  const regexp =
    rule?.regexp ||
    /^(((13[0-9])|(15[0-9])|(16[0-9])|(17[3-8])|(18[0-9])|(19[0-9])|(14[5-7]))\d{8})$/;
  const message = rule?.message || '请输入正确的手机号码';
  if (!value) {
    return callback('请输入手机号码');
  }
  if (!regexp.test(value)) {
    return callback(new Error(message));
  }
  return callback();
}

/**
 * @rule 手机号, 非必填
 */
export function validateSimplePhone(
  value: string,
  callback: ValidationCallback,
  rule?: ValidationRule
) {
  const regexp = rule?.regexp || /^[1][0-9]{10}$/; // 简略格式
  const message = rule?.message || '请输入正确的手机号!';
  if (!value) {
    return callback();
  }
  if (!regexp.test(value)) {
    return callback(new Error(message));
  }
  return callback();
}

/**
 * @rule 身份证号，非必填
 */
export function validateSimpleIdCard(
  value: string,
  callback: ValidationCallback,
  rule?: ValidationRule
) {
  const regexp =
    rule?.regexp ||
    /^[1-9]\d{5}(18|19|2[0-9])\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{3}[\dXx]$/;
  const message = rule?.message || '请输入正确的18位身份证号!';
  if (!value) {
    return callback();
  }
  if (!regexp.test(value)) {
    return callback(new Error(message));
  }
  return callback();
}

/**
 * 密码正则表达式
 * 必须包含大小写字母、数字和特殊字符，长度为8-20位
 */
export const passwordReg =
  /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z.!@#$%^&*()-]+$)(?![a-z0-9]+$)(?![a-z.!@#$%^&*()-]+$)(?![0-9.!@#$%^&*()-]+$)[a-zA-Z0-9.!@#$%^&*()-]{8,20}$/;

/**
 * @rule 密码校验
 */
export function validatePassword(
  value: string,
  callback: ValidationCallback,
  rule?: ValidationRule
) {
  const regexp = rule?.regexp || passwordReg;
  const message = rule?.message || '密码必须包含大小写字母、数字和特殊字符，长度为8-20位!';
  if (!value) {
    return callback('请输入密码');
  }
  if (!regexp.test(value)) {
    return callback(new Error(message));
  }
  return callback();
}
