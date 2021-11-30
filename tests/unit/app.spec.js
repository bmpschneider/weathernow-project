import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App - Unit", () => {
  it("should be a vue instance", () => {
    const wrapper = mount(App, {});
    expect(wrapper.vm).toBeDefined();
  });
});
