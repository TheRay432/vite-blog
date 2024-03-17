import type { RuleExpression } from 'vee-validate';
import type { ButtonType, InputLength, InputType } from '../enum';

/** BaseInput元件-props */
export interface BaseInputProps {
  /** input長度 */
  inputLength?: InputLength;
  /** input類型 */
  inputType?: InputType;
  /** 欄位名稱 */
  name: string;
  /** 預設顯示文字 */
  placeholder?: string;
  /** 驗證規則 */
  rules?: RuleExpression<unknown>;
  /** 是否錯誤 */
  errors: Partial<Record<string, string | undefined>>;
}

/** BaseErrMsg元件-props */
export interface BaseErrMsgProps {
  /** 欄位名稱 */
  name: string;
}

/** ButtonPrimary元件-props */
export interface ButtonPrimaryProps {
  /** 大小 */
  buttonType?: ButtonType;
  /** 資料選項 */
  dataOption: ButtonOption;
}

/** 按鈕資料選項 */
export interface ButtonOption {
  /** 內容 */
  content: string;
  /** 是否禁用  */
  isDisabled?: boolean;
  /** 左邊icon */
  leftIcon?: string;
  /** 右邊icon */
  rightIcon?: string;
}
