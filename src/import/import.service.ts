import { Inject, Injectable } from '@nestjs/common';
import { ImportRepository } from './import.repository';

@Injectable()
export class ImportService {
  constructor(
    @Inject(ImportRepository)
    private readonly importRepository: ImportRepository,
  ) {}
  async getImageFromPexel(imageType: string): Promise<string> {
    return this.importRepository.getImageFromPexel(imageType);
  }
  async getImageFromOpenAI(imageType: string): Promise<string> {
    return this.importRepository.getImageFromOpenAI(imageType);
  }
}
