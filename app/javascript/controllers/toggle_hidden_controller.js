// app/javascript/controllers/toggle_hidden_controller.js

// imports the Controller class from the Stimulus library.
import { Controller } from "@hotwired/stimulus"

// creates a new Stimulus controller class extending the base Controller class from Stimulus
export default class extends Controller {
  // declare a target named "text". This lets us refer to DOM elements marked with data-toggle-hidden-target="text".
  static targets = ["text"]

  // gets called when a data-action occurs
  toggle() {
    // accessing the "text" target and toggling its hidden class.
    this.textTarget.classList.toggle('hidden');
  }
}
