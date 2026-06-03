import { RandMorty } from '../../../application/service/RandM/Get.service'
import { CRandM } from '../../domain/entities/RandM/character.entity';
import { ERandM } from '../../domain/entities/RandM/episode.entity';
import { LRandM } from '../../domain/entities/RandM/location.entity';

export class UseCase {
  constructor(private RabdMService: RandMorty) {}

  async getC(): Promise<CRandM> {
    return this.RabdMService.Character();
  }

  async getE(): Promise<ERandM> {
    return this.RabdMService.Episode();
  }

  async getL(): Promise<LRandM> {
    return this.RabdMService.Location();
  }
}