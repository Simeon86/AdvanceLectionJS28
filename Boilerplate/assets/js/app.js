window.addEventListener('DOMContentLoaded', () => {

	function initCavasMenu() {
		var btn = document.querySelector('[data-canvas-btn]');
		var menu = document.querySelector('[data-canvas-menu]');

		if (!btn || !menu) {
			return;
		}

		btn.addEventListener('click', (ev) => {

			if (btn.classList.contains('open')) {
				btn.classList.remove('open');

				if (menu.classList.contains('open')) {
					menu.classList.remove('open');
				}

				return;
			}

			btn.classList.add('open');

			if (!menu.classList.contains('open')) {
				menu.classList.add('open');
			}			
		});
	}


	function initThumbnailMenu() {
		var btns = document.querySelectorAll('[data-target]');
		var menus = document.querySelectorAll('[data-content]');

		if (!btns.length || !menus.length) {
			return;
		}

		btns.forEach(btn => {
			btn.addEventListener('click', ev => {
				ev.preventDefault();
				var index = btn.getAttribute('data-target');
				var currentMenu = document.querySelector(`[data-content="${index}"]`);
				menus.forEach(menu => {
					menu.classList.remove('visible');
				});

				btns.forEach(btn => {
					btn.classList.remove('active');
				});

				btn.classList.add('active');
				currentMenu.classList.add('visible');
			});
		});
	}

	initCavasMenu();
	initThumbnailMenu();
});	