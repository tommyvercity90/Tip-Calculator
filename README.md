# 💰 Tip Calculator

A simple, responsive, and interactive Tip Calculator built using **HTML, CSS, and JavaScript**. Calculate the tip amount, total bill, tip per person, and total amount per person with real-time updates.

## 🚀 Features

- 💵 Enter the total bill amount.
- 🎯 Select a tip percentage using preset buttons (5%, 10%, 15%, and 20%).
- ✏️ Enter a custom tip percentage.
- 👥 Split the bill between multiple people.
- ⚡ Automatically update calculations when inputs change.
- ✅ Validate bill amount, tip percentage, and number of people.
- 🛡️ Prevent division by zero and invalid person counts.
- 🇮🇳 Display currency in Indian Rupees (INR).
- 📱 Responsive design for desktop and mobile devices.
- 🔄 Reset the calculator to its default state.

## 🛠️ Technologies Used

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- **HTML5** — Structures the calculator interface.
- **CSS3** — Provides styling, layout, transitions, and responsive design.
- **JavaScript** — Handles calculations, input validation, event listeners, and live updates.

## 📂 Project Structure

```text
tip-calculator/
│
├── index.html      # Calculator structure
├── style.css       # Styling and responsive layout
├── script.js       # Calculation and validation logic
└── README.md       # Project documentation
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tip-calculator.git
```

### 2. Navigate to the project directory

```bash
cd tip-calculator
```

### 3. Open the project

Open `index.html` directly in your browser.

Alternatively, open the project in Visual Studio Code and use the **Live Server** extension.

No additional dependencies or package installations are required.

## 💻 How to Use

1. Enter the bill amount in Indian Rupees.
2. Select a preset tip percentage or enter a custom percentage.
3. Enter the number of people sharing the bill.
4. View the calculated results instantly.
5. Click **Reset Calculator** to clear the bill and restore the default settings.

## 🧮 Calculation Logic

The calculator uses the following formulas:

**Tip Amount**

```text
Tip Amount = Bill Amount × Tip Percentage / 100
```

**Total Bill**

```text
Total Bill = Bill Amount + Tip Amount
```

**Tip Per Person**

```text
Tip Per Person = Tip Amount / Number of People
```

**Total Per Person**

```text
Total Per Person = Total Bill / Number of People
```

### Example

Suppose the bill amount is ₹1,000, the tip percentage is 15%, and two people are sharing the bill.

| Description | Amount |
|---|---:|
| Bill Amount | ₹1,000.00 |
| Tip Percentage | 15% |
| Total Tip | ₹150.00 |
| Total Bill | ₹1,150.00 |
| Tip Per Person | ₹75.00 |
| Total Per Person | ₹575.00 |


### Deploy with GitHub Pages

1. Push your project files to a GitHub repository.
2. Open the repository's **Settings**.
3. Select **Pages**.
4. Choose the `main` branch and the root folder.
5. Save the settings and wait for deployment.
6. Copy the generated URL into the Live Demo section above.

## 📚 Concepts Practiced

This project helps beginners practice:

- DOM manipulation and element selection.
- JavaScript event listeners.
- Form inputs and validation.
- Arithmetic operations and percentage calculations.
- Conditional statements and early returns.
- Arrays and `forEach()`.
- CSS classes and interactive buttons.
- Number formatting with `toLocaleString()`.
- Responsive web design and media queries.

## 🔗 Learning Resources

- [MDN Web Docs — HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs — CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN — Number.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
- [MDN — Input Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)
- [MDN — HTML Number Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

## 🔮 Future Improvements

- Add more currency options.
- Include a dark mode.
- Add a bill history feature.
- Allow users to round up individual payments.
- Add an option to calculate tax along with the tip.
- Improve accessibility with additional keyboard and screen-reader support.

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a new branch.
3. Make your changes.
4. Commit and push your changes.
5. Open a pull request.

