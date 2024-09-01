import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './SharedComponents/loader/loader.component';
import { LoaderService } from './Services/loader/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoaderComponent,RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ChatApp-FrontEnd';
  isLoading = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.loading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
}
