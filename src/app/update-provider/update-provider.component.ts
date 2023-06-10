import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';
@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

   id: any;
   providerToUpdate: any;
   name: any;
   email: any;
   adress: any;

  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
    this.providerToUpdate = this.service.getProvider(this.id).subscribe(
      (response: any) => {
        //console.log(response);
        this.name = response["name"];
        this.email = response["email"];
        this.adress = response["address"];
      }
    );
    // this.initFormUpdateProvider(myform);
  }

  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.adress,
      'id': this.id
    }

    this.service.updateProvider(this.providerToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listProvider']);
      }
    );
    
  }

}
