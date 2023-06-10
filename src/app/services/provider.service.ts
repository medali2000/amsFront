import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  urlProviders = 'http://127.0.0.1:8888/providers/';
  provider: any;
  constructor(private Http: HttpClient) { }

  basicToken : any= sessionStorage.getItem('basicToken');

  listProviders() {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    return this.Http.get(this.urlProviders , {headers} );
  }

  deleteProvider(idProvider:any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    return this.Http.delete(this.urlProviders + idProvider , {headers}  )
  }
  updateProvider(myObj:any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    return this.Http.put(this.urlProviders  + myObj['id'], myObj ,  {headers} );
  }
  createProvider(myform:any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.Http.post(this.urlProviders , this.provider , {headers}  );
  }


  getProvider(id:any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    return this.Http.get(this.urlProviders  + id ,  {headers} )
  }
  
}
