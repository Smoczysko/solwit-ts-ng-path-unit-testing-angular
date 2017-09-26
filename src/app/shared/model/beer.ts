export interface IBeerRaw {
    id: number;
    name: string;
    description: string;
    tagline: string;
    brewers_tips: string;
    food_pairing: string[];
    first_brewed: string;
    image_url: string;
    volume: { value: number, unit: string };
}

export class BeerVolume {
    public value: number;
    public unit: string;

    constructor (beer: IBeerRaw) {
        this.value = beer.volume.value;
        this.unit = beer.volume.unit;
    }
}

export class Beer {
    public id: number;
    public name: string;
    public description: string;
    public tagline: string;
    public brewersTips: string;
    public foodPairing: string[];
    public firstBrewed: string;
    public imageUrl: string;
    public volume: BeerVolume;

    constructor (beer: IBeerRaw) {
        this.id = beer.id;
        this.name = beer.name;
        this.description = beer.description;
        this.tagline = beer.tagline;
        this.brewersTips = beer.brewers_tips;
        this.foodPairing = beer.food_pairing;
        this.firstBrewed = beer.first_brewed;
        this.imageUrl = beer.image_url;
        this.volume = new BeerVolume(beer);
    }
}
