
export interface Category {
    id?: number,
    name?: string,
    image?: string,
    seo_teg?: string[] | string,
    total_video?: string,
    total_image?: string,
    created_at?: Date,
    updated_at?: Date
    category_star_rate?: number,
    sorting_position?: number,
}

export type Categories = Category[];
