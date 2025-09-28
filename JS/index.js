import { renderCards } from "./renderCards.js";
import { switchEvent } from "./switchs.js";
import { toggleTheme } from "./theme.js";

document.addEventListener('DOMContentLoaded', () => {
    toggleTheme();
    renderCards();
})
