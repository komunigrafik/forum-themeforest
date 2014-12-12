/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	//config.uiColor = '#666666';
	config.height = '155';
	config.toolbar_Full = [
    { name: 'document',    groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source']},
	{ name: 'links', items: [ 'Link', 'Unlink' ] },
	
    // On the basic preset, clipboard and undo is handled by keyboard.
    // Uncomment the following line to enable them on the toolbar as well.
    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ], items: [ 'PasteText', 'PasteFromWord', 'Undo', 'Redo' ] },
	{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline'] },
	{ name: 'insert', items: [ 'CreatePlaceholder', 'Table'] },
    { name: 'styles', items: [ 'Format', 'Font', 'FontSize' ] },
    { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ], items: [ 'NumberedList', 'BulletedList', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
    
    
  ];

  config.toolbar = "Full";
};
