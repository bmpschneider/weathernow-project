import { mount } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";

describe("Header - Unit", () => {
  it("should be a vue instance", () => {
    const wrapper = mount(Header, {});
    expect(wrapper.vm).toBeDefined();
  });
});
