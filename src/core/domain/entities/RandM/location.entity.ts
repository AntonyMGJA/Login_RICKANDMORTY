export interface LRandM {
  info: Info;
  results: Location[];
}

export class Info {
  constructor(
    public count: number,
    public pages: number,
    public next: string,
    public prev: string
  ) {}
}

export class Location {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public dimension: string,
    public residents: string[],   // Array of resident URLs
    public url: string,
    public created: Date          // Date object to represent timestamp
  ) {}
}