import { Component, signal } from '@angular/core';
import { AiService, FoodInfo } from './services/ai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  foodName = signal('');
  result = signal<FoodInfo | null>(null);
  loading = signal(false);

  constructor(private ai: AiService) {}

  search() {
    const food = this.foodName();
    if (!food.trim()) return;

    this.loading.set(true);
    this.ai.getFoodInfo(food).subscribe({
      next: (res) => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.result.set(null);
        this.loading.set(false);
      }
    });
  }
}
