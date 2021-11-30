import { mount } from "@vue/test-utils";
import Card from "../../src/components/Card.vue";

describe("Card - Unit", () => {
  it("should be a vue instance", () => {
    const wrapper = mount(Card, {
      propsData: {
        city: {},
      },
    });
    expect(wrapper.vm).toBeDefined();
  });
});
