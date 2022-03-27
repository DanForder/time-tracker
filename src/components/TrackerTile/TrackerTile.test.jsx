import { customRender } from "../../utils/testUtils";
import TrackerTile from "./TrackerTile";

it("should render the tracker tile component", () => {
  const { container } = customRender(<TrackerTile category="work" />);

  expect(container).toMatchSnapshot();
});
