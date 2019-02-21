/**
 * 
 * This plugin:
 * - Defines custom CKEditor buttons and their respective commands.
 * - Adds a custom stylesheet to ensure that the CKEditor iframe renders an accurate visual preview, if desired.
 * 
 */

CKEDITOR.plugins.add('ckeditor_custom_buttons', {
    init: function( editor ) {
        /**
         * Adds custom CKEditor stylesheet so that the iframe renders an accurate visual preview.
         */
        editor.addContentsCss( this.path + 'css/ckeditor-iframe.css' );

        /**
         * Function definition which adds a custom button to the toolbar.
         * 
         * @param {*} buttonID 
         * @param {*} buttonLabel 
         * @param {*} buttonCommandName 
         * @param {*} buttonCommandFn 
         */
        function addButtonCommand(buttonID, buttonLabel, buttonCommandName, buttonCommandFn) {
            // Adds the custom button to the editor interface
            editor.ui.addButton( buttonID, {
                label: buttonLabel,
                id: buttonID,
                command: buttonCommandName,
                icon: CKEDITOR.plugins.getPath('ckeditor_custom_buttons') + 'icons/' + buttonID + '.png'
            });

            // Defines what happens when the button is clicked
            editor.addCommand( buttonCommandName, {
                exec: function( editor ) {
                    buttonCommandFn();
                }
            });
        };

        /**
         * EXAMPLE BUTTON
         * 
         * The following code creates a button which opens a dialog, retrieves the value from the dialog field and inserts it in the CKEditor. 
         * 
         */

        // STEP 1: Create a "ckeditor_example" button, define its label, the name of the command which should be executed and invoke/define the function which executes when the button is clicked.
        addButtonCommand('ckeditor_example', 'Example Label', 'exampleCommand', function() {
            editor.openDialog("exampleDialog");
        });

        // STEP 2: Define the dialog which opens when the "ckeditor_example" button is clicked.
        CKEDITOR.dialog.add( 'exampleDialog', function( api ) {
            var dialogDefinition = {
                title: 'Example Dialog',
                minWidth: 390,
                minHeight: 130,
                contents: [
                    {
                        id: 'exampleDialog',
                        label: 'Label',
                        title: 'Title',
                        expand: false,
                        padding: 0,
                        // DEMO: Dialog fields
                        elements: [
                            {
                                type: 'html',
                                html: '<p style="font-weight: bold;">Type something in this field, hit OK and you will see it appear in the CKEditor.</p><br>'
                            },
                            {
                                type: 'textarea',
                                id: 'exampleInput',
                                rows: 1,
                                cols: 40
                            }
                        ]
                    }
                ],
                buttons: [ CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton ],
                onOk: function() {
                    // Get value from demo dialog fields
                    var exampleInputValue = this.getContentElement( 'exampleDialog', 'exampleInput' ).getValue();
                    // Insert the value into the editor
                    editor.insertHtml(exampleInputValue);
                }
            };

            return dialogDefinition;
        });
    }
});
