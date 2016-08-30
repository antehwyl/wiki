
if($('#page-type-view').length) {

	let currentBasePath = ($('#page-type-view').data('entrypath') !== 'home') ? $('#page-type-view').data('entrypath') + '/' : '';
	let suggestedCreatePath = currentBasePath + 'new-page';

	//-> Create New Document

	$('.btn-create-prompt').on('click', (ev) => {
		$('#txt-create-prompt').val(suggestedCreatePath);
		$('#modal-create-prompt').toggleClass('is-active');
		setInputSelection($('#txt-create-prompt').get(0), currentBasePath.length, suggestedCreatePath.length);
		$('#txt-create-prompt').removeClass('is-danger').next().addClass('is-hidden');
	});

	$('#txt-create-prompt').on('keypress', (ev) => {
		if(ev.which === 13) {
			$('.btn-create-go').trigger('click');
		}
	});

	$('.btn-create-go').on('click', (ev) => {

		let newDocPath = makeSafePath($('#txt-create-prompt').val());
		if(_.isEmpty(newDocPath)) {
			$('#txt-create-prompt').addClass('is-danger').next().removeClass('is-hidden');
		} else {
			$('#txt-create-prompt').parent().addClass('is-loading');
			window.location.assign('/create/' + newDocPath);
		}

	});

}