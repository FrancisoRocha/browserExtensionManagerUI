import { renderCards } from "./renderCards.js";
import { toggleTheme } from "./theme.js";

document.addEventListener('DOMContentLoaded', () => {
    toggleTheme();
    renderCards();
})

