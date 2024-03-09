// Main Admin Control Panel Page
import "./ControlPanel.css";
import AddResultAdmin from "./AddResults/AddResults";
import AddNewsAdmin from "./AddNews/AddNews";
import UpdateFixturesAdmin from "./UpdateFixtures/UpdateFixtures";

function AdminControlPanel() {
  /* TODO
     - add use states for each option to enter result (DONE)
     - add a change event function for each one (DONE)
     - create function for adding to database (DONE)
     - add a function that adds the result to the database depending on which team is picked
  */

  return (
    <div className="controlPanel">
      <AddResultAdmin />
      <UpdateFixturesAdmin />
      {/* <AddNewsAdmin /> */}
    </div>
  );
}

export default AdminControlPanel;
