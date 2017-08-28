import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';
$('[data-toggle="tooltip"]').tooltip();
let isCollapsed = false;
$('#allcollapse').click(function(e) {
  e.preventDefault();
  let target = $(this);
  if (isCollapsed) {
    $('div.collapse').collapse('hide');
    target.html('展开全部');
  } else {
    $('div.collapse').collapse('show');
    target.html('折叠全部');
  }
  isCollapsed = !isCollapsed;
});
