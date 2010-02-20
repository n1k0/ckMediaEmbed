ckMediaEmbed plugin for CKEditor
================================

This [CKEditor](http://ckeditor.com/) plugin will add a supplementary button in the editor toolbar, opening a dialog popup where you'll be able to paste in any snippet of HTML code, for exemple Youtube video embed code.

![ckMediaEmbed plugin in action](http://files.droplr.com/files/6619162/rtLeS.ckMediaEmbed.png)

Installation
------------

Get the source archive and uncompress it into the `plugins` folder of your CKEditor installation.

Usage
-----

Enable the plugin adding this setting to your CKEditor `config.js` file:

    config.extraPlugins = 'MediaEmbed';

Enable the button by adding it to your editor's toolbar configuration:

    CKEditor.replace('id_of_textarea', {
      toolbar: 'Blah',
      toolbar_Blah: [
        ['Image', 'Flash', 'MediaEmbed']
      ]
    });

Credits
-------

This plugin code is based on the work of [Kent Safranski](http://www.fluidbyte.net/index.php?view=embed-youtube-vimeo-etc-into-ckeditor).
