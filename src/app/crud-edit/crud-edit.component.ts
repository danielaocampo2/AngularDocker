import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../business.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css']
})
export class CrudEditComponent implements OnInit, OnDestroy {

  business: any = {};
  sub: Subscription;
  angForm: FormGroup;
 //business;

 constructor(
  private router: Router,
  private route: ActivatedRoute,
  private businessService: BusinessService,
  private formBuilder: FormBuilder,
) {
  this.createForm();
}

createForm(){
  this.angForm = this.formBuilder.group({
    person_name: ['', Validators.required ],
    business_name: ['', Validators.required ],
    business_gst_number: ['', Validators.required ]
    });
}

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    const id = params['id'];
    if (id){
      this.businessService.getOneBusiness(id).subscribe((business: any) => {
        if (business){
          this.business = business;
        }else{
          console.log("No se pudo recuperar el registro");
        }
      });
    }
  });
}

ngOnDestroy() {
  this.sub.unsubscribe();
}

editBusiness(person_name, business_name, business_gst_number, id) {

  this.businessService.editBusiness(person_name, business_name, business_gst_number, id);
  this.gotoList();
}

delete(id) {
  let res = this.businessService.delete(id);
  this.gotoList();
}

gotoList() {
  this.router.navigate(['/business']);
}

}
