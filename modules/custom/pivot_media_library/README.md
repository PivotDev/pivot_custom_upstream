# Pivot Media Library

Installing this module will provide basic configuration for media libraries.

The blog Managing media with Drupal 8 is what this configuration is based off. See https://www.flocondetoile.fr/blog/managing-media-drupal-8

There is one Media Bundles provided:
**Image**.

# Once installed :

### Add field reference to parent entity
You will need to create the field reference to **Media**. Added the field reference to the paragraph or content type that will access the media bundles.

### Configure manage form display
In the manage form display switch the dropdown from Autocomplete to **Inline entity form - Complex**. Under the Options check the "Allow users to add existing media entities" and choose the Entity browser, **Image Browser**.

### Configure manage display
Go to manage display and change the format to Rendered entity.

This is a solid launching point for use. There are many customizations to be done base on your use case. Including making a library for documents or videos.