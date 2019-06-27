import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-password-input',
  templateUrl: './custom-password-input.component.html',
})
export class CustomPasswordInputComponent {
  icon: string = "fa fa-eye"
  type: string = "password";
  changeMap = {
    password: {
      type: "text",
      icon: "fa fa-eye"
    },
    text: {
      type: "password",
      icon: "fa fa-eye-slash"
    }
  };

  /**
   * Toggles the type of the input between password and text
   * and changes the icon on the toggle button accordingly
   */
  togglePasswordMask(): void {
    this.type = this.changeMap[this.type].type;
    this.icon = this.changeMap[this.type].icon
  }

}
