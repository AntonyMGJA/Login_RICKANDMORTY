import { CRandMDto, ERandMDto, LRandMDto} from '../../../infrastructure/http/dto/RandM/RandM.Dto';
import { RandMortyR } from '../../../core/domain/repository/Get.repository';

export class RandMorty {
    
    constructor(private readonly apiUrl: RandMortyR){}

    async Character (): Promise<CRandMDto> {
        try {
            const response = await this.apiUrl.RCharacter();
            const data = response;
            
            //const [characters] = data; // Desestructurar solo el primero
            return data as CRandMDto;
          } catch (error) {
            console.error('Error fetching characters:', error);
            throw error; // Puedes propagar el error si lo necesitas
          }
        
    }
    
    async Episode (): Promise<ERandMDto> {
        try {
            const response = await this.apiUrl.REpisode();
            const data = response;
        
            //const [, , episodes] = data; // Solo tomar la tercera posición
            return data as ERandMDto;
          } catch (error) {
            console.error('Error fetching episodes:', error);
            throw error;
          }
    }
    
    async Location (): Promise<LRandMDto> {
        try {
            const response = await this.apiUrl.RLocation();
            const data = response;
        
            //const [, locations] = data; // Solo tomar la segunda posición
            return data as LRandMDto;
          } catch (error) {
            console.error('Error fetching locations:', error);
            throw error;
          }
    }
}