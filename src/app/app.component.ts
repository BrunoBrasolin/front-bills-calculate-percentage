import { Component } from '@angular/core';
import { CalculatePercentageService } from './app.service';
import { AppModel } from './app.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private service: CalculatePercentageService) {
  }
  public value: number | null = null;
  public apiReturn: AppModel | null = null;

  onClickCalcular() {
    if (this.value === null) {
      alert('Favor inserir um valor válido para o cálculo!');
      return;
    }

    this.service.CalculatePercentage(this.value).subscribe(f => this.apiReturn = f);
  }

  onClickLimpar() {
    this.value = null;
    this.apiReturn = null;
  }
}
