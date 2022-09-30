export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface PostProvider {
    getPosts(): Promise<Post[]>;
}

export class PostService {
    private posts: Post[] = [];

    constructor(private postProvider: PostProvider) {}

    async getPosts() {
        this.posts = await this.postProvider.getPosts();
        return this.posts;
    }
}
