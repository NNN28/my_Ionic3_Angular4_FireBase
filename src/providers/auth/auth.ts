
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds} from '../../models/interfaces/usercreds';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public authfire: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

login(creadential: usercreds)
{
var promise= new Promise((resolve,reject)=>{

this.authfire.auth.signInWithEmailAndPassword(creadential.email,creadential.password).then(()=>{
  resolve(true);
}).catch((err)=>{
  reject(err);
})

})

return promise;
}
}