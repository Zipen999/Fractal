import { Country } from "./country.interface";

export interface Member {
    name: string;
    pfp: string; // profile picture URL
    steamUrl: string;
    youtubeUrl: string;
    country: Country;
}
