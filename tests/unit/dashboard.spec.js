import { mount } from "@vue/test-utils";
import Dashboard from "../../src/components/Dashboard.vue";

describe("Dashboard - Unit", () => {
  it("should be a vue instance", () => {
    const wrapper = mount(Dashboard, {
      propsData: {
        citys: {},
      },
    });
    expect(wrapper.vm).toBeDefined();
  });
});
