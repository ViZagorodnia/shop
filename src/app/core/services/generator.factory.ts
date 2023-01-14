import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';


export const GenFactory = new InjectionToken<string>('GenFactory')

export function GeneratorFactory(take: number): (data: GeneratorService) => string {
  return (data: GeneratorService): string =>
    data
      .generate(take)
}
