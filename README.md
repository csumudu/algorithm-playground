# 🎯 Algorithm Playground

A modern, interactive web application that provides **real-time visual representations** of various algorithms and data structures. Built with React, TypeScript, and Ant Design, this playground makes learning algorithms engaging and intuitive.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-algo.callstacksurfer.com-blue?style=for-the-badge)](https://algo.callstacksurfer.com)

## ✨ Features

- **🎬 Real-time Visualization**: Watch algorithms execute step-by-step with smooth animations
- **⚡ Optimized Performance**: Uses Recoil for efficient state management, updating only necessary components
- **🎛️ Interactive Controls**: Play, pause, stop, and reload animations with intuitive controls
- **📱 Responsive Design**: Works seamlessly across desktop and mobile devices
- **🎨 Modern UI**: Clean, professional interface built with Ant Design and Tailwind CSS

## 🧮 Supported Algorithms

### Sorting Algorithms
- **Bubble Sort** - Simple comparison-based sorting
- **Selection Sort** - In-place comparison sorting algorithm
- **Insertion Sort** - Builds sorted array one element at a time
- **Merge Sort** - Efficient divide-and-conquer sorting
- **Quick Sort** - Fast divide-and-conquer with pivot selection

### Data Structures
- **Stack** - LIFO (Last In, First Out) operations
- **Queue** - FIFO (First In, First Out) operations
- **Search** - Various search algorithm implementations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/algorithm-playground.git
   cd algorithm-playground
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **State Management**: Recoil
- **UI Components**: Ant Design
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Build Tool**: Vite
- **Code Quality**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── features/
│   ├── algorithms/          # Algorithm implementations
│   │   ├── sort/           # Sorting algorithms
│   │   ├── search/         # Search algorithms
│   │   ├── stack/          # Stack data structure
│   │   ├── queue/          # Queue data structure
│   │   └── services/       # Algorithm factory and utilities
│   └── app/                # App-level components
├── shared/                 # Shared utilities and components
│   ├── components/         # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   └── utils/             # Utility functions
├── state/                 # State management
│   ├── atoms/             # Recoil atoms
│   ├── selectors/         # Recoil selectors
│   └── reducers/          # State reducers
└── config/                # Application configuration
```

## 🤝 Contributing

We welcome contributions! Here are several ways you can help improve the Algorithm Playground:

### Adding New Algorithms

1. **Create algorithm implementation**
   ```typescript
   // src/features/algorithms/[category]/[algorithm-name]/algo.ts
   export class YourAlgorithm {
     // Implementation here
   }
   ```

2. **Create visualizer**
   ```typescript
   // src/features/algorithms/[category]/[algorithm-name]/visualizer.ts
   export class YourAlgorithmVisualizer {
     // Visualization logic here
   }
   ```

3. **Extend AlgorithmFactory**
   ```typescript
   // Add your algorithm to the factory
   ```

### Development Guidelines

- Follow TypeScript best practices
- Use existing component patterns
- Ensure responsive design
- Add proper error handling
- Write clear, documented code

### Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-algorithm`)
3. Commit your changes (`git commit -m 'Add amazing new algorithm'`)
4. Push to the branch (`git push origin feature/amazing-algorithm`)
5. Open a Pull Request

## 📝 Configuration

The application can be configured through `src/config/app-config.ts`:

```typescript
export const APP_CONFIG = {
  defaultCollectionSize: 100,    // Default array size
  defaultIntervaleTimeout: 100,  // Animation speed (ms)
  maxTimeout: 2000,             // Maximum delay
  minTimeout: 0                 // Minimum delay
}
```

## 🎮 Usage

1. **Select an Algorithm**: Choose from sorting algorithms or data structures
2. **Configure Parameters**: Adjust array size and animation speed
3. **Start Visualization**: Click play to watch the algorithm in action
4. **Control Playback**: Use pause, stop, or reload controls as needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Acknowledgments

- Built with ❤️ by [callstacksurfer.com](https://callstacksurfer.com)

---

**[🚀 Try it live at algo.callstacksurfer.com](https://algo.callstacksurfer.com)**