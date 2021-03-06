import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/formData.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Multi-Step Wizard';
  @Input() formData;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + ' loaded!');
  }

}
