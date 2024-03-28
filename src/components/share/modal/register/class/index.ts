/** 註冊表單 */
export class RegisterForm {
  /** 上傳圖像 */
  profilePicture = '';
  /** 姓名 */
  userName = '';
  /** 信箱 */
  email = '';
  /** 密碼 */
  password = '';

  /** 設定使用者資料資料 */
  setInfoData(data: RegisterForm): void {
    this.profilePicture = data.profilePicture;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
  }
}
