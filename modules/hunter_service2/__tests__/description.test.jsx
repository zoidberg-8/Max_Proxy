import React from "react";
import { shallow, mount, render } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Description from "../client/src/components/description.jsx";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({ adapter: new Adapter() });

test("Descriptions render", () => {
  const wrapper = shallow(<Description />);
  expect(wrapper.exists()).toBe(true);
});
