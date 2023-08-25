# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Child.jsx(data container)
Pa.jsx(data Printer)
Linker.jsx(link to pass data between child to Pa)
App.jsx(printing Linker)

Child.jsx(data container) :
  after submitting it will pass value through parameter [[[if passed parameter is 2 than declear 2]]]

Pa.jsx(data Printer):
  it will collect value through useState first component

Linker.jsx(link to pass data between child to Pa):
  it will be component to pass data 