import React from 'react';
import { renderRoutes } from 'react-router-config'


const Root = ({ route }) => (
  <div>
    <h1>Root</h1>
    {renderRoutes(route.routes)}
  </div>
)

export default Root;

