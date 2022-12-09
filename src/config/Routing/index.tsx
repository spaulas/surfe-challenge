import React from "react";
import { Switch, Route } from "react-router-dom";
import NotesList from "../../pages/List";
import NoteDetails from "../../pages/Details";
import { NOTES } from "../../constants/routes";

// TODO add default
const Routing = (): React.ReactElement => {
  console.log('ROUTING!')
  return (
    <Switch>
      <Route path={`/:session${NOTES}/:id?`} component={NoteDetails} />
      <Route path={`/:session`} component={NotesList} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  );
};

export default Routing;
