"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTimeRemaining(targetDate) {
    const currentDate = new Date();
    const timeRemaining = targetDate.getTime() - currentDate.getTime();
    if (timeRemaining <= 30) {
        return 30;
    }
    else {
        return timeRemaining;
    }
}
function displayTimeRemaining(timeRemaining) {
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    console.log(`Time Remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
}
function startCountdown(targetDate) {
    const intervalId = setInterval(() => {
        const timeRemaining = calculateTimeRemaining(targetDate);
        if (timeRemaining <= 0) {
            clearInterval(intervalId);
            console.log('Countdown has ended!');
        }
        else {
            displayTimeRemaining(timeRemaining);
        }
    }, 1000); // Update every second
}
// Example usage: Set your target date and time
const targetDate = new Date('2023-01-01T00:00:00');
startCountdown(targetDate);
