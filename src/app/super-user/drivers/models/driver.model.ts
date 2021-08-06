import { Car } from './car.model';
import { Favorite } from './favorite.model';
import { Reviews } from './reviews.model';
import { Trip } from './trips.model';

export interface Driver{
    id?: string,
    gender: string,
    username: string,
    email: string,
    picture: string,
    phone: string,
    age: number,
    car: Car,
    favorite: Favorite,
    reviews: Reviews[],
    trips: Trip[]
}