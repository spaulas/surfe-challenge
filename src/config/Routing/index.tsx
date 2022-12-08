import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../../pages/Main";
import NoteDetails from "../../pages/NoteDetails";
import { NOTES } from "../../constants/routes";

// TODO add default
const Routing = (): React.ReactElement => {
  return (
    <Switch>
      <Route path={`/:session${NOTES}/:id?`} component={NoteDetails} />
      <Route path="/:session" component={Main} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  );
};

export default Routing;
