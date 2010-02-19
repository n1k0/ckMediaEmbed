/**
 * Provides a toolbar button and a dialog to add pasted html code into edited contents.
 *
 * @author Nicolas Perriault
 * @see Based on http://www.fluidbyte.net/index.php?view=embed-youtube-vimeo-etc-into-ckeditor
 */
(function() {
  CKEDITOR.plugins.add('MediaEmbed', {
    init: function (editor) {
      CKEDITOR.dialog.add('MediaEmbedDialog', function (editor) {
        return {
          title : 'Embed Media Dialog',
          minWidth  : 550,
          minHeight : 200,
          contents  : [{
              id     : 'iframe',
              label  : 'Embed Media',
              expand : true,
              elements : [{
                  type  : 'html',
                  id    : 'pageMediaEmbed',
                  label : 'Embed Media',
                  style : 'width : 100%;',
                  html  : 
                      '<p><label for="MediaEmbed_' + editor.name + '">Paste video embedded code in the form field below:</label></p>'
                    + '<p><textarea id="MediaEmbed_' + editor.name + '" style="width:100%;height:200px;background:#fff;border:1px solid #777"></textarea></p>'
              }]
          }],
          onOk : function() {
            var content = '';
            try {
              content = document.getElementById('MediaEmbed_' + editor.name).value;
            } catch (e) {
            }
            editor.insertHtml('<div class="media_embed">' + content + '</div>');
          }
        };
      });

      editor.addCommand('MediaEmbed', new CKEDITOR.dialogCommand('MediaEmbedDialog'));

      editor.ui.addButton('MediaEmbed', {
        label:   'Embed Media',
        command: 'MediaEmbed',
        icon:    this.path + 'images/icon.gif'
      });
    }
  });
})();