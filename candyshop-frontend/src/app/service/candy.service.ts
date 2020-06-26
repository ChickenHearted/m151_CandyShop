import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Candy} from "../type/candy.type";

@Injectable({
  providedIn: 'root'
})
export class CandyService {

  constructor(private http: HttpClient) {
  }

  async getCandies(): Promise<Candy[]> {
    return await this.http.get<Candy[]>(environment.host + 'candies').toPromise();
  }

  async getCandyById(id: number): Promise<Candy> {
    return await this.http.get<Candy>(environment.host + 'candies/' + id).toPromise();
  }

}
