import type { RuleExpression } from 'vee-validate';
import type { InputLength, InputType } from '../enum';

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
}

/** BaseErrMsg元件-props */
export interface BaseErrMsgProps {
  /** 欄位名稱 */
  name: string;
}
