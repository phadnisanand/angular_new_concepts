import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signaldemo',
  imports: [],
  templateUrl: './signaldemo.component.html',
  styleUrl: './signaldemo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignaldemoComponent {
    firstName = signal("chetan");
    lastName = signal("Jogi");

    fullName = computed(() => this.firstName() + " " +  this.lastName());
    rollno = signal<number>(123);

    citylist = signal(['pune' , 'mumbai']);

    studentObj = signal({name: "anand", city: "pune"})

    constructor() {
      const fname = this.firstName();
      console.log(fname);
    }
    changeFName() {
      this.firstName.set('angular');

    }
    changeLName() {
      this.lastName.set('react');
    }
    addCity() {
       this.citylist.set( [...this.citylist(), 'nagpur']);

    }
    changeCity() {
      this.studentObj.set( { ...this.studentObj(), city: 'mumbai'})
    }
}
