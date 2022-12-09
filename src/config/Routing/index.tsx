import React from "react";
import { Switch, Route } from "react-router-dom";
import NotesList from "../../pages/List";
import NoteDetails from "../../pages/Details";
import { NOTES } from "../../constants/routes";

const Routing = (): React.ReactElement => {
  return (
    <Switch>
      <Route path={`/:session${NOTES}/:id?`} component={NoteDetails} />
      <Route path={`/:session/`} component={NotesList} />
    </Switch>
  );
};

export default Routing;
