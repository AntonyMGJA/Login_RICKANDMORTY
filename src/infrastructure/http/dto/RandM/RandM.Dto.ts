export class CRandMDto {
    info: InfoDto;
    results: CharacterDto[];
}

export class ERandMDto {
    info: InfoDto;
    results: EpisodeDto[];
}

export class LRandMDto {
    info: InfoDto;
    results: LocationDto[];
}

//Objetos
export class InfoDto {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
  
  export class OriginDto {
    name: string;
    url: string;
  }
  
  export class LocationDt {
    name: string;
    url: string;
  }

  export class LocationDto {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: Date;
  }

  export class EpisodeDto {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
  }
  
  export class CharacterDto {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginDto;
    location: LocationDt;
    image: string;
    episode: string[];
    url: string;
    created: Date;
  }
