# SIH-Team4-dashboard
## Problem Statement & Solution
To help India policy makers provide better health services in affected areas, we proposed a live dashboard which captures a high-level view of not only the country's current epidemiologic situation, but also predicted future outbreaks and optimal allocation of medical resources at a district level. More information about the problem statement & competition [here](https://www.mic.gov.in/si2019/).

<p align="center"><b><ins>Heatmap across various states explaining level of disease outbreak - Week 6 represents the predicted level</b></ins></p>

![alt text](https://drive.google.com/uc?export=download&id=13JJEPYvfcMwykIGGCLI-XfFKo9PZ8AiR)

<p align="center"><ins><b>Optimal resource allocation and supply movement between states</b></ins></p>

![alt text](https://drive.google.com/uc?export=download&id=1kyN4tBkS8p4IBeF4Fv5frClD5Fx28Yf2) 

## How to use
1. Create an Azure Maps resource via Azure Portal, and copy the Authentication Key (Shared Key Authentication).
2. In your .env file, replace subscriptionKey with your own key.
3. Run `npm i` to install packages and then `npm start` in CLI.
4. Open your web browser and visit localhost:3000.

## References
- Express Handlebars
- Azure Maps Documentation 
