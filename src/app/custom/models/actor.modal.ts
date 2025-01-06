
export interface Actor {
    id?: number,
    name?: string,
    aliases?: string,
    image?: string
    gender?: 'male' | 'female',
    birth_date?: string,
    place_of_birth? : string,
    description?: string
    like?: number,
    dislike?: number,
    ranking?: number,
    total_image?: number,
    total_video?: number,
    seo_teg?: string[] | string,
    sorting_position?: number,
}

export type Actors = Actor[];
