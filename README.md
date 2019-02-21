TABLE OF CONTENTS
-----------------------
* Introduction
* Installation
    1) How to install the module
    2) How to enable custom buttons
* Instructions
    1) How to create a new custom button
    2) How to edit the CKEditor stylesheet
* Troubleshooting

INTRODUCTION
-----------------------
The ckeditor_custom_buttons module allows the creation of custom CKEditor buttons and can also be used to customize the editor experience so that the editor iframe renders an accurate visual preview.

INSTALLATION
-----------------------
1) How to install the module:
    - Unzip this module in `docroot/modules`
    - In the Drupal dashboard, go to Extend, search for the module and click on Installation

2) How to enable custom buttons:
    - Once the module is installed, go to your Drupal Dashboard and go to Configuration/Content Authoring/Text Formats and Editors
    - Select the text format you wish to add this button to (e.g. Full HTML)
    - You will see the new button(s) in the "Available buttons" section
    - Drag the button(s) you want to enable to the "Active toolbar" section
    - Clear cache
    - Go to Content and click edit on a content type which makes use of the text format
    - You will see the new button(s) in the toolbar

INSTRUCTIONS
-----------------------
1) How to create a new custom button:
    - Choose an icon (72px x 72px)
    - Save it in the following format: `ckeditor_buttonname.png` in the following folder: `js/plugins/ckeditor_custom_buttons/icons`
    - To add the button to the toolbar configuration view, go to `src/Plugin/CKEditorPlugin/Custom.php` in the module directory
    - In the `Custom.php` file, look for the `getButtons()` function and copy and paste one of the existing examples, replacing the name with the name you gave your icon and checking the icon file path, e.g.:
    
    
    ```php
        'ckeditor_buttonname' => [
            'label' => t('Button Label'),
            'image' => drupal_get_path('module', 'ckeditor_custom_buttons') . '/js/plugins/ckeditor_custom_buttons/icons/ckeditor_buttonname.png',
        ]
    ```

    - Now let's add the button the CKEditor and define what it needs to do: go to `js/plugins/ckeditor_custom_buttons/plugin.js`
    - In `plugin.js`, copy one of the `addButtonCommand` functions and replace with your new button information, e.g.:
    

    ```javascript
        addButtonCommand('ckeditor_buttonname', 'Button Label', 'buttonCommand', function() {
            // Action goes here
            console.log('Custom button clicked.');
        });
    ```

    - Now follow the same process as before to enable the button (refer to Installation/How to enable custom buttons, above)

2) How to edit the CKEditor stylesheet
    - In the module directory, go to `js/plugins/ckeditor_custom_buttons/css/ckeditor-iframe.css`
    - Add your custom CSS, clear cache for good measure and you should see your changes in the CKEditor when you refresh the page

TROUBLESHOOTING
-----------------------
- Clear cache
- Check your console for any errors
- The button name in the `Custom.php` file and the `plugin.js`, as well as the icon file name, need to be an EXACT match
