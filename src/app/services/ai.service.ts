import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface FoodInfo {
  name: string;
  calories: number;
  protein: string;
  fat: string;
  carbs: string;
}

@Injectable({
  providedIn: 'root',
})
export class AiService {
  private http = inject(HttpClient);
  private apiKey = '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';
  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  getFoodInfo(foodName: string): Observable<FoodInfo> {
    const prompt = `
    غذای "${foodName}" را بررسی کن و اطلاعات تغذیه‌ای آن را به صورت JSON برگردان.
    فقط ساختار زیر را پر کن و از دانش تغذیه‌ای خودت برای تخمین استفاده کن.
    اعداد فقط حدودی هستند.
    
    ساختار خروجی (به فارسی):
    {
      "name": "نام غذا",
      "calories": "(عدد) kcal",
      "protein": "(عدد) g",
      "fat": "(عدد) g",
      "carbs": "(عدد) g"
    }
    
    فقط JSON برگردان. هیچ توضیح یا متن اضافه ننویس.
    `;

  return this.http.post<any>(
    this.apiUrl,
    {
      model: 'mistralai/mistral-7b-instruct',
      temperature: 0,
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'HTTP-Referer': 'https://localhost:4200',
        'Content-Type': 'application/json',
      },
    }
  ).pipe(
    map(res => JSON.parse(res.choices[0].message.content) as FoodInfo)
  );
  }
}
