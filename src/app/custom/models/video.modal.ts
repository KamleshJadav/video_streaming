
export interface Video {
    id?: number,
    title?: string,
    actor_id?: string[] | string,
    category_id?: string,
    channel_id?: string,    
    category_name?: string,
    channel_name?: string,
    isInWishlist?: boolean,
    views?: string,
    likes?: string,
    description?: string,
    seo_teg?: string[] ,
    video?: string,
    created_at?: Date,
    updated_at?: Date,
    actors?:Actors | any,
    trending?:boolean,
    popular?:boolean,
    thumb_name?:string,
    video_id?:string,
}
interface actor {
    id?: string,
    name?: string,
}



export type Videos = Video[];
type Actors = actor[];


