import { shallow, mount, render } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Suggestions from "../client/src/components/suggestions.jsx";

Enzyme.configure({ adapter: new Adapter() });

test("Suggestions render", () => {
  const wrapper = shallow(<Suggestions />);
  expect(wrapper.exists()).toBe(true);
});
