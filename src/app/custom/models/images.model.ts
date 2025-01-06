export interface Image {
    id?: number,
    title?: string,
    images?: string[] | string,
    seo_teg?: string[] | string,
    actor_id?: string[] | string,
    category_id?: string,
    channel_id?: string,
    category_name?: string,
    channel_name?: string,
    views?: string,
    likes?: string,
    description?: string,
    created_at?: Date,
    updated_at?: Date,
    actors?: Actors,
    trending?:boolean,
    popular?:boolean,
}
export type Images = Image[];
interface actor {
    id?: string,
    name?: string,
}
type Actors = actor[];

