import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAsistencia } from '../pages/interface/iasistencia';
import { environment } from 'src/environments/environment';
import { IAsistencias } from '../pages/interface/iasistencias';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaqrService {

  constructor(private http: HttpClient) { }

  listarAsistencia():Observable<IAsistencias>{
    return this.http.get<IAsistencias>(`${environment.apiURL}/asistencias`)
  }

  crearAsistencia(newAsistencia: IAsistencia):Observable<IAsistencia>{
    return this.http.post<IAsistencia>(`${environment.apiURL}/asistencias`,newAsistencia)
  }

  getAsistenciaByID(id: Number):Observable<IAsistencias>{
    return this.http.get<IAsistencias>(`${environment.apiURL}/asistencias/?id=${id}`)
  }
  
  actualizarAsistencia(asistencia:any):Observable<IAsistencias>{
    return this.http.put<IAsistencias>(`${environment.apiURL}/asistencias/${asistencia.id}`, asistencia)
  }

  eliminarAsistencia(asistencia:any):Observable<IAsistencias>{
    return this.http.delete<IAsistencias>(`${environment.apiURL}/asistencias/${asistencia.id}`)
  }

}
