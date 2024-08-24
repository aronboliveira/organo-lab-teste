const flatsomeProps = {
  theme: { version: "3.15.5" },
  ajaxurl: "https://blog.organolab.com.br/wp-admin/admin-ajax.php",
  rtl: "",
  sticky_height: "70",
  assets_url:
    "https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/",
  lightbox: {
    close_markup: `
			<button title="%title%" type="button" class="mfp-close">
				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>`,
    close_btn_inside: false,
  },
  user: { can_edit_pages: false },
  i18n: {
    mainMenu: "Menu Principal",
    toggleButton: "Toggle",
  },
  options: {
    cookie_notice_version: "1",
    swatches_layout: false,
    swatches_box_select_event: false,
    swatches_box_behavior_selected: false,
    swatches_box_update_urls: "1",
    swatches_box_reset: false,
    swatches_box_reset_extent: false,
    swatches_box_reset_time: 300,
    search_result_latency: "0",
  },
};
export default flatsomeProps;
