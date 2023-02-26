import * as React from "react"

import HomePage from "../components/homePage"
import MainLayout from "../layouts"

const IndexPage = () => {
  return (
    <MainLayout>
      <HomePage/>
    </MainLayout>
  )
}

export default IndexPage;

export const Head = () => <title>Sukoon || Home Page</title>;
