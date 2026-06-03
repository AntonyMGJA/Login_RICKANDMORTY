
export class ERandM {
  constructor(
    public info: Info,
    public results: Episode[]
  ) {}
}

export class Info {
  constructor(
    public count: number,
    public pages: number,
    public next: string,
    public prev: string
  ) {}
}

export class Episode {
  constructor(
    public id: number,
    public name: string,
    public air_date: string,
    public episode: string,
    public characters: string[],
    public url: string,
    public created: Date
  ) {}
}