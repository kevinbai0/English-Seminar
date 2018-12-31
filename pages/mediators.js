import MediatorPage from "../src/components/MediatorPage";
import getNavBar from "../src/js/getNavBar";

export default () => <MediatorPage shouldUpdate={true} navigationBar={getNavBar(2, false)}/>