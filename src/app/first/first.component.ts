import { Component, OnInit } from '@angular/core';

enum Category {
  Mac = 1,
  iPad,
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})

export class FirstComponent implements OnInit {

  name: string = 'MacBook Air'
  description: string = 'M2 13.6 512Gb Space Grey 2022'
  price: number = 5000
  category: string = Category[1]
  isAvailable: boolean = true
  specifications: string[] = ['Apple M2 chip', 'Liquid Retina display', 'MagSafe 3 charging port']

  constructor() { }

  ngOnInit(): void {
  }

}
