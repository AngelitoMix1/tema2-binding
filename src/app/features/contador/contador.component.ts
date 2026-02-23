import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {

  valor = 0;
  paso = 1;

  inc() {
    this.valor += this.paso;
  }

  dec() {
    this.valor -= this.paso;
  }

}