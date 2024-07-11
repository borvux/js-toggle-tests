# Pin npm packages by running ./bin/importmap

pin "application", preload: true

# installed stimulus with bin/rails stimulus:install
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
