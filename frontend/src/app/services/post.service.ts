import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
    id?: number;
    title: string;
    content: string;
    imageUrl: string;
    category: string;
    createdAt?: string;
    published: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiUrl = 'http://localhost:8081/api/posts';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.apiUrl);
    }

    getPostsByCategory(category: string): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.apiUrl}/category/${category}`);
    }

    createPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.apiUrl, post);
    }

    updatePost(id: number, post: Post): Observable<Post> {
        return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
    }

    deletePost(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    uploadImage(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post<any>(`http://localhost:8081/api/upload`, formData);
    }
}
