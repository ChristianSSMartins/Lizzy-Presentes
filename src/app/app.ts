import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatCardModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
