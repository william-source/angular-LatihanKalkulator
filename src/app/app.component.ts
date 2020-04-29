import { Component } from '@angular/core'
import {Router} from '@angular/router'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router : Router) {}
  angka1=""
  angka2=""
  operator=""
  equal=""
  hasil=0
  angka(a){
  if(this.operator==""){
    if(this.angka1==""){
      this.angka1=a;
    }
  }else{
    this.angka2=a;
  }
  }
  oper(a){
  if(a==1){
    this.operator='-';
  }else if(a==2){
    this.operator='+';
  }else if(a==3){
    this.operator='*';
  }
  }

  samadengan()
  {
    this.equal="=";
    if(this.operator=='-')
    {
      this.hasil=parseInt(this.angka1)-parseInt(this.angka2);
    }else if(this.operator=='+')
    {
      this.hasil=parseInt(this.angka1)+parseInt(this.angka2);
    }else if(this.operator=='*')
    {
      this.hasil=parseInt(this.angka1)+parseInt(this.angka2);
    }
    this.router.navigate(['/hasil',this.hasil]);
  }

    reset(){
      this.angka1="";
      this.angka2="";
      this.operator="";
      this.hasil=0;
    }
}
