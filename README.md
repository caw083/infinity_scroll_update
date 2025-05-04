# 🌌 Infinity Scroll with Unsplash API

This project demonstrates the implementation of an **infinity scroll** feature using JavaScript and the Unsplash API. The infinity scroll technique allows for continuous loading of images as the user scrolls down the page, providing a seamless browsing experience.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔄 **Infinite Scrolling** | Dynamically fetches and displays additional images as you reach the bottom |
| 🏞️ **Lazy Loading** | Only loads visible images first for better performance |
| 🤹 **Smooth UX** | No manual clicking - just keep scrolling to see more |
| 📱 **Responsive Design** | Works perfectly on all device sizes |

## 🛠️ How It Works

1. **Scroll Detection**  
   <small>🖱️ JavaScript detects when you reach the page bottom</small>
   
2. **API Fetch**  
   <small>📡 Makes call to Unsplash API for new images</small>
   
3. **Dynamic Loading**  
   <small>✨ New images appear seamlessly in the grid</small>
   
4. **Repeat**  
   <small>♾️ Process continues as you keep scrolling</small>

```mermaid
graph TD
    A[User Scrolls] --> B{Reached Bottom?}
    B -->|Yes| C[Fetch New Images]
    B -->|No| D[Wait]
    C --> E[Display Images]
    E --> A