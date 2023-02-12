import { Component, Input, OnInit } from '@angular/core'


@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.sass']
})
export class ModalMessageComponent implements OnInit {

  @Input() message: string = 'Congratulation! You add new item to the cart.'

  constructor() { }

  ngOnInit(): void {
  }

}
