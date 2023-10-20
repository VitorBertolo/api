import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';

  alert(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Item salvo com sucesso!!!',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
