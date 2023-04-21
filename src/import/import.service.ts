import { Inject, Injectable } from '@nestjs/common';
import { ImportRepository } from './import.repository';

@Injectable()
export class ImportService {
  constructor(
    @Inject(ImportRepository)
    private readonly importRepository: ImportRepository,
  ) {}
  async getImageFromPexel(imageType: string) {
    return this.importRepository.getImageFromPexel(imageType);
  }
}
