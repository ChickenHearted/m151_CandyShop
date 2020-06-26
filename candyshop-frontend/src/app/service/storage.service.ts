import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) {
  }

  async getStorage(): Promise<Storage[]> {
    return await this.http.get<Storage[]>(environment.host + 'storage').toPromise();
  }

}
