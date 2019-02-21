<?php

namespace Drupal\ckeditor_custom_buttons\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginButtonsInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "CKEditor Custom Buttons" plugin.
 *
 * @CKEditorPlugin(
 *   id = "ckeditor_custom_buttons",
 *   label = @Translation("CKEditor Custom Buttons"),
 *   module = "ckeditor_custom_buttons"
 * )
 */
class Custom extends CKEditorPluginBase implements CKEditorPluginButtonsInterface {

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'ckeditor_custom_buttons') . '/js/plugins/ckeditor_custom_buttons/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [
      'ckeditor_example' => [
        'label' => t('Example Button'),
        'image' => drupal_get_path('module', 'ckeditor_custom_buttons') . '/js/plugins/ckeditor_custom_buttons/icons/icon_btn.png',
      ]
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor) {
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

  public function settingsForm(array $form, FormStateInterface $form_state, Editor $editor) {
    return [];
  }

}