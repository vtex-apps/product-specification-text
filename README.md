## 🚨 Disclaimer - Template Application
>:warning: **This project is not maintained by VTEX, and this app is provided as a working example on how this feature can be implemented. Improvements and fixes will be on the implementation team side.**
>
>All template applications provided are developed by the VTEX community, you can use them freely.

&nbsp;
# VTEX Product Specification Text

## Disclaimer: this is not an official VTEX app
:loudspeaker:  This app is not supported by the product team. Use it on your own risk!

## Description

This app allows the rendering of simple specification text values outside of the specification table, free from any predefined styling. It is capable of rendering either single fields or whole groups, depending on the mode you set.

## Table of Contents

- [Usage](#usage)
- [CSS Handles](#css-handles)


## Usage

Clone the app and make it yours. Replace the vendor name with the name of your account. To use this app, you need to import in your dependencies on manifest.json.

```json
  "dependencies": {
    "vendor.product-specification-text": "0.x"
  }
```

Then, you can add a component block into your app theme on your product detail page. Via the "mode" prop you can choose to render a single field or a whole group of fields. By default, it renders a single field. 

```json
"productspecificationtext":{
    "props":{
      "specification": "headline_1",
      "group": "marketing_texts"
      "mode": "field"
      
    }
  }
```


## Props:
| Prop | Purpose | expected values| Default |
| ---- | ---- | ---- |---- |
| specification | the specification field name to load the value from. **Mandatory, even in group mode** - just add a string. | string | undefined |
| group | The specification group name to look for the specification in **Mandatory** | string | undefined |
| mode | Decides, whether to run | "field", "group" | "field" |


## CSS handles
The following CSS handles can be used for styling:

```js
'containerEmpty',
'specificationTextContainer',
'specificationTextValue',
'specificationTextField'
```




