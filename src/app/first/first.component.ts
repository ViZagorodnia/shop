import { Component, Inject, OnInit, Optional } from '@angular/core'
import { CommonModule } from '@angular/common'
import { APP_CONFIG } from '../core/services/constant.service'
import { GenFactory, GeneratorFactory } from '../core/services/generator.factory'
import { GeneratorService } from '../core/services/generator.service'
import { LocalStorageService, storageService } from '../core/services/local-storage.service'

export const COFIG = {app: "Online store", ver: "1.0", app_url: "http://localhost:4200/"}

@Component({
  standalone: true,
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass'],
  imports: [CommonModule],
  providers: [
    {provide: APP_CONFIG, useValue: COFIG},
    GeneratorService,
    {provide: GenFactory, useFactory: GeneratorFactory(15), deps: [GeneratorService]},
    {provide: LocalStorageService, useValue: storageService}
  ]
})
export class FirstComponent implements OnInit {

  order!: string

  constructor(
    @Inject(GenFactory) private genFactory: string,
    @Optional() private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.order = this.genFactory
  }

}
