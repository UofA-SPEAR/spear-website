import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const SpearHeader = React.lazy(() => import("./components/SpearHeader"));
const SpearFooter = React.lazy(() => import("./components/SpearFooter"));

const SpearHomePage = React.lazy(() => import("./pages/home"));
const SpearBlogPage = React.lazy(() => import("./pages/blog"));
const SpearBlogDetailPage = React.lazy(() => import("./pages/blogdetail"));
const SpearPeoplePage = React.lazy(() => import("./pages/people"));
const SpearContactPage = React.lazy(() => import("./pages/contact"));
const SpearInfoPage = React.lazy(() => import("./pages/info"));
const SpearSponsorPage = React.lazy(() => import("./pages/sponsor"));
const SpearNotFoundPage = React.lazy(() => import("./pages/404"));

const App: React.FC = () => (
  <Router>
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <SpearHeader />

        <Switch>
          <Route exact path="/" component={SpearHomePage} />
          <Route exact path="/info" component={SpearInfoPage} />
          <Route exact path="/blog" component={SpearBlogPage} />
          <Route exact path="/blog/:id" component={SpearBlogDetailPage} />
          <Route exact path="/people" component={SpearPeoplePage} />
          <Route exact path="/contact" component={SpearContactPage} />
          <Route exact path="/info" component={SpearInfoPage} />
          <Route exact path="/sponsors" component={SpearSponsorPage} />
          <Route component={SpearNotFoundPage} />
        </Switch>
        <SpearFooter />
      </Suspense>
    </div>
  </Router>
);

export default App;
