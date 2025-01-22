export interface Notification {
    id?: number,
    title?: string,
    message?: string,
    redirect_url?: string,
    user_ids?: string[],
    is_active?: boolean,
    created_at?: Date,
    updated_at?: Date
}

export type Notifications = Notification[];
