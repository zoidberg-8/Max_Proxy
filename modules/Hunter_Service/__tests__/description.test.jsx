import { shallow, mount, render } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Description from "../client/src/components/description.jsx";

Enzyme.configure({ adapter: new Adapter() });

test("Description renders", () => {
  const wrapper = shallow(<Description />);
  expect(wrapper.exists()).toBe(true);
});