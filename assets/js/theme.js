// Importing JavaScript
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.

// Option 1
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency

//import '../../node_modules/bootstrap/js/dist/popper.min.js';
import '../../node_modules/bootstrap/js/dist/modal.js';
import '../../node_modules/bootstrap/js/dist/collapse.js';
import '../../node_modules/bootstrap/js/dist/dropdown.js';
import lozad from 'lozad';

window.onbeforeunload = () => window.scrollTo(0, 0);

StyleModalCard();
showSubMenu();

const observer = lozad(); // lazy load
observer.observe();

function StyleModalCard() {
	const modal = document.getElementById('cta-modal');
	const trigger = document.getElementById('cta-btn');

	modal.addEventListener('shown.bs.modal', function () {
		trigger.focus();
	});
}

function showSubMenu() {
	// make it as accordion for smaller screens
	if (window.innerWidth < 992) {
		// close all inner dropdowns when parent is closed
		document
			.querySelectorAll('.navbar-nav .dropdown')
			.forEach(function (everydropdown) {
				everydropdown.addEventListener('hidden.bs.dropdown', function () {
					// after dropdown is hidden, then find all submenus
					this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
						// hide every submenu as well
						everysubmenu.style.display = 'none';
					});
				});
			});

		document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
			element.addEventListener('click', function (e) {
				let nextEl = this.nextElementSibling;
				if (nextEl && nextEl.classList.contains('submenu')) {
					// prevent opening link if link needs to open dropdown
					e.preventDefault();
					if (nextEl.style.display === 'block') {
						nextEl.style.display = 'none';
					} else {
						nextEl.style.display = 'block';
					}
				}
			});
		});
	}
}
