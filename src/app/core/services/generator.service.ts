import { Injectable } from '@angular/core'
import { GenId } from './gen-id.generator'

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(n: number): string {
    let randomString = ''
    while(randomString.length < n) randomString += this.randomValue()

    return randomString
  }

  randomValue(): string {
    let chartValue = Math.floor(Math.random() * 62)
    if(chartValue < 10) return String(chartValue)  //1-10
    if(chartValue < 36) return String.fromCharCode(chartValue + 55) // A-Z
    return String.fromCharCode(chartValue + 61) // a-z
  }

  getNewID(quantity: number): string {
    return GenId(quantity)
  }
}
