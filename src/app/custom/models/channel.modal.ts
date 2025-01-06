export interface Channel {
    id?: number,
    name?: string,
    image?: string,
    seo_teg?: string[] | string,
    description?: string,
    subscriber?: number,
    like?: number,
    dislike?: number,
    ratting?: number,
    sorting_position?: number,
    total_image?: number,
    total_video?: number,
    total_view?: number,
    created_at?: Date,
    updated_at?: Date
}

export type Channels = Channel[];