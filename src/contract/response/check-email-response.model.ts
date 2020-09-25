export class CheckEmailResponseModel {
  isEmailAvailable: boolean;

  constructor(isEmailAvailable: boolean) {
    this.isEmailAvailable = isEmailAvailable;
  }
}
