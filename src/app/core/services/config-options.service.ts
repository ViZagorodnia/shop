import { Injectable } from '@angular/core'

/**
 * ConfigModel
 */
export class ConfigModel {
  constructor(
    public id: number,
    public login: string,
    public email: number,
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  configOptions: Partial<ConfigModel> = {}

  constructor() { }

  setConfig(newConfig: Partial<ConfigModel>): void {
    Object.assign(this.configOptions, newConfig)
  }

  getConfig() {
    return this.configOptions
  }

  setConfigProperty(key: keyof ConfigModel, value: any): void {
    this.configOptions[key] = value
  }
}
