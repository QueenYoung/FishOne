import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';

$('[data-toggle="tooltip"]').tooltip();
+function forCollapse() {
  let hasCollapsed = false;
  $('#allcollapse').click(function (e) {
    e.preventDefault();
    let target = $(this);
    if (hasCollapsed) {
      $('div.collapse').collapse('hide');
      target.html('展开全部');
    } else {
      $('div.collapse').collapse('show');
      target.html('折叠全部');
    }
    hasCollapsed = !hasCollapsed;
  });
} ();
(function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('Service Worker Registered!');
      })
      .catch(err => {
        console.log(err);
      });
  }
})();
