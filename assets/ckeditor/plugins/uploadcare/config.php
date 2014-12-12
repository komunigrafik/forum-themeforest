
<script>
      UPLOADCARE_PUBLIC_KEY = "demopublickey"; //set publick key for Uploadcare
      UPLOADCARE_LOCALE = 'ru'; //set locale if you wish
      CKEDITOR.replace( 'editor1', {
        extraPlugins: 'uploadcare,iframedialog', // this will enable plugin. Iframedialog must be enabled in this case!
        USE_PHP: true, //this will enable outdated PHP dialog
        toolbar: [
          [ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'Uploadcare' ]
        ]
      });

    </script>
<?php
define('UC_PUBLIC_KEY', 'demopublickey');
define('UC_SECRET_KEY', 'demoprivatekey');

