export interface User {
    id?: number;
    first_name?: string;
    last_name?: string; 
    email?: string; 
    password?: string;
    role?: 'admin' | 'mobile_user' | 'web_user'; // Role of the user
    updated_at?: string;
    created_at?: string;
  }