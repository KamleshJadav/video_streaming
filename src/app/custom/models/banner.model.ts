
export interface Banner {
    id?: number,
    name?: string,
    redirect_url?: string,
    is_active?: boolean,
    sorting_position?: number,
    image?: string,
    created_at?: Date,
    updated_at?: Date
}

export type Banners = Banner[];
