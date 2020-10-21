import {mount} from "@vue/test-utils";
import CldImage from "../../../../src/components/CldImage";

function mountImageComponent(props) {
  let wrapper = mount(CldImage, {
    propsData: Object.assign({
      cloudName: "demo",
      publicId: "face_top"
    }, props)
  });

  let image = wrapper.find('img');
  let imgSrc = image && image.attributes ? image.attributes('src') : '';

  return {
    wrapper,
    image,
    imgSrc
  }
}

export default mountImageComponent;
