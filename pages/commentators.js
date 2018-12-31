import CommentatorPage from "../src/components/CommentatorPage";
import getNavBar from "../src/js/getNavBar";

export default () => <CommentatorPage shouldUpdate={true} navigationBar={getNavBar(3, false)}/>