import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  public createUser(email: string, password: string): any{
   return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public loginUser(email: string, password: string): any{
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logoutUser(): any{
    return this.afAuth.auth.signOut();
  }

  public hasUser(): Observable<any>{
   return this.afAuth.authState;
  }
}
