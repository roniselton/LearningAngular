import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = '';
  btnText: string = 'Default';
  btnObject = {
    label: 'Adicionar',
  };

  getAlert(n1: number) {
    alert('Oi: ' + n1 + ' - ' + this.label);
  }
}
