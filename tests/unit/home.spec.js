import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";

describe("Home - Unit", () => {
  it("should be a vue instance", () => {
    const wrapper = mount(Home, {});
    expect(wrapper.vm).toBeDefined();
  });
});
