import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  tipo: string ;
  ngOnInit() {
  }

  goToNext() {
        // Navigate to the property page
        if(this.tipo === "personal"){
          this.router.navigateByUrl('/personal');
        }else if (this.tipo === "business") {
          this.router.navigateByUrl('/business');
        }
      
    
}

}
