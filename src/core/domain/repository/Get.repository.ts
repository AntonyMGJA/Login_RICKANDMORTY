import { CRandM } from '../entities/RandM/character.entity';
import { ERandM } from '../entities/RandM/episode.entity';
import { LRandM } from '../entities/RandM/location.entity';


export class RandMortyR {

    async RCharacter (): Promise<CRandM> {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching characters:', error);
            throw error; // Puedes propagar el error si lo necesitas
          }
        
    }
    
    async REpisode(): Promise<ERandM> {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/episode');
            const data = await response.json();
      
            return data;
          } catch (error) {
            console.error('Error fetching episodes:', error);
            throw error;
          }
    }
    
    async RLocation (): Promise<LRandM> {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/location');
            const data = await response.json();
        
            return data;
          } catch (error) {
            console.error('Error fetching locations:', error);
            throw error;
          }
    }
}