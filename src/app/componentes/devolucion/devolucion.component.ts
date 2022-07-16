import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { contabilidad } from 'src/app/models/contabilidad';
import { ContabilidadService } from 'src/app/services/contabilidad.service';


@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.component.html',
  styleUrls: ['./devolucion.component.css']
})
export class DevolucionComponent implements OnInit {

  contabilidad: contabilidad = null as any;

  constructor(
    private contabilidadService: ContabilidadService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.contabilidadService.detail(id).subscribe(
      data => {
        this.contabilidad = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
 
  getJson(){

  }






  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.contabilidadService.updat(id, this.contabilidad).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      //en caso de que tenga algun error 
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
  volver(): void {
    this.router.navigate(['/']);
  }

}