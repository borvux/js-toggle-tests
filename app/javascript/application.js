// // Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import { Turbo } from "@hotwired/turbo-rails"

// // This is available because we called `pin_all_from "app/javascript/controllers", under: "controllers"` in the importmap.rb
// import "controllers"

// Turbo.session.drive = false

// import jquery from "jquery";
// window.jQuery = jquery;
// window.$ = jquery;
// import Rails from "@rails/ujs"
// Rails.start();


// this import is not needed anymore cuz of stimulus
// import { toggleTextVisibility } from "./custom/toggle_visibility";

// document.addEventListener('DOMContentLoaded', () => {
//   // attach it to window
//   window.toggleTextVisibility = toggleTextVisibility;
// });

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ToggleVisibility from "./components/ToggleVisibility";

const App = () => {
  return <ToggleVisibility />
}

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(<App />)
});
