export type User = {
  id: number;
  nickname: string;
  name: string;
  email: string;
  created_at: string;
  updata_at: string;
};

export type Post = {
  id: number;
  user_id: number;
  content: string;
  created_at: string;
  updata_at: string;
  user: User;
};
