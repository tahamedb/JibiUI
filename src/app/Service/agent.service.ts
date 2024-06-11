import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {Agent} from "../models/agent-module";

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private baseUrl = 'http://localhost:8080/backoffice';

  constructor(private http: HttpClient) {}

  addAgent(agent: FormData): Observable<any> {
    console.log(agent);
    return this.http.post<string>(`${this.baseUrl}/addAgent`, agent);
  }

  updateAgent(id: number, agentDto: any): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/update/${id}`, agentDto);
  }

  deleteAgent(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete/${id}`);
  }

  getAgentsByAgence(id_agence: number): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.baseUrl}/agents-by-agence/${id_agence}`);
  }

  addAgentToAgence(agent: Agent, id_agence: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/add-to-agence?id_agence=${id_agence}`, agent);
  }

  deleteAgentFromAgence(id: number, agence: any): Observable<string> {
    return this.http.request<string>('delete', `${this.baseUrl}/delete-from-agence/${id}`);
  }

  getAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.baseUrl}/all`);
  }


}
