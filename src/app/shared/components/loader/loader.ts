import { Component, inject } from '@angular/core';
import { LoaderService } from '../../../core/services/loader';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {
  loaderService =  inject(LoaderService)
  loading = this.loaderService.loading;

}
