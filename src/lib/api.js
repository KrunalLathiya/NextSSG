const API_URL = 'https://jsonplaceholder.typicode.com';

export const getAllPosts = async () => {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
};

export const getPostById = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }
    return response.json();
};

export const getPostIds = async () => {
    const posts = await getAllPosts();
    return posts.map(post => ({ params: { id: post.id.toString() } }));
};