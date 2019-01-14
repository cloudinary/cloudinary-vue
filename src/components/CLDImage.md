### Simple usage

It is crucial for the `CLDImage` to get both `cloudName` and `publicId`. All the other arguments are optional.

```jsx
<CLDImage cloudName="demo" publicId="small_dinosaur" />
```

Of those two, only `publicId` is image-specific. Other configuration may be passed through a `CLDContext` like in:

```jsx
<CLDContext cloudName="demo">
  <CLDImage publicId="small_dinosaur" />
</CLDContext>
```

`CLDImage` can also get a image transformation data by directly setting manipulation attributes onto the component or through `CLDTransformation` instances.

Compare:

```jsx
<CLDImage
  cloudName="demo"
  publicId="small_dinosaur"
  effect="blur:300"
  crop="scale"
  width="100"
/>
```

...to:

```jsx
<CLDImage cloudName="demo" publicId="small_dinosaur">
  <CLDTransformation effect="blur:300" />
  <CLDTransformation crop="scale" width="100" />
</CLDImage>
```

You can specify `CLDImage`'s transformations also by setting transformation for whole set of images with `CLDContext`.

```jsx
<CLDContext cloudName="demo">
  <CLDTransformation effect="blur:300" />

  <CLDImage cloudName="demo" publicId="small_dinosaur">
    <CLDTransformation crop="scale" width="50" />
  </CLDImage>

  <CLDImage cloudName="demo" publicId="small_dinosaur">
    <CLDTransformation crop="scale" width="100" />
  </CLDImage>

  <CLDImage cloudName="demo" publicId="small_dinosaur">
    <CLDTransformation crop="scale" width="150" />
  </CLDImage>
</CLDContext>
```

---

### Responsive mode

```jsx
<div
  class="explain"
  style="
  display: flex;
  flex-direction:column;
  align-items:center"
>
  <div class="explain" style="width: 25%;">
    <CLDImage cloudName="demo" publicId="small_dinosaur" responsive>
      <CLDTransformation effect="sharpen:300" />
    </CLDImage>
  </div>
</div>
```

Responsive mode, but adjusting to height:

```jsx
<div class="explain" style="height: 75px;">
  <CLDImage cloudName="demo" publicId="small_dinosaur" responsive="height">
    <CLDTransformation effect="sepia:95" />
  </CLDImage>
</div>
```

```jsx
<style style="display: none">
div.explain {
  position: relative;
  border: 1px dotted black;
}
div.explain:before {
  content: "div { " attr(style) " }";
  display: block;
  position: absolute;
  top: -1px;
  right: -1px;
  background: white;
  color: white;
  font-size: 10px;
  font-family: sans-serif;
  border: 1px dotted black;
  z-index: 3;
  width: 25%;
  padding: 4px;
}

div.explain,
div.explain:before {
  background: #dc832788;
  border-color: #dc8327;
}
div.explain
div.explain,
div.explain
div.explain:before {
  background: #0071ce88;
  border-color: #0071ce;
  border-style: solid;
}
div.explain
div.explain
div.explain,
div.explain
div.explain
div.explain:before {
  background: #f2d86488;
  border-color: #f2d864;
}
</style>
```
