# 🥗 AI Nutrition Finder

An AI-powered Angular application that estimates the nutritional values of Persian foods using the OpenRouter API.  
Enter a Persian food name (like قرمه‌سبزی) and get approximate calories, protein, fat, and carbs — returned as structured JSON.

---

## ✨ Features

- ✅ Angular 17+ standalone components
- ✅ Integration with OpenRouter (Mistral/LLama/GPT-compatible)
- ✅ Persian food support
- ✅ Clean, responsive UI with TailwindCSS

---

## 🚀 How to Run

### 1. Clone the project

```bash
git clone https://github.com/devOptimistic/ai-nutrition-finder.git
cd ai-nutrition-finder
```
### 2. Install dependencies
```bash
npm install
```
### 3. Set your OpenRouter API key
Open the file src/app/services/ai.service.ts and find this line:
```bash
private apiKey = 'YOUR_OPENROUTER_API_KEY';
```
Replace 'YOUR_OPENROUTER_API_KEY' with your actual API key from:

👉 https://openrouter.ai/account/keys

Also make sure the Referer header in the request is set to your app domain or localhost. Example:
```bash
'HTTP-Referer': 'https://localhost:4200',
```
### 4. Run the app
Open the file src/app/services/ai.service.ts and find this line:
```bash
ng serve
```
Open your browser and navigate to:
```bash
http://localhost:4200
```
