# SIH-Team4-dashboard
## Problem Statement & Solution
To help India policy makers provide better health services in affected areas, we proposed a live dashboard which captures a high-level view of not only the country's current epidemiologic situation, but also predicted future outbreaks and optimal allocation of medical resources at a district level.

<p align="center"><b><u>Heatmap across various states explaining level of disease outbreak - Week 6 represents the predicted level</b></u></p>

![alt text](https://drive.google.com/uc?export=download&id=13JJEPYvfcMwykIGGCLI-XfFKo9PZ8AiR)

<p align="center"><b><u>Optimal resource allocation and supply movement between states</b></u></p>

![alt text](https://drive.google.com/uc?export=download&id=1kyN4tBkS8p4IBeF4Fv5frClD5Fx28Yf2) 

## How to use
1. Create an Azure Maps resource via Azure Portal, and copy the Authentication Key (Shared Key Authentication).
2. In your .env file, replace subscriptionKey with your own key.
3. Run `npm start` in CLI.
4. Open your web browser and visit localhost:3000.

## References
- Express Handlebars
- Azure Maps Documentation 